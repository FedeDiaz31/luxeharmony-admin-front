import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/partials/Spinner";
import ProductTableBody from "../components/partials/ProductTableBody";
import "../animation/Animations.css";
import ModalAddProduct from "../components/modals/ModalAddProduct";

function Products() {
  document.title = ` LuxeHarmony | Products `;

  const [products, setProducts] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleCloseModalProduct = () => setShowModal(false);
  const handleShowModalProduct = () => setShowModal(true);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("http://localhost:8000/products");
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <>
      {showModal && (
        <ModalAddProduct handleCloseModalProduct={handleCloseModalProduct} />
      )}
      <div className="p-5 fade-in">
        <div className="flex w-full justify-center tablet:justify-between items-center gap-3 tablet:px-10">
          <h3 className="font-bold hidden tablet:block text-2xl">Products</h3>
          <div className="flex gap-3 items-center">
            {/*             Searcher */}
            <div className="bg-bgPrimaryColor px-2 py-1 rounded flex items-center">
              <input
                className="rounded w-30 mobilXS:w-52 laptop:w-72 tablet:mr-2 py-1 px-1"
                type="text"
                name=""
                id=""
                placeholder="Search products"
              />
              <button>
                <img className="w-4" src="search-icon.png" alt="" />
              </button>
            </div>
            <button
              onClick={handleShowModalProduct}
              className="bg-bgSecondaryColor text-textPrimary px-3 h-8 rounded text-lg font-semibold"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex font-semibold text-lg px-5 mt-5">
          <div className="w-8/12"></div>
          <div className="w-full">Brand</div>
          <div className="w-full hidden tablet:block">Model</div>
          <div className="w-full text-end">Price</div>
          <div className="w-full text-end hidden laptop:block">Stock</div>
          <div className="w-full"></div>
        </div>
        {products ? (
          <ul className="mt-3 grid gap-1 rounded-lg pb-4">
            {products.map((product, i) => {
              return <ProductTableBody key={i} product={product} />;
            })}
          </ul>
        ) : (
          <div className="w-full flex justify-center mt-24">
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
}

export default Products;
