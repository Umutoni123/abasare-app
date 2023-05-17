import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {set, useForm} from 'react-hook-form';
import axios from 'axios';
import { useFormik } from "formik";
import { userSchema } from "../validations/userValidation";
import FormImage from "../../img/spec2.png";
 
const  linkregister ="https://abasare.herokuapp.com//api/auth/register/"
export default function Login() {
const Navigate = useNavigate();
const [loading, setLoading] = useState(false);

const onSubmit = async (data)  => {
    const formData = new FormData();
    formData.append("first_name", data.first_name)
    formData.append("last_name", data.last_name)                  
    formData.append("email", data.email)                  
    formData.append("password", data.password) 
    formData.append("role", data.role)               
    formData.append("password_confirmation", data.password_confirmation)     
    console.log(formData.get("first_name"))
    console.log(errors)
    try{
        setLoading(true);
        const response= await axios.post(linkregister, formData);
        setLoading(false); 
        alert("account created successful");
        console.log(response.data);
    } 
    catch(error){
        setLoading(false);
        console.log(error)
    }         
}


    const {
      values,
      errors,
      touched,
      isSubmitting,
      handleBlur,
      handleChange,
      handleSubmit,
    } = useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "",
      },
      validationSchema: userSchema,
      onSubmit,
    });


    return (
      <div className="bg-white rounded-3xl w-11/12 xl:w-10/12 lg:w-10/12 md:w-11/12 sm:w-11/12 flex mx-auto py-[15px] duration-500">
        <img
          src={FormImage}
          alt=""
          className="w-2/5 rounded-3xl hidden xl:block lg:block md:block sm:hidden"
        />
        <form
          onSubmit={handleSubmit}
          className="w-full xl:w-3/5 lg:w-3/5 md:w-3/5 sm:w-full flex flex-col gap-2 px-2 py-4 rounded-3xl xl:ml-4"
        >
          <div className="w-full flex justify-center items-center">
            <div className="my-4">
              <h1 className="text-2xl">Sign-up here</h1>
              <p>
                Welcame to Abasare website we provide quarified drives in this
                website .you will be made available a good platform to ride
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
            <span className="flex flex-col w-full">
              <label htmlFor="">First Name</label>
              <input
                name="first_name"
                type="text"
                className={`rounded-xl bg-slate-200 outline-none ${
                  errors.first_name && touched.first_name
                    ? "border-solid border 	border-red-400"
                    : "border-none"
                } p-4`}
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.first_name && touched.first_name && (
                <p className="text-red-400">{errors.first_name}</p>
              )}
            </span>
            <span className="flex flex-col w-full">
              <label htmlFor="">Last Name</label>
              <input
                name="last_name"
                type="text"
                className={`rounded-xl bg-slate-200 outline-none ${
                  errors.last_name && touched.last_name
                    ? "border-solid border 	border-red-400"
                    : "border-none"
                } p-4`}
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.last_name && touched.last_name && (
                <p className="text-red-400">{errors.last_name}</p>
              )}
            </span>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
            <span className="flex flex-col w-full">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                placeholder="email@example.com"
                className={`rounded-xl bg-slate-200  outline-none ${
                  errors.email && touched.email
                    ? "border-solid border 	border-red-400"
                    : "border-none"
                } p-4`}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="text-red-400">{errors.email}</p>
              )}
            </span>
            <span className="flex flex-col w-full">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                className={`rounded-xl bg-slate-200 outline-none ${
                  errors.password && touched.password
                    ? "border-solid border 	border-red-400"
                    : "border-none"
                } p-4`}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <p className="text-red-400">{errors.password}</p>
              )}
            </span>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
            <span className="flex flex-col w-full">
              <label htmlFor="">confirm password</label>
              <input
                type="password"
                name="password_confirmation"
                className={`rounded-xl bg-slate-200 outline-none ${
                  errors.password_confirmation && touched.password_confirmation
                    ? "border-solid border 	border-red-400"
                    : "border-none"
                } p-4`}
                value={values.password_confirmation}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password_confirmation &&
                touched.password_confirmation && (
                  <p className="text-red-400">{errors.password_confirmation}</p>
                )}
            </span>
            <span className="flex flex-col w-full">
              <label htmlFor="">role</label>
              <select
                name="role"
                className={`rounded-xl px-1 bg-slate-200 outline-none ${
                  errors.role && touched.role
                    ? "border-solid border 	border-red-400"
                    : "border-none"
                } p-4`}
                value={values.role}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="0">select role</option>
                <option>Car owner</option>
                <option>Driver</option>
              </select>
              {errors.role && touched.role && (
                <p className="text-red-400">{errors.role}</p>
              )}
            </span>
          </div>
          <input
            type="submit"
            value={`${loading ? "submiting..." : "submit"}`}
            disabled={isSubmitting}
            className="bg-slate-800 text-white cursor-pointer rounded-xl p-4 mt-2 disabled:opacity-75"
          />
          <span className="w-full flex justify-between">
            <p>
              Already have an account?
              <Link to="/Logind">
                <b className="text-blue-500 mt-4"> Sign in</b>
              </Link>
            </p>
          </span>
        </form>
      </div>
    );
} 
