import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [posts, setPosts] = useState([]);
  const [newPostData, setNewPostData] = useState({ first_name: "", last_name: "", email: "", password: "", password_confirmation: "" });

  useEffect(() => {
    axios
      .get("https://abasare.herokuapp.com/api/auth/register/")
      .then((response) => {
        // Handle the response data
        const fetchedPosts = response.data;
        setPosts(fetchedPosts);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);
  function handleCreatePost(event) {
    event.preventDefault();

    axios
      .post("https://abasare.herokuapp.com/api/auth/register/", newPostData)
      .then((response) => {
        // Handle the response data
        const createdPost = response.data;
        setPosts([...posts, createdPost]);
        setNewPostData({ first_name: "", last_name: "", email: "", password: "", password_confirmation: "" });
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }
 const Navigate= useNavigate();
  return (
    <div className=" flex">
      <div className="   w-[1000px]   h-40  pl-14 mt-80  ">
        <h1 className=" text-3xl  text-black    ml-20"> Hi There!</h1>
        <p className=" text-2xl pt-10">
          {" "}
          Welcame to Abasare website we provide quarified drives
          <br /> in this website .you will be made available a good platform to
          ride
        </p>
      </div>

      <div
        className='w-[1900px]   h-[790px]  mb-8  ] bg-gray-200 pr-10  rounded-xl shadow-xl t lg:max-w-xl duration-700 delay-100 ease-in-out'
      >
        <h1
          className="text-3xl font-semibold  pt-12  text-center  text-black underline uppercase 
                "
        >
          Sign up
        </h1>
        <form
          onSubmit={handleCreatePost}
          className="mt-6 flex   flex-col pl-24 gap-[40px]"
        >
          <div className="mb-2">
            <label className="block text-sm font-semibold   text-black-500"></label>
            
            <input
              onChange={event => setNewPostData({ ...newPostData, first_name: event.target.value })}
              value={newPostData.first_name}
              type="text"
              placeholder="first Name"
              className="block w-full  rounded-xl px-4 py-2 mt-2  text-black-600  bg-gray-100 border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold   text-green-500"></label>
            
            <input
              onChange={event => setNewPostData({ ...newPostData, last_name: event.target.value })}
              value={newPostData.last_name}
              type="text"
              placeholder="Last Name"
              className="block w-full  rounded-xl px-4 py-2 mt-2  text-black-600  bg-gray-100 border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold  "></label>
            <input
              onChange={event => setNewPostData({ ...newPostData, email: event.target.value })}
              value={newPostData.email}
              type="text"
              placeholder="email*"
              className="block w-full px-4 rounded-xl py-2 mt-2 text-black-500 bg-gray-100 border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold  "></label>
            <input
              onChange={event => setNewPostData({ ...newPostData, password: event.target.value })}
              value={newPostData.password}
              type="password"
              placeholder="Passworld"
              className="block w-full px-4 rounded-xl py-2 mt-2 text-black-500 bg-gray-100 border rounded-md focus:border-black-400 focus:ring-black-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label
              placeholder="Comfirm passworld"
              className="block text-sm font-semibold  text- black-500"
            ></label>
            <input
              onChange={event => setNewPostData({ ...newPostData, password_confirmation: event.target.value })}
              value={newPostData.password_confirmation}
              type="password"
              placeholder="confirm password"
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
            <button  onClick={()=>Navigate('/Verify')}
              type="submit" 
              
              className="w-[150px] rounded-xl px-4 py-2 tracking  bg-black text-btransition-colors duration-200 transform  bg-black  text-white rounded-md hover: focus:outline-none focus:bg-green-600"
            >
              
              sign up
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs  ml-40 font-light text-center text-black">
          {" "}
          Have an account?{" "}
          
          <button onClick={()=>Navigate('/Logind')}
            className="font-medium   text-[#111827] hover:underline" 
          >
            Login
          </button>
          
        </p>
      </div>
    </div>
  );
}
