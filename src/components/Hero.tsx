// src/components/HeroSection.jsx
import React from 'react';
import  { useEffect, useState } from "react";
import heroImage from '../assets/image/hero.jpg'; // غيّري المسار حسب مكان الصورة الفعلي

const HeroSection = () => {

      const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000); // 5 ثواني

    return () => clearTimeout(timer);
  }, []);


  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* شريط التنبيه العلوي */}
       <div
      className={`bg-[#8B4513] text-white text-center py-1 text-xs tracking-wide transition-all duration-700 overflow-hidden
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
    >
      Discount 20% For New Member,{" "}
      <span className="font-bold text-white">ONLY FOR TODAY!!</span>
    </div>

      {/* المحتوى الرئيسي */}
      <div className=" text-white text-center absolute left-1/2 top-1/3 mt-24 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-3xl mb-10 md:text-5xl font-light leading-snug mb-6 font-semibold">
          DISCOVER THE ART OF <br /> DRESSING UP
        </h1>
        <button className="bg-[#8B4513] border border-[#fff] font-bold rounded text-white px-6 py-3 text-sm tracking-widest hover:bg-[#fff] hover:text-[#8B4513] transition-all">
          SHOP NOW →
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
