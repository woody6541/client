import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LeadModal({ course, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: course.title,
    category: course.category,
  });
  const [submitted, setSubmitted] = useState(false);

  const submitLead = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true); 
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  // optional: auto-close after 3 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      >
        <AnimatePresence>
          {/* FORM */}
          {!submitted && (
            <motion.form
              key="form"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onSubmit={submitLead}
              className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#002b5b]">
                Enquire Now
              </h2>

              <input
                placeholder="Name"
                required
                className="w-full mb-3 border px-4 py-3 rounded"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                placeholder="Email"
                className="w-full mb-3 border px-4 py-3 rounded"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                placeholder="Phone"
                required
                className="w-full mb-3 border px-4 py-3 rounded"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <input
                value={course.title}
                disabled
                className="w-full mb-4 border px-4 py-3 rounded bg-gray-100"
              />

              <div className="flex gap-3">
                <button className="flex-1 bg-blue-700 text-white py-3 rounded-xl">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 border py-3 rounded-xl"
                >
                  Cancel
                </button>
              </div>
            </motion.form>
          )}

          {/* SUCCESS MODAL */}
          {submitted && (
            <motion.div
              key="success"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm text-center"
            >
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                Thank You!
              </h2>
              <p className="text-gray-700 mb-6">
                We have received your enquiry and will contact you soon.
              </p>
              <button
                onClick={onClose}
                className="bg-blue-700 text-white py-3 px-6 rounded-xl"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}
