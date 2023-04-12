 import React from 'react'
 import { useNavigate } from 'react-router-dom'

 
 const Comform = () => {
    const Navigate = useNavigate();
   return (

    <div className="relative flex flex-col justify-center  "> 
    
        
        <form className="mt-4">
            
            <div className="mb-2" class="input">
                <h1 className='  text-black ml-[600px]   text-2xl'> Comform your request by  entering <br/>your email</h1>
                
                <input
                    type="email" placeholder='Email'
                    className="block w-[600px] ml-[500px]  rounded-3xl px-4 py-6 mt-2   text-black  bg-gray-100 border  focus:border-black-400 focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div> 
           
           <div className="mt-6">
                <button  onClick={()=>Navigate('/digitals' )} className="w-[150px] ml-[940px]  rounded-xl px-2 py-4 tracking-wide pb-4  bg-black   transition-colors duration-200 transform   rounded-md hover: bg-black-400 text-white py-2 px-4 border-2  rounded-full focus:outline-none focus: bg-black-600">
                <ion-icon name="arrow-forward-outline"></ion-icon> Next 
                </button>
            </div>
             
            
            
           
            
        </form>

      
    
</div>
   )
 }
 
 export default Comform
 