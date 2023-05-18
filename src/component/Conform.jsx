import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Conform() {
    const Navigate = useNavigate();
  return (
    
   <div className="relative  flex justify-center   "> 
   
       
   <form className="">
       
       <div className=" " class="input">
           <h1 className='  text-black bg -green-500 ml-52 mt-20 text-2xl'>Enter the 4- digitals set you at <br /> yourname@gmail.com{" "}</h1>
            <div className='flex h-1000 ml-56 mt-12   gap-6  '>
           <input
               type="email" placeholder=''
               className="block w-[60px]   rounded-lg   py-4   text-black  bg-gray-200 border  focus:border-black-400 focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
           />
            <input
               type="email" placeholder=''
               className="block w-[60px]  rounded-lg  px-2 py-4    text-black  bg-gray-200 border  focus:border-black-400 focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
           />
          <input
               type="email" placeholder=''
               className="block w-[60px]  rounded-lg  px-2 py-4    text-black  bg-gray-200 border  focus:border-black-400 focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
           />
          <input
               type="email" placeholder=''
               className="block w-[60px]  rounded-lg  px-2 py-4    text-black  bg-gray-200 border  focus:border-black-400 focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
           />
         
         
           </div>
           
       </div> 
      
      
      <div className="">
           <button  onClick={()=>Navigate('/digitals' )} className="w-[150px] rounded-xl pxć4 py-2 tracking-wide pb-4 ml-[450px] mt-12 bg-white transition-colors duration-200 transform bg-g-700  hover: bg-whi-600 focus:outline-none focus: bg-black-600">
           <ion-icon name="arrow-forward-outline"></ion-icon> Next 
           </button>
               
       </div>
      
<button  onClick={()=>Navigate('/signup' )} className="w-[50px] text-white  rounded-3xl py-2 tracking-wide pt-3 ml-[200px]  bg-black transition-colors duration-200 transform bg-g-700  hover: bg-whi-600 focus:outline-none focus: bg-black-600">
<ion-icon name="arrow-back-outline"></ion-icon> 
           
           </button>  
       
       
      
       
   </form>

 

</div>
  )
}
