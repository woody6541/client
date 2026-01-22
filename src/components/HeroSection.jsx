
import React from "react";
import Navbar from "../components/Navbar";
import heroVideo from "../assets/mainvideo.mp4";


export default function HeroSection() {




  return (
<>
  <Navbar/>

    
    <section className="relative h-screen w-full rounded-2xl overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

    
    </section>
    </>
  
  );
}