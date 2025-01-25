
const Hospital = () => {
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
                            <form>
                              
                              <div className="input-group mb-3">
                                <label  className="col-sm-2 col-form-label" htmlFor="basic-icon-default-fullname">
                                  Hospital Picture
                                </label>
                                <input type="file" className="form-control" id="inputGroupFile02"/>
                                <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                              </div>
                              
                              <div className="row mb-3">
                                <label className="col-sm-2 col-form-label" htmlFor="basic-icon-default-fullname">Hospital Name</label>
                                <div className="col-sm-10">
                                  <div className="input-group input-group-merge">
                                    <span id="basic-icon-default-fullname2" className="input-group-text"
                                      ><i className="bx bx-building-house"></i
                                    ></span>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basic-icon-default-fullname"
                                      placeholder="Type Hospital name"
                                      aria-label="Type Hospital name"
                                      aria-describedby="basic-icon-default-fullname2"
                                    />
                                  </div>
                                </div>
                              </div>
                              
                              <div className="row mb-3">
                                <label className="col-sm-2 col-form-label" htmlFor="basic-icon-default-company">Location</label>
                                <div className="col-sm-10">
                                  <div className="input-group input-group-merge">
                                    <span id="basic-icon-default-company2" className="input-group-text"
                                      ><i className="bx bx-pin"></i
                                    ></span>
                                    <input
                                      type="text"
                                      id="basic-icon-default-company"
                                      className="form-control"
                                      placeholder="Type Hospital Address"
                                      aria-label="Type Hospital Address"
                                      aria-describedby="basic-icon-default-company2"
                                    />
                                  </div>
                                </div>
                              </div>
                           
                              <div className="row mb-3">
                                <label className="col-sm-2 col-form-label" htmlFor="basic-icon-default-email">Email</label>
                                <div className="col-sm-10">
                                  <div className="input-group input-group-merge">
                                    <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                                    <input
                                      type="text"
                                      id="basic-icon-default-email"
                                      className="form-control"
                                      placeholder="john.doe"
                                      aria-label="john.doe"
                                      aria-describedby="basic-icon-default-email2"
                                    />
                                    <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                                  </div>
                                  <div className="form-text">You can use letters, numbers & periods</div>
                                </div>
                              </div>
                            
                              <div className="row mb-3">
                                <label className="col-sm-2 form-label" htmlFor="basic-icon-default-phone">Phone No</label>
                                <div className="col-sm-10">
                                  <div className="input-group input-group-merge">
                                    <span id="basic-icon-default-phone2" className="input-group-text"
                                      ><i className="bx bx-phone"></i
                                    ></span>
                                    <input
                                      type="text"
                                      id="basic-icon-default-phone"
                                      className="form-control phone-mask"
                                      placeholder="658 799 8941"
                                      aria-label="658 799 8941"
                                      aria-describedby="basic-icon-default-phone2"
                                    />
                                  </div>
                                </div>
                              </div>
                              
                              <div className="row mb-3">
                                <label className="col-sm-2 form-label" htmlFor="basic-icon-default-message">About Hospital</label>
                                <div className="col-sm-10">
                                  <div className="input-group input-group-merge">
                                    <span id="basic-icon-default-message2" className="input-group-text"
                                      ><i className="bx bx-comment"></i
                                    ></span>
                                    <textarea
                                      id="basic-icon-default-message"
                                      className="form-control"
                                      placeholder="Hi, Do you have a moment to talk Joe?"
                                      aria-label="Hi, Do you have a moment to talk Joe?"
                                      aria-describedby="basic-icon-default-message2"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                       
                              <div className="row mb-3">
                                <label className="col-sm-2 form-label" htmlFor="basic-icon-default-message">Services</label>
                                <div className="col-sm-10">
                                  <div className="input-group input-group-merge">
                                    <span id="basic-icon-default-message2" className="input-group-text"
                                      ><i className="bx bx-comment"></i
                                    ></span>
                                    <textarea
                                      id="basic-icon-default-message"
                                      className="form-control"
                                      placeholder="Hospital's Services"
                                      aria-label="Hospital's Services"
                                      aria-describedby="basic-icon-default-message2"
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                               
                              <div className="row justify-content-end">
                                <div className="col-sm-10">
                                  <button type="submit" className="btn btn-primary">Update</button>
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
                    ©
                    <script>
                      document.write(new Date().getFullYear());
                    </script>
                    , made with  by
                    <a href="https://themeselection.com" target="_blank" className="footer-link fw-bolder">Inspired Digital</a>
                  </div>
                  <div>
                    <a href="https://themeselection.com/license/" className="footer-link me-4" target="_blank">License</a>
  
                    <a
                      href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                      target="_blank"
                      className="footer-link me-4"
                      >Documentation</a
                    >
  
                    <a
                      href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                      target="_blank"
                      className="footer-link me-4"
                      >Support</a
                    >
                  </div>
                </div>
              </footer>
              
  
              <div className="content-backdrop fade"></div>
            </div>
    );
};

export default Hospital;