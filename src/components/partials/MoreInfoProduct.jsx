import { useState } from "react";

function MoreInfoProduct({ product }) {
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);
  const [slug, setSlug] = useState(product.slug);
  const [description, setDescription] = useState(product.description);

  return (
    <div className="flex flex-col gap-3">
      {/*               Modify Description*/}
      <div className="flex flex-col">
        <label htmlFor="brand" className="self-start font-semibold">
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
        </div>
      </div>
      <div className="flex gap-3 justify-between">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfoProduct;
