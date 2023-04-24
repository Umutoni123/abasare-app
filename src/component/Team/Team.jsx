import React from 'react'
import '../Team/team.css'
import female from '../../img/female.svg'
import male from '../../img/male.svg'


export default function Team() {
  return (
    <div className='testimony'>
        <div className='cards'>
            <img src={female} alt="" />
            <h2>Alexa</h2>
            <div className='test-p'>
                <p>Abasare is the best. I have got good service from them. They are professionals.</p>
                <hr />
                <h4>Alexa/ Rider</h4>
            </div>
            
        </div>
        <div className='cards'>
            <img src={male} alt="" />
            <h2>Paco</h2>
            <div className='test-p'>
                <p>Abasare is the best. I have got good service from them. They are professionals.</p>
                <hr />
                <h4>Paco/ Driver</h4>
            </div>
            
        </div>
        <div className='cards'>
            <img src={male} alt="" />
            <h2>Paco</h2>
            <div className='test-p'>
                <p>Abasare is the best. I have got good service from them. They are professionals.</p>
                <hr />
                <h4>Paco/ Driver</h4>
            </div>
            
        </div>
    </div>
  )
}
