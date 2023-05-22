import React from 'react'
import  Scientist from "../img/Scientist.png"
import { useNavigate } from 'react-router-dom'
import arrow from '../img/right-arrow.svg'

const Digital = () => {
  const Navigate = useNavigate();
  return (
    <div className=' h-screen  h-screen '>
       <div className=' bg-neutral-200  mt-16 ml-96  rounded-2xl  mr-96 h-3/4   '>
      
      <img src={Scientist} className="Scientist  object-fill  pl-96 h-3/4 w-35 pt-12" alt='' />
      <h1 className=' text-2xl pl-80 pt-8'> Hi Arbert, welcame  to abasare </h1>
      <button onClick={()=>Navigate('/' )} className="w-[50px] bg-[white] bg-black  rounded-3xl py-2 tracking-wide pt-3  ml-[800px]  mt-5   transition-colors duration-200 transform bg-g-700  hover: bg-whi-600 focus:outline-none focus: bg-black-600">
      <ion-icon name="arrow-forward-outline" ></ion-icon>
           
           </button>
        
      
    </div>
    
   
       
    </div>
  )
}

export default Digital
