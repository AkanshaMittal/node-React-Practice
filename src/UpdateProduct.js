import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);
  const params= useParams();

  console.log({ name, price, category, company })
   
  const getDetailsUpdation=async()=>{
    console.log("::::::::Productid::::::",params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    console.log(result);
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company)

  }


  useEffect(()=>{
    getDetailsUpdation();
  })
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
