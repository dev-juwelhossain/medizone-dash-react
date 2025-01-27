import { NavLink } from "react-router-dom";


const Sidebar = () => {
    return (
        <div>
              <div>
            <aside
              id="layout-menu"
              className="layout-menu menu-vertical menu bg-menu-theme"
            >
              <div className="app-brand demo">
                <NavLink to="/" className="app-brand-link">
                  <span className="app-brand-logo demo">
                    <img
                      width="180px"
                      src="/public/medizone.jpeg"
                      alt=""
                      srcSet=""
                    />
                  </span>
                </NavLink>

                <a
                  href="javascript:void(0);"
                  className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
                >
                  <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </a>
              </div>

              <div className="menu-inner-shadow"></div>

              <ul className="menu-inner py-1">
                <li className="menu-item active">
                  <NavLink to="/dashboard" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-home-circle"></i>
                    <div data-i18n="Analytics">Dashboard</div>
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink to="/doctors" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-donate-heart"></i>
                    <div data-i18n="Analytics">Doctor</div>
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to="./hospital"
                    
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons bx bx-building-house"></i>
                    <div data-i18n="Analytics">Hospital</div>
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="./ambulance" className="menu-link">
                    <i
                      className="bx bxs-ambulance menu icon tf-icons" 
                    ></i>
                    <div data-i18n="Analytics" className="">Ambulance</div>
                  </NavLink>
                </li>

                <li className="menu-item">
                  <a
                    href="javascript:void(0);"
                    className="menu-link menu-toggle"
                  >
                    <i className="menu-icon tf-icons bx bx-bar-chart-alt-2"></i>
                    <div data-i18n="Layouts">Analytics</div>
                  </a>

                  <ul className="menu-sub">
                    <li className="menu-item">
                      <a href="layouts-without-menu.html" className="menu-link">
                        <div data-i18n="Without menu">Overviews</div>
                      </a>
                    </li>
                    <li className="menu-item">
                      <a href="layouts-without-menu.html" className="menu-link">
                        <div data-i18n="Without menu">Report</div>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item">
                  <a href="index.html" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-sort-up"></i>
                    <div data-i18n="Analytics">Account Settings</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="index.html" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-cog"></i>
                    <div data-i18n="Analytics">Settings</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="index.html" className="menu-link">
                    <i className="menu-icon tf-icons bx bx-user-circle"></i>
                    <div data-i18n="Analytics">User Register</div>
                  </a>
                </li>

                <li className="menu-item">
                  <a
                    href="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                    target="_blank"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons bx bx-support"></i>
                    <div data-i18n="Support">Support</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                    target="_blank"
                    className="menu-link"
                  >
                    <i className="menu-icon tf-icons bx bx-file"></i>
                    <div data-i18n="Documentation">Documentation</div>
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
    );
};

export default Sidebar;