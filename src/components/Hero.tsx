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
      <div className="absolute left-12 top-1/2 transform -translate-y-1/2 text-white ">
        <h1 className="text-2xl md:text-5xl font-light leading-snug mb-6 font-semibold">
          DISCOVER THE ART OF <br /> DRESSING UP
        </h1>
        <button className="bg-[#8B4513] text-white px-6 py-3 text-sm tracking-widest hover:opacity-90 transition-all">
          SHOP NOW →
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
