import React from 'react'
import { Link } from 'react-router-dom'


export default function Navigation() {
  return (
    <div>
        <div><h1>LOGO</h1></div>
        <div>
            <Link to='login'>Login</Link>
            <Link to='signup'>Signup</Link>
        </div>
    </div>
  )
}
