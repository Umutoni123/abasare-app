import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
const Navigate=useNavigate();
    return (
        <div class="div1"className="relative  flex flex-col justify-center min-h-screen  overflow-hidden"> 
            <div  className="w-[782px] p-14 pb-2 m-auto  bg-gray-200  rounded-xl shadow-xl text text-black lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center  text-black underline uppercase 
                ">
                   Sign up
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold    text-black"
                        >
                            
                        </label>
                        <input
                            type="email" placeholder='Name'
                            className="block w-full  rounded-xl px-4 py-2 mt-2  text text-black   bg-white border rounded-md focus:border- black-400 focus:ring- black-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div> <br/> <br/>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold  "
                        >
                            
                        </label>
                        <input
                            type="password" placeholder='Phone number'
                            className="block w-full px-4 rounded-xl py-2 mt-2 text- black-500 bg-white-100 border rounded-md focus:border- black-400 focus:ring- black-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div><br/> <br/>
                    <div className="mb-2">
                        <label
                            for="password"  placeholder=''
                            className="block text-sm font-semibold  text- black-500"
                        >
                        
                        </label>
                        <input
                            type="password" placeholder='comform password'
                            className="block w-full rounded-xl px-4 py-2 mt-2 text-black-500 bg-white-100 border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div> <br/> 
                    
                    
                    <div className="mt-6">
                        <button  onClick={()=>Navigate('/comform')} className="w-[150px] rounded-xl px-4 py-2 tracking-wide  bg-black    text-white transition-colors duration-200 transform bg-black-700 rounded-md hover: bg-white-600 focus:outline-none ml-28 focus:bg-black-600">
                            sign up
                        </button>
                    </div>
                    
                </form>

                <p className="mt-8 text-xs font-light text-center text-black">
                    {" "}
                     Have an account?{" "}
                     
                    <a
                        href="#"
                        className="font-medium   text-green-500 hover:underline"
                    >
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
} 