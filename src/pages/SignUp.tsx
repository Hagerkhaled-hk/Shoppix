import React, {  useEffect, useRef, useState, type FormEvent } from "react";
import { FcGoogle } from "react-icons/fc";
import img from "../assets/image/logn.png";
import { Link, useNavigate } from "react-router";
import SignUp_Api from "../APIs/signup.js";

const SignupSection: React.FC = () => {

  
  const inputRefs = useRef({
    username: null as HTMLInputElement | null,
    email: null as HTMLInputElement | null,
    password: null as HTMLInputElement | null
  });
  const navigate=useNavigate();




async function handleSubmit() {
  console.log(true);
  
    let FormData= {
      username: inputRefs.current.username?.value || '',
      email: inputRefs.current.email?.value || '',
      password: inputRefs.current.password?.value || ''
    };

    let res=await SignUp_Api(FormData);
    console.log(res);
    
  navigate("/");

  }



  return (
   <div className="min-h-screen flex flex-col md:flex-row relative">
  {/* الجزء الأيسر - الصورة (مخفية في الشاشات الصغيرة) */}
  <div className=" md:w-[60%] relative">
    <div className="text-3xl font-bold absolute top-6 left-12  z-10">
      <span className="text-[#8B4513]">Sh</span>
      oppix
      <span className="text-[#8B4513]">.</span>
    </div>
    <img
      src={img}
      alt="Happy Couple"
      className="hidden md:block w-full h-screen object-cover"
    />
  </div>

  {/* الجزء الأيمن - الفورم */}
  <div className="w-full md:w-[40%] flex items-center justify-center bg-white p-6">
    <div className="w-full max-w-md  mt-16 md:mt-0">
      <h1 className="text-2xl font-semibold text-gray-900">
        Create an account
      </h1>
      <p className="text-sm text-gray-600 mt-2">Enter your details below</p>

      <div className="mt-6 space-y-5" >
        <input
          type="text"
          placeholder="Name"
 ref={(el) => {
    inputRefs.current.password = el; 
  }}          className="w-full border-b border-gray-300 focus:border-gray-500 outline-none py-2 text-sm"
        />
        <input
          type="email"
          ref={(el) => {inputRefs.current.email = el}}
          placeholder="Email or Phone Number"
          className="w-full border-b border-gray-300 focus:border-gray-500 outline-none py-2 text-sm"
        />
        <input
          type="password"
          ref={(el) =>{ inputRefs.current.password = el}}
          placeholder="Password"
          className="w-full border-b border-gray-300 focus:border-gray-500 outline-none py-2 text-sm"
        />

        <button
          type="submit"
                    onClick={()=>{handleSubmit()}}

          className="w-full bg-[#8B4513] text-white py-2 rounded-md hover:opacity-90 transition"
        >
          Create Account
        </button>

        <button
          type="button"
          className="w-full border border-gray-300 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-gray-50 transition"
        >
          <FcGoogle size={20} /> Sign up with Google
        </button>
      </div>

      <p className="text-center text-sm text-gray-600 mt-5">
        Already have account?{" "}
        <Link to="/login" className="text-black font-medium hover:underline">
          Log in
        </Link>
      </p>
    </div>
  </div>
</div>

  );
};

export default SignupSection;
