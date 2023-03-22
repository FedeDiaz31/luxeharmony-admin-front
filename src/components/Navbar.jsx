import { useState } from "react";
import ButtonNavbar from "./partials/ButtonNavbar";

function Navbar() {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={
            hover
              ? "w-[330px] fixed h-screen bg-buttonsSecondaryColor shadow-lg flex flex-col  gap-1 transition-all duration-300"
              : "w-[100px]  fixed h-screen bg-buttonsSecondaryColor shadow-lg flex flex-col  gap-1 transition-all duration-300"
          }
        >
          <div className="w-full flex justify-center py-5">
            <img
              className={
                hover
                  ? "w-24 transition-all duration-200"
                  : "w-16 transition-all duration-200"
              }
              src="https://i.pinimg.com/originals/13/68/9a/13689aac1d3b32cd988a2ce1d852285e.jpg"
              alt=""
            />
          </div>
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
      {/*     <div
        className={
          hover ? "w-screen h-screen bg-bgSecondaryColor opacity-50" : "hidden"
        }
      ></div> */}
    </>
  );
}

export default Navbar;
