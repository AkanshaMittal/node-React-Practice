import React, { useState } from 'react';

const SignUp = () => {

  const [name,setName] = useState("");
   const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const CollectFormData =async()=>{
      console.warn(name,email,password);
      const result= await fetch('http://localhost:5000/register',{
        method: 'post',
        body:JSON.stringify({name,email,password}),
        headers:{
          'Content-Type':'application/json'
        }
      })
      console.warn(await result.json())
    }
  return (

    <div className="profile-container">
      <h1>Register yourself</h1>

      <input
        className="inputBox"
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={(e)=>{setName(e.target.value)}}
        value={name}
      />
      <input
        className="inputBox"
        type="email"
        name="email"
        placeholder="Enter Email"
        onChange={(e)=>{setEmail(e.target.value)}}
        value={email}
      />
      <input
        className="inputBox"
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={(e)=>{setPassword(e.target.value)}}
        value={password}
      />
      <button className="submitBtn" type="submit" onClick={CollectFormData}>
        Sign Up
      </button>

    </div>
  );
};

export default SignUp;