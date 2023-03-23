import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/userReducer";

import axios from "axios";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <div className="w-screen h-screen grid place-content-center bg-bgPrimaryColor">
      <form
        onSubmit={handleLogin}
        className="flex flex-col bg-bgSecondaryColor p-10 gap-3 rounded"
      >
        <h3 className="text-bgTertiaryColor font-bold">Login Admin</h3>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
  );
}

export default Login;
