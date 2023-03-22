import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/partials/Spinner";
import ProductTableBody from "../components/partials/ProductTableBody";
import "../animation/Animations.css";

function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("http://localhost:8000/products");
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <div className="p-5 fade-in">
      <div>
        <h3 className="font-semibold text-2xl">Products</h3>
      </div>
      <div className="flex font-semibold text-lg px-5 mt-5">
        <div className="w-8/12"></div>
        <div className="w-full">Brand</div>
        <div className="w-full">Model</div>
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
  );
}

export default Products;
