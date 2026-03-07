import React, { useState } from "react";

const AddProduct = () => {
  const [name,setName] = useState("");
     const [price,setPrice] = useState("");
      const [category,setCategory] = useState("");
        const [company,setCompany] = useState("");
        const [error,setError] =     useState(false);

        const AddProduct=async()=>{
     


           if(!name||!price||!category||!company)
           {
            setError(true);
            return false
           }
          console.log({name,price,category,company});
          const userID=JSON.parse(localStorage.getItem('user',))._id;
          console.log("::::::userID",userID);
          let result= await fetch("http://localhost:5000/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,company}),
            headers:{
              'Content-Type':'application/json'
            }
          })
          let productResult= await result.json();
          console.warn("{{{}}}}}}}}",productResult);
        }
  return (
    <div className="profile-container">
      <h1>Add Product</h1>

      <input
        className="inputBox"
        type="text"
        name="productname"
        placeholder="Enter Product Name"

        onChange={(e)=>{setName(e.target.value)}}
        value={name}
      />
      {error &&!name&& <span className="validation">Enter Product Name</span>}
      <input
        className="inputBox"
        type="text"
        name="price"
        placeholder="Enter Product Price"
        onChange={(e)=>{setPrice(e.target.value)}}
        value={price}
      />
      {error &&!price&&<span className="validation">Enter Product Price</span>}
      <input
        className="inputBox"
        type="text"
        name="category"
        placeholder="Enter Product Category"
        onChange={(e)=>{setCategory(e.target.value)}}
        value={category}
      />
       {error &&!category&&<span className="validation">Enter product Category </span>}
      <input
        className="inputBox"
        type="text"
        name="company"
        placeholder="Enter Product company"
        onChange={(e)=>{setCompany(e.target.value)}}
        value={company}
      />
      {error &&!company&&<span className="validation">Enter product Company</span>}
      <button onClick={AddProduct}className="submitBtn" type="submit">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
