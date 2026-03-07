import React, { useEffect, useState } from 'react';

const Home = () => {
    const [ product,setproduct] = useState([]);
     useEffect(()=>{
     getProductList();
    },[])
    const getProductList =async()=>{
     let result = await fetch('http://localhost:5000/products');
     result= await result.json();
     setproduct(result);
    }
   
    console.log(product);
  return (

<div className="product-list">
     <h1><u>Product List</u></h1>
     <ul>
      <li><b>S.No</b></li>
      <li><b>Name</b></li>
      <li><b>Price</b></li>
      <li><b>Category</b></li>
      <li><b>Company</b></li>
     </ul>
     
     {
      product.map((item,index)=>
      <ul key={index}>
      <li>{index+1}</li>
      <li>{item.name}</li>
      <li>{item.price}</li>
      <li>{item.category}</li>
      <li>{item.company}</li>
     </ul>
      )
     }
    
     
     

    </div>
  );
};

export default Home;