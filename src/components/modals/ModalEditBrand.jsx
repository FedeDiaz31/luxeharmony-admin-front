/* CSS */
import "../../animation/Animations.css";
/* Dependencias */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editBrand, deleteBrand } from "../../redux/brandsReducer";
/* Componentes */
import axios from "axios";

function ModalEditBrand({ handleCloseModalBrand, brand }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleGoOut = () => {
    handleCloseModalBrand();
  };
  const [name, setName] = useState(brand.name);
  const [logo1, setLogo1] = useState(brand.logo1);
  const [logo2, setLogo2] = useState(brand.logo2);

  const handleEdit = async () => {
    const formData = new FormData();
    formData.append("logo1", logo1);
    formData.append("logo2", logo2);
    formData.append("name", name);

    const response = await axios({
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.admin.token}`,
      },
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/brands/${brand._id}`,
      data: formData,
    });
    dispatch(editBrand(response.data));
    handleCloseModalBrand();
  };

  const handleDelete = async () => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${user.admin.token}`,
      },
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}/brands/${brand._id}`,
    });
    dispatch(deleteBrand(response.data));
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
            {/*             Form Edit Brand */}

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col py-3 px-5"
            >
              <h2 className="font-bold text-lg">Edit Brand</h2>
              <div className="min-h-[250px] mt-3">
                <div className="fade-in">
                  {/*                    Page Edit of Brand */}
                  <div className="flex justify-center gap-3 items-center">
                    <img
                      className="w-12 h-10 z-0 object-contain"
                      src={`${process.env.REACT_APP_SUPABASE_BUCKET}/${brand.logo2}`}
                      alt="logo"
                    />
                    <h5 className="font-bold">{brand.name}</h5>
                  </div>
                  <div className="mt-3 flex justify-between">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      className="rounded bg-bgForthColor ml-3 py-1 px-1"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mt-5">
                    <label htmlFor="name">White Logo</label>
                    <input
                      type="file"
                      name="logo1"
                      id="logo1"
                      className="rounded bg-bgForthColor ml-3 py-1 px-1"
                      onChange={(e) => {
                        setLogo1(e.target.files[0]);
                      }}
                      multiple
                    />
                  </div>

                  <div className="mt-5">
                    <label htmlFor="name">Black Logo</label>
                    <input
                      type="file"
                      name="logo2"
                      id="logo2"
                      className="rounded bg-bgForthColor ml-3 py-1 px-1"
                      onChange={(e) => {
                        setLogo2(e.target.files[0]);
                      }}
                      multiple
                    />
                  </div>
                  <div className="flex justify-center">
                    <div className="flex mt-5 flex-col items-center">
                      <button
                        onClick={handleEdit}
                        className="mt-4 w-[14vh] mr-5 gap-2 flex items-center rounded p-2 pl-3 pr-4 bg-bgForthColor  hover:bg-bgSecondaryColor transition-all duration-200 hover:text-textPrimary"
                      >
                        <img className="w-5" src="edit-icon.png" alt="" />
                        <h2 className="font-bold">Edit</h2>
                      </button>
                    </div>

                    <div className="flex mt-5 flex-col items-center">
                      <button
                        onClick={() => setShowDeleteModal(true)}
                        className="mt-4 gap-2 flex items-center rounded p-2 pl-3 pr-4 bg-bgForthColor  hover:bg-bgSecondaryColor transition-all duration-200 hover:text-textPrimary"
                      >
                        <img className="w-5" src="delete-icon.png" alt="" />
                        <h2 className="font-bold">Delete</h2>
                      </button>
                    </div>
                  </div>
                </div>
                {showDeleteModal && (
                  <div className="flex justify-between items-center mt-3 p-2 rounded bg-bgSoftRedColor">
                    <p className="mr-10 text-textSecondary ">Are you sure?</p>
                    <button
                      onClick={() => setShowDeleteModal(false)}
                      className="w-[21vh]  bg-bgFiftyColor text-textSecondary rounded transition-all duration-200 hover:bg-bgBlueColor hover:text-textPrimary"
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalEditBrand;
