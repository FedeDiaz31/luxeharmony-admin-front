import { useState } from "react";
import ModalProduct from "../modals/ModalEditProduct";

function ProductTableBody({ product }) {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModalProduct = () => setShowModal(false);
  const handleShowModalProduct = () => setShowModal(true);

  return (
    <>
      <div className="z-20">
        {showModal && (
          <div>
            <ModalProduct
              product={product}
              handleCloseModalProduct={handleCloseModalProduct}
            />
          </div>
        )}
      </div>
      <li
        onClick={handleShowModalProduct}
        className="cursor-pointer flex items-center justify-between px-5 py-2 mx-0 tablet:mx-2  rounded-lg  hover:scale-[101%] bg-bgPrimaryColor  shadow transition-all duration-200"
      >
        <div className="w-8/12">
          <img
            className="w-6 rotate-12 z-0"
            src={`${process.env.REACT_APP_SUPABASE_BUCKET}/${product.image[0]}`}
          />
        </div>
        <div className="w-full">
          <h3 className="font-semibold">{product.brand.name}</h3>
        </div>
        <div className="w-full">
          <h3 className="font-semibold hidden tablet:block">{product.model}</h3>
        </div>
        <div className="w-full text-end">
          <h3 className="text-textTertiary text-sm">USD {product.price}</h3>
        </div>
        <div className="w-full text-end hidden laptop:block">
          <h3 className="text-textTertiary text-sm">{product.stock}u</h3>
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

export default ProductTableBody;
