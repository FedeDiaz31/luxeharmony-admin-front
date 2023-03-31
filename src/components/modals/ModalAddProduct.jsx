/* CSS */
import "../../animation/Animations.css";
/* Componentes */
import { useState } from "react";

import Spinner from "../partials/Spinner";

function ModalProduct({ handleCloseModalProduct }) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  /*   Close with ESC Function */
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      handleCloseModalProduct();
    }
  });

  return (
    <div className="fixed inset-0 bg-modal z-40">
      <div className="flex items-center justify-center min-h-screen text-center px-8 tablet:px-0">
        <div
          className="fixed inset-0 bg-[#0f0f0f7e] cursor-pointer fade-in-fast z-20"
          onClick={handleCloseModalProduct}
        ></div>

        <div className="inline-block bg-bgPrimaryColor rounded-lg shadow-lg transform transition-all fade-in-fast duration-300 modal z-30 mt-12">
          <button
            className="absolute right-[-5px] top-[-5px] h-6 w-6 flex border justify-center border-bgSecondaryColor bg-bgPrimaryColor hover:bg-bgSecondaryColor rounded-full text-sm translate-all duration-150 font-bold hover:text-bgPrimaryColor"
            onClick={handleCloseModalProduct}
          >
            X
          </button>
          {/*             Form Edit Product */}
          <div className="flex text-white items-center p-5 px-10">
            {/*                 Images Info of Product */}

            <div className="flex flex-col ml-10">
              <h2 className="font-bold text-lg">Add Product</h2>
              <div className="min-h-[250px]">
                {showMoreInfo ? (
                  <div className="w-full fade-in">
                    {/*                    Page 1 Edit of Product */}
                  </div>
                ) : (
                  <div className="slide-top">
                    {/*                     Page 2 Edit of Product */}
                  </div>
                )}
              </div>
              <div className="mt-5 flex flex-col  items-center">
                <div className="flex justify-center gap-3 font-bold">
                  <button
                    className={
                      showMoreInfo
                        ? "bg-bgForthColor text-textSecondary px-8 rounded  transition-all duration-200"
                        : "bg-bgSecondaryColor text-textPrimary px-8 rounded transition-all duration-200"
                    }
                    onClick={() => setShowMoreInfo(false)}
                  >
                    1
                  </button>
                  <button
                    className={
                      showMoreInfo
                        ? "bg-bgSecondaryColor text-textPrimary px-8 rounded transition-all duration-200"
                        : "bg-bgForthColor text-textSecondary px-8 rounded transition-all duration-200"
                    }
                    onClick={() => setShowMoreInfo(true)}
                  >
                    2
                  </button>
                </div>
                <button className="mt-3 gap-2 flex items-center rounded p-2 pl-3 pr-4 hover:bg-bgSecondaryColor transition-all duration-200 hover:text-textPrimary">
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

export default ModalProduct;
