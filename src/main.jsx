import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home.jsx";



import Doctors from "./pages/Doctors.jsx";
import Hospital from "./pages/Hospital.jsx";
import Ambulance from "./pages/Ambulance.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { Toaster } from "react-hot-toast";
import SingleDoc from "./pages/SingleDoc.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/doctors",
        element: <Doctors />,
      },

      {
        path: "/hospital",
        element: <Hospital />,
      },
      {
        path: "/ambulance",
        element: <Ambulance/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "/singledoc",
        element: <SingleDoc/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
      <Toaster />
    </RouterProvider>
  </StrictMode>
);
