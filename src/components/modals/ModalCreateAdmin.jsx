import "../../animation/Animations.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { createAdmin } from "../../redux/teamReducer";

function ModalCreateAdmin({ handleCloseModalCreateAdmin }) {
  const user = useSelector((state) => state.user);
  const team = useSelector((state) => state.team);

  const dispatch = useDispatch();
  const [showMoreInfo, setShowMoreInfo] = useState(true);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");
  const [nivel, setNivel] = useState("");

  /*   Close with ESC Function */
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      handleCloseModalCreateAdmin();
    }
  });

  const handleCreateAdmin = async () => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${user.admin.token}`,
      },
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/admin`,
      data: {
        firstname,
        lastname,
        email,
        password,
        rol,
        nivel,
      },
    });

    dispatch(createAdmin(response.data));
    handleCloseModalCreateAdmin();
  };

  const handleCloseModal = async () => {
    handleCloseModalCreateAdmin();
  };
  console.log(team);
  return (
    <div className="fixed inset-0 bg-modal z-40">
      <div className="flex items-center justify-center min-h-screen text-center px-8 tablet:px-0">
        <div
          className="fixed inset-0 bg-[#0f0f0f7e] cursor-pointer fade-in-fast z-20"
          onClick={handleCloseModal}
        ></div>

        <div className="inline-block bg-bgPrimaryColor rounded-lg shadow-lg transform transition-all fade-in-fast duration-300 modal z-30 mt-12">
          <button
            className="absolute right-[-5px] top-[-5px] h-6 w-6 flex border justify-center border-bgSecondaryColor bg-bgPrimaryColor hover:bg-bgSecondaryColor rounded-full text-sm translate-all duration-150 font-bold hover:text-bgPrimaryColor"
            onClick={handleCloseModal}
          >
            X
          </button>
          {/*             Form Edit Product */}
          <div className="flex text-white items-center p-5 px-10">
            {/*                 Images Info of Product */}

            <div className="flex flex-col">
              <h2 className="font-bold text-lg">Create a Admin of Team</h2>

              {showMoreInfo ? (
                <div className="min-h-[250px]">
                  <div className="w-full fade-in">
                    {/*                    Page 1 Edit of Product */}
                    <div className="mt-5 flex justify-between">
                      <label htmlFor="firstname">Firstname</label>
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstname}
                        className="rounded bg-bgForthColor ml-10 mr-2 py-1 px-1"
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </div>
                    <div className="mt-5 flex justify-between">
                      <label htmlFor="lastname">Lastname</label>
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastname}
                        className="rounded bg-bgForthColor ml-10 mr-2 py-1 px-1"
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </div>
                    <div className="mt-5 flex justify-between">
                      <label htmlFor="email" className="mr-6">
                        Email
                      </label>
                      <input
                        type="mail"
                        name="email"
                        id="email"
                        value={email}
                        className="rounded bg-bgForthColor ml-10 mr-2 py-1 px-1"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="mt-5 justify-center">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        className="rounded bg-bgForthColor ml-10 mr-2 py-1 px-1"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* ///////// Pagina 2 ///////// */}
                  <div className="min-h-[250px]">
                    <div className="mt-5 mb-7 flex justify-between">
                      <label htmlFor="country">Rol Name</label>
                      <input
                        type="text"
                        name="rol"
                        id="rol"
                        value={rol}
                        className="rounded bg-bgForthColor ml-10 mr-2 py-1 px-1"
                        onChange={(e) => setRol(e.target.value)}
                      />
                    </div>
                    <div className="mt-5 mb-7 flex justify-between">
                      <label htmlFor="country">Rol Level</label>
                      <input
                        type="number"
                        name="nivel"
                        id="nivel"
                        value={nivel}
                        className="rounded bg-bgForthColor ml-10 mr-2 py-1 px-1"
                        onChange={(e) => setNivel(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* ///////// Pagina 2 ///////// */}
                </>
              )}

              <div className="flex justify-center gap-3 font-bold">
                <button
                  className={
                    showMoreInfo
                      ? "bg-bgForthColor text-textSecondary px-8 rounded  transition-all duration-200"
                      : "bg-bgSecondaryColor text-textPrimary px-8 rounded transition-all duration-200"
                  }
                  onClick={() => setShowMoreInfo(true)}
                >
                  1
                </button>
                <button
                  className={
                    showMoreInfo
                      ? "bg-bgSecondaryColor text-textPrimary px-8 rounded transition-all duration-200"
                      : "bg-bgForthColor text-textSecondary px-8 rounded transition-all duration-200"
                  }
                  onClick={() => setShowMoreInfo(false)}
                >
                  2
                </button>
              </div>
              <div className="mt-5 flex flex-col  items-center">
                {showMoreInfo ? (
                  <button
                    onClick={handleCloseModal}
                    className="bg-bgFiftyColor gap-2 flex items-center rounded p-2 pl-3 pr-4 hover:bg-bgSecondaryColor transition-all duration-200 hover:text-textPrimary"
                  >
                    <h2 className="font-bold">Close</h2>
                  </button>
                ) : (
                  <button
                    onClick={handleCreateAdmin}
                    className="bg-bgFiftyColor gap-2 flex items-center rounded p-2 pl-3 pr-4 hover:bg-bgSecondaryColor transition-all duration-200 hover:text-textPrimary"
                  >
                    <img className="w-8" src="edit-icon.png" alt="" />
                    <h2 className="font-bold">Create</h2>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCreateAdmin;
