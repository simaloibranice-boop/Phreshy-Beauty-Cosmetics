import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showMobileAboutDropdown, setShowMobileAboutDropdown] = useState(false);
  const [showMobileProductsDropdown, setShowMobileProductsDropdown] = useState(false);
  const [showMission, setShowMission] = useState(false);
  const [showVision, setShowVision] = useState(false);
  const [showValues, setShowValues] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showSustainability, setShowSustainability] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-full mx-auto px-4 md:px-16 py-6 flex items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="PHRESHY" className="h-16 md:h-24 pointer-events-none select-none" draggable="false" onContextMenu={(e) => e.preventDefault()} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="flex items-center gap-8 text-sm text-gray-700 bg-white rounded-[20px] px-8 py-3">
            <Link to="/" className="hover:text-gray-900 transition">Home</Link>
            <div className="relative">
              <button 
                onClick={() => setShowAboutDropdown(!showAboutDropdown)} 
                className="flex items-center gap-1 hover:text-gray-900 transition"
              >
                About Us
                <svg className={`w-4 h-4 transition-transform ${showAboutDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showAboutDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg py-2 min-w-[160px] z-50 animate-fadeScale">
                  <button onClick={() => { setShowMission(true); setShowAboutDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-pink-50 hover:text-[#E91E63] transition text-sm">Our Mission</button>
                  <button onClick={() => { setShowVision(true); setShowAboutDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-pink-50 hover:text-[#E91E63] transition text-sm">Our Vision</button>
                  <button onClick={() => { setShowValues(true); setShowAboutDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-pink-50 hover:text-[#E91E63] transition text-sm">Core Values</button>
                </div>
              )}
            </div>
            <Link to="/services" className="hover:text-gray-900 transition">Services</Link>
            <div className="relative">
              <button 
                onClick={() => setShowProductsDropdown(!showProductsDropdown)} 
                className="flex items-center gap-1 hover:text-gray-900 transition"
              >
                Products
                <svg className={`w-4 h-4 transition-transform ${showProductsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showProductsDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg py-2 min-w-[160px] z-50 animate-fadeScale">
                  <button onClick={() => { setShowFeatures(true); setShowProductsDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-pink-50 hover:text-[#E91E63] transition text-sm">Features</button>
                  <button onClick={() => { setShowSizeGuide(true); setShowProductsDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-pink-50 hover:text-[#E91E63] transition text-sm">Size Guide</button>
                  <button onClick={() => { setShowSustainability(true); setShowProductsDropdown(false); }} className="w-full text-left px-4 py-2 hover:bg-pink-50 hover:text-[#E91E63] transition text-sm">Sustainability</button>
                </div>
              )}
            </div>
            <Link to="/about" className="hover:text-gray-900 transition">Careers</Link>
            <button onClick={() => document.querySelector('footer').scrollIntoView({ behavior: 'smooth' })} className="hover:text-gray-900 transition">Contact</button>
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6 mr-16">
          <button onClick={() => setShowSearch(true)} className="text-gray-700 hover:text-gray-900 transition">
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

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-4 ml-auto">
          <button onClick={() => setShowSearch(true)} className="text-gray-700 hover:text-gray-900 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <Link to="/cart" className="relative text-gray-700 hover:text-gray-900 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden relative bg-white/60 backdrop-blur-md shadow-2xl rounded-b-3xl mx-4 animate-slideDown overflow-hidden">
          {/* Falling Lips Animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-[10%] text-4xl animate-lipFall" style={{animationDelay: '0s'}}>💋</div>
            <div className="absolute top-0 left-[30%] text-3xl animate-lipFall" style={{animationDelay: '0.3s'}}>💋</div>
            <div className="absolute top-0 left-[50%] text-4xl animate-lipFall" style={{animationDelay: '0.6s'}}>💋</div>
            <div className="absolute top-0 left-[70%] text-3xl animate-lipFall" style={{animationDelay: '0.9s'}}>💋</div>
            <div className="absolute top-0 left-[85%] text-4xl animate-lipFall" style={{animationDelay: '1.2s'}}>💋</div>
          </div>
          
          <div className="relative flex flex-col p-6 space-y-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-gray-900 font-medium hover:text-[#E91E63] transition-all duration-300 py-2 hover:translate-x-2 hover:scale-105">Home</Link>
            
            <div>
              <button 
                onClick={() => setShowMobileAboutDropdown(!showMobileAboutDropdown)} 
                className="flex items-center justify-between w-full text-gray-900 font-medium hover:text-[#E91E63] transition-all duration-300 py-2"
              >
                <span>About Us</span>
                <svg className={`w-4 h-4 transition-transform ${showMobileAboutDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showMobileAboutDropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  <button onClick={() => { setShowMission(true); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-[#E91E63] transition py-2 text-sm">Our Mission</button>
                  <button onClick={() => { setShowVision(true); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-[#E91E63] transition py-2 text-sm">Our Vision</button>
                  <button onClick={() => { setShowValues(true); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-[#E91E63] transition py-2 text-sm">Core Values</button>
                </div>
              )}
            </div>
            
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="text-gray-900 font-medium hover:text-[#E91E63] transition-all duration-300 py-2 hover:translate-x-2 hover:scale-105">Services</Link>
            
            <div>
              <button 
                onClick={() => setShowMobileProductsDropdown(!showMobileProductsDropdown)} 
                className="flex items-center justify-between w-full text-gray-900 font-medium hover:text-[#E91E63] transition-all duration-300 py-2"
              >
                <span>Products</span>
                <svg className={`w-4 h-4 transition-transform ${showMobileProductsDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showMobileProductsDropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  <button onClick={() => { setShowFeatures(true); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-[#E91E63] transition py-2 text-sm">Features</button>
                  <button onClick={() => { setShowSizeGuide(true); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-[#E91E63] transition py-2 text-sm">Size Guide</button>
                  <button onClick={() => { setShowSustainability(true); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-[#E91E63] transition py-2 text-sm">Sustainability</button>
                </div>
              )}
            </div>
            
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-900 font-medium hover:text-[#E91E63] transition-all duration-300 py-2 hover:translate-x-2 hover:scale-105">Careers</Link>
            <button onClick={() => { setIsMenuOpen(false); document.querySelector('footer').scrollIntoView({ behavior: 'smooth' }); }} className="text-left text-gray-900 font-medium hover:text-[#E91E63] transition-all duration-300 py-2 hover:translate-x-2 hover:scale-105">Contact</button>
            <div className="border-t border-gray-300/50 pt-4 space-y-3">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full px-6 py-3 text-gray-900 font-medium hover:text-[#E91E63] transition-all duration-300 border-2 border-gray-300 hover:border-[#E91E63] rounded-full hover:scale-105 hover:shadow-lg">
                  Login
                </button>
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full px-6 py-3 bg-[#E91E63] text-white font-medium rounded-full hover:bg-[#C2185B] transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Signup
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Search Modal */}
      {showSearch && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl w-full max-w-2xl mx-4 p-8 animate-popBounce">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">🔍 Search Products</h2>
              <button onClick={() => setShowSearch(false)} className="text-gray-500 hover:text-[#E91E63] transition-all duration-300 hover:rotate-90">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search for skincare, makeup, haircare..."
                className="w-full px-6 py-4 pr-12 rounded-full border-2 border-gray-300 focus:border-[#E91E63] focus:outline-none text-gray-900 placeholder-gray-500 transition-all duration-300"
                autoFocus
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-[#E91E63] hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-3">Popular Searches:</p>
              <div className="flex flex-wrap gap-2">
                {['Face Cream', 'Serum', 'Moisturizer', 'Cleanser', 'Eye Cream'].map((term) => (
                  <button key={term} className="px-4 py-2 bg-gray-100 hover:bg-[#E91E63] hover:text-white text-gray-700 rounded-full text-sm transition-all duration-300 hover:scale-105">
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mission Popup */}
      {showMission && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setShowMission(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-lg animate-fadeIn"></div>
          <div className="relative bg-gradient-to-br from-white via-pink-50 to-white rounded-3xl shadow-2xl max-w-2xl w-full animate-popBounce" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#E91E63] to-[#C2185B] px-6 md:px-8 py-4 md:py-6 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl">✨</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <button onClick={() => setShowMission(false)} className="text-white hover:bg-white/20 rounded-full p-2 transition-all hover:rotate-90 duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">To make beauty effortless, expressive, and empowering. PHRESHY Cosmetics exists to help you look good, feel powerful, and own your glow — every single day.</p>
            </div>
          </div>
        </div>
      )}

      {/* Vision Popup */}
      {showVision && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setShowVision(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-lg animate-fadeIn"></div>
          <div className="relative bg-gradient-to-br from-white via-pink-50 to-white rounded-3xl shadow-2xl max-w-2xl w-full animate-popBounce" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#E91E63] to-[#C2185B] px-6 md:px-8 py-4 md:py-6 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl">🌍</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <button onClick={() => setShowVision(false)} className="text-white hover:bg-white/20 rounded-full p-2 transition-all hover:rotate-90 duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">To build a beauty movement where confidence is the standard and self-expression has no rules.</p>
            </div>
          </div>
        </div>
      )}

      {/* Core Values Popup */}
      {showValues && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setShowValues(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-lg animate-fadeIn"></div>
          <div className="relative bg-gradient-to-br from-white via-pink-50 to-white rounded-3xl shadow-2xl max-w-2xl w-full animate-popBounce" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#E91E63] to-[#C2185B] px-6 md:px-8 py-4 md:py-6 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl">💎</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">Core Values</h2>
              </div>
              <button onClick={() => setShowValues(false)} className="text-white hover:bg-white/20 rounded-full p-2 transition-all hover:rotate-90 duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <div className="flex gap-3 items-start hover:translate-x-1 transition-transform duration-300">
                <span className="text-xl md:text-2xl">✨</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Authenticity</h3>
                  <p className="text-xs md:text-sm text-gray-700">Be real. Always.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start hover:translate-x-1 transition-transform duration-300">
                <span className="text-xl md:text-2xl">🔥</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Boldness</h3>
                  <p className="text-xs md:text-sm text-gray-700">Stand out. Don't shrink.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start hover:translate-x-1 transition-transform duration-300">
                <span className="text-xl md:text-2xl">💎</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Excellence</h3>
                  <p className="text-xs md:text-sm text-gray-700">No mediocre formulas. Period.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start hover:translate-x-1 transition-transform duration-300">
                <span className="text-xl md:text-2xl">🤝</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Community</h3>
                  <p className="text-xs md:text-sm text-gray-700">Beauty is better together.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start hover:translate-x-1 transition-transform duration-300">
                <span className="text-xl md:text-2xl">🌱</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Responsibility</h3>
                  <p className="text-xs md:text-sm text-gray-700">Conscious choices, always.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features Popup */}
      {showFeatures && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setShowFeatures(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-lg animate-fadeIn"></div>
          <div className="relative bg-gradient-to-br from-white via-pink-50 to-white rounded-3xl shadow-2xl max-w-2xl w-full animate-popBounce" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#E91E63] to-[#C2185B] px-6 md:px-8 py-4 md:py-6 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl">✨</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">Product Features</h2>
              </div>
              <button onClick={() => setShowFeatures(false)} className="text-white hover:bg-white/20 rounded-full p-2 transition-all hover:rotate-90 duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <div className="flex gap-3 items-start hover:translate-x-1 transition-transform duration-300">
                <span className="text-xl md:text-2xl">🌿</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Clean Ingredients</h3>
                  <p className="text-xs md:text-sm text-gray-700">Formulated without parabens, sulfates, or harmful chemicals.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start hover:translate-x-1 transition-transform duration-300">
                <span className="text-xl md:text-2xl">🐰</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Cruelty-Free</h3>
                  <p className="text-xs md:text-sm text-gray-700">Never tested on animals. Beauty with a conscience.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start hover:translate-x-1 transition-transform duration-300">
                <span className="text-xl md:text-2xl">💧</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Hydrating Formula</h3>
                  <p className="text-xs md:text-sm text-gray-700">Locks in moisture for all-day glow and comfort.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start hover:translate-x-1 transition-transform duration-300">
                <span className="text-xl md:text-2xl">🌈</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Inclusive Shades</h3>
                  <p className="text-xs md:text-sm text-gray-700">Designed for every skin tone and type.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Size Guide Popup */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setShowSizeGuide(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-lg animate-fadeIn"></div>
          <div className="relative bg-gradient-to-br from-white via-pink-50 to-white rounded-3xl shadow-2xl max-w-2xl w-full animate-popBounce" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#E91E63] to-[#C2185B] px-6 md:px-8 py-4 md:py-6 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl">📏</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">Size Guide</h2>
              </div>
              <button onClick={() => setShowSizeGuide(false)} className="text-white hover:bg-white/20 rounded-full p-2 transition-all hover:rotate-90 duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm md:text-base text-gray-700 mb-4">To help you choose the right product size:</p>
              <ul className="space-y-3 text-xs md:text-sm text-gray-700">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Product volume (e.g., 30ml, 50ml, 100ml) is clearly listed on each product page</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Dimensions and weight may also be provided where applicable</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>If unsure, compare the size details before placing your order</span>
                </li>
              </ul>
              <p className="text-xs md:text-sm text-gray-700 mt-4">If you need assistance selecting the right size, our support team is happy to help.</p>
            </div>
          </div>
        </div>
      )}

      {/* Sustainability Popup */}
      {showSustainability && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setShowSustainability(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-lg animate-fadeIn"></div>
          <div className="relative bg-gradient-to-br from-white via-pink-50 to-white rounded-3xl shadow-2xl max-w-2xl w-full animate-popBounce" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#E91E63] to-[#C2185B] px-6 md:px-8 py-4 md:py-6 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl">🌍</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">Sustainability</h2>
              </div>
              <button onClick={() => setShowSustainability(false)} className="text-white hover:bg-white/20 rounded-full p-2 transition-all hover:rotate-90 duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <div className="flex gap-3 items-start hover:translate-x-1 transition-transform duration-300">
                <span className="text-xl md:text-2xl">♻️</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Recyclable Packaging</h3>
                  <p className="text-xs md:text-sm text-gray-700">All our packaging is 100% recyclable and eco-friendly.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start hover:translate-x-1 transition-transform duration-300">
                <span className="text-xl md:text-2xl">🌱</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Sustainable Sourcing</h3>
                  <p className="text-xs md:text-sm text-gray-700">Ingredients sourced from ethical and sustainable suppliers.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start hover:translate-x-1 transition-transform duration-300">
                <span className="text-xl md:text-2xl">💚</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Carbon Neutral</h3>
                  <p className="text-xs md:text-sm text-gray-700">We offset our carbon footprint through verified programs.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start hover:translate-x-1 transition-transform duration-300">
                <span className="text-xl md:text-2xl">🌊</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Ocean-Safe Formulas</h3>
                  <p className="text-xs md:text-sm text-gray-700">No microplastics or harmful chemicals that damage marine life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
