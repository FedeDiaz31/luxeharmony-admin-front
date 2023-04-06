import "../../animation/Animations.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { editClient, deleteClient } from "../../redux/clientsReducer";

function ModalEditClient({ handleCloseModalClient, client, setClients }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState(client.firstname);
  const [lastname, setLastname] = useState(client.lastname);
  const [email, setEmail] = useState(client.email);
  const [adresses, setAdresses] = useState(client.adresses);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  /*   Close with ESC Function */
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      handleCloseModalClient();
    }
  });

  const handleEdit = async () => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${user.admin.token}`,
      },
      method: "put",
      url: `${process.env.REACT_APP_API_URL}/users/${client._id}`,
      data: { firstname, lastname, email, adresses },
    });
    dispatch(editClient(response.data));
    handleCloseModalClient();
  };

  const handleDelete = async () => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${user.admin.token}`,
      },
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}/users/${client._id}`,
    });
    dispatch(deleteClient(response.data));
    handleCloseModalClient();
  };

  return (
    <div className="fixed inset-0 bg-modal z-40">
      <div className="flex items-center justify-center min-h-screen text-center px-8 tablet:px-0">
        <div
          className="fixed inset-0 bg-[#0f0f0f7e] cursor-pointer fade-in-fast z-20"
          onClick={handleCloseModalClient}
        ></div>

        <div className="inline-block bg-bgPrimaryColor rounded-lg shadow-lg transform transition-all fade-in-fast duration-300 modal z-30 mt-12">
          <button
            className="absolute right-[-5px] top-[-5px] h-6 w-6 flex border justify-center border-bgSecondaryColor bg-bgPrimaryColor hover:bg-bgSecondaryColor rounded-full text-sm translate-all duration-150 font-bold hover:text-bgPrimaryColor"
            onClick={handleCloseModalClient}
          >
            X
          </button>
          {/*             Form Edit Product */}
          <div className="flex text-white items-center p-5 px-10">
            {/*                 Images Info of Product */}

            <div className="flex flex-col ml-10">
              <h2 className="font-bold text-lg">
                Update data of {client.firstname} {client.lastname}{" "}
              </h2>
              <div className="min-h-[250px]">
                <div className="w-full fade-in">
                  {/*                    Page 1 Edit of Product */}
                  <div className="mt-5 justify-between">
                    <label htmlFor="firstname">Edit firstname</label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      value={firstname}
                      className="rounded bg-bgForthColor ml-10 mr-2 py-1 px-1"
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                  <div className="mt-5 justify-between">
                    <label htmlFor="lastname">Edit lastname</label>
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      value={lastname}
                      className="rounded bg-bgForthColor ml-10 mr-2 py-1 px-1"
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                  <div className="mt-5 justify-between">
                    <label htmlFor="email" className="mr-6">
                      Edit email
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
                    <label htmlFor="adresses">Edit adresses</label>
                    <input
                      type="text"
                      name="adresses"
                      id="adresses"
                      value={adresses}
                      className="rounded bg-bgForthColor ml-10 mr-2 py-1 px-1"
                      onChange={(e) => setAdresses(e.target.value)}
                    />
                  </div>
                  <div className="flex mt-7">
                    <p className="mr-5">Do you want to delete this client?</p>
                    <button
                      onClick={() => setShowDeleteModal(true)}
                      className="bg-bgSecondaryColor text-textPrimary px-8 rounded transition-all duration-200 hover:bg-bgPrimaryColor hover:text-textSecondary"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              {showDeleteModal && (
                <div className="flex justify-between mt-3 p-2 rounded bg-bgSoftRedColor">
                  <p className="mr-10 text-textSecondary ">Are you sure?</p>
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="w-[17vh] bg-bgFiftyColor text-textSecondary rounded transition-all duration-200 hover:bg-bgBlueColor hover:text-textPrimary"
                  >
                    No, close modal
                  </button>{" "}
                  <button
                    onClick={handleDelete}
                    className="w-[17vh] ml-2 bg-bgFiftyColor text-textSecondary rounded transition-all duration-200 hover:bg-bgRedColor hover:text-textPrimary"
                  >
                    Yes, Im sure
                  </button>
                </div>
              )}

              <div className="mt-5 flex flex-col  items-center">
                <button
                  onClick={handleEdit}
                  className=" gap-2 flex items-center rounded p-2 pl-3 pr-4 hover:bg-bgSecondaryColor transition-all duration-200 hover:text-textPrimary"
                >
                  <img className="w-8" src="edit-icon.png" alt="" />
                  <h2 className="font-bold">Edit</h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEditClient;
