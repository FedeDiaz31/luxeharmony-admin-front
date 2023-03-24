import { useState } from "react";

function MoreInfoProduct({ product }) {
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [slug, setSlug] = useState(product.slug);

  return (
    <div className="flex flex-col gap-3 items-baseline">
      {/*               Modify Slug */}
      <div className="flex flex-col">
        <label htmlFor="brand" className="self-start font-semibold">
          Slug
        </label>
        <div className="bg-bgForthColor px-2 py-1 rounded flex items-center">
          <input
            onChange={(e) => setSlug(e.target.value)}
            className="rounded bg-bgForthColor w-72 mr-2 py-1 px-1"
            type="text"
            name="slug"
            id="slug"
            value={slug}
          />
          <button>
            <img className="w-4" src="edit-icon.png" alt="" />
          </button>
        </div>
      </div>
      <div className="flex gap-3">
        {/*               Modify Price*/}
        <div className="flex flex-col">
          <label htmlFor="brand" className="self-start font-semibold">
            Price (U$D)
          </label>
          <div className="bg-bgForthColor px-2 py-1 rounded w-38">
            <input
              onChange={(e) => setPrice(e.target.value)}
              className="rounded bg-bgForthColor mr-2 py-1 px-1 w-28"
              type="number"
              name="price"
              id="price"
              value={price}
            />
            <button>
              <img className="w-4" src="edit-icon.png" />
            </button>
          </div>
        </div>
        {/*               Modify Stock*/}
        <div className="flex flex-col">
          <label htmlFor="brand" className="self-start font-semibold">
            Stock (u)
          </label>
          <div className="bg-bgForthColor px-2 py-1 rounded w-38">
            <input
              onChange={(e) => setStock(e.target.value)}
              className="rounded bg-bgForthColor mr-2 py-1 px-1 w-28"
              type="number"
              name="stock"
              id="stock"
              value={stock}
            />
            <button>
              <img className="w-4" src="edit-icon.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfoProduct;
