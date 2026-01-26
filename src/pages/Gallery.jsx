import React, { useEffect, useState } from "react";
import { ArrowRight, Instagram } from "lucide-react";

const categories = [
  "All",
  "Offers",
  "Awards",
  "Celebrations",
  "Programmes",
  "Students Achievements",
];

export default function VisualDiaryGrid() {
  const [activeTab, setActiveTab] = useState("All");
  const [images, setImages] = useState([]);

  //  FETCH FROM BACKEND
useEffect(() => {
  fetch("https://server-ikbt.onrender.com/api/gallery")
    .then((res) => res.json())
    .then((data) => {
      setImages(
        data.map((item) => ({
          url: item.image,        //  CLOUDINARY URL
          category: item.category,
          title: item.category,
        }))
      );
    })
    .catch((err) => console.error(err));
}, []);


  const filteredImages =
    activeTab === "All"
      ? images
      : images.filter((img) => img.category === activeTab);

  return (
    <div className="min-h-screen w-full bg-[#00294f] py-10 px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-7xl rounded-[40px] shadow-2xl overflow-hidden min-h-[80vh] flex flex-col bg-white">

        {/* HEADER */}
        <div className="text-center pt-12 pb-8 px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            Our Gallery
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto">
            A collection of moments captured with our G-TEC family
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 px-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium border
                ${
                  activeTab === cat
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        {/* GRID / MASONRY LAYOUT */}
        <div className="px-6 md:px-12 pb-12">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              No images found
            </div>
          ) : (
            // CHANGE 1: Used columns instead of grid for Masonry layout
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"> 
              {filteredImages.map((img, index) => (
                <div
                  key={index}
                  // CHANGE 2: break-inside-avoid prevents cutting, h-auto lets image decide height
                  className="group relative break-inside-avoid rounded-2xl overflow-hidden shadow-md bg-gray-100"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    // CHANGE 3: w-full and h-auto to maintain original aspect ratio
                    className="w-full h-auto object-contain transition duration-300 group-hover:scale-105"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-6">
                    <div>
                      <p className="text-pink-400 text-xs uppercase mb-1 font-bold">
                        {img.category}
                      </p>
                      {/* Optional: Hide title if it blocks the view too much */}
                      <h3 className="text-white text-lg font-bold leading-tight">
                        {img.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* INSTAGRAM */}
          <div className="mt-12 text-center">
            <a
              href="https://www.instagram.com/gtecnedumangad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white">
                <Instagram size={20} />
                View More on Instagram
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
