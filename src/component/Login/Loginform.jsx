import React from 'react'
import '../Login/login.css'

export default function Loginform() {
  return (
    <div>
      <div className='loginform'>
        <h1>Login Form</h1>
        <input type="email" placeholder='enter your email' />
        <input type="password" value="" placeholder='enter your password'/>
        <button type="submit">Login</button>
      </div>
    </div>
  )
}
