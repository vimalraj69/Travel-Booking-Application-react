import React, { useState } from 'react'
import apiRequest from './apiRequest'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const API_URL = "http://localhost:3500/users";

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(userName!=="" && mailId!=="",password!=="" ){
      const newUser ={
        username :userName,
        mail : mailId,
        password : password
      }
  
      const postOption ={
        method : 'POST',
        headers :{
          'Content-Type' :'application/json'
        },
        body :JSON.stringify(newUser)
      }
  
      const res = await apiRequest(API_URL,postOption);
      
        
      if (!res) {
        navigate('/signupcompleted');
        console.log("yes");
      }else{
        console.log("not");
      }

    }
    
   

  }

  
  const [userName,setUsername] = useState('');
  const [mailId,setMailId] = useState('');
  const [password,setPassword] = useState('');

  

  
  
  return (
    <div><h1>Sign Up</h1>
    <div className="mainSign">
    
      <form onSubmit={handleSubmit} className='form'>
        <label > UserName </label>
        <input
        type='text'
        value={userName}
        onChange={(e)=>setUsername(e.target.value)}
        />
        <label > E-Mail  </label>
        <input
        type='text'
        value={mailId}
        onChange={(e)=>setMailId(e.target.value)}
        />
        <label > Password </label>
        <input
        type='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />

        <button type='submit' className='formbut'>
          Enter
        </button>
      </form>

    </div>
    </div>

  )
}

export default SignUp