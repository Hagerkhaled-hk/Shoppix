import React from "react";
import img1 from "../assets/image/Rectangle1.png";
import img2 from "../assets/image/Rectangle2.png";
import img3 from "../assets/image/Rectangle3.png";
import img4 from "../assets/image/Rectangle4.png";
import img12 from "../assets/image/Rectangle12.png";
import img22 from "../assets/image/Rectangle22.png";  
import img32 from "../assets/image/Rectangle32.png";
import img42 from "../assets/image/Rectangle42.png";

interface Product {
  image: string;
  category: string;
  name: string;
  price: string;
  rating: string;
}

const products: Product[] = [
  { image: img1, category: "PRODUCT CATEGORY", name: "Product Name", price: "IDR XXX", rating: "4.95" },
  { image: img2, category: "PRODUCT CATEGORY", name: "Product Name", price: "IDR XXX", rating: "4.95" },
  { image: img3, category: "PRODUCT CATEGORY", name: "Product Name", price: "IDR XXX", rating: "4.95" },
  { image: img4, category: "PRODUCT CATEGORY", name: "Product Name", price: "IDR XXX", rating: "4.95" },

 
];
const products2: Product[] = [
  { image: img12, category: "PRODUCT CATEGORY", name: "Product Name", price: "IDR XXX", rating: "4.95" },
  { image: img22, category: "PRODUCT CATEGORY", name: "Product Name", price: "IDR XXX", rating: "4.95" },
  { image: img32, category: "PRODUCT CATEGORY", name: "Product Name", price: "IDR XXX", rating: "4.95" },
  { image: img42, category: "PRODUCT CATEGORY", name: "Product Name", price: "IDR XXX", rating: "4.95" },

 
];

const BestDressSection: React.FC = () => {
  return (
    <div>
    <section className="w-full bg-white py-24 light-section" >
      {/* Title */}
      <h1 className="text-center text-3xl md:text-4xl font-light tracking-wide mb-10">
        THE BEST DRESS FOR THE BEST WOMAN
      </h1>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {products.map((product, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="relative w-full overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              {/* Rating */}
              <div className="absolute top-2 right-2 flex items-center gap-1 bg-[#8B4513] text-white text-sm px-2 py-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current " viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.568L24 9.423l-6 5.851 1.417 8.263L12 18.897 4.583 23.537 6 15.274 0 9.423l8.332-1.268z"/>
                </svg>
                {product.rating}
              </div>
            </div>
            {/* Info */}
            <div className="mt-3">
              <p className="text-xs text-gray-500">{product.category}</p>
              <p className="text-lg font-medium">{product.name}</p>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-[#8B4513] text-white px-6 py-3 text-sm tracking-widest uppercase hover:bg-amber-900 transition">
          SEE MORE →
        </button>
      </div>
    </section>


 <section className="w-full bg-white py-24 light-section">
      {/* Title */}
      <h1 className="text-center text-3xl  md:text-4xl font-light tracking-wide mb-10">
       BEST OUTFIT FOR YOUR HAPPINESS
      </h1>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {products2.map((product, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="relative w-full overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              {/* Rating */}
              <div className="absolute top-2 right-2 flex items-center gap-1 bg-[#8B4513] text-white text-sm px-2 py-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current " viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.568L24 9.423l-6 5.851 1.417 8.263L12 18.897 4.583 23.537 6 15.274 0 9.423l8.332-1.268z"/>
                </svg>
                {product.rating}
              </div>
            </div>
            {/* Info */}
            <div className="mt-3">
              <p className="text-xs text-gray-500">{product.category}</p>
              <p className="text-lg font-medium">{product.name}</p>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-[#8B4513] text-white px-6 py-3 text-sm tracking-widest uppercase hover:bg-amber-900 transition">
          SEE MORE →
        </button>
      </div>
    </section>


</div>
  );
};

export default BestDressSection;
