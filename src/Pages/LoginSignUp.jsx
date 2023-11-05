import React from 'react';
import './CSS/Loginsignup.css'

const LoginSignUp = () => {
  return (
    <div className='LoginSignUp'>
      <div className="loginsignupcontainer">
        <h1>Sign UP</h1>
        <div className="loginsignup-fields">
          <input
            type='text'
            placeholder='Your Name' />

          <input type='email'
            placeholder='Email' />

          <input type='password'
            placeholder='password' />

        </div>
        <button>Continue</button>
        <p className='loginsignupLogin'>Already have an account? <span>Login here</span></p>
        <div className="loginsignupAgree">
          <input type='checkbox' name=''  id=''/>
          <p>By Continouing, I agree to the term of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp