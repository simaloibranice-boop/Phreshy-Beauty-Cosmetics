import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://i.pinimg.com/736x/c9/db/99/c9db9967e1009833e52f1346020e1478.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Glassmorphism Form */}
      <form
        onSubmit={handleSubmit}
        className="relative z-10 bg-white/40 backdrop-blur-2xl p-8 md:p-10 rounded-3xl w-full max-w-md mx-4 shadow-2xl border border-white/60"
      >
        <h2 className="text-3xl md:text-4xl mb-8 font-bold text-center text-gray-900">
          Welcome Back
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-4 rounded-2xl bg-white/70 backdrop-blur-md outline-none border border-white/60 focus:border-[#E91E63] transition text-gray-900 placeholder-gray-600"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-4 rounded-2xl bg-white/70 backdrop-blur-md outline-none border border-white/60 focus:border-[#E91E63] transition text-gray-900 placeholder-gray-600"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full py-4 rounded-full bg-gradient-to-r from-[#E91E63] to-[#C2185B] text-white font-bold hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Login
        </button>

        <p className="text-center mt-6 text-gray-700">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#E91E63] font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
