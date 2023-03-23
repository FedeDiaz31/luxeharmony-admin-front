import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className="flex">
        <div className="hidden tablet:block z-40">
          <Navbar />
        </div>
        <div className="w-full">
          <div className="fixed z-20">
            <Header />
          </div>
          <div className="pl-0 tablet:pl-[100px] w-full mt-[60px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
