import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
const Navigate=useNavigate();
const [name,setName]=useState();

const changeName =(e)=>{
    setName(e.target.value)
}


    return (
        <div className="relative flex flex-col justify-center min-h-screen  overflow-hidden"> 
            <div className="w-full p-6 m-auto bg-[#E5E5E5] rounded-md shadow-xl text-black-500 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-black-500 underline uppercase 
                ">
                   Sign up
                </h1>
                <form className="mt-6 flex flex-col gap-[20px]">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold    text-green-500"
                        >
                            
                        </label>
                        {name}
                        <input
                            type="email" placeholder='Name' onChange={changeName}
                            className="block w-full  rounded-xl px-4 py-2 mt-2  text-black-600  bg-[#FFFEFE] border rounded-md focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div> 
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold  text-green-500"
                        >
                            
                        </label>
                        <input
                            type="password" placeholder='Phone number'
                            className="block w-full  rounded-xl px-4 py-2 mt-2  text-black-600  bg-[#FFFEFE] border rounded-md focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"  placeholder='Password'
                            className="block text-sm font-semibold  text-green-500"
                        >
                        
                        </label>
                        <input
                            type="password" placeholder='New password'
                            className="block w-full  rounded-xl px-4 py-2 mt-2  text-black-600  bg-[#FFFEFE] border rounded-md focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div> 
                    <div className="mb-2">
                        <label
                            for="password"  placeholder=''
                            className="block text-sm font-semibold  text-green-500"
                        >
                        
                        </label>
                        <input
                            type="password" placeholder='confirm password'
                            className="block w-full  rounded-xl px-4 py-2 mt-2  text-black-600  bg-[#FFFEFE] border rounded-md focus:border-black focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div> 
                    
                    
                    <div className="mt-6">
                        <button  onClick={()=>Navigate('/comform')} className="w-[150px] rounded-xl px-4 py-2 tracking-wide bg-[#000000]  font-bold  text-white transition-colors duration-200 transform bg-black rounded-md hover: bg-white-600 focus:outline-none focus:bg-green-600">
                            sign up
                        </button>
                    </div>
                    
                </form>

                <p className="mt-8 text-xs font-light text-center text-black">
                    {" "}
                     Have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-green-500 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}