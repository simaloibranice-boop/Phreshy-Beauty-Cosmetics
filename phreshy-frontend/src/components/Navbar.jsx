import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-full mx-auto px-16 py-6 flex items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="PHRESHY" className="h-24 pointer-events-none select-none" draggable="false" onContextMenu={(e) => e.preventDefault()} />
        </div>

        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-8 text-sm text-gray-700 bg-white rounded-[20px] px-8 py-3">
            <Link to="/" className="hover:text-gray-900 transition">Home</Link>
            <Link to="/shop" className="hover:text-gray-900 transition">Services</Link>
            <Link to="/shop" className="hover:text-gray-900 transition">Products</Link>
            <Link to="/about" className="hover:text-gray-900 transition">Careers</Link>
            <Link to="/about" className="hover:text-gray-900 transition">Contact</Link>
          </div>
        </div>

        <div className="flex items-center gap-6 mr-16">
          <button className="text-gray-700 hover:text-gray-900 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <Link to="/cart" className="relative text-gray-700 hover:text-gray-900 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
          <Link to="/login">
            <button className="px-6 py-2 text-gray-700 hover:text-gray-900 transition">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-6 py-2 bg-[#E91E63] text-white rounded-full hover:bg-[#C2185B] transition">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
