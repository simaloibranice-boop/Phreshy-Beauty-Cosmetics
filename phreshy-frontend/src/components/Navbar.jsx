import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>

          {!user ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-full border border-white hover:bg-white/20 transition"
              >
                Log In
              </Link>

              <Link
                to="/register"
                className="px-4 py-2 rounded-full bg-pink-500 hover:bg-pink-600 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm opacity-80">
                {user.email}
              </span>

              <button
                onClick={logout}
                className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
