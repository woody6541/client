import { motion } from "framer-motion";
import directorPic from "../assets/akhil.jpg"; 

export default function DirectorSection() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center justify-center px-6 md:px-20 py-16 gap-10 bg-gray-50">
      
      {/* Director Card */}
      <motion.div
        initial={{ opacity: 0, x: -150, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
        className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 shadow-lg rounded-2xl overflow-hidden max-w-sm border-2 border-indigo-200 hover:shadow-2xl hover:scale-105 transition-transform duration-500"
      >
        <img
          src={directorPic}
          alt="Director"
          className="w-full h-auto object-cover rounded-t-2xl"
        />
        <div className="text-center py-6 px-4">
          <h3 className="text-2xl font-extrabold text-indigo-700 mb-1">AKHIL A</h3>
          <p className="text-gray-600 font-extrabold">Director ( G-TEC Nedumangad )</p>
        </div>
      </motion.div>

      {/* Quote / Mission Statement */}
      <motion.div
        initial={{ opacity: 0, x: 150, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
        className="md:max-w-lg text-gray-800 text-lg italic text-center md:text-left bg-white p-6 rounded-2xl shadow-md border-l-4 border-indigo-400"
      >
        “At G-TEC Education Nedumangad, our mission is to empower
        students with practical skills that open doors to global
        opportunities. In today’s fast changing digital world,
        education is not just about learning, it’s about gaining the
        right skills to build a successful career. We believe every
        student’s journey is unique and at G-TEC, we’re committed
        to guiding them toward a future filled with confidence,
        creativity, and success.”
      </motion.div>

    </div>
  );
}
