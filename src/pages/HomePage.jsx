import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroVideo from "../components/HeroVideo";
import CoursesSection from "../components/CoursesSection";
import EmpoweringSection from "../components/EmpoweringSection";
import Certificates from "../components/Certificates";
import DirectorSection from "../components/DirectorSection";
import QuickEnquiry from "../components/QuickEnquiry";
import GTECAtGlance from "../components/GTECAtGlance";
import FeaturesSection from "../components/FeaturesSection";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import MissionVision from "../components/MissionVision";
import Loader from "../components/Loader";
import { useState,useEffect } from "react";
import Marquee from "../components/marquee";

export default function HomePage() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    
    <>
      <Navbar />
      <Marquee/>
      <QuickEnquiry/>

      {/* HERO */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <HeroVideo />
      </motion.main>

      {/* CONTENT */}
      <section className="relative z-10 bg-white">
        <CoursesSection />
        <EmpoweringSection />
        <Certificates />
        <DirectorSection />
        <MissionVision/>
        <FeaturesSection />
        <GTECAtGlance />
      </section>

      {/* REVIEWS */}
      <section className="relative bg-gradient-to-b from-[#001b33] to-[#f5f9fc]">
        <Reviews />
      </section>

      <Footer />
    </>
  );
}
