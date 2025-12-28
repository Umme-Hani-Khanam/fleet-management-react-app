import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
   const passRef=useRef();
    const emailRef=useRef();
    
    function handleLogin()
    {
     
        if(email==='admin@gmail.com' && password==='admin1234')
        {
            alert('login success');
            navigate('/adminpage')
           localStorage.setItem("isLoggedin","true");
        }
        else{
            alert('Wrong email or password')
            navigate('/login');
            setEmail("");
            setPassword("");
        
    }
    }
   
  return (
    <div>
        <input type='email' placeholder='enter email' onChange={(e)=>setEmail(e.target.value)} />
        <input type='password' placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login