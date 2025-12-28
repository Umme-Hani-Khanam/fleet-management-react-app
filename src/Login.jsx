import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState('');
    const navigate=useNavigate();
    const isLoggedIn=false;
    const emailFocus=useRef(null);
    const handleFocus=()=>{
        emailFocus.current.Focus();
    }
    useEffect(()=>{

    {
        if(email==='admin@gmail.com' && password==='admin1234')
        {
            alert('login success');
            navigate("/adminpage")
            isLoggedIn=true;
        }
        else{
            alert('Wrong email or password')
            navigate('/login');
        }
    }
    },[])
   
  return (
    <div>
        <input type='email' placeholder='enter email' onChange={(e)=>setEmail(e.target.value)} onFocus={handleFocus}/>
        <input type='password' placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login