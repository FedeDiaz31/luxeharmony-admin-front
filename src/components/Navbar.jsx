import { useState } from "react";
import ButtonNavbar from "./partials/ButtonNavbar";

function Navbar() {
  const [hover, setHover] = useState(false);
  const [showBurguer, setShowBurguer] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowBurguer(!showBurguer)}
        className=" tablet:hidden fixed z-50 bg-bgSecondaryColor w-[100px] h-[60px] grid place-content-center"
      >
        <button className="text-white hover:bg-textSecondary space-y-1.5 cursor-pointer transition-color duration-200 p-2 ">
          <img
            className="w-20 transition-all duration-200"
            src="LOGO-WHITE-LUXE-HARMONY2.png"
            alt=""
          />
          {/*  <div className="w-6 h-0.5 bg-bgPrimaryColor rounded-full"></div>
          <div className="w-6 h-0.5 bg-bgPrimaryColor rounded-full"></div>
          <div className="w-6 h-0.5 bg-bgPrimaryColor rounded-full"></div> */}
        </button>
      </div>
      <div
        className={
          showBurguer
            ? "relative left-0 tablet:left-0 transition-all duration-200"
            : "relative left-[-100px] tablet:left-0 transition-all duration-200"
        }
      >
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={
            hover
              ? "w-[330px] fixed h-screen bg-buttonsSecondaryColor shadow-lg flex flex-col  gap-1 transition-all duration-300"
              : "w-[100px]  fixed h-screen bg-buttonsSecondaryColor shadow-lg flex flex-col  gap-1 transition-all duration-300"
          }
        >
          <div className="w-full flex justify-center py-2 tablet:py-5">
            <img
              className={
                hover
                  ? "w-36 transition-all duration-200"
                  : "w-20 transition-all duration-200"
              }
              src="LOGO-WHITE-LUXE-HARMONY2.png"
              alt=""
            />
          </div>
          <div onClick={() => setShowBurguer(false)}>
            <ButtonNavbar
              setHover={setHover}
              hover={hover}
              text={"Dashboard"}
              link={"/"}
              image={"dashboard-icon.png"}
            />
            <ButtonNavbar
              setHover={setHover}
              hover={hover}
              text={"Products"}
              link={"/products"}
              image={"products-icon.png"}
            />
            <ButtonNavbar
              setHover={setHover}
              hover={hover}
              text={"Brands"}
              link={"/brands"}
              image={"brand-icon.png"}
            />
            <ButtonNavbar
              setHover={setHover}
              hover={hover}
              text={"Clients"}
              link={"/clients"}
              image={"users-icon.png"}
            />
            <ButtonNavbar
              setHover={setHover}
              hover={hover}
              text={"Orders"}
              link={"/orders"}
              image={"orders-icon.png"}
            />

            <ButtonNavbar
              setHover={setHover}
              hover={hover}
              text={"Team"}
              link={"/team"}
              image={"team-icon.png"}
            />
          </div>
        </div>
      </div>
      {/*     <div
        className={
          hover ? "w-screen h-screen bg-bgSecondaryColor opacity-50" : "hidden"
        }
      ></div> */}
    </>
  );
}

export default Navbar;
