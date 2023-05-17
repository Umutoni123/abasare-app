import React from 'react'
import '../Navigation/nav.css'
import { Link } from 'react-router-dom'

import logo from "../../img/Abasare.png"
export default function Navigation() {
  return (
    <div className='nav'>
    <div className='nav-container'>

      <div className='logo'>
        <h1 className='text-white'>Abasare</h1>
        
      </div>
      <div className='Nav-links'>
        <select name="" id="select-nav">
          <option value="" selected>Company</option>
          <option value=""><Link to='speciality'>About US</Link></option>
          <option value="">Testimonies</option>
          <option value="">Team</option>
        </select>
        <Link id='select-links' to="signup">Ride</Link>
        <Link id='select-links'>Drive</Link>
      </div>

    </div>
    </div>
  )
}
