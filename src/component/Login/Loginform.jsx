import React from 'react';

export default function Login() {
    return (
        <div className="relative flex flex-col justify-center min-h-screen  overflow-hidden"> 
            <div className="w-full p-6 m-auto bg-green-50 rounded-md shadow-xl text-green-500 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-green-500 underline uppercase 
                ">
                   Log in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold   text-green-500"
                        >
                            
                        </label>
                        <input
                            type="email" placeholder='Name'
                            className="block w-full  rounded-xl px-4 py-2 mt-2  text-green-600  bg-gray-100 border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div> <br/> <br/>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold  text-green-500"
                        >
                            
                        </label>
                        <input
                            type="password" placeholder='Phone number'
                            className="block w-full px-4 rounded-xl py-2 mt-2 text-green-500 bg-gray-100 border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div><br/> <br/>
                    <div className="mb-2">
                        <label
                            for="password"  placeholder=''
                            className="block text-sm font-semibold  text-green-500"
                        >
                        
                        </label>
                        <input
                            type="password" placeholder='comform password'
                            className="block w-full rounded-xl px-4 py-2 mt-2 text-green-500 bg-gray-100 border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div> <br/> 
                    
                    
                    <div className="mt-6">
                        <button className="w-[150px] rounded-xl px-4 py-2 tracking-wide bg-green-500    text-white transition-colors duration-200 transform bg-green-700 rounded-md hover: bg-white-600 focus:outline-none focus:bg-green-600">
                            Login
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