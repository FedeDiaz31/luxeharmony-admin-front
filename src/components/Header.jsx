import { useState } from "react";
import UserInfoMenu from "./partials/UserInfoMenu";
import { useSelector } from "react-redux";

function Header() {
  const [showInfo, setShowInfo] = useState(false);
  const user = useSelector((state) => state.user.admin);

  return (
    <>
      <UserInfoMenu showInfo={showInfo} setShowInfo={setShowInfo} />
      <div className="relative h-[60px] w-screen items-center flex bg-bgPrimaryColor shadow z-30">
        <div className=" pl-[130px] flex justify-end items-center w-full pr-10">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="flex gap-3 items-center border hover:bg-bgSecondaryColor hover:text-textPrimary rounded-full px-3 py-1 transition-all duration-200"
          >
            <h2 className="font-semibold text-sm">
              {user.firstname} {user.lastname}
            </h2>
            <img
              className="w-8"
              src="https://freesvg.org/img/abstract-user-flat-4.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
