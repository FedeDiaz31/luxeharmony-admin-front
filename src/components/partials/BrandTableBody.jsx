import { useState } from "react";
import ModalEditBrand from "../modals/ModalEditBrand";

function BrandTableBody({ brand, setBrands }) {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModalBrand = () => setShowModal(false);
  const handleShowModalBrand = () => setShowModal(true);

  return (
    <>
      <div className="z-20">
        {showModal && (
          <div>
            <ModalEditBrand
              brand={brand}
              /*  setBrands={setBrands} */
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
          <img
            className="w-12 z-0"
            src={`${process.env.REACT_APP_API_URL}/img/${brand.logo2}`}
          />
        </div>
        <div className="hidden tablet:inline w-full text-center">
          <h3 className="font-semibold">{brand.name}</h3>
        </div>
        <div className="w-full text-center tablet:text-end">
          <h3 className="text-textTertiary text-sm">
            {brand.products.length} product/s
          </h3>
        </div>
        <div className="ml-3 tablet:ml-0 tablet:w-full text-end">
          <button className="hover:bg-bgPrimaryColor text-textPrimary  w-6 tablet:w-auto rounded-b-md transition-all duration-200 font-bold">
            <img className="w-6" src="edit-icon.png" alt="" />
          </button>
        </div>
      </li>
    </>
  );
}

export default BrandTableBody;
