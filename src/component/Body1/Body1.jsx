import React from 'react'
import '../Body1/body1.css'
import drunk from '../../img/Drunk.svg'
import { Link } from 'react-router-dom'

export default function Body1() {
  return (
    <div className='b-container'>
        <div className='bo'>
            <img src={drunk} id='b-img' alt="" />
            <div className='bo-right'>
                <h1>Let’s ride</h1>
                <div className='bo-button'>
                  <Link to="signup"><button id='b-but'> sign up to Drive</button></Link>
                
                <button id='b-but1'>Signup to ride </button>
                </div>
            </div>

        </div>
    </div>
  )
}
