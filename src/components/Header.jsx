import { useState } from "react";
import UserInfoMenu from "./partials/UserInfoMenu";
import { useSelector } from "react-redux";

function Header() {
  const [showInfo, setShowInfo] = useState(false);
  const user = useSelector((state) => state.user.admin);

  return (
    <>
      <UserInfoMenu showInfo={showInfo} setShowInfo={setShowInfo} />
      <div className="relative h-[60px] overflow-hidden w-screen items-center flex bg-bgPrimaryColor shadow-lg z-30">
        <img
          src="https://images.unsplash.com/photo-1602007415701-dfca5183d70f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          className="z-10 pt-[450px] absolute w-full object-cover"
          alt=""
        />
        <div className="z-50 tablet:pl-[130px] flex justify-end items-center w-full pr-5 tablet:pr-10">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="flex gap-3 items-center border bg-bgPrimaryColor hover:bg-bgSecondaryColor hover:text-textPrimary rounded-full px-3 py-1 transition-all duration-200"
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
