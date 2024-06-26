import React from 'react'
import { Link } from 'react-router-dom'

const SignUpCompleted = () => {
  return (
    <div className='completed'>
       <h1> Sign Up Completed</h1>
       <div className='link'>
      <Link to ="/" className='link'>Log in</Link>
      </div>
        </div>
  )
}

export default SignUpCompleted