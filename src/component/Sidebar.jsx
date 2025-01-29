import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
        <div className="app-brand demo">
          <NavLink to="/" className="app-brand-link">
            <span className="app-brand-logo demo">
              <img width="180px" src="/medizone.jpeg" alt="" />
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
          <li className="menu-item">
            <NavLink
              to="/dashboard"
              className="menu-link"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#d3d3d3" : "transparent", // Active item background color
              })}
            >
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <div>Dashboard</div>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/doctors"
              className="menu-link"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#d3d3d3" : "transparent", // Active item background color
              })}
            >
              <i className="menu-icon tf-icons bx bx-donate-heart"></i>
              <div>Doctor</div>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/singledoc"
              className="menu-link"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#d3d3d3" : "transparent", // Active item background color
              })}
            >
              <i className="menu-icon tf-icons bx bx-car"></i>
              <div>Single Doctor</div>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/hospital"
              className="menu-link"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#d3d3d3" : "transparent", // Active item background color
              })}
            >
              <i className="menu-icon tf-icons bx bx-building-house"></i>
              <div>Hospital</div>
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink
              to="/ambulance"
              className="menu-link"
              style={({ isActive }) => ({
                backgroundColor: isActive ? "#d3d3d3" : "transparent", // Active item background color
              })}
            >
              <i className="menu-icon tf-icons bx bx-car"></i>
              <div>Ambulance</div>
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
