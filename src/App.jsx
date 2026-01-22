import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import RouteLoader from "./components/RouteLoader";

import HomePage from "./pages/HomePage";
import CourseDetail from "./pages/CourseDetail";
// import CourseList from "./pages/CourseList";
import GalleryPage from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";

import Certificates from "./components/Certificates";
import Reviews from "./components/Reviews";

import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/AdminDashboardPage";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import CoursesPage from "./pages/CoursesPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* NAVBAR HEIGHT SPACE */}
      <main className="pt-[110px] min-h-screen">
        <RouteLoader>
          <Routes>
            {/* HOME */}
            <Route path="/" element={<HomePage />} />

            {/* COURSES */}
            <Route path="/courses/:category" element={<CourseDetail />} />
            {/* <Route path="/courses/:category/:type" element={<CourseList />} /> */}
            <Route path="/courses/certification" element={<Certificates />} />
            <Route path="/courses/:category/:type" element={<CoursesPage />} />

            {/* PAGES */}
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/reviews" element={<Reviews />} />

            {/* AUTH */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="footer" element={<Footer/>}/>



            <Route
  path="/admin"
  element={
    <ProtectedAdminRoute>
      <AdminDashboard />
    </ProtectedAdminRoute>
  }
/>
          </Routes>
        </RouteLoader>
      </main>

      {/* FOOTER ALWAYS VISIBLE
      <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
