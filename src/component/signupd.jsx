import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

 
export default function Login() {
const Navigate=useNavigate();
const [name,setName]=useState();
const [formVisible,setformvisible]=useState(false);

const changeName =(e)=>{
    setName(e.target.value)
}

const handleform=()=>{
    setformvisible(true);
}
setTimeout(handleform,300);

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
                <form data-aos="fade-up"className="mt-6 flex   flex-col pl-24 gap-[60px]">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold   text-green-500"
                        >
                            
                        </label>
                        {name}
                        <input
                            type="email" placeholder='Name'
                            className="block w-full  rounded-xl px-4 py-2 mt-2  text-black-600  bg-gray-100 border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        
                    </div> 
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold   text-green-500"
                        >
                            
                        </label>
                        {name}
                        <input
                            type="email" placeholder='Name'
                            className="block w-full  rounded-xl px-4 py-2 mt-2  text-black-600  bg-gray-100 border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        
                    </div> 
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold  "
                        >
                            
                        </label>
                        <input
                            type="password" placeholder='Phone number'
                            className="block w-full px-4 rounded-xl py-2 mt-2 text-black-500 bg-gray-100 border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div> 
                    <div className="mb-2">
                        <label
                            for="password"  placeholder=''
                            className="block text-sm font-semibold  text- black-500"
                        >
                        
                        </label>
                        <input
                            type="password" placeholder='comform password'
                            className="block w-full rounded-xl px-4 py-2 mt-2 text-BLACK-500 bg-gray-100 border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>  <div className="mb-2">
                        <label
                            for="password"  placeholder=''
                            className="block text-sm font-semibold  text- black-500"
                        >
                        
                        </label>
                        <input
                            type="password" placeholder='comform password'
                            className="block w-full rounded-xl px-4 py-2 mt-2 text-BLACK-500 bg-gray-100 border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>  <div className="mb-2">
                        <label
                            for="password"  placeholder=''
                            className="block text-sm font-semibold  text- black-500"
                        >
                        
                        </label>
                        <input
                            type="password" placeholder='comform password'
                            className="block w-full rounded-xl px-4 py-2 mt-2 text-BLACK-500 bg-gray-100 border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div> 
                    
                    
                    <div className="mt-6 ml-40">
                        <button  onClick={()=>Navigate('/verify')}   className="w-[150px] rounded-xl px-4 py-2 tracking  bg-black text-btransition-colors duration-200 transform  bg-black  text-white rounded-md hover: focus:outline-none focus:bg-green-600">
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
