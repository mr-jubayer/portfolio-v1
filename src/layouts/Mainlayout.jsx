import { Outlet } from "react-router";
import Nav from "../components/navBar/Nav";
import "./app.css";
import { Toaster } from "react-hot-toast";

function MainLayout() {
  return (
    <div className="  min-h-screen   relative " id="home">
      {/* <Nav /> */}

      <Outlet />
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default MainLayout;
