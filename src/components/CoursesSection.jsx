import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import softwareImg from "../assets/software.webp";
import accountingImg from "../assets/accounting.jpeg";
import multimediaImg from "../assets/multimedia.jpeg";
import cadImg from "../assets/autocad.jpg";
import digitalmarketingImg from "../assets/digitalmarketing.jpg";
import logisticsImg from "../assets/logistics.jpg";
import hospitalImg from "../assets/hospitalAdministration.webp";

const courses = [
  { title: "SOFTWARE", image: softwareImg, path: "software" },
  { title: "ACCOUNTING", image: accountingImg, path: "accounting" },
  { title: "DIGITAL MARKETING", image: digitalmarketingImg, path: "digital-marketing" },
  { title: "MULTIMEDIA", image: multimediaImg, path: "multimedia" },
  { title: "CAD", image: cadImg, path: "cad" },
  { title: "LOGISTICS", image: logisticsImg, path: "logistics" },
  { title: "HOSPITAL ADMINISTRATION", image: hospitalImg, path: "hospital-administration" },
];

export default function CoursesSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white text-gray-900 overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="w-full max-w-[1400px] mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Our Courses
          </h2>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{ rotate: 35, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
          className="w-full py-10"
        >
          {courses.map((course, index) => (
            <SwiperSlide
              key={index}
              className="!w-[300px] md:!w-[400px] !h-[350px]"
              onClick={() => navigate(`/courses/${course.path}`)} // ✅ Navigate on click
            >
              <div className="relative h-full w-full rounded-3xl overflow-hidden group border border-gray-200 bg-white shadow-xl transition-all duration-500">
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* IMAGE */}
                <div className="h-full w-full p-2">
                  <div className="h-full w-full rounded-2xl overflow-hidden relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* TITLE */}
                <div className="absolute bottom-0 w-full p-6 text-center z-10">
                  <h3 className="text-xl md:text-2xl font-bold tracking-wide text-white drop-shadow-md group-hover:text-pink-400 transition-colors">
                    {course.title}
                  </h3>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
