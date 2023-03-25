import React, { useState } from "react";

export default function BasicInfoProduct({ product }) {
  const [brand, setBrand] = useState(product.brand);
  const [model, setModel] = useState(product.model);
  const [subtitle, setSubtitle] = useState(product.subtitle);

  return (
    <div className="flex flex-col gap-1">
      {/*               Modify Brand */}
      <div className="flex flex-col">
        <label htmlFor="brand" className="self-start font-semibold">
          Brand
        </label>
        <div className="bg-bgForthColor px-2 py-1 rounded flex items-center">
          <input
            onChange={(e) => setBrand(e.target.value)}
            className="rounded bg-bgForthColor w-72 mr-2 py-1 px-1"
            type="text"
            name="brand"
            id="brand"
            value={brand}
          />
        </div>
      </div>
      {/*               Modify Model */}
      <div className="flex flex-col">
        <label htmlFor="brand" className="self-start font-semibold">
          Model
        </label>
        <div className="bg-bgForthColor px-2 py-1 rounded flex items-center">
          <input
            onChange={(e) => setModel(e.target.value)}
            className="rounded bg-bgForthColor w-72 mr-2 py-1 px-1"
            type="text"
            name=""
            id=""
            value={model}
          />
        </div>
      </div>
      {/*               Modify Subtitle*/}
      <div className="flex flex-col">
        <label htmlFor="brand" className="self-start font-semibold">
          Subtitle
        </label>
        <div className="bg-bgForthColor px-2 py-1 rounded flex items-center">
          <textarea
            onChange={(e) => setSubtitle(e.target.value)}
            className="rounded bg-bgForthColor w-72 mr-2 py-1 px-2"
            type="text"
            name=""
            id=""
            value={subtitle}
          />
        </div>
      </div>
    </div>
  );
}
