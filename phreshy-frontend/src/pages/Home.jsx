import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative text-center text-white fade-up">
        <h1 className="text-6xl md:text-7xl font-bold tracking-wide">
          Phreshy Beauty
        </h1>

        <p className="mt-4 text-xl opacity-80">
          & Cosmetics
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <Link to="/about">
            <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
              About
            </button>
          </Link>

          <Link to="/shop">
            <button className="px-8 py-3 bg-pink-500 hover:bg-pink-600 rounded-full transition shadow-lg">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
