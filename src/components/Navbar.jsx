import { Phone, Mail, LogOut } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo1.png";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [user, setUser] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Load user from localStorage on mount & when storage changes
  const loadUser = () => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  };

  useEffect(() => {
    loadUser();

    // Listen for localStorage changes across tabs/windows
    window.addEventListener("storage", loadUser);
    return () => window.removeEventListener("storage", loadUser);
  }, []);

  // Also reload user on route change (helps login redirect)
  useEffect(() => {
    loadUser();
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);     
    navigate("/login"); 
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 animate-nav-slide">

      {/* ================= TOP BAR ================= */}
      <div className="bg-[#003b73] text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end gap-6">
          <span className="flex items-center gap-1 opacity-0 animate-fade-in delay-200">
            <Phone size={12} /> +91 7012243652
          </span>
          <a
            href="mailto:nedumangad.tvm@gteceducation.com"
            className="flex items-center gap-1 opacity-0 animate-fade-in delay-300 hover:underline cursor-pointer"
          >
            <Mail size={12} />
            <span>nedumangad.tvm@gteceducation.com</span>
          </a>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="bg-[#00294f]/90 backdrop-blur-xl shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* LOGO → HOME */}
            <Link to="/">
              <img
                src={logo}
                alt="G-TEC"
                className="h-16 lg:h-20 object-contain transition-transform duration-500 ease-out hover:scale-105 opacity-0 animate-fade-in delay-200"
              />
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex gap-6 text-white font-semibold text-sm items-center">
              {[
                { name: "COURSES", path: "/courses/software" },
                { name: "CERTIFICATIONS", path: "/courses/certification" },
                { name: "FEEDBACK", path: "/reviews" },
                { name: "GALLERY", path: "/gallery" },
                { name: "ABOUT US", path: "/about" },
                { name: "CONTACT US", path: "/Footer" },
              ].map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative group opacity-0 animate-fade-in"
                  style={{ animationDelay: `${300 + index * 80}ms` }}
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-400 transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              ))}

              {/* ADMIN LINK */}
              {user?.role === "admin" && (
                <Link
                  to="/admin"
                  className="relative group opacity-0 animate-fade-in text-yellow-300 ml-4"
                  style={{ animationDelay: "600ms" }}
                >
                  Admin Dashboard
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              )}

              {/* LOGOUT */}
              {user && (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 ml-4 text-red-400 hover:text-red-500 opacity-0 animate-fade-in"
                  style={{ animationDelay: "650ms" }}
                >
                  <LogOut size={16} />
                  Logout
                </button>
              )}
            </nav>

            {/* MOBILE MENU ICON */}
            <button
              className="lg:hidden text-white text-2xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>
          </div>

          {/* MOBILE MENU */}
          {mobileOpen && (
            <div className="lg:hidden bg-[#00294f]/95 text-white flex flex-col gap-4 py-4 px-6">
              {[
                { name: "COURSES", path: "/courses/software" },
                { name: "CERTIFICATIONS", path: "/courses/certification" },
                { name: "FEEDBACK", path: "/reviews" },
                { name: "GALLERY", path: "/gallery" },
                { name: "ABOUT US", path: "/about" },
                { name: "CONTACT US", path: "/Footer" },
              ].map((item) => (
                <Link key={item.name} to={item.path} onClick={() => setMobileOpen(false)}>
                  {item.name}
                </Link>
              ))}

              {user?.role === "admin" && (
                <Link to="/admin" onClick={() => setMobileOpen(false)} className="text-yellow-300">
                  Admin Dashboard
                </Link>
              )}

              {user && (
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileOpen(false);
                  }}
                  className="flex items-center gap-1 text-red-400 mt-2"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
