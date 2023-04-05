/* CSS */
import "../../animation/Animations.css";
/* Dependencias */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
/* Componentes */
import axios from "axios";

function ModalCreateBrand({ handleCloseModalBrand, setBrands }) {
  const user = useSelector((state) => state.user);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleGoOut = () => {
    handleCloseModalBrand();
  };
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");

  const handleEdit = async () => {
    const formData = new FormData();
    formData.append("logo", logo);
    formData.append("name", name);

    const response = await axios({
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.admin.token}`,
      },
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/brands`,
      data: formData,
    });
    setBrands(response.data);
    handleCloseModalBrand();
  };

  return (
    <>
      <div className="fixed inset-0 bg-modal z-40">
        <div className="flex items-center justify-center min-h-screen text-center px-8 tablet:px-0">
          <div
            className="fixed inset-0 bg-[#0f0f0f7e] cursor-pointer fade-in-fast z-20"
            onClick={handleGoOut}
          ></div>

          <div className="inline-block bg-bgPrimaryColor rounded-lg shadow-lg transform transition-all fade-in-fast duration-300 modal z-30 mt-12">
            <button
              className="absolute right-[-5px] top-[-5px] h-6 w-6 flex border justify-center border-bgSecondaryColor bg-bgPrimaryColor hover:bg-bgSecondaryColor rounded-full text-sm translate-all duration-150 font-bold hover:text-bgPrimaryColor"
              onClick={handleGoOut}
            >
              X
            </button>
            {/*             Form Edit Product */}

            <div className="flex text-white items-center p-5 px-10">
              {/*                 Images Info of Product */}

              <div className="flex flex-col ml-10">
                <h2 className="font-bold text-lg">Edit Brand</h2>
                <div className="min-h-[250px] mt-5">
                  <div className="w-full fade-in">
                    {/*                    Page 1 Edit of Product */}

                    <div className="mt-5 flex justify-between">
                      <label htmlFor="name">Edit name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        className="rounded bg-bgForthColor ml-10 mr-2 py-1 px-1"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mt-5 flex justify-between">
                      <label htmlFor="name">Edit logo </label>
                      <input
                        type="file"
                        name="logo"
                        id="logo"
                        className="rounded bg-bgForthColor ml-11 mr-2 py-1 px-1"
                        onChange={(e) => {
                          setLogo(e.target.files[0]);
                        }}
                        multiple
                      />
                    </div>
                  </div>

                  <div className="flex justify-center mt-5">
                    <button
                      className="mt-3 gap-2 flex items-center rounded p-2 pl-3 pr-4 hover:bg-bgSecondaryColor transition-all duration-200 hover:text-textPrimary"
                      onClick={handleEdit}
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
      </div>
    </>
  );
}

export default ModalCreateBrand;
