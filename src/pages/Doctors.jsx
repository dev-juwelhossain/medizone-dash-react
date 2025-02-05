import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const Doctors = () => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitData = (data) => {
    console.log(data);

    const formData = new FormData();

    // Add the fields to the formData object
    formData.append("doctor_img", data.doctor_img[0]);
    formData.append("name", data.name);
    formData.append("degree", data.degree);
    formData.append("specialized", data.specialized);
    formData.append("experience", data.experience);
    formData.append("hospital", data.hospital);
    formData.append("appointment_time", data.appointment_time);
    formData.append("address", data.address);
    formData.append("consultation_fee", data.consultation_fee);
    formData.append("contact", data.contact);
    formData.append("abount_doctor", data.abount_doctor);
    formData.append("doctors_cat", data.doctors_cat);
    formData.append("e_hospital", data.e_hospital);
    formData.append("e_degree", data.e_degree);
    formData.append("e_experience_year", data.e_experience_year);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

   

    axios
      .post(`${BASE_URL}/create_doctor`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // or let axios handle it automatically
        },
      })
      .then(function (response) {
        console.log(response);
        toast.success("Added Successfully");
        reset();
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Something Went Wrong");
      });
  };

  return (
    <div>
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
            <div className="col-xxl">
              <div className="card mb-4">
                <div className="card-header d-flex align-items-center justify-content-between">
                  <h5 className="mb-0">Doctor&rsquo;s Data Input Form</h5>
                  <small className="text-muted float-end">Medizone</small>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit(submitData)}>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-icon-default-fullname"
                      >
                        Doctor Picture
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group mb-3">
                          <input
                            {...register("doctor_img", {
                              required: true,
                            })}
                            type="file"
                            className="form-control"
                            id="inputGroupFile02"
                            name="doctor_img"
                          />
                          <label
                            className="input-group-text"
                            htmlFor="inputGroupFile02"
                          >
                            Upload
                          </label>
                        </div>

                        
                      </div>
                      <div className=" input-group input-group-merge">
                          <label
                            className="col-sm-2 col-form-label"
                            htmlFor="basic-icon-default-fullname"
                          >
                            Name
                          </label>
                          <span
                            id="basic-icon-default-fullname2"
                            className="input-group-text"
                          >
                            <i className="bx bx-user"></i>
                          </span>
                          <input
                            {...register("name", { required: true })}
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="John Doe"
                            aria-label="John Doe"
                            aria-describedby="basic-icon-default-fullname2"
                            name="name"
                          />
                        </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-icon-default-fullname"
                      >
                        Degree
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group input-group-merge">
                          <span
                            id="basic-icon-default-fullname2"
                            className="input-group-text"
                          >
                            <i className="bx bx-certification"></i>
                          </span>
                          <input
                            {...register("degree", { required: true })}
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="e.g. MBBS"
                            aria-label="e.g. MBBS"
                            aria-describedby="basic-icon-default-fullname2"
                            name="degree"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-icon-default-fullname"
                      >
                        Specialized
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group input-group-merge">
                          <span
                            id="basic-icon-default-fullname2"
                            className="input-group-text"
                          >
                            <i className="bx bx-medal"></i>
                          </span>
                          <input
                            {...register("specialized", { required: true })}
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="e.g. Medicine"
                            aria-label="e.g. Medicine"
                            aria-describedby="basic-icon-default-fullname2"
                            name="specialized"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-icon-default-fullname"
                      >
                        Experience
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group input-group-merge">
                          <span
                            id="basic-icon-default-fullname2"
                            className="input-group-text"
                          >
                            <i className="bx bx-award"></i>
                          </span>
                          <input
                            {...register("experience", { required: true })}
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="e.g. 10 Years"
                            aria-label="e.g. 10 Years"
                            aria-describedby="basic-icon-default-fullname2"
                            name="experience"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-icon-default-company"
                      >
                        Hospital
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group input-group-merge">
                          <span
                            id="basic-icon-default-company2"
                            className="input-group-text"
                          >
                            <i className="bx bx-buildings"></i>
                          </span>
                          <input
                            {...register("hospital", { required: true })}
                            type="text"
                            id="basic-icon-default-company"
                            className="form-control"
                            placeholder="ACME Inc."
                            aria-label="ACME Inc."
                            aria-describedby="basic-icon-default-company2"
                            name="hospital"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-icon-default-company"
                      >
                        Appointment Time
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group input-group-merge">
                          <span
                            id="basic-icon-default-company2"
                            className="input-group-text"
                          >
                            <i className="bx bx-time"></i>
                          </span>
                          <input
                            {...register("appointment_time", {
                              required: true,
                            })}
                            type="text"
                            id="basic-icon-default-company"
                            className="form-control"
                            placeholder="Sat-Thu"
                            aria-label="Sat-Thu"
                            aria-describedby="basic-icon-default-company2"
                            name="appointment_time"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-icon-default-email"
                      >
                        ADDRESS
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group input-group-merge">
                          <span className="input-group-text">
                            <i className="bx bx-pin"></i>
                          </span>
                          <input
                            {...register("address", { required: true })}
                            type="text"
                            id="basic-icon-default-email"
                            className="form-control"
                            placeholder="Rangpur Sadar"
                            aria-label="Rangpur Sadar"
                            aria-describedby="basic-icon-default-email2"
                            name="address"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        className="col-sm-2 mt-2 form-label"
                        htmlFor="basic-icon-default-phone"
                      >
                        Consultation Fee
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group input-group-merge">
                          <span
                            id="basic-icon-default-phone2"
                            className="input-group-text"
                          >
                            <i className="bx bx-dollar"></i>
                          </span>
                          <input
                            {...register("consultation_fee", {
                              required: true,
                            })}
                            type="text"
                            id="basic-icon-default-phone"
                            className="form-control phone-mask"
                            placeholder="৳৫০০"
                            aria-label="৳৫০০"
                            aria-describedby="basic-icon-default-phone2"
                            name="consultation_fee"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        className="col-sm-2 mt-2 form-label"
                        htmlFor="basic-icon-default-phone"
                      >
                        Contact No
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group input-group-merge">
                          <span
                            id="basic-icon-default-phone2"
                            className="input-group-text"
                          >
                            <i className="bx bx-phone"></i>
                          </span>
                          <input
                            {...register("contact", { required: true })}
                            type="number"
                            id="basic-icon-default-phone"
                            className="form-control phone-mask"
                            placeholder="+880 1799 8941"
                            aria-label="+880 1799 8941"
                            aria-describedby="basic-icon-default-phone2"
                            name="contact"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        className="col-sm-2 form-label"
                        htmlFor="basic-icon-default-message"
                      >
                        About Doctor
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group input-group-merge">
                          <span
                            id="basic-icon-default-message2"
                            className="input-group-text"
                          >
                            <i className="bx bx-message-dots"></i>
                          </span>
                          <textarea
                            {...register("abount_doctor", { required: false })}
                            id="basic-icon-default-message"
                            className="form-control h-40"
                            placeholder="Write About Doctor"
                            aria-label=""
                            aria-describedby="basic-icon-default-message2"
                            name="abount_doctor"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-2 mt-2">
                      <label
                        className=" row col-sm-2 col-form-label"
                        htmlFor="basic-icon-default-fullname"
                      >
                        Doctor Catagory
                      </label>
                      <select
                        {...register("doctors_cat", { required: true })}
                        className="form-control "
                        name="doctors_cat"
                        id="doctors_cat"
                      >
                        <option value="Medicine">Medicine</option>
                        <option value="Neurology">Neurology</option>
                        <option value="Eurology">Eurology</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Gastroenterology">Gastroenterology</option>
                        <option value="Nephorology">Nephorology</option>
                        <option value="Physiotherapy">Physiotherapy</option>
                        <option value="Gynecology">Gynecology</option>
                        <option value="Obsetetrics">Obstetrics</option>
                        <option value="Oncology">Oncology</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Ophthalmology">Ophthalmology</option>
                        <option value="Nephrology">Nephrology</option>
                      </select>
                    </div>

                    <div className="row mt-5">
                      <h4>Experiences</h4>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-icon-default-company"
                      >
                        Hospital
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group input-group-merge">
                          <span
                            id="basic-icon-default-company2"
                            className="input-group-text"
                          >
                            <i className="bx bx-buildings"></i>
                          </span>
                          <input
                            {...register("e_hospital", { required: false })}
                            type="text"
                            id="basic-icon-default-company"
                            className="form-control"
                            placeholder="ACME Inc."
                            aria-label="ACME Inc."
                            aria-describedby="basic-icon-default-company2"
                            name="e_hospital"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-icon-default-fullname"
                      >
                        Jobs title
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group input-group-merge">
                          <span
                            id="basic-icon-default-fullname2"
                            className="input-group-text"
                          >
                            <i className="bx bx-certification"></i>
                          </span>
                          <input
                            {...register("e_degree", { required: true })}
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="e.g. MBBS"
                            aria-label="e.g. MBBS"
                            aria-describedby="basic-icon-default-fullname2"
                            name="e_degree"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-icon-default-fullname"
                      >
                        Experience
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group input-group-merge">
                          <span
                            id="basic-icon-default-fullname2"
                            className="input-group-text"
                          >
                            <i className="bx bx-award"></i>
                          </span>
                          <input
                            {...register("e_experience_year", {
                              required: false,
                            })}
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="e.g. 10 Years"
                            aria-label="e.g. 10 Years"
                            aria-describedby="basic-icon-default-fullname2"
                            name="e_experience_year"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-end">
                      <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="content-footer footer bg-footer-theme">
          <div className="container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column">
            <div className="mb-2 mb-md-0">
              ©<script>document.write(new Date().getFullYear());</script>, made
              by
              <a
                href="https://themeselection.com"
                target="_blank"
                className="footer-link fw-bolder"
              >
                Inspired Digital
              </a>
            </div>
            <div>
              <a
                href="https://themeselection.com/license/"
                className="footer-link me-4"
                target="_blank"
              >
                License
              </a>

              <a
                href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                target="_blank"
                className="footer-link me-4"
              >
                Documentation
              </a>

              <a
                href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                target="_blank"
                className="footer-link me-4"
              >
                Support
              </a>
            </div>
          </div>
        </footer>

        <div className="content-backdrop fade"></div>
      </div>
    </div>
  );
};

export default Doctors;
