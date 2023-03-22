import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className="flex">
        <div className="hidden tablet:block z-50">
          <Navbar />
        </div>
        <div>
          <div>
            <Header />
          </div>
          <div className="ml-0 tablet:ml-[100px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
