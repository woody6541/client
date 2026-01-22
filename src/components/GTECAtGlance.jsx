import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import officeImg from "../assets/g-tecFrontOffice.avif";
import { useNavigate } from "react-router-dom";

export default function GTECAtGlance() {
   const navigate = useNavigate();
  return (
    <section className="px-6 md:px-20 py-20 bg-gradient-to-b from-white to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="max-w-7xl mx-auto bg-[#0B72B9] rounded-3xl overflow-hidden shadow-2xl relative"
      >
        <div className="grid md:grid-cols-3 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="p-10 text-white"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              GTEC At A Glance
            </h3>

            <p className="text-sm opacity-90 mb-3">Get In Touch</p>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition">
                <Phone className="text-white" />
              </div>
              <p className="font-medium text-sm hover:text-white/80 transition">
                Nedumangad@gteceducation.com
              </p>
            </div>
          </motion.div>

          {/* MIDDLE STATS */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col md:flex-row justify-around text-white px-6 py-10 border-y md:border-y-0 md:border-x border-white/30 gap-6 md:gap-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 80 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold">20k+</h2>
              <p className="text-sm opacity-90 mt-2">
                Passed Out Students
              </p>
            </motion.div>

            <div className="w-px bg-white/40 mx-6 hidden md:block" />

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 80 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold">200+</h2>
              <p className="text-sm opacity-90 mt-2">
                IT Courses
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
  className="relative h-full overflow-hidden rounded-tr-3xl rounded-br-3xl"
>
  <motion.img
    src={officeImg}
    alt="GTEC Office"
    className="h-full w-full object-cover"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  />

  {/* Red Button Centered at Bottom */}
   <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 
                 bg-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-500"
      onClick={() => navigate("/gallery")}
    >
      Explore Gallery
    </motion.button>
</motion.div>


        </div>
      </motion.div>
    </section>
  );
}
