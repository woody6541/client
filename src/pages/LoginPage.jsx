import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3000/api/user/login",
        {
          email,
          password,
        }
      );

      //  Save token & user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      //  ROLE BASED REDIRECT
      if (res.data.user.role === "admin") {
        navigate("/admin");       
      } else {
        navigate("/");            
      }
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div
        className="
          w-full max-w-md bg-white p-8 rounded-xl shadow-lg
          animate-fadeInUp transition duration-300
        "
      >
        <h2
          className="
            text-2xl font-bold text-center text-[#0a1f44] mb-6
            animate-fadeInDown
          "
        >
          Login
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full px-4 py-2 border rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="
                w-full px-4 py-2 border rounded-md
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full bg-[#0a1f44] text-white py-2 rounded-md
              hover:bg-blue-900
              hover:scale-[1.03]
              active:scale-95
              transition duration-200
              disabled:opacity-60
            "
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
