import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      //  Register the user
      const res = await axios.post("http://localhost:3000/api/user/register", {
        name,
        email,
        password,
      });

      alert(res.data.message || "Account created successfully");

      //  Auto login immediately after signup
      const loginRes = await axios.post("http://localhost:3000/api/user/login", {
        email,
        password,
      });

      //  Save token & user
      localStorage.setItem("token", loginRes.data.token);
      localStorage.setItem("user", JSON.stringify(loginRes.data.user));

      //  Role-based redirect
      if (loginRes.data.user.role === "admin") {
        navigate("/admin"); 
      } else {
        navigate("/login");
      }
    } catch (err) {
      alert(err.response?.data?.error || "Signup/Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg animate-fadeInUp transition duration-300">
        <h2 className="text-2xl font-bold text-center text-[#0a1f44] mb-6 animate-fadeInDown">
          Sign Up
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0a1f44] text-white py-2 rounded-md hover:bg-blue-900 hover:scale-[1.03] active:scale-95 transition duration-200 disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
