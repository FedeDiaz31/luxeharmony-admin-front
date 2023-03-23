import { useDispatch } from "react-redux";
import { logOut } from "../../redux/userReducer";

function UserInfoMenu({ showInfo }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`absolute bg-bgPrimaryColor shadow flex flex-col items-center gap-2 justify-end pb-4 px-4 h-[190px] w-[200px] right-4 z-20 ${
        showInfo ? "top-0" : "top-[-200px]"
      } transition-all duration-300 rounded-b-lg`}
    >
      <button className="flex items-center gap-3 py-2 border-bgPrimaryColor rounded transition-all duration-200">
        <img
          className="w-6"
          src="https://freesvg.org/img/abstract-user-flat-4.png"
          alt=""
        />
        <h2 className="text-textSecondary font-bold">Edit Profile</h2>
      </button>
      <button
        onClick={() => dispatch(logOut())}
        className="flex items-center gap-3 py-2 border-[#f82d2d] rounded transition-all duration-200"
      >
        <img className="w-5 rotate-180" src="logout-icon.png" alt="" />
        <h2 className="text-[#f82d2d] font-bold">Log Out</h2>
      </button>
    </div>
  );
}

export default UserInfoMenu;
