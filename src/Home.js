import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
   
    const deleteProduct = async (id) => {
        console.log("id:::",id);
      let result= await fetch(`http://localhost:5000/product/${id}`,{
        method: 'Delete'
      });
      result= await result.json();
      if(result)
      {
        alert("record is deleted Succesfully!!")
        getProductList();
      }

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
      <li><b>Operation</b></li>
     </ul>
     
     {
      product.map((item,index)=>
      <ul key={item._id}>
      <li>{index+1}</li>
      <li>{item.name}</li>
      <li>{item.price}</li>
      <li>{item.category}</li>
      <li>{item.company}</li>
      <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
      <Link to={`/Update/${item._id}`}>Update</Link>
      </li>
     </ul>
      )
     }
    
     
     

    </div>
  );
};

export default Home;