import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const COURSE_API = "https://server-ikbt.onrender.com/api/courses";
const GALLERY_API = "https://server-ikbt.onrender.com/api/gallery";
const LEADS_API = "https://server-ikbt.onrender.com/api/leads";

// Helper to check video extension
const isVideo = (url) => {
  if (!url) return false;
  return url.match(/\.(mp4|webm|ogg|mov)$/i);
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // Protect route
  useEffect(() => {
    if (!token || user?.role !== "admin") {
      navigate("/login");
    }
  }, [token, user, navigate]);

  // ===== COURSES =====
  const [courses, setCourses] = useState([]);
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [courseForm, setCourseForm] = useState({
    category: "",
    type: "",
    title: "",
    description: "",
    duration: "",
    video: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  // ===== GALLERY =====
  const [gallery, setGallery] = useState([]);
  const [galleryForm, setGalleryForm] = useState({ category: "", image: null });
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false); // NEW: Loading state

  // ===== LEADS =====
  const [leads, setLeads] = useState([]);
  const [leadSearch, setLeadSearch] = useState("");

  const authHeader = { Authorization: `Bearer ${token}` };

  // ===== FETCH FUNCTIONS =====
  const fetchCourses = async () => {
    try {
      const res = await fetch(COURSE_API, { headers: authHeader });
      setCourses(await res.json());
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  const fetchGallery = async () => {
    try {
      const res = await fetch(GALLERY_API, { headers: authHeader });
      setGallery(await res.json());
    } catch (err) {
      console.error("Error fetching gallery:", err);
    }
  };

  const fetchLeads = async () => {
    try {
      const res = await fetch(LEADS_API, { headers: authHeader });
      setLeads(await res.json());
    } catch (err) {
      console.error("Error fetching leads:", err);
    }
  };

  useEffect(() => {
    if (token) {
      fetchCourses();
      fetchGallery();
      fetchLeads();
    }
  }, [token]);

  // ===== COURSE HANDLERS =====
  const handleCourseSubmit = async (e) => {
    e.preventDefault();
    const method = editingCourseId ? "PUT" : "POST";
    const url = editingCourseId ? `${COURSE_API}/${editingCourseId}` : COURSE_API;

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json", ...authHeader },
      body: JSON.stringify(courseForm),
    });

    setCourseForm({ category: "", type: "", title: "", description: "", duration: "", video: "" });
    setEditingCourseId(null);
    fetchCourses();
  };

  const handleEditCourse = (course) => {
    setEditingCourseId(course._id);
    setCourseForm({ ...course });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteCourse = async (id) => {
    if (!window.confirm("Delete this course?")) return;
    await fetch(`${COURSE_API}/${id}`, { method: "DELETE", headers: authHeader });
    fetchCourses();
  };

  // ===== GALLERY HANDLERS =====
  const handleGallerySubmit = async (e) => {
    e.preventDefault();
    if (!galleryForm.image) return alert("Select an image or video");

    setUploading(true); // START LOADING

    const formData = new FormData();
    formData.append("category", galleryForm.category);
    formData.append("image", galleryForm.image);

    try {
      const res = await fetch(GALLERY_API, {
        method: "POST",
        headers: authHeader,
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Upload failed");
      }

      // Success
      setGalleryForm({ category: "", image: null });
      setPreview(null);
      fetchGallery();
      alert("Uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert(`Error: ${err.message}`);
    } finally {
      setUploading(false); // STOP LOADING
    }
  };

  const deleteGallery = async (id) => {
    if (!window.confirm("Delete this item?")) return;
    await fetch(`${GALLERY_API}/${id}`, { method: "DELETE", headers: authHeader });
    fetchGallery();
  };

  // ===== LEADS HANDLER =====
  const deleteLead = async (id) => {
    if (!window.confirm("Delete this lead?")) return;
    await fetch(`${LEADS_API}/${id}`, { method: "DELETE", headers: authHeader });
    fetchLeads();
  };

  const inputStyle =
    "border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition";

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLeads = leads.filter((lead) => {
    const query = leadSearch.toLowerCase();
    return (
      lead.name.toLowerCase().includes(query) ||
      (lead.email && lead.email.toLowerCase().includes(query)) ||
      lead.phone.toLowerCase().includes(query) ||
      (lead.course && lead.course.toLowerCase().includes(query))
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-gray-100 p-6 space-y-12"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl font-extrabold text-blue-900"
      >
        Admin Dashboard
      </motion.h1>

      {/* ================= COURSE ================= */}
      <motion.div className="bg-white/90 p-8 rounded-2xl shadow-xl">
        <h2 className="text-xl font-bold mb-6 text-[#003b73]">📘 Course Management</h2>

        <input
          type="text"
          placeholder="🔍 Search course by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-6 w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <form onSubmit={handleCourseSubmit} className="grid md:grid-cols-2 gap-4">
          <select
            value={courseForm.category}
            onChange={(e) => setCourseForm({ ...courseForm, category: e.target.value })}
            className={inputStyle}
            required
          >
            <option value="">Select Department</option>
            <option value="software">Software</option>
            <option value="cad">CAD</option>
            <option value="accounting">Accounting</option>
            <option value="multimedia">Multimedia</option>
            <option value="digital-marketing">Digital Marketing</option>
          </select>

          <select
            value={courseForm.type}
            onChange={(e) => setCourseForm({ ...courseForm, type: e.target.value })}
            className={inputStyle}
            required
          >
            <option value="">Course Type</option>
            <option value="diploma">Diploma</option>
            <option value="certificate">Certificate</option>
            <option value="advanced">Advanced Diploma</option>
            <option value="master">Master</option>
          </select>

          <input
            placeholder="Course Title"
            value={courseForm.title}
            onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })}
            className={inputStyle}
          />

          <input
            placeholder="Duration"
            value={courseForm.duration}
            onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })}
            className={inputStyle}
          />

          <textarea
            placeholder="Description"
            value={courseForm.description}
            onChange={(e) => setCourseForm({ ...courseForm, description: e.target.value })}
            className={`${inputStyle} md:col-span-2`}
          />

          <button className="bg-blue-700 text-white py-3 rounded-xl md:col-span-2 hover:bg-blue-800 transition">
            {editingCourseId ? "Update Course" : "Save Course"}
          </button>
        </form>

        <div className="mt-10 grid md:grid-cols-2 gap-4">
          {filteredCourses.map((course) => (
            <div key={course._id} className="border rounded-xl p-4 shadow-sm bg-white">
              <h4 className="font-bold text-blue-900">{course.title}</h4>
              <p className="text-sm text-gray-600 capitalize">
                {course.category} • {course.type}
              </p>
              <p className="text-sm mt-1">{course.duration}</p>

              <div className="flex gap-3 mt-4">
                <button onClick={() => handleEditCourse(course)} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                  Edit
                </button>
                <button onClick={() => handleDeleteCourse(course._id)} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ================= GALLERY ================= */}
      <motion.div className="bg-white/90 p-8 rounded-2xl shadow-xl">
        <h2 className="text-xl font-bold mb-6 text-[#003b73]">🖼️ Gallery Management</h2>

        <form onSubmit={handleGallerySubmit} className="grid md:grid-cols-2 gap-4 mb-6">
          <select
            value={galleryForm.category}
            onChange={(e) => setGalleryForm({ ...galleryForm, category: e.target.value })}
            className={inputStyle}
            required
          >
            <option value="">Select Category</option>
            <option value="Awards">Awards</option>
            <option value="Offers">Offers</option>
            <option value="Celebrations">Celebrations</option>
            <option value="Programmes">Programmes</option>
            <option value="Students Achievements">Students Achievements</option>
          </select>

          <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => {
              const file = e.target.files[0];
              setGalleryForm({ ...galleryForm, image: file });
              if (file) {
                setPreview(URL.createObjectURL(file));
              }
            }}
            className={inputStyle}
          />

          {/* PREVIEW AREA */}
          {preview && (
            <div className="md:col-span-2 mt-2">
              <p className="text-sm text-gray-500 mb-2">Preview:</p>
              {galleryForm.image?.type?.startsWith("video") ? (
                <video src={preview} controls className="h-48 rounded-xl bg-black" />
              ) : (
                <img src={preview} className="h-48 rounded-xl object-contain bg-gray-100" alt="Preview" />
              )}
            </div>
          )}

          {/* UPLOAD BUTTON WITH LOADING STATE */}
          <button
            disabled={uploading}
            className={`md:col-span-2 py-3 rounded-xl font-bold text-white transition-all flex justify-center items-center gap-2
              ${uploading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
          >
            {uploading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Uploading... Please Wait
              </>
            ) : (
              "Upload Item"
            )}
          </button>
        </form>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
          {gallery.map((item) => (
            <div key={item._id} className="relative group">
              {isVideo(item.image) ? (
                <video
                  src={item.image}
                  className="rounded-xl w-full h-40 object-cover bg-black"
                  controls
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.category}
                  className="rounded-xl w-full h-40 object-cover bg-gray-100"
                />
              )}
              
              <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                {item.category}
              </div>

              <button
                onClick={() => deleteGallery(item._id)}
                className="absolute top-2 right-2 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-lg font-bold"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ================= LEADS ================= */}
      <motion.div className="bg-white/90 p-8 rounded-2xl shadow-xl">
        <h2 className="text-xl font-bold mb-6 text-[#003b73]">📞 Course Leads</h2>

        <input
          type="text"
          placeholder="🔍 Search leads by name, email, phone, or course..."
          value={leadSearch}
          onChange={(e) => setLeadSearch(e.target.value)}
          className="mb-6 w-full border border-gray-300 px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid gap-4">
          {filteredLeads.map((lead) => (
            <div key={lead._id} className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">{lead.name}</h3>
                <p className="text-gray-600">{lead.email}</p>
                <p className="text-gray-600">{lead.phone}</p>
                <p className="text-sm text-blue-600 font-medium mt-1">{lead.course}</p>
              </div>

              <button onClick={() => deleteLead(lead._id)} className="bg-red-100 text-red-600 px-4 py-2 rounded-lg hover:bg-red-200 transition">
                Delete
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}