import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import TopNav from "./component/TopNav";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          {/* Sidebar Here */}
          <Sidebar />

          <div className="layout-page">
            {/* Top Nav */}
            <TopNav />

            {/* main Content */}
            <Outlet />
          </div>
        </div>

        <div className="layout-overlay layout-menu-toggle"></div>
        <Toaster />
      </div>
    </div>
  );
};

export default Home;
