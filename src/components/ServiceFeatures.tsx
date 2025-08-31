import React from "react";
import { FaThumbsUp, FaPhoneAlt, FaTruck, FaLock } from "react-icons/fa";

export default function ServiceFeatures() {
  return (
    <section className="w-full bg-white py-14 light-section">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8 light-section">
        
        {/* Left vertical box */}
        <div className="bg-[#F3F3F3] p-4">
          <div className="bg-white p-8 flex flex-col items-center text-center h-full">
            <div className="w-12 h-12 rounded-full bg-[#8B4513] flex items-center justify-center">
              <FaThumbsUp className="text-white text-lg" />
            </div>
            <h3 className="text-lg font-semibold mt-4">
              100% Satisfaction Guaranteed
            </h3>
            <p className="text-[#555555] text-sm mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
              venenatis metus vulputate. Quisque bibendum eget id diam elementum
              fringilla duis.
            </p>
          </div>
        </div>

        {/* Middle two horizontal boxes */}
        <div className="flex flex-col gap-8 lg:col-span-2">
          <div className="bg-[#F3F3F3] p-4">
            <div className="bg-white p-8 flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#8B4513] flex items-center justify-center mr-4 flex-shrink-0">
                <FaPhoneAlt className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">24/7 Online Service</h3>
                <p className="text-[#555555] text-sm mt-1 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
                  venenatis metus vulputate. Quisque bibendum eget id diam
                  elementum fringilla duis.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F3F3F3] p-4">
            <div className="bg-white p-8 flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#8B4513] flex items-center justify-center mr-4 flex-shrink-0">
                <FaTruck className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Fast Delivery</h3>
                <p className="text-[#555555] text-sm mt-1 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
                  venenatis metus vulputate. Quisque bibendum eget id diam
                  elementum fringilla duis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right vertical box */}
        <div className="bg-[#F3F3F3] p-4">
          <div className="bg-white p-8 flex flex-col items-center text-center h-full">
            <div className="w-12 h-12 rounded-full bg-[#8B4513] flex items-center justify-center">
              <FaLock className="text-white text-lg" />
            </div>
            <h3 className="text-lg font-semibold mt-4">
              Payment With Secure System
            </h3>
            <p className="text-[#555555] text-sm mt-2 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet
              venenatis metus vulputate. Quisque bibendum eget id diam elementum
              fringilla duis.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}
