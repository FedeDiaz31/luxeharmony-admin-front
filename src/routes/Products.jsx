import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/partials/Spinner";
import Slider from "react-slick";
import ProductTableBody from "../components/partials/ProductTableBody";
import "../animation/Animations.css";
import ModalAddProduct from "../components/modals/ModalAddProduct";

function Products() {
  document.title = ` LuxeHarmony | Products `;

  const [filterSelected, setFilterSelected] = useState("categories");
  const [products, setProducts] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState(null);
  const [brands, setBrands] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [brandFilter, setBrandFilter] = useState(null);
  const handleCloseModalProduct = () => setShowModal(false);
  const handleShowModalProduct = () => setShowModal(true);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("http://localhost:8000/products");
      setProducts(response.data);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get("http://localhost:8000/categories");
      setCategories(response.data);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getBrands = async () => {
      const response = await axios.get("http://localhost:8000/brands");
      setBrands(response.data);
    };
    getBrands();
  }, []);

  /*   Config Slider de Generos */
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

        <div className="text-white font-semibold flex gap-2 ml-8 mt-5">
          <button
            onClick={() => setFilterSelected("categories")}
            className={`${
              filterSelected === "categories" &&
              "bg-bgSecondaryColor text-textPrimary rounded"
            } && border-b-2 pb-1  px-4  m-0 transition-all duration-200`}
          >
            Categories
          </button>
          <button
            onClick={() => setFilterSelected("brands")}
            className={`${
              filterSelected === "brands" &&
              "bg-bgSecondaryColor text-textPrimary rounded"
            } && border-b-2 pb-1 hover:bg-gray-700 px-4 m-0 transition-all duration-200`}
          >
            Brands
          </button>
          {/*         Borrar filtro */}
          {categoryFilter || brandFilter ? (
            <div className="flex">
              <h2 className="mx-3">⦾</h2>
              <button
                onClick={() => {
                  setCategoryFilter(null);
                  setBrandFilter(null);
                }}
                className={`ml-2 hidden tablet:flex border-b-2 pb-1 border-gray-800 hover:bg-gray-700 px-4 transition-all duration-200`}
              >
                Borrar filtro
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/*        Filtro Categorias */}
        {filterSelected === "categories" && (
          <div className="px-14 z-[0] relative my-5 fade-in">
            {!categories ? (
              <div className="flex justify-center">
                <Spinner />
              </div>
            ) : (
              <div className="flex justify-center gap-4">
                {categories.map((category) => {
                  return (
                    <div
                      onClick={() => setCategoryFilter(category._id)}
                      key={category.id}
                      className={`${
                        category._id === categoryFilter &&
                        "bg-bgSecondaryColor text-textPrimary rounded"
                      } border-b-2 text-lg font-semibold hover:bg-gray-700 px-3 hover:z-0 cursor-pointer text-center transition-all duration-200`}
                    >
                      {category.name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/*        Filtro Marcas */}
        {filterSelected === "brands" && (
          <div className="px-14 z-[0] relative my-5 fade-in">
            {!brands ? (
              <div className="flex justify-center">
                <Spinner />
              </div>
            ) : (
              <div className="flex justify-center gap-4">
                {brands.map((brand) => {
                  return (
                    <div
                      onClick={() => setBrandFilter(brand._id)}
                      key={brand.id}
                      className={`${
                        brand._id === brandFilter &&
                        "bg-bgSecondaryColor text-textPrimary  rounded"
                      } border-b-2 cursor-pointer text-center text-lg px-3 font-semibold transition-all duration-200`}
                    >
                      {brand.name}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

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
