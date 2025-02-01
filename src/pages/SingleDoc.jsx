import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Ambulance = () => {
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
    formData.append("s_doc_picture", data.s_doc_picture[0]);
    formData.append("s_doc_name", data.s_doc_name);
    formData.append("s_doc_location", data.s_doc_location);
    formData.append("s_doc_hospital", data.s_doc_hospital);
    formData.append("s_doc_position", data.s_doc_position);
    formData.append("s_doc_experience", data.s_doc_experience);
    formData.append("s_doc_degree", data.s_doc_degree);

   
    axios
      .post(`${BASE_URL}/create_singledoc`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // or allow axios to set it automatically
        },
      })
      .then(function (response) {
        console.log(response);
        toast.success('Added Successfully');
        reset()
      })
      .catch(function (error) {
        console.log(error);
        toast.error('Something Went Wrong');
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
                  <h5 className="mb-0">Single Doctor Data Input Form</h5>
                  <small className="text-muted float-end">Medizone</small>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit(submitData)}>
                    <div className="input-group mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-icon-default-fullname"
                      >
                        Doctor Picture
                      </label>
                      <input
                        {...register("s_doc_picture", { required: true })}
                        type="file"
                        className="form-control"
                        id="inputGroupFile02"
                        name="s_doc_picture"
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
                        Doctor Name
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group input-group-merge">
                          <span
                            id="basic-icon-default-fullname2"
                            className="input-group-text"
                          >
                            <i className="bx bx-user"></i>
                          </span>
                          <input
                            {...register("s_doc_name", { required: true })}
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="Type ambulance name"
                            aria-label="Type Ambulance name"
                            aria-describedby="basic-icon-default-fullname2"
                            name="s_doc_name"
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
                            {...register("s_doc_location", { required: true })}
                            type="text"
                            id="basic-icon-default-company"
                            className="form-control"
                            placeholder="Type Ambulance Address"
                            aria-label="Type Ambulance Address"
                            aria-describedby="basic-icon-default-company2"
                            name="s_doc_location"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-icon-default-company"
                      >
                        Associate Hospital
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
                            {...register("s_doc_hospital", { required: true })}
                            type="text"
                            id="basic-icon-default-company"
                            className="form-control"
                            placeholder="Type Ambulance Address"
                            aria-label="Type Ambulance Address"
                            aria-describedby="basic-icon-default-company2"
                            name="s_doc_hospital"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-icon-default-company"
                      >
                        Position
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
                            {...register("s_doc_position", { required: true })}
                            type="text"
                            id="basic-icon-default-company"
                            className="form-control"
                            placeholder="Type Ambulance Address"
                            aria-label="Type Ambulance Address"
                            aria-describedby="basic-icon-default-company2"
                            name="s_doc_position"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-icon-default-company"
                      >
                        Experience
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group input-group-merge">
                          <span
                            id="basic-icon-default-company2"
                            className="input-group-text"
                          >
                            <i className="bx bx-certification"></i>
                          </span>
                          <input
                            {...register("s_doc_experience", { required: true })}
                            type="text"
                            id="basic-icon-default-company"
                            className="form-control"
                            placeholder="Type Ambulance Address"
                            aria-label="Type Ambulance Address"
                            aria-describedby="basic-icon-default-company2"
                            name="s_doc_experience"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        className="col-sm-2 form-label"
                        htmlFor="basic-icon-default-phone"
                      >
                       Degrees
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group input-group-merge">
                          <span
                            id="basic-icon-default-phone2"
                            className="input-group-text"
                          >
                            <i className="bx bx-user"></i>
                          </span>
                          <input
                            {...register("s_doc_degree", { required: true })}
                            type="text"
                            id="basic-icon-default-phone"
                            className="form-control phone-mask"
                            placeholder="degrees"
                            aria-label="degrees"
                            aria-describedby="basic-icon-default-phone2"
                            name="s_doc_degree"
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
              ©<script>document.write(new Date().getFullYear());</script>, Made
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

export default Ambulance;
