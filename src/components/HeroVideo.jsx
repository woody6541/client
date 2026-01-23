import { motion } from "framer-motion";
import heroVideo from "../assets/heroVideo.mp4";

export default function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* VIDEO CONTAINER — FULL SCREEN */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 overflow-hidden" 
        
      >
        {/* VIDEO — FORCE FULL SIZE */}
        <motion.video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        {/* TECH GRID */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        {/* NOISE */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06]" />
      </motion.div>

      {/* TEXT LAYER */}
      <div className="relative z-10 h-full flex items-center pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-28">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-white text-4xl md:text-5xl font-bold tracking-tight"
          >
            {/* Optional heading */}
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-blue-200 mt-4 max-w-xl leading-relaxed"
          >
            {/* Optional subtitle */}
          </motion.p>
        </div>
      </div>
    </section>
  );
}