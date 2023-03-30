import React from 'react'
import { Link } from 'react-router-dom'
import '../Navigation/nav.css'


export default function Navigation() {
  return (
    <div className='nav'>
        <div><h1>ABASARE</h1></div>
        <div className='log-links'>
            <Link to='login' id='log-links'>Login</Link>
            <Link to='signup' id='log-links'>Signup</Link>
        </div>
    </div>
  )
}
