import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

/* ========== LOADER ========== */
import Loader from "../components/Loader";

/* ========== VIDEOS ========== */
import softwareVideo from "../assets/software.mp4";
import cadVideo from "../assets/cad.mp4";
import businessVideo from "../assets/accounting.mp4";
import multimediaVideo from "../assets/multimedia.mp4";
import digitalMarket from "../assets/digital.mp4";
import hospitalAdministration from "../assets/administration.mp4";
import logisticVideo from "../assets/logistics.mp4";

/* ========== IMAGES ========== */
import swDiploma from "../assets/diploma.jpg";
import swMaster from "../assets/master.jpg";
import swCertificate from "../assets/certificate.jpg";
import cdDiploma from "../assets/cadmode.jpg";
import cdCertificate from "../assets/cad-certificate.jpg";
import multiDiploma from "../assets/multimedia-diploma.jpg";
import multiCertificate from "../assets/multimedia-certificate.jpg";
import digitalCertificate from "../assets/digital1.jpg";
import digitalAdvanced from "../assets/digital2.jpg";
import hospiDiploma from "../assets/hospital.jpg";
import hospiMaster from "../assets/hospital2.jpg";
import logiDiploma from "../assets/logistics1.jpg";
import accDiploma from "../assets/accounting-diploma.jpg";
import accMaster from "../assets/accounting-master.jpg";

/* ========== CATEGORY DATA ========== */
const CATEGORIES = {
  software: {
    name: "SOFTWARE",
    video: softwareVideo,
    courses: [
      { key: "diploma", title: "Diploma Courses", image: swDiploma, video: softwareVideo },
      { key: "advanced", title: "Advanced Diploma Courses", image: swDiploma, video: softwareVideo },
      { key: "master", title: "Master Courses", image: swMaster, video: softwareVideo },
      { key: "certificate", title: "Certificate Course", image: swCertificate, video: softwareVideo },
    ],
  },
  cad: {
    name: "CAD",
    video: cadVideo,
    courses: [
      { key: "diploma", title: "Diploma Courses", image: cdDiploma, video: cadVideo },
      { key: "certificate", title: "Certificate Course", image: cdCertificate, video: cadVideo },
    ],
  },
  accounting: {
    name: "ACCOUNTING",
    video: businessVideo,
    courses: [
      { key: "diploma", title: "Diploma Courses", image: accDiploma, video: businessVideo },
      { key: "advanced", title: "Advanced Diploma Courses", image: accDiploma, video: businessVideo },
      { key: "master", title: "Master Courses", image: accMaster, video: businessVideo },
      { key: "certificate", title: "Certificate Course", image: accDiploma, video: businessVideo },
    ],
  },
  multimedia: {
    name: "MULTIMEDIA",
    video: multimediaVideo,
    courses: [
      { key: "diploma", title: "Diploma Courses", image: multiDiploma, video: multimediaVideo },
      { key: "advanced", title: "Advanced Diploma Courses", image: multiDiploma, video: multimediaVideo },
      { key: "certificate", title: "Certificate Course", image: multiCertificate, video: multimediaVideo },
      { key: "master", title: "Master Courses", image: multiDiploma, video: multimediaVideo },
    ],
  },
  "digital-marketing": {
    name: "DIGITAL MARKETING",
    video: digitalMarket,
    courses: [
      { key: "diploma", title: "Diploma Course", image: digitalCertificate, video: digitalMarket },
      { key: "advanced", title: "Advanced Diploma Course", image: digitalAdvanced, video: digitalMarket },
    ],
  },
  "hospital-administration": {
    name: "HOSPITAL ADMINISTRATION",
    video: hospitalAdministration,
    courses: [
      { key: "diploma", title: "Diploma in Hospital Administration", image: hospiDiploma, video: hospitalAdministration },
      { key: "master", title: "Master in Hospital Administration", image: hospiMaster, video: hospitalAdministration },
    ],
  },
  logistics: {
    name: "LOGISTICS",
    video: logisticVideo,
    courses: [
      { key: "diploma", title: "Diploma in Logistics & Supply Chain", image: logiDiploma, video: logisticVideo },
    ],
  },
};

/* ========== COMPONENT ========== */
export default function CourseDetail() {
  const { category } = useParams(); 
  const navigate = useNavigate();

  const data = CATEGORIES[category] || CATEGORIES.software;

  const [activeVideo, setActiveVideo] = useState(data.video);
  const [loading, setLoading] = useState(true);
  const [openCategory, setOpenCategory] = useState(category);

  useEffect(() => {
    setLoading(true);
    setActiveVideo(data.video);
    setOpenCategory(category);

    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [category, data.video]);

  if (loading) return <Loader />;

  return (
    <div className="bg-white min-h-screen">

      {/* HERO VIDEO */}
      <section className="relative h-[360px] overflow-hidden">
        <video
          key={activeVideo}
          src={activeVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-12 gap-8">

        {/* SIDEBAR */}
        <aside className="col-span-12 lg:col-span-3 border rounded-lg overflow-hidden">
          <div className="px-4 py-3 border-b font-semibold text-blue-900">
            G-TEC Courses
          </div>

          {Object.keys(CATEGORIES).map((key) => {
            const isOpen = openCategory === key;

            return (
              <div key={key}>
                <button
                  onClick={() => {
                    setOpenCategory(isOpen ? null : key);
                    navigate(`/courses/${key}`);
                  }}
                  className="w-full px-4 py-3 flex justify-between items-center text-sm hover:bg-gray-50"
                >
                  {CATEGORIES[key].name}
                  <ChevronDown size={14} className={isOpen ? "rotate-180" : ""} />
                </button>

                {isOpen && (
                  <div className="px-5 py-3 space-y-2">
                    {CATEGORIES[key].courses.map((c) => (
                      <button
                        key={c.key}
                        onClick={() => navigate(`/courses/${key}/${c.key}`)}
                        className="w-full text-left text-sm text-gray-700 hover:text-blue-900"
                      >
                        {c.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </aside>

        {/* COURSE CARDS */}
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.courses.map((course) => (
              <div
                key={course.key}
                onClick={() => setActiveVideo(course.video)}
                className="relative h-28 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
                style={{
                  backgroundImage: `url(${course.image})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute inset-0 bg-white/70" />
                <div className="relative z-10 h-full flex items-center justify-between px-6">
                  <span className="font-semibold text-blue-900">
                    {course.title}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/courses/${category}/${course.key}`);
                    }}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    ↗
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
