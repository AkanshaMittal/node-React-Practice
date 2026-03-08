import React, { useState } from "react";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  console.log({ name, price, category, company })
  return (
    <div className="profile-container">
      <h1>Update Product</h1>

      <input
        className="inputBox"
        type="text"
        name="productname"
        placeholder="Enter Product Name"

        onChange={(e) => { setName(e.target.value) }}
        value={name}
      />

      <input
        className="inputBox"
        type="text"
        name="price"
        placeholder="Enter Product Price"
        onChange={(e) => { setPrice(e.target.value) }}
        value={price}
      />

      <input
        className="inputBox"
        type="text"
        name="category"
        placeholder="Enter Product Category"
        onChange={(e) => { setCategory(e.target.value) }}
        value={category}
      />

      <input
        className="inputBox"
        type="text"
        name="company"
        placeholder="Enter Product company"
        onChange={(e) => { setCompany(e.target.value) }}
        value={company}
      />

      <button onClick={() => { console.log("clicked....") }} className="submitBtn" type="submit">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
