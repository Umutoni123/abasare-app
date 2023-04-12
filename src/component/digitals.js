import React from 'react'

function digitals() {
  return (
    <div>
       <div className="relative flex flex-col justify-center  "> 
    
        
    <form className="mt-4">
        
        
            <h1 className='  text-black ml-[500px] text-2xl '>  Enter the 4- digitals  set  you at <br/> yourname@gmail.com </h1>
            <div className="mb-2  bg-red-500" class="input">
            
            <div className=''>
            <input
                type="email" placeholder=''
                className=" ml-[500px]  rounded-xl px-4 py-6 mt-2   text-black  bg-gray-100 border  focus:border-black-400 focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
            />
        </div> 
        <div className="mb-2" class="input">
            <h1 className='  text-black text-2xl'>  </h1>
            
            <input
                type="email" placeholder=''
                className="    rounded-xl px-4 py-6 mt-2   text-black  bg-gray-100 border  focus:border-black-400 focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
            />
        </div>  <div className="mb-2" class="input">
            <h1 className='  text-black text-2xl'> </h1>
            
            <input
                type="email" placeholder=''
                className="block    rounded-xl px-4 py-6 mt-2   text-black  bg-gray-100 border  focus:border-black-400 focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
            />
        </div> 
        <div className="mb-2" class="input">
            <h1 className='  text-black text-2xl'>  </h1>
         
            <input
                type="email" placeholder=''
                className="block    rounded-xl px-4 py-6 mt-2   text-black  bg-gray-100 border  focus:border-black-400 focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
            />
            </div>
            </div>
    
       
       <div className="mt-6">
            <button  className=" px-4 py-2 tracking-wide pb-4 ml-[600px]  bg-white transition-colors duration-200 transform bg-g-700 rounded-md hover: bg-whi-600 focus:outline-none focus: bg-black-600">
            <ion-icon name="arrow-forward-outline"></ion-icon> Next 
            </button>
        </div>
         
        
        
       
        
    </form>

  

</div>
    </div>
  )
}

export default digitals
