import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import tally from "../assets/tally.png";
import office from "../assets/mso2.png";
import adobe from "../assets/adobe1.png";
import sap from "../assets/sap1.png";
import abma from "../assets/abma.png";
import iab from "../assets/iab.jpg";
import meta from "../assets/meta3.png"

const certificates = [
  { name: "Tally", logo: tally },
  { name: "Microsoft Office", logo: office },
  { name: "Adobe", logo: adobe },
  { name: "SAP", logo: sap },
  { name: "ABMA", logo: abma },
  { name: "IAB", logo: iab },
  {name:"META",logo:meta},
];

export default function Certificates() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-blue-900">
          Our Certifications
        </h2>

        <div className="relative">

          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24
                          bg-gradient-to-r from-white to-transparent z-10" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24
                          bg-gradient-to-l from-white to-transparent z-10" />

          {/* LEFT ARROW */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex items-center justify-center
                       absolute left-4 top-1/2 -translate-y-1/2
                       w-14 h-14 rounded-full bg-white shadow-xl
                       hover:bg-blue-50 transition-transform transform hover:scale-110 z-20"
          >
            <ChevronLeft size={28} />
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="flex gap-16 overflow-x-auto scroll-smooth
                       py-12 px-8 scrollbar-hide"
          >
            {certificates.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, rotate: -3, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: [0, 2, -2, 0],
                  y: -5,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
                }}
                className="min-w-[280px] h-[160px]
                           flex items-center justify-center
                           bg-white rounded-2xl shadow-lg
                           transition-all duration-500 cursor-pointer"
              >
                <motion.img
                  src={item.logo}
                  alt={item.name}
                  className="h-24 object-contain"
                  animate={{
                    y: [0, -3, 0], 
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex items-center justify-center
                       absolute right-4 top-1/2 -translate-y-1/2
                       w-14 h-14 rounded-full bg-white shadow-xl
                       hover:bg-blue-50 transition-transform transform hover:scale-110 z-20"
          >
            <ChevronRight size={28} />
          </button>

        </div>
      </div>
    </section>
  );
}
