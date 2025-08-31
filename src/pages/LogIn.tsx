import React, { useRef, type FormEvent } from "react";
import img from "../assets/image/logn.png";
import  Login_Api from "../APIs/login.js";
import { useNavigate } from "react-router-dom";

const LogIn: React.FC = () => {
  const inputRefs = useRef({
    email: null as HTMLInputElement | null,
    password: null as HTMLInputElement | null
  });

  const navigate=useNavigate();
 

async function handleSubmit()
{
  console.log(true);
  
       let FormData= {
      username: inputRefs.current.email?.value || '',
      password: inputRefs.current.password?.value || ''
    };

    let res= await  Login_Api(FormData);
 localStorage.setItem("token",JSON.stringify(res));
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
          <h1 className="text-2xl font-semibold text-gray-900 ">
            Log In To&nbsp;

            <span className="text-[#8B4513]">Sh</span>
              oppix
            <span className="text-[#8B4513]">.</span>
          </h1>
          <p className="text-sm text-gray-600 mt-2">Enter your details below</p>

          <div className="mt-6 space-y-5" >
            <input
/*               type="email"
 */              placeholder="Email or Phone Number"
               ref={(el) => {
    inputRefs.current.email = el; 
  }} 
              className="w-full border-b border-gray-300 focus:border-gray-500 outline-none py-2 text-sm"
            />
            <input
              type="password"
               ref={(el) => {
    inputRefs.current.password = el; 
  }} 
              placeholder="Password"
              className="w-full border-b border-gray-300 focus:border-gray-500 outline-none py-2 text-sm"
            />
            <div className="flex flex-col gap-4">
              <button 
              onClick={()=>{handleSubmit()}}
                type="submit"
                className=" bg-[#8B4513] text-white py-2 rounded-md hover:opacity-90 transition"
              >
                login
              </button>
              <a
                href="#"
                className="text-[#8B4513] font-medium hover:underline mx-auto"
              >
                Forgot password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
