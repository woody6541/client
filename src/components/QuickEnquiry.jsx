import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function QuickEnquiry() {
  const [open, setOpen] = useState(false);

  const whatsappNumber = "919495050344";
  const phoneNumber = "+917012243652";

  return (
    <>
      {/* FLOATING BUTTON WITH ICONS */}
      <button
        onClick={() => setOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 
        bg-blue-600 text-white px-4 py-3 
        rounded-l-lg shadow-lg z-50 
        rotate-[-90deg] origin-bottom-right
        flex items-center gap-3 font-semibold"
      >
        <FaWhatsapp className="text-lg" />
        <span>QUICK ENQUIRY</span>
        <FaPhoneAlt className="text-sm" />
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 relative">

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">
              Quick Enquiry
            </h2>

            {/* FORM */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <select className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Select Course</option>
                <option>Software</option>
                <option>Accounting</option>
                <option>Multimedia</option>
                <option>Digital Marketing</option>
                <option>Hospital Administration</option>
                <option>Logistics</option>
          
              </select>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Submit Enquiry
              </button>
            </form>

            {/* DIVIDER */}
            <div className="my-5 flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-sm text-gray-500">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            {/* WHATSAPP & CALL BUTTONS */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 
                bg-green-500 hover:bg-green-600 
                text-white py-3 rounded-lg font-semibold transition"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-2 
                bg-blue-500 hover:bg-blue-600 
                text-white py-3 rounded-lg font-semibold transition"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
