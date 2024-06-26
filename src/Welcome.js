import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Welcome = () => {

    const navigate = useNavigate();

    const handleClick =()=>{
        navigate('/signup');
    }
    const handleClickLogin =()=>{
        navigate('/login')
    }

  return (
    <div className="main">
        <div className='cont'>
            <p className='welcomep'>
            Welcome to Journey Joy
            </p>

        
            <div className='buttons'>
                <button className='signUpButton'
                onClick={handleClick}
                >
                    Sign Up
                </button>
                <button className='loginButton'
                onClick={handleClickLogin}
                >
                    Log in
                </button>
                </div>
            </div>
        </div>
  )
}

export default Welcome