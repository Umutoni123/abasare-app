import React from 'react'
import { useNavigate } from 'react-router-dom';


const Upload2 = () => {
  const Navigate = useNavigate()
  return (
    <div className=' h-screen  h-screen '>
       <div className=' bg-neutral-200  mt-16 ml-96   mr-80 rounded-2xl '>
        <p className=' text-3xl pt-5 ml-60'>Take photo of Driving lisence</p>
      {/* <img src={Scientist} className="Scientist  object-fill  h-3/4 w-35 pt-12" alt='' /> */}
    
      <button  className=' text-[400px]   text-gray-400  ml-60'>
      
       <ion-icon   name="camera-outline" className='text-gray-100'></ion-icon>
       
       </button>
    
    <button onClick={()=>Navigate('/Verify')} className=' absolute bg-[#111827] text-white   mt-[500px]  -ml-80  rounded-3xl  p-4 w-[250px] '> Upload</button>
    </div>
       
    </div>
  )
}

export default Upload2
