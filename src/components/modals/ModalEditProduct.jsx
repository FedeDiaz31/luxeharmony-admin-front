/* CSS */
import "../../animation/Animations.css";
/* Dependencias */
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editProduct, deleteProduct } from "../../redux/productsReducer";
/* Componentes */
import Spinner from "../partials/Spinner";
import axios from "axios";

function ModalProduct({ handleCloseModalProduct, product }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [brands, setBrands] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showImage, setShowImage] = useState(product.image[0]);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [brandName, setBrandName] = useState(product.brand.name);
  const oldBrand = product.brand.name;
  const [model, setModel] = useState(product.model);
  const [subtitle, setSubtitle] = useState(product.subtitle);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [slug, setSlug] = useState(product.slug);
  const [description, setDescription] = useState(product.description);

  /*   Close with ESC Function */
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      handleCloseModalProduct();
    }
  });

  /*  GET BRANDS */
  useEffect(() => {
    const getBrands = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/brands`
      );
      setBrands(response.data);
    };
    getBrands();
  }, []);

  /*   PATCH PRODUCT */
  const handleEditProduct = async () => {
    const formData = new FormData();
    formData.append("brand", brandName);
    formData.append("model", model);
    formData.append("subtitle", subtitle);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("slug", slug);
    formData.append("product", product._id);
    formData.append("oldBrand", oldBrand);
    const response = await axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/products/${slug}`,
      data: formData,
      headers: {
        Authorization: `Bearer ${user.admin.token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    handleCloseModalProduct();
    dispatch(editProduct(response.data));
  };

  const handleDelete = async () => {
    const response = await axios({
      headers: {
        Authorization: `Bearer ${user.admin.token}`,
      },
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}/products/${product._id}`,
    });
    dispatch(deleteProduct(response.data));
    setShowDeleteModal(false);
    handleCloseModalProduct();
  };

  return (
    // MODAL CONFIG
    <div className="fixed inset-0 bg-modal z-40">
      <div className="flex items-center justify-center min-h-screen text-center px-8 tablet:px-0">
        {/*  BG BLACK 50% OPACITY MODAL */}
        <div
          className="fixed inset-0 bg-[#0f0f0f7e] cursor-pointer fade-in-fast z-20"
          onClick={handleCloseModalProduct}
        ></div>
        {!product ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          // BODY MODAL
          <div className="inline-block bg-bgPrimaryColor rounded-lg shadow-lg transform transition-all fade-in-fast duration-300 z-30 mt-16 laptop:mt-12">
            {/*              BUTTON CLOSE */}
            <button
              className="absolute right-[-5px] top-[-5px] h-6 w-6 flex border justify-center border-bgSecondaryColor bg-bgPrimaryColor hover:bg-bgSecondaryColor rounded-full text-sm translate-all duration-150 font-bold hover:text-bgPrimaryColor"
              onClick={handleCloseModalProduct}
            >
              X
            </button>
            {/*             EDIT PRODUCT */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex text-white items-center p-3 laptop:p-5 px-5 tablet:px-10"
            >
              {/*          IMAGES SELECTOR AND ADDED FOR PRODUCTS */}
              <div className="hidden laptop:block">
                <img
                  className="hidden h-[290px] mix-blend-multiply tablet:flex w-64 desktop:w-80 object-contain rounded-l mb-4"
                  src={
                    showImage.includes("http")
                      ? showImage
                      : `${process.env.REACT_APP_API_URL}/img/products/${showImage}`
                  }
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
                        className="w-14 mix-blend-multiply h-14 object-contain cursor-pointer border rounded p-1 fade-in-fast"
                        src={
                          image.includes("http")
                            ? image
                            : `${process.env.REACT_APP_API_URL}/img/products/${image}`
                        }
                      />
                    );
                  })}
                  <button className="ml-2 bg-bgForthColor text-bgSecondaryColor px-3 h-8 rounded text-lg font-semibold">
                    +
                  </button>
                </div>
              </div>
              {/*             FORM EDIT PRODUCT */}
              <div className="flex flex-col laptop:ml-10">
                <h2 className="font-bold text-lg">Edit Product</h2>
                <div className="min-h-[250px]">
                  {showMoreInfo ? (
                    <div className="fade-in w-60 tablet:w-80">
                      {/*              PAGE 1 of EDIT PRODUCT */}
                      <div className="flex flex-col gap-3">
                        {/*               Modify Description*/}
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor="brand"
                            className="self-start font-semibold"
                          >
                            Description
                          </label>
                          <div className="bg-bgForthColor px-2 py-1 rounded flex items-center">
                            <textarea
                              onChange={(e) => setDescription(e.target.value)}
                              className="rounded bg-bgForthColor w-72 mr-2 py-1 px-2"
                              type="text"
                              name=""
                              id=""
                              value={description}
                            />
                          </div>
                        </div>
                        {/*               Modify Slug */}
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor="brand"
                            className="self-start font-semibold"
                          >
                            Slug
                          </label>
                          <div className="bg-bgForthColor px-2 py-1 rounded flex items-center">
                            <input
                              onChange={(e) => setSlug(e.target.value)}
                              className="rounded bg-bgForthColor w-full mr-2 py-1 px-1"
                              type="text"
                              name="slug"
                              id="slug"
                              value={slug}
                            />
                          </div>
                        </div>
                        <div className="flex gap-3 justify-between">
                          {/*               Modify Price*/}
                          <div className="flex flex-col w-full">
                            <label
                              htmlFor="brand"
                              className="self-start font-semibold"
                            >
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
                          {/*               Modify Stock*/}
                          <div className="flex flex-col">
                            <label
                              htmlFor="brand"
                              className="self-start font-semibold"
                            >
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
                      </div>
                    </div>
                  ) : (
                    <div className="slide-top w-60 tablet:w-80">
                      {/*              PAGE 2 of EDIT PRODUCT */}
                      <div className="flex flex-col gap-1">
                        {/*               Modify Brand */}
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor="brand"
                            className="self-start font-semibold"
                          >
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
                                      <option
                                        key={brand._id}
                                        value={brand.name}
                                      >
                                        {brand.name}
                                      </option>
                                    );
                                  })
                                : ""}
                            </select>
                          </div>
                        </div>
                        {/*               Modify Model */}
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor="brand"
                            className="self-start font-semibold"
                          >
                            Model
                          </label>
                          <div className="bg-bgForthColor rounded flex items-center">
                            <input
                              onChange={(e) => setModel(e.target.value)}
                              className="rounded bg-bgForthColor w-full mr-2 py-1 px-1"
                              type="text"
                              name=""
                              id=""
                              value={model}
                            />
                          </div>
                        </div>
                        {/*               Modify Subtitle*/}
                        <div className="flex flex-col w-full">
                          <label
                            htmlFor="brand"
                            className="self-start font-semibold"
                          >
                            Subtitle
                          </label>
                          <div className="bg-bgForthColor rounded flex items-center">
                            <textarea
                              onChange={(e) => setSubtitle(e.target.value)}
                              className="rounded bg-bgForthColor w-full mr-2 py-1 px-2 h-[100px]"
                              type="text"
                              name=""
                              id=""
                              value={subtitle}
                            />
                          </div>
                        </div>
                        <div className=" laptop:hidden flex justify-center gap-2 items-center mt-2">
                          {product.image.map((image, i) => {
                            return !image ? (
                              <div className="flex justify-center">
                                <Spinner />
                              </div>
                            ) : (
                              <img
                                key={i}
                                onClick={() => setShowImage(image)}
                                className="w-10 tablet:w-14 mix-blend-multiply h-10 tablet:h-14 object-contain cursor-pointer border rounded p-1 fade-in-fast"
                                src={
                                  image.includes("http")
                                    ? image
                                    : `${process.env.REACT_APP_API_URL}/img/products/${image}`
                                }
                              />
                            );
                          })}
                          <button className="ml-2 bg-bgForthColor text-bgSecondaryColor px-3 h-8 rounded text-lg font-semibold">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/*             PAGE SELECTOR & BUTTON EDIT PRODUCT */}
                <div className="mt-3 flex flex-col  items-center">
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
                  <div className="flex">
                    <button
                      onClick={handleEditProduct}
                      className="mt-4 gap-2 flex items-center rounded p-2 pl-3 pr-4 bg-bgForthColor  hover:bg-bgSecondaryColor transition-all duration-200 hover:text-textPrimary"
                    >
                      <img className="w-6" src="edit-icon.png" alt="" />
                      <h2 className="font-bold">Edit</h2>
                    </button>
                    <button
                      onClick={() => setShowDeleteModal(true)}
                      className="mt-4 ml-2 gap-2 flex items-center rounded p-2 pl-3 pr-4 bg-bgForthColor  hover:bg-bgSecondaryColor transition-all duration-200 hover:text-textPrimary"
                    >
                      <img className="w-5" src="delete-icon.png" alt="" />
                      <h2 className="font-bold">Delete</h2>
                    </button>
                  </div>
                  {showDeleteModal && (
                    <div className="flex justify-between items-center mt-3 mb-3 p-2 rounded bg-bgSoftRedColor">
                      <p className="mr-10 text-textSecondary ">Are you sure?</p>
                      <button
                        onClick={() => setShowDeleteModal(false)}
                        className="w-[21vh]  bg-bgFiftyColor text-textSecondary rounded transition-all duration-200 hover:bg-bgBlueColor hover:text-textPrimary"
                      >
                        No
                      </button>{" "}
                      <button
                        onClick={handleDelete}
                        className="w-[17vh] ml-2 bg-bgFiftyColor text-textSecondary rounded transition-all duration-200 hover:bg-bgRedColor hover:text-textPrimary"
                      >
                        Yes
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalProduct;
