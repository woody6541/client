import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses/software" },
    { name: "Certification", path: "/courses/certification" },
    { name: "Gallery", path: "/gallery" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/signup" },
  ];

  return (
    <footer className="bg-[#003b73] text-gray-200 relative border-t border-white/10 shadow-inner">

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16 grid md:grid-cols-3 gap-12">

        {/* LEFT – BRAND */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-4">
            G-TEC NEDUMANGAD
          </h2>

          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            Empowering Futures Through <br />
            <span className="text-white font-semibold">
              Quality Education & Global Certifications
            </span>
          </p>

          <div className="space-y-4 text-sm">
            <p className="flex items-start font-semibold gap-3">
              <MapPin size={18} className="text-blue-400 mt-1" />
              2nd floor Ramachandra Square , near KSRTC Bus stand, Nedumangad
            </p>

            <p className="flex font-semibold items-center gap-3">
  <Mail size={18} className="text-blue-400" />
  <a
    href="mailto:nedumangad.tvm@gteceducation.com"
    className="hover:underline"
  >
    nedumangad.tvm@gteceducation.com
  </a>
</p>


            <p className="flex font-semibold items-start gap-3">
              <Phone size={18} className="text-blue-400 mt-1" />
              <span>
                +91 9495794950 <br />
                +91 7012243652 (Office)
              </span>
            </p>
          </div>

          {/* GOOGLE MAP */}
          <div className="mt-6 w-full h-48 rounded overflow-hidden shadow-lg">
  <iframe
    title="G-TEC Nedumangad Location"
    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3944.907529921605!2d77.00131567477538!3d8.6048765414405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgtec%20nedumangad!5e0!3m2!1sen!2sin!4v1768921070998!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </div>

        {/* MIDDLE – LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-6">
            Quick Links
          </h3>

          <ul className="grid grid-cols-2 gap-y-3 text-sm">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-white cursor-pointer transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
{/* //social media links// */}
        <div>
  <h3 className="text-lg font-semibold text-white mb-6">
    Follow Us
  </h3>

  <p className="text-sm text-gray-300 mb-6">
    Stay connected with us on social media
  </p>

  {/* BIG SOCIAL ICONS – ORIGINAL COLORS */}
  <div className="flex gap-6 text-3xl">
  <a
    href="https://www.facebook.com/gtecnedumangad"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
  >
    <FaFacebook className="text-[#1877F2] hover:drop-shadow-[0_0_12px_rgba(24,119,242,0.8)]" />
  </a>

  <a
    href="https://www.instagram.com/gtecnedumangad?utm_source=qr&igsh=MWN1enNqZ3JrZ3NpcQ=="
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
  >
    <FaInstagram className="text-[#E4405F] hover:drop-shadow-[0_0_12px_rgba(228,64,95,0.8)]" />
  </a>

  <a
    href="https://www.linkedin.com/company/gtec-nedumangad"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
  >
    <FaLinkedin className="text-[#0A66C2] hover:drop-shadow-[0_0_12px_rgba(10,102,194,0.8)]" />
  </a>

  <a
    href="https://wa.me/919495050344"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
  >
    <FaWhatsapp className="text-[#25D366] hover:drop-shadow-[0_0_12px_rgba(37,211,102,0.8)]" />
  </a>
   <a
    href="mailto:info@gtec.com"
    className="transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
  >
    <Mail className="text-[#FF4500] hover:drop-shadow-[0_0_12px_rgba(255,69,0,0.8)]" />
  </a>
</div>

</div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© 2026 G-TEC Nedumangad. All Rights Reserved.</p>
        <p className="mt-2 md:mt-0">
          Designed & Developed by <span className="text-white">Morpheus Tech</span>
        </p>
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
