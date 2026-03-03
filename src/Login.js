import{ useState,useEffect } from 'react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const navigate= useNavigate();
   useEffect(()=>{
           const auth= localStorage.getItem('user');
           if(auth)
           {
              navigate('/');
           }
         })
  const handleLogin = async () => {
    console.log("email password of Login::::::", email, password)
    let result= await fetch('http://localhost:5000/login',{
        method: 'post',
        body:JSON.stringify({email,password}),
        headers:{
          'Content-Type':'application/json'
        }
      });
       result = await result.json();
       console.log(result);
       if(result.name){
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/')
       }else{
        alert("Invalid credentials");
       }
    }
  return (
    <div className='profile-container'>
      <h1>Login</h1>
      <input
        className="inputBox"
        type="email"
        name="email"
        placeholder="Enter Email"
        onChange={(e) => { setEmail(e.target.value) }}
        value={email}
      />
      <input
        className="inputBox"
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={(e) => { setPassword(e.target.value) }}
        value={password}
      />
      <button className="submitBtn" type="submit" onClick={handleLogin}>
        Login
      </button>


    </div>
)}
