/* CSS */
import "../animation/Animations.css";
/* Componentes */
import { useState } from "react";
import BasicInfoProduct from "./partials/BasicInfoProduct";
import MoreInfoProduct from "./partials/MoreInfoProduct";
import Spinner from "./partials/Spinner";

function ModalProduct({ handleCloseModalProduct, product }) {
  const [showImage, setShowImage] = useState(product.image[0]);
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
        {!product ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <div className="inline-block bg-bgPrimaryColor rounded-lg shadow-lg transform transition-all fade-in duration-300 modal z-30 mt-5">
            <button
              className="absolute right-[-5px] top-[-5px] h-6 w-6 flex border-2 border-bgSecondaryColor bg-bgPrimaryColor hover:bg-bgSecondaryColor rounded-full text-sm translate-all duration-150 "
              onClick={handleCloseModalProduct}
            ></button>
            {/*             Form Edit Product */}
            <div className="flex text-white items-center p-5">
              {/*                 Images Info of Product */}
              <div>
                <img
                  className="hidden h-[200px] tablet:flex w-64 desktop:w-80 object-contain rounded-l mb-4"
                  src={showImage}
                  alt=""
                />
                <div className="flex justify-center gap-2 items-center">
                  {product.image.map((image, i) => {
                    return !image ? (
                      <div className="flex justify-center">
                        <Spinner />
                      </div>
                    ) : (
                      <img
                        key={i}
                        onClick={() => setShowImage(image)}
                        className="w-14 h-14 object-contain cursor-pointer border rounded p-1 fade-in-fast"
                        src={image}
                      />
                    );
                  })}
                  <button className="ml-2 bg-bgForthColor text-bgSecondaryColor px-3 h-8 rounded text-lg font-semibold">
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col mx-10">
                <h2 className="font-bold text-lg">Edit Product</h2>
                <div className="min-h-[320px]">
                  {showMoreInfo ? (
                    <div className="w-full">
                      {/*                     Basic Info of Product */}
                      <MoreInfoProduct product={product} />
                      {/*                     More Info of Product */}
                    </div>
                  ) : (
                    <div className="fade-in">
                      {/*                     Basic Info of Product */}
                      <BasicInfoProduct product={product} />
                      {/*                     More Info of Product */}
                    </div>
                  )}
                </div>
                <div className="flex justify-center gap-16 font-bold mt-5">
                  <button
                    className={
                      showMoreInfo
                        ? "bg-bgForthColor text-textSecondary px-2 rounded-lg  transition-all duration-200"
                        : "bg-bgSecondaryColor text-textPrimary px-2 rounded-lg  transition-all duration-200"
                    }
                    onClick={() => setShowMoreInfo(false)}
                  >
                    1
                  </button>
                  <button
                    className={
                      showMoreInfo
                        ? "bg-bgSecondaryColor text-textPrimary px-2 rounded-lg transition-all duration-200"
                        : "bg-bgForthColor text-textSecondary px-2 rounded-lg  transition-all duration-200"
                    }
                    onClick={() => setShowMoreInfo(true)}
                  >
                    2
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalProduct;
