import { useState } from "react";
import ModalEditBrand from "../modals/ModalEditBrand";

function BrandTableBody({ brand }) {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModalBrand = () => setShowModal(false);
  const handleShowModalBrand = () => setShowModal(true);
  console.log(showModal);
  return (
    <>
      <div className="z-20">
        {showModal && (
          <div>
            <ModalEditBrand
              brand={brand}
              handleCloseModalBrand={handleCloseModalBrand}
            />
          </div>
        )}
      </div>
      <li
        onClick={handleShowModalBrand}
        className="cursor-pointer flex items-center justify-between px-5 py-2 mx-2 rounded-lg  hover:scale-[101%] bg-bgPrimaryColor  shadow transition-all duration-200"
      >
        <div className="w-8/12">
          <img className="w-6 z-0" src={brand.logo} />
        </div>
        <div className="w-full">
          <h3 className="font-semibold">{brand.name}</h3>
        </div>
        <div className="w-full">
          <h3 className="font-semibold">{brand.products.length}</h3>
        </div>

        <div className="w-full text-end">
          <button className=" hover:bg-bgPrimaryColor text-textPrimary px-3 py-1 rounded-b-md transition-all duration-200 font-bold">
            <img className="w-6" src="edit-icon.png" alt="" />
          </button>
        </div>
      </li>
    </>
  );
}

export default BrandTableBody;
