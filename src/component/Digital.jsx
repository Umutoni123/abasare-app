import React from 'react'
import  Scientist from "../img/Scientist.png"
import { useNavigate } from 'react-router-dom'


const Digital = () => {
  const Navigate = useNavigate();
  return (
    <div className=' h-screen  h-screen '>
       <div className=' bg-neutral-200  mt-16 ml-96  rounded-2xl  mr-96 h-3/4   '>
      
      <img src={Scientist} className="Scientist  object-fill  h-3/4 w-35 pt-12" alt='' />
      <h1 className=' text-2xl pt-8'> Hi Arbert, welcame  to abasare </h1>
      <button onClick={()=>Navigate('/location' )} className="w-[50px] text-white  rounded-3xl py-2 tracking-wide pt-3 ml-[510px] mt-5 bg-black transition-colors duration-200 transform bg-g-700  hover: bg-whi-600 focus:outline-none focus: bg-black-600">
              <ion-icon name="arrow-forward-outline"></ion-icon>  
           
           </button>
      
    </div>
    
   
       
    </div>
  )
}

export default Digital
