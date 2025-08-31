import React, { useState } from "react";
import  { useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import img1 from "../assets/image/pro1.png";
import img2 from "../assets/image/pro2.png";
import img3 from "../assets/image/pro3.png";
import img4 from "../assets/image/pro4.png";
import img5 from "../assets/image/pro5.png";
import img6 from "../assets/image/pro6.png";
import img7 from "../assets/image/pro7.png";
import img8 from "../assets/image/pro8.png";
import img9 from "../assets/image/pro9.png";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

interface Product {
  image: string;
  category: string;
  name: string;
  price: string;
  rating: string;
}

const products: Product[] = [
  { image: img1, category: "Jacket", name: "Brown Leather Jacket", price: "IDR 300.000", rating: "4.9" },
  { image: img2, category: "Shirt", name: "Black Yellow Square Shirt", price: "IDR 200.000", rating: "4.8" },
  { image: img3, category: "Shirt", name: "White Men Formal Shirt", price: "IDR 300.000", rating: "4.7" },
  { image: img4, category: "Sweater", name: "Unisex Orange Sweater", price: "IDR 250.000", rating: "4.9" },
  { image: img5, category: "T-Shirt", name: "T-Shirt Cotton 30S", price: "IDR 200.000", rating: "4.8" },
  { image: img6, category: "Shirt", name: "White Oversize Cotton", price: "IDR 310.000", rating: "4.9" },
  { image: img7, category: "Shirt", name: "White Men Formal Shirt", price: "IDR 280.000", rating: "4.9" },
  { image: img8, category: "Shirt", name: "White Woman Formal Shirt", price: "IDR 300.000", rating: "4.8" },
  { image: img9, category: "Shirt", name: "Formal Shirt Men", price: "IDR 320.000", rating: "4.9" },
];

const ProductList = () => {
  const [openCategory, setOpenCategory] = useState(true);
  const [openWoman, setOpenWoman] = useState(false);
  const [page, setPage] = useState(1);
  const perPage = 6;

  const totalPages = Math.ceil(products.length / perPage);
  const start = (page - 1) * perPage;
  const paginatedProducts = products.slice(start, start + perPage);


  
        const [show, setShow] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShow(false);
      }, 5000); // 5 ثواني
  
      return () => clearTimeout(timer);
    }, []);
  
  return (
    <div className="bg-white min-h-screen">

         {/* شريط التنبيه العلوي */}
       <div
      className={`bg-[#8B4513] text-white text-center py-1 text-xs tracking-wide transition-all duration-700 overflow-hidden
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}`}
    >
      Discount 20% For New Member,{" "}
      <span className="font-bold text-white">ONLY FOR TODAY!!</span>
    </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="pt-24 px-6 md:px-16 lg:px-24 pb-12 light-section">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-light text-gray-800 tracking-wide mb-8 uppercase">
          All Products
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-[260px] bg-white  rounded-md">
            <button
              onClick={() => setOpenCategory(!openCategory)}
              className="w-full flex justify-between items-center bg-[#E8E0DC] px-4 py-3 font-semibold text-gray-700"
            >
              CATEGORY
              {openCategory ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </button>
            {openCategory && (
              <div className="p-2 space-y-2 text-sm">
                <button
                  onClick={() => setOpenWoman(!openWoman)}
                  className="w-full flex justify-between items-center text-gray-700 font-medium py-2"
                >
                  Woman
                  {openWoman ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>

                {openWoman && (
                  <div className="pl-4 space-y-2 text-gray-600">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-black" />
                      Dress <span className="text-xs text-gray-400 ml-auto">99+</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="accent-black" />
                      Shirt <span className="text-xs text-gray-400 ml-auto">37</span>
                    </label>
                  </div>
                )}

                <hr />
                <button className="w-full flex justify-between items-center text-gray-700 font-medium py-2">
                  Man <ChevronRight size={16} />
                </button>
                <hr />
                <button className="w-full flex justify-between items-center text-gray-700 font-medium py-2">
                  Unisex <ChevronRight size={16} />
                </button>
                <hr />
                <button className="w-full flex justify-between items-center text-gray-700 font-medium py-2">
                  Price <ChevronRight size={16} />
                </button>
                <hr />
                <button className="w-full flex justify-between items-center text-gray-700 font-medium py-2">
                  Size <ChevronRight size={16} />
                </button>
                <hr />
                <button className="w-full flex justify-between items-center text-gray-700 font-medium py-2">
                  Color <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {paginatedProducts.map((product, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="relative w-full overflow-hidden group rounded-lg shadow">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[420px] object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Rating */}
                    <div className="absolute top-2 right-2 flex items-center gap-1 bg-[#8B4513] text-white text-sm px-2 py-1 rounded">
                      ★ {product.rating}
                    </div>
                  </div>
                  {/* Info */}
                  <div className="mt-3 space-y-1">
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <p className="text-base md:text-lg font-semibold text-gray-800">
                      {product.name}
                    </p>
                    <p className="text-sm text-gray-600">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-10">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-3 py-1 border rounded ${
                    page === i + 1 ? "bg-[#8B4513] text-white" : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={page === totalPages}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductList;
