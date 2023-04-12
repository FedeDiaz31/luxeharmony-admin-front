/* CSS */
import "../../animation/Animations.css";
/* Componentes */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../../redux/productsReducer";
// import Spinner from "../partials/Spinner";
import axios from "axios";

function ModalProduct({ handleCloseModalProduct }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [brands, setBrands] = useState(null);
  const [categories, setCategories] = useState(null);
  const [brandName, setBrandName] = useState("");
  const [model, setModel] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  /*   Close with ESC Function */
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      handleCloseModalProduct();
    }
  });

  useEffect(() => {
    const getBrands = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/brands`
      );
      setBrands(response.data);
    };
    getBrands();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/categories`
      );
      setCategories(response.data);
    };
    getCategories();
  }, []);

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("brand", brandName);
    formData.append("model", model);
    formData.append("subtitle", subtitle);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("description", description);
    formData.append("image", image);

    console.log(formData);

    const response = await axios({
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${user.admin.token}`,
      },
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/products`,
      data: formData,
    });
    dispatch(createProduct(response.data));
    handleCloseModalProduct();
  };

  return (
    <div className="fixed inset-0 bg-modal z-40">
      <div className="flex items-center justify-center min-h-screen text-center px-8 tablet:px-0">
        <div
          className="fixed inset-0 bg-[#0f0f0f7e] cursor-pointer fade-in-fast z-20"
          onClick={handleCloseModalProduct}
        ></div>
        <div className="inline-block bg-bgPrimaryColor rounded-lg shadow-lg transform transition-all fade-in-fast duration-300 modal z-30 mt-5">
          {/*           Close Button */}
          <button
            className="absolute right-[-5px] top-[-5px] h-6 w-6 flex border justify-center border-bgSecondaryColor bg-bgPrimaryColor hover:bg-bgSecondaryColor rounded-full text-sm translate-all duration-150 font-bold hover:text-bgPrimaryColor"
            onClick={handleCloseModalProduct}
          >
            X
          </button>
          {/*             Form Edit Product */}
          <div className="flex text-white items-center p-5 px-10">
            <form onSubmit={handleCreateProduct}>
              <h2 className="font-bold text-lg">Add Product</h2>
              <div className="slide-top w-60 tablet:w-80">
                <div className="flex gap-3">
                  {/*               Add Brand */}
                  <div className="flex flex-col w-full">
                    <label htmlFor="brand" className="self-start font-semibold">
                      Brand
                    </label>
                    <div className="bg-bgForthColor rounded w-full flex items-center">
                      <select
                        onChange={(e) => setBrandName(e.target.value)}
                        className="rounded bg-bgForthColor w-full mr-2 py-1 px-1"
                        type="text"
                        name="brand"
                        id="brand"
                        value={brandName}
                      >
                        {brands
                          ? brands.map((brand) => {
                              return (
                                <option key={brand._id} value={brand.name}>
                                  {brand.name}
                                </option>
                              );
                            })
                          : ""}
                      </select>
                    </div>
                  </div>
                  {/*               Add Category*/}
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="category"
                      className="self-start font-semibold"
                    >
                      Category
                    </label>
                    <div className="bg-bgForthColor rounded w-full flex items-center">
                      <select
                        onChange={(e) => setCategory(e.target.value)}
                        className="rounded bg-bgForthColor w-full mr-2 py-1 px-1"
                        type="text"
                        name="category"
                        id="category"
                        value={category}
                      >
                        {categories &&
                          categories.map((category) => {
                            return (
                              <option key={category._id} value={category.name}>
                                {category.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  {/*               Add Model */}
                  <div className="flex flex-col w-full">
                    <label htmlFor="brand" className="self-start font-semibold">
                      Model
                    </label>
                    <div className="bg-bgForthColor rounded flex items-center">
                      <input
                        onChange={(e) => setModel(e.target.value)}
                        className="rounded bg-bgForthColor w-full mr-2 py-1 px-1"
                        type="text"
                        name="model"
                        id="model"
                        value={model}
                      />
                    </div>
                  </div>
                  {/*               Add Subtitle*/}
                  <div className="flex flex-col w-full">
                    <label htmlFor="brand" className="self-start font-semibold">
                      Subtitle
                    </label>
                    <div className="bg-bgForthColor rounded flex items-center">
                      <textarea
                        onChange={(e) => setSubtitle(e.target.value)}
                        className="rounded bg-bgForthColor w-full mr-2 py-1 px-2"
                        type="text"
                        name="subtitle"
                        id="subtitle"
                        value={subtitle}
                      />
                    </div>
                  </div>
                </div>
                {/*               Add Description*/}
                <div className="flex flex-col w-full">
                  <label htmlFor="brand" className="self-start font-semibold">
                    Description
                  </label>
                  <div className="bg-bgForthColor px-2 py-1 rounded flex items-center">
                    <textarea
                      onChange={(e) => setDescription(e.target.value)}
                      className="rounded bg-bgForthColor w-72 mr-2 py-1 px-2 h-[40px]"
                      type="text"
                      name="description"
                      id="description"
                      value={description}
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  {/*               Add Price*/}
                  <div className="flex flex-col w-full">
                    <label htmlFor="brand" className="self-start font-semibold">
                      Price (U$D)
                    </label>
                    <div className="bg-bgForthColor px-2 py-1 rounded w-38">
                      <input
                        onChange={(e) => setPrice(e.target.value)}
                        className="rounded bg-bgForthColor mr-2 py-1 px-1 w-full"
                        type="number"
                        name="price"
                        id="price"
                        value={price}
                      />
                    </div>
                  </div>
                  {/*               Add Stock*/}
                  <div className="flex flex-col">
                    <label htmlFor="brand" className="self-start font-semibold">
                      Stock (u)
                    </label>
                    <div className="bg-bgForthColor px-2 py-1 rounded w-38">
                      <input
                        onChange={(e) => setStock(e.target.value)}
                        className="rounded bg-bgForthColor mr-2 py-1 px-1 w-full"
                        type="number"
                        name="stock"
                        id="stock"
                        value={stock}
                      />
                    </div>
                  </div>
                </div>
                {/*               Add Image */}
                <div className="flex flex-col w-full">
                  <label htmlFor="brand" className="self-start font-semibold">
                    Image
                  </label>
                  <div className="bg-bgForthColor px-2 py-1 rounded flex items-center">
                    <input
                      onChange={(e) => setImage(e.target.files[0])}
                      className="rounded bg-bgForthColor w-full mr-2 py-1 px-1"
                      type="file"
                      name="image"
                      id="image"
                    />
                  </div>
                </div>
              </div>
              {/*               Buton Add*/}
              <div className="mt-2 flex flex-col  items-center">
                <button
                  type="submit"
                  className="mt-3 gap-2 flex items-center rounded p-2 pl-3 pr-4 bg-bgForthColor hover:bg-bgSecondaryColor transition-all duration-200 hover:text-textPrimary"
                >
                  <img className="w-8" src="edit-icon.png" alt="" />
                  <h2 className="font-bold">Add Product</h2>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProduct;
