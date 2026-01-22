import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Monitor, BookOpen, Briefcase } from "lucide-react";

const features = [
  {
    title: "Expert Faculty",
    description:
      "Learn from experienced instructors with deep industry knowledge and a commitment to quality teaching.",
    icon: GraduationCap,
  },
  {
    title: "Modern Facilities",
    description:
      "Train in tech-enabled classrooms designed for an engaging learning environment.",
    icon: Monitor,
  },
  {
    title: "Diverse Courses",
    description:
      "Explore a broad selection of programs—from foundational computing to advanced IT certifications.",
    icon: BookOpen,
  },
  {
    title: "Career Support",
    description:
      "Access career guidance and placement services to launch your tech career successfully.",
    icon: Briefcase,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-red-600 font-semibold flex items-center gap-2 mb-4 tracking-wide">
            ✦ OUR CORE STRENGTHS
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Explore Our <br />
            <span className="text-blue-600">Center's Features</span>
          </h2>

          <p className="text-gray-600 max-w-md text-lg">
            Discover how GTEC's outstanding features ensure an unparalleled
            learning environment for aspiring tech professionals.
          </p>
        </motion.div>

        {/* RIGHT CARDS */}
        <div className="grid sm:grid-cols-2 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 80 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                {/* Floating gradient glow */}
                <motion.div
                  className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-tr from-blue-400 to-purple-300 opacity-20 rounded-full pointer-events-none"
                  animate={{ scale: [0.9, 1.1, 0.9] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                />

                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-600 transition">
                  <Icon className="text-blue-600 group-hover:text-white w-7 h-7 transition" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
