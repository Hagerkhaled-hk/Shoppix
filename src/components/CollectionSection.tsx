import React from "react";
import img1 from "../assets/image/img1.png";
import img2 from "../assets/image/img2.png";
import img3 from "../assets/image/img3.png";

interface CollectionItem {
  image: string;
  label: string;
}

const collections: CollectionItem[] = [
  { image: img1, label: "NEW COLLECTION" },
  { image: img2, label: "NEW COLLECTION" },
  { image: img3, label: "COMFORT ZONE" },
];

const CollectionSection: React.FC = () => {
  return (
    <section className="container m-auto bg-white py-24 light-section" >
      <div className="grid gap-4 px-6 md:px-12 mt-12 grid-cols-1 md:grid-cols-3">
        {collections.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden group shadow-md"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-[600px] object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-lg md:text-xl font-semibold tracking-widest  bg-opacity-20 px-4 py-2">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionSection;
