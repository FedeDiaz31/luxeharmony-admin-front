import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userReducer";

import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("admin@luxeharmony.com");
  const [password, setPassword] = useState("1234");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  document.title = ` Login - LuxeHarmony`;

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/admin/token`,
      data: { password, email },
      method: "post",
    });
    dispatch(login(response.data));
    navigate("/");
  };

  return (
    <div className="w-screen h-screen grid place-content-center bg-bgSecondaryColor">
      <div className="bg-bgSecondaryColor p-10 rounded z-50 border border-bgPrimaryColor">
        <div className="flex justify-center mb-5">
          <img
            className="w-32 transition-all duration-200"
            src="LOGO-WHITE-LUXE-HARMONY2.png"
            alt=""
          />
        </div>
        <h3 className="text-bgTertiaryColor text-sm font-semibold mb-1">
          Login Admin
        </h3>
        <form onSubmit={handleLogin} className="flex flex-col gap-3 ">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="email"
            className="px-3 py-2 rounded"
            type="text"
            name=""
            id=""
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="password"
            className="px-3 py-2 rounded"
            type="password"
            name=""
            id=""
          />
          <button className="border-2 text-textPrimary font-bold border-bgPrimaryColor rounded py-1">
            Login
          </button>
        </form>
      </div>
      <img
        className="absolute w-full h-[100vh] object-cover z-0 opacity-75"
        src="https://rare-gallery.com/uploads/posts/128434-guitars-colorful-hd.jpg"
        alt="bg"
      />
    </div>
  );
}

export default Login;
