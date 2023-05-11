import React from 'react';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
  const Navigate = useNavigate()
  return (
    <div className=' h-screen  '>
    <div className=' ml-[00px]  ml-[400px]  '>
     <div className='text-[40px] '>welcame,cloude</div>
     <div className='text-[23px] '>Required Documents</div>
     <div className='mr-[px] text-[19px] '>Here is what you need to sset up your account</div>
     </div>
     <div  className='grid  gap-4 mr-[px] text-[20px]  pt-10 ml-[400px] '>
        <div className=' py-1  '>
         <ion-icon name="list"></ion-icon> Driver photo  <button  onClick={()=>Navigate('/Upload1')}  className=' ml-[241px] '>  <ion-icon   name="chevron-forward-outline"></ion-icon></button> 
            
     </div>
     <div className=' h-[1px] bg-gray-300  mr-[800px]'></div>
     
     <div>
     <ion-icon name="list"></ion-icon> Driving license Photo  <button onClick={()=>Navigate('/upload2')} className='ml-[160px]'> <ion-icon name="chevron-forward-outline"></ion-icon></button>
     </div>
     <div className=' h-[1px] bg-gray-300  mr-[800px] '></div>
     <div>
     <ion-icon name="list"></ion-icon> National ID  <button onClick={()=>Navigate('/upload3')} className='ml-[250px]'> <ion-icon name="chevron-forward-outline"></ion-icon></button>
     </div>
     <div className=' h-[1px] bg-gray-300  mr-[800px] '></div>
     </div>

     <button  onClick={()=>Navigate('/Driverdashbord')} className=' bg-black text-white  ml-[450px] mt-10 rounded-3xl  p-4 w-[250px] '> Submit</button>

    </div>
  )
}

export default Verify