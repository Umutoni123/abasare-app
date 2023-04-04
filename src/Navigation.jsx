import React from 'react'
import { NavLink } from 'react-router-dom'
import Signupform from './component/Login/Loginform';
import Signup from './component/Signup/Signup';
import './nav.css'



export default function Navigation() {
  return (
    <div className='nav shadow-md  h-20'>
        <div><h1>ABASARE</h1></div>
        <div className='log-links '>
          <NavLink to='login' id='links'>Login</NavLink>
          <NavLink to='signup' id='log-links'>Signup</NavLink>
        </div>
    </div>
    
  )
}
