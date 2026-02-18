import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden py-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://i.pinimg.com/736x/c9/db/99/c9db9967e1009833e52f1346020e1478.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Glassmorphism Form */}
      <div className="relative z-10 bg-white/40 backdrop-blur-2xl p-8 md:p-10 rounded-3xl w-full max-w-md mx-4 shadow-2xl border border-white/60">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Create Account</h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-4 rounded-2xl bg-white/70 backdrop-blur-md placeholder-gray-600 focus:outline-none border border-white/60 focus:border-[#E91E63] transition text-gray-900"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full p-4 rounded-2xl bg-white/70 backdrop-blur-md placeholder-gray-600 focus:outline-none border border-white/60 focus:border-[#E91E63] transition text-gray-900"
          />
        </div>

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-4 mb-4 rounded-2xl bg-white/70 backdrop-blur-md placeholder-gray-600 focus:outline-none border border-white/60 focus:border-[#E91E63] transition text-gray-900"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 mb-4 rounded-2xl bg-white/70 backdrop-blur-md placeholder-gray-600 focus:outline-none border border-white/60 focus:border-[#E91E63] transition text-gray-900"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-6 rounded-2xl bg-white/70 backdrop-blur-md placeholder-gray-600 focus:outline-none border border-white/60 focus:border-[#E91E63] transition text-gray-900"
        />

        <button className="w-full bg-gradient-to-r from-[#E91E63] to-[#C2185B] text-white font-bold p-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
          Create Account
        </button>

        <p className="text-center mt-6 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-[#E91E63] font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
