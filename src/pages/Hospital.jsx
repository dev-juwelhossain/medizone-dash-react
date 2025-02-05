import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
const Hospital = () => {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // submit data
  const submitData = (data) => {
    console.log(data);
  
    const formData = new FormData();
  
    // Add the fields to the formData object
    formData.append("hospital_picture", data.hospital_picture[0]);  // Assuming it's an array or file list
    formData.append("name", data.name);
    formData.append("location", data.location);
    formData.append("email", data.email);
    formData.append("phone_number", data.phone_number);
    formData.append("about_hospital", data.about_hospital);
    formData.append("services", data.services);
   


    axios
      .post(`${BASE_URL}/create_hospital`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",  // Ensure axios handles the form data correctly
        },
      })
      .then(function (response) {
        console.log(response);
        toast.success('Hospital added successfully');
        reset()
        
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Something Went Wrong");
      });
      
  };
  
  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <div className="col-xxl">
            <div className="card mb-4">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5 className="mb-0">Hospital&apos;s Data Input Form</h5>
                <small className="text-muted float-end">Medizone</small>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(submitData)}>
                  <div className="input-group mb-3">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-icon-default-fullname"
                    >
                      Hospital Picture
                    </label>
                    <input
                      {...register("hospital_picture", { required: true })}
                      type="file"
                      className="form-control"
                      id="inputGroupFile02"
                      name="hospital_picture"
                    />
                    <label
                      className="input-group-text"
                      htmlFor="inputGroupFile02"
                    >
                      Upload
                    </label>
                  </div>

                  <div className="row mb-3">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-icon-default-fullname"
                    >
                      Hospital Name
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group input-group-merge">
                        <span
                          id="basic-icon-default-fullname2"
                          className="input-group-text"
                        >
                          <i className="bx bx-building-house"></i>
                        </span>
                        <input
                          {...register("name", { required: true })}
                          type="text"
                          className="form-control"
                          id="basic-icon-default-fullname"
                          placeholder="Type Hospital name"
                          aria-label="Type Hospital name"
                          aria-describedby="basic-icon-default-fullname2"
                          name="name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-icon-default-company"
                    >
                      Location
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group input-group-merge">
                        <span
                          id="basic-icon-default-company2"
                          className="input-group-text"
                        >
                          <i className="bx bx-pin"></i>
                        </span>
                        <input
                          {...register("location", { required: true })}
                          type="text"
                          id="basic-icon-default-company"
                          className="form-control"
                          placeholder="Type Hospital Address"
                          aria-label="Type Hospital Address"
                          aria-describedby="basic-icon-default-company2"
                          name="location"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-icon-default-email"
                    >
                      Email
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group input-group-merge">
                        <span className="input-group-text">
                          <i className="bx bx-envelope"></i>
                        </span>
                        <input
                          {...register("email", { required: false })}
                          type="text"
                          id="basic-icon-default-email"
                          className="form-control"
                          placeholder="john.doe"
                          aria-label="john.doe"
                          aria-describedby="basic-icon-default-email2"
                          name="email"
                        />
                        <span
                          id="basic-icon-default-email2"
                          className="input-group-text"
                        >
                          @example.com
                        </span>
                      </div>
                      <div className="form-text">
                        You can use letters, numbers & periods
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      className="col-sm-2 form-label"
                      htmlFor="basic-icon-default-phone"
                    >
                      Phone No
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group input-group-merge">
                        <span
                          id="basic-icon-default-phone2"
                          className="input-group-text"
                        >
                          <i className="bx bx-number"></i>
                        </span>
                        <input
                          {...register("phone_number", { required: true })}
                          type="number"
                          id="basic-icon-default-phone"
                          className="form-control phone-mask"
                          placeholder="658 799 8941"
                          aria-label="658 799 8941"
                          aria-describedby="basic-icon-default-phone2"
                          name="phone_number"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      className="col-sm-2 form-label"
                      htmlFor="basic-icon-default-message"
                    >
                      About Hospital
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group input-group-merge">
                        <span
                          id="basic-icon-default-message2"
                          className="input-group-text"
                        >
                          <i className="bx bx-comment"></i>
                        </span>
                        <textarea
                          {...register("about_hospital", { required: false })}
                          id="basic-icon-default-message"
                          className="form-control"
                          placeholder="Hi, Do you have a moment to talk Joe?"
                          aria-label="Hi, Do you have a moment to talk Joe?"
                          aria-describedby="basic-icon-default-message2"
                          name="about_hospital"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      className="col-sm-2 form-label"
                      htmlFor="basic-icon-default-message"
                    >
                      Services
                    </label>
                    <div className="col-sm-10">
                      <div className="input-group input-group-merge">
                        <span
                          id="basic-icon-default-message2"
                          className="input-group-text"
                        >
                          <i className="bx bx-comment"></i>
                        </span>
                        <textarea
                          {...register("services", { required: false })}
                          id="basic-icon-default-message"
                          className="form-control"
                          placeholder="Hospital's Services"
                          aria-label="Hospital's Services"
                          aria-describedby="basic-icon-default-message2"
                          name="services"
                        ></textarea>
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
            with by
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
  );
};

export default Hospital;
