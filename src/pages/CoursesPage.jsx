import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function CoursesPage() {
  const { category, type } = useParams();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  /*  MODAL STATE */
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const courseTypes = ["diploma", "master", "certificate", "advanced"];

  const fetchCourses = async () => {
    setLoading(true);
    let url = `https://server-ikbt.onrender.com/api/courses?category=${category}`;
    if (type) url += `&type=${type}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setCourses(data);
    } catch {
      setCourses([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCourses();
  }, [category, type]);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  /* ================= OPEN MODAL ================= */
  const openModal = (course) => {
    setSelectedCourse(course);
    setLeadForm({
      name: "",
      email: "",
      phone: "",
      course: course.title,
    });
  };

  /* ================= SUBMIT LEAD ================= */
  const submitLead = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch("https://server-ikbt.onrender.com/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadForm),
      });

      alert("Details submitted successfully");
      setSelectedCourse(null);
    } catch {
      alert("Something went wrong");
    }

    setSubmitting(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
            <div>
              <h1 className="text-4xl font-extrabold text-[#002b5b]">
                {type ? type.toUpperCase() : "ALL"} COURSES –{" "}
                {category.replace(/-/g, " ")}
              </h1>
              <p className="text-gray-600 mt-2 max-w-2xl">
                Carefully curated programs designed to elevate your career.
              </p>
            </div>

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-72 px-4 py-3 rounded-2xl bg-white/70 backdrop-blur border shadow focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          
          <div className="flex gap-3 mb-14 flex-wrap">
            <Link
              to={`/courses/${category}`}
              className={`px-5 py-2 rounded-full font-medium ${
                !type ? "bg-blue-700 text-white" : "bg-white"
              }`}
            >
              All
            </Link>

            {courseTypes.map((t) => (
              <Link
                key={t}
                to={`/courses/${category}/${t}`}
                className={`px-5 py-2 rounded-full font-medium ${
                  type === t ? "bg-blue-700 text-white" : "bg-white"
                }`}
              >
                {t}
              </Link>
            ))}
          </div>

          {/* COURSES */}
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : (
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } },
              }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              {filteredCourses.map((course) => (
                <motion.div
                  key={course._id}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -12 }}
                  onClick={() => openModal(course)}
                  className="cursor-pointer relative bg-white/80 backdrop-blur rounded-3xl p-7 shadow-xl hover:shadow-2xl transition"
                >
                  <h2 className="font-extrabold text-2xl text-[#002b5b] mb-3">
                    {course.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {course.description}
                  </p>
                  <div className="mt-6 flex justify-between">
                    <span className="text-sm text-gray-500">
                      ⏱ {course.duration}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 uppercase font-bold">
                      {course.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur flex items-center justify-center z-50"
          >
            <motion.form
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9 }}
              onSubmit={submitLead}
              className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl"
            >
              <h3 className="text-2xl font-extrabold mb-6 text-[#002b5b]">
                Enquire Now
              </h3>

              <input
                placeholder="Name"
                required
                className="w-full mb-4 px-4 py-3 border rounded-xl"
                onChange={(e) =>
                  setLeadForm({ ...leadForm, name: e.target.value })
                }
              />

              <input
                placeholder="Email"
                type="email"
                required
                className="w-full mb-4 px-4 py-3 border rounded-xl"
                onChange={(e) =>
                  setLeadForm({ ...leadForm, email: e.target.value })
                }
              />

              <input
                placeholder="Phone Number"
                required
                className="w-full mb-4 px-4 py-3 border rounded-xl"
                onChange={(e) =>
                  setLeadForm({ ...leadForm, phone: e.target.value })
                }
              />

              <input
                value={leadForm.course}
                readOnly
                className="w-full mb-6 px-4 py-3 border rounded-xl bg-gray-100"
              />

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 bg-blue-700 text-white py-3 rounded-xl"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedCourse(null)}
                  className="flex-1 border py-3 rounded-xl"
                >
                  Cancel
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
