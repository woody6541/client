import React from "react";
import { motion } from "framer-motion";
import studentImg from "../assets/students.jpeg";

export default function EmpoweringSection() {
  return (
    <section className="bg-white px-6 md:px-20 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 text-center">
  <span className="block">
    Quality Education
  </span>

  <span className="block font-black text-6xl md:text-7xl text-gray-700 my-6">
    &
  </span>

  <span className="block">
    Global Certifications
  </span>
</h1>


        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center relative"
        >
          <motion.img
            src={studentImg}
            alt="Graduate Student"
            className="max-h-[520px] object-contain rounded-2xl shadow-lg"
            animate={{
              scale: [0.85, 1.05, 1],
              rotate: [0, 2, -2, 0], 
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            whileHover={{ scale: 1.15, rotate: 0 }}
          />

          {/* Floating Glow */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-200 via-transparent to-transparent opacity-30 pointer-events-none"
            animate={{
              scale: [0.9, 1.05, 0.95, 1],
              opacity: [0.2, 0.35, 0.25, 0.3],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 4,
              ease: "easeInOut",
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}
