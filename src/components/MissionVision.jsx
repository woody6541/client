import React from "react";
import { motion } from "framer-motion";
import missionImg from "../assets/mission.jpg";
import visionImg from "../assets/vision.jpeg";

export default function MissionVision() {
    return (
        <section className="bg-gradient-to-b from-white to-blue-50 py-28 px-6 md:px-20 overflow-hidden">

            {/* ================= HEADING ================= */}
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="text-center mb-28"
            >
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-blue-800">
                    Our Mission & Vision
                </h2>
                <div className="w-44 h-[3px] bg-gradient-to-r from-blue-800 to-blue-400 mx-auto mt-5 rounded-full"></div>
            </motion.div>

            {/* ================= MISSION ================= */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-36">

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="relative rounded-[44px] overflow-hidden
                     border border-blue-200
                     shadow-[0_25px_60px_rgba(0,0,0,0.18)]"
                >
                    <img src={missionImg} alt="Mission" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 rounded-[44px] ring-1 ring-white/30"></div>
                </motion.div>

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="relative p-12 rounded-[44px]
             bg-gradient-to-br from-white via-blue-50 to-white
             border border-blue-200/80
             shadow-[0_30px_65px_rgba(0,0,0,0.12)]"
                >
                    {/* soft inner highlight */}
                    <div className="absolute inset-0 rounded-[44px]
                  ring-1 ring-blue-300/30"></div>

                    <h3 className="relative text-3xl font-extrabold tracking-widest 
                 text-blue-800 uppercase mb-2">
                        Mission
                    </h3>

                    <div className="relative w-24 h-[3px]
                  bg-gradient-to-r from-blue-700 to-blue-400
                  mb-6 rounded-full"></div>

                    <p className="relative text-gray-700 leading-relaxed
                text-[15px] md:text-[16px]
                tracking-wide font-medium">
                        At G-TEC Education Nedumangad, our mission is to empower students through practical,
                        career-oriented education. By combining strong academic foundations with industry-relevant skills,
                        we strive to shape confident professionals ready to excel in today’s evolving job market.
                        With a focus on continuous innovation and mentorship, we aim to inspire lifelong learning,
                        helping students discover their potential and achieve their career aspirations with confidence and competence
                    </p>
                </motion.div>

            </div>

            {/* ================= VISION ================= */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="relative p-12 rounded-[44px]
             bg-gradient-to-br from-white via-indigo-50 to-white
             border border-indigo-200/80
             shadow-[0_30px_65px_rgba(0,0,0,0.12)]
             order-2 md:order-1"
                >
                    <div className="absolute inset-0 rounded-[44px]
                  ring-1 ring-indigo-300/30"></div>

                    <h3 className="relative text-3xl font-extrabold tracking-widest
                 text-indigo-700 uppercase mb-2">
                        Vision
                    </h3>

                    <div className="relative w-24 h-[3px]
                  bg-gradient-to-r from-indigo-700 to-blue-400
                  mb-6 rounded-full"></div>

                    <p className="relative text-gray-700 leading-relaxed
                text-[15px] md:text-[16px]
                tracking-wide font-medium">
                        To be the premier center for computer education and professional training in Nedumangad,
                        empowering students with practical skills, industry-relevant knowledge,
                        and the confidence to succeed in the ever-evolving digital landscape
                    </p>
                </motion.div>


                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="relative rounded-[44px] overflow-hidden
                     border border-blue-200
                     shadow-[0_25px_60px_rgba(0,0,0,0.18)]
                     order-1 md:order-2"
                >
                    <img src={visionImg} alt="Vision" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 rounded-[44px] ring-1 ring-white/30"></div>
                </motion.div>

            </div>
        </section>
    );
}
