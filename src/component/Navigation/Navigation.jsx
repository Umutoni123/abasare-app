import React from 'react'
import '../Navigation/nav.css'
import { Link, useNavigate } from 'react-router-dom'

import logo from "../../img/Abasare.png"
export default function Navigation() {
  const Navigate= useNavigate()
  return (
    <div className='nav py-6'>
    <div className='nav-container'>

      <div className='logo'>
        <h1 className='text-white'>Abasare</h1>
        
      </div>
      <div className='Nav-links ' >
        <button  onClick={()=>Navigate('/speciality')} to="/" id='select-links' className='text-xl text-bold' >Home</button>
        <select name="" id="select-nav" className='text-xl text-bold bg-transparent '>
          <option value="" selected className='text-xl text-bold bg-transparent text-[#111827]' >Company</option>
          <option value="" className='text-xl text-bold text-[#111827]' onClick={()=>Navigate('/speciality')}>Services</option>
          <option value="" className='text-xl text-bold text-[#111827]'>Testimonies</option>
          <option value="" className='text-xl text-bold text-[#111827]'>Team</option>
        </select>
        <Link id='select-links' to="signup"className='text-xl '>Ride</Link>
        <Link id='select-links' className='text-xl text-bold '>Drive</Link>
      </div>

    </div>
    </div>
  )
}
