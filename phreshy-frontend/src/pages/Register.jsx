const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl w-96 shadow-xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded bg-white/20 placeholder-white focus:outline-none"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-white/20 placeholder-white focus:outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-6 rounded bg-white/20 placeholder-white focus:outline-none"
        />

        <button className="w-full mt-6 bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Register;
