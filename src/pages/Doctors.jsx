const Doctors = () => {
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
                  <form>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-icon-default-fullname"
                      >
                        Name
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
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="John Doe"
                            aria-label="John Doe"
                            aria-describedby="basic-icon-default-fullname2"
                          />
                        </div>
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
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="e.g. MBBS"
                            aria-label="e.g. MBBS"
                            aria-describedby="basic-icon-default-fullname2"
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
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="e.g. Medicine"
                            aria-label="e.g. Medicine"
                            aria-describedby="basic-icon-default-fullname2"
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
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="e.g. 10 Years"
                            aria-label="e.g. 10 Years"
                            aria-describedby="basic-icon-default-fullname2"
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
                            type="text"
                            id="basic-icon-default-company"
                            className="form-control"
                            placeholder="ACME Inc."
                            aria-label="ACME Inc."
                            aria-describedby="basic-icon-default-company2"
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
                            type="text"
                            id="basic-icon-default-company"
                            className="form-control"
                            placeholder="Sat-Thu"
                            aria-label="Sat-Thu"
                            aria-describedby="basic-icon-default-company2"
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
                            type="text"
                            id="basic-icon-default-email"
                            className="form-control"
                            placeholder="Rangpur Sadar"
                            aria-label="Rangpur Sadar"
                            aria-describedby="basic-icon-default-email2"
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
                            type="text"
                            id="basic-icon-default-phone"
                            className="form-control phone-mask"
                            placeholder="৳৫০০"
                            aria-label="৳৫০০"
                            aria-describedby="basic-icon-default-phone2"
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
                            type="text"
                            id="basic-icon-default-phone"
                            className="form-control phone-mask"
                            placeholder="+880 1799 8941"
                            aria-label="+880 1799 8941"
                            aria-describedby="basic-icon-default-phone2"
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
                            id="basic-icon-default-message"
                            className="form-control"
                            placeholder="Write About Doctor"
                            aria-label=""
                            aria-describedby="basic-icon-default-message2"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="row justify-content-end mb-2 mt-2">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-icon-default-fullname"
                      >
                        Doctor Catagory
                      </label>
                      <div className="dropdown col-sm-10">
                        <a
                          className="btn btn-secondary dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Category
                        </a>

                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              Medicine
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Cardiology
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Neurologist
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Obstetrics and gynaecology
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Dermatologist
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Oncologist
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Psychiatrist
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Gastroenterologist
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Pediatricians
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Dentist
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Surgeon
                            </a>
                          </li>
                        </ul>
                      </div>
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
                            type="text"
                            id="basic-icon-default-company"
                            className="form-control"
                            placeholder="ACME Inc."
                            aria-label="ACME Inc."
                            aria-describedby="basic-icon-default-company2"
                          />
                        </div>
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
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="e.g. MBBS"
                            aria-label="e.g. MBBS"
                            aria-describedby="basic-icon-default-fullname2"
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
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="e.g. 10 Years"
                            aria-label="e.g. 10 Years"
                            aria-describedby="basic-icon-default-fullname2"
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
