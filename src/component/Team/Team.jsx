import React from 'react'
import '../Team/team.css'
import female from '../../img/female.svg'
import male from '../../img/male.svg'


export default function Team() {
  return (
    <div className='testimony'>
        <div>
            <img src={female} alt="" />
            <h2>Alexa</h2>
            <div className='test-p'>
                <p>Abasare is the best. I have got good service from them. They are professionals.</p>
                <h5>Alexa</h5>
            </div>
            
        </div>
        <div>
            <img src={male} alt="" />
            <h2>Paco</h2>
            <div className='test-p'>
                <p>Abasare is the best. I have got good service from them. They are professionals.</p>
                <h5>Paco</h5>
            </div>
            
        </div>
        <div>
            <img src={male} alt="" />
            <h2>Paco</h2>
            <div className='test-p'>
                <p>Abasare is the best. I have got good service from them. They are professionals.</p>
                <h5>Paco</h5>
            </div>
            
        </div>
    </div>
  )
}
