import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from 'axios';
 
const  linkregister ="https://abasare.herokuapp.com//api/auth/register/"
export default function Login() {
const Navigate=useNavigate();
const [name,setName]=useState();
const  is_vehicle_owner = true;
const [formVisible,setformvisible]=useState(false);

const ChangeName =(e)=>{
    setName(e.target.value)
}

const handleform=()=>{
    setformvisible(true);
}
setTimeout(handleform,300);
const {handleSubmit, register, errors} =useForm({});
const onSubmit = async (data)  => {
     const formData = new FormData();
    formData.append("first_name", data.first_name)
    formData.append("last_name", data.last_name)                  
    formData.append("email", data.email)                  
    formData.append("password", data.password)                  
    formData.append("password_confirmation", data.password_confirmation)     
    console.log(formData.get("first_name"))   
    try{
      const response= await axios.post(linkregister, formData);  
      alert("account created successful")
    } 
    catch(error){
        console.log(error)
    }         
}
    return (
        <div className=' flex flex     h-screen  '>
              <div className='   w-[1000px]   h-40  pl-14 mt-80  '>
<h1 className=' text-3xl  text-black    ml-20'> Hi There!</h1>
<p className=' text-2xl pt-10'> Welcame to Abasare website  we provide quarified drives<br/> in this website .you will be made available a good platform to ride</p>
</div>
        
            <div  className={`w-[1900px]   h-[790px]  mb-8  ] bg-gray-200 pr-10  rounded-xl shadow-xl t lg:max-w-xl duration-700 delay-100 ease-in-out ${formVisible?'-translate-x-0':'translate-y-full'}`}>
             
                <h1 className="text-3xl font-semibold  pt-12  text-center  text-black underline uppercase 
                ">
                   Sign up  
                </h1>
                <form  onSubmit = {handleSubmit(onSubmit)} className="mt-6 flex   flex-col pl-24 gap-[40px]">
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold   text-black-500"
                        >
                            
                        </label>
                        {name}
                        <input  {...register("first_name")}
                            type="text" placeholder='first Name'
                            className="block w-full  rounded-xl px-4 py-2 mt-2  text-black-600  bg-gray-100 border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        
                    </div> 
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold   text-green-500"
                        >
                            
                        </label>
                        {name}
                        <input {...register("last_name")}
                            type="text" placeholder='Last Name'
                            className="block w-full  rounded-xl px-4 py-2 mt-2  text-black-600  bg-gray-100 border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        
                    </div> 
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold  "
                        >
                            
                        </label>
                        <input {...register("email")}
                            type="text" placeholder='email*'
                            className="block w-full px-4 rounded-xl py-2 mt-2 text-black-500 bg-gray-100 border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div> 
                    <div className="mb-2">
                        <label
                            
                            className="block text-sm font-semibold  "
                        >
                            
                        </label>
                        <input {...register( "password")}
                            type="password" placeholder='Passworld'
                            className="block w-full px-4 rounded-xl py-2 mt-2 text-black-500 bg-gray-100 border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div> 
                    
                    <div className="mb-2">
                        <label
                              placeholder='Comfirm passworld'
                            className="block text-sm font-semibold  text- black-500"
                        >
                        
                        </label>
                        <input {...register( "password_confirmation")}
                            type="password" placeholder='comform password'
                            className="block w-full rounded-xl px-4 py-2 mt-2 text-BLACK-500 bg-gray-100 border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div> 
                    <div>
                    {/* <select className='' >
                        <optgroup  > 
                        <option value="">select role</option>     
                        <option>Driver</option>
                        <option>ride</option>
                        </optgroup>
                       
                    </select> */}
                    </div>
                    
                    <div className="mt-6 ml-40">
                        <button  type='submit'  className="w-[150px] rounded-xl px-4 py-2 tracking  bg-black text-btransition-colors duration-200 transform  bg-black  text-white rounded-md hover: focus:outline-none focus:bg-green-600">
                            sign up
                        </button>
                    </div>
                    
                </form>

                <p className="mt-8 text-xs  ml-40 font-light text-center text-black">
                    {" "}
                     Have an account?{" "}
                     
                    <button onClick={()=>Navigate('/Logind' )}  className="font-medium   text-green-500 hover:underline" >
                         Login
                    </button>
                </p>
            </div>
    
    </div>
    );
} 
