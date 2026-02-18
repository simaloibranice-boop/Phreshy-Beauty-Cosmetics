import { useState } from 'react';

const Footer = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [showSustainability, setShowSustainability] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showMission, setShowMission] = useState(false);
  const [showVision, setShowVision] = useState(false);
  const [showValues, setShowValues] = useState(false);

  return (
    <footer className="mt-20 py-12 md:py-20 bg-white relative">
      <div className="max-w-7xl px-4 md:px-16 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0">
          <div className="text-center md:text-left md:absolute md:left-4 md:top-0">
            <img 
              src="/logo.png" 
              alt="Phreshy Logo" 
              className="w-32 md:w-48 h-auto mb-4 mx-auto md:mx-0"
            />
            <p className="text-gray-700 mb-6 text-sm md:text-base">Best Beauty Items</p>
            <div className="flex gap-3 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 bg-[#E91E63] rounded-full flex items-center justify-center hover:bg-[#C2185B] transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#E91E63] rounded-full flex items-center justify-center hover:bg-[#C2185B] transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#E91E63] rounded-full flex items-center justify-center hover:bg-[#C2185B] transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#E91E63] rounded-full flex items-center justify-center hover:bg-[#C2185B] transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[#E91E63] rounded-full flex items-center justify-center hover:bg-[#C2185B] transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 md:flex md:gap-24 w-full md:w-auto md:justify-center md:flex-1">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">About Us</h3>
              <div className="flex flex-col gap-2 items-center md:items-start">
                <button onClick={() => setShowMission(true)} className="text-gray-600 hover:text-[#E91E63] text-xs md:text-sm text-left transition">Our Mission</button>
                <button onClick={() => setShowVision(true)} className="text-gray-600 hover:text-[#E91E63] text-xs md:text-sm text-left transition">Our Vision</button>
                <button onClick={() => setShowValues(true)} className="text-gray-600 hover:text-[#E91E63] text-xs md:text-sm text-left transition">Core Values</button>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-bold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Support</h3>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-gray-600 hover:text-gray-900 text-xs md:text-sm">Product Guide</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-xs md:text-sm">Live Chat/Help Desk</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-xs md:text-sm">Product Updates</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 text-xs md:text-sm">Community Forum</a>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-bold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">FAQ</h3>
              <div className="flex flex-col gap-2 items-center md:items-start">
                <button onClick={() => setShowFAQ(true)} className="text-gray-600 hover:text-[#E91E63] text-xs md:text-sm text-left transition">How to Know My Skin Type</button>
                <button onClick={() => setShowFAQ(true)} className="text-gray-600 hover:text-[#E91E63] text-xs md:text-sm text-left transition">Shipping Delivery</button>
                <button onClick={() => setShowFAQ(true)} className="text-gray-600 hover:text-[#E91E63] text-xs md:text-sm text-left transition">Return Policy</button>
                <button onClick={() => setShowFAQ(true)} className="text-gray-600 hover:text-[#E91E63] text-xs md:text-sm text-left transition">Account Management</button>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-bold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Product</h3>
              <div className="flex flex-col gap-2 items-center md:items-start">
                <button onClick={() => setShowFeatures(true)} className="text-gray-600 hover:text-[#E91E63] text-xs md:text-sm text-left transition">Features</button>
                <button onClick={() => setShowSizeGuide(true)} className="text-gray-600 hover:text-[#E91E63] text-xs md:text-sm text-left transition">Size Guide</button>
                <button onClick={() => setShowSustainability(true)} className="text-gray-600 hover:text-[#E91E63] text-xs md:text-sm text-left transition">Sustainability</button>
              </div>
            </div>
          </div>
      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-32 flex-col items-center gap-4">
        <button onClick={() => setShowPrivacy(true)} className="px-6 py-2 border border-gray-300 rounded hover:bg-[#E91E63] hover:text-white transition-colors text-sm">
          Privacy Policy
        </button>
        <div className="relative w-40 h-40 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: '3s' }}>
            <circle cx="80" cy="80" r="65" fill="none" stroke="black" strokeWidth="3" strokeDasharray="15 15" strokeLinecap="round" />
          </svg>
          <svg className="absolute inset-0 w-full h-full" style={{ animation: 'spin-reverse 4s linear infinite' }}>
            <circle cx="80" cy="80" r="73" fill="none" stroke="#E91E63" strokeWidth="3" strokeDasharray="20 20" strokeLinecap="round" />
          </svg>
          <img 
            src="/logo.png" 
            alt="Phreshy Logo" 
            className="w-32 h-auto relative z-10"
          />
        </div>
        <style jsx>{`
          @keyframes spin-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
        `}</style>
      </div>
        </div>
      </div>
      <div className="mt-8 md:mt-12 pt-6 border-t border-gray-200 text-center">
        <button onClick={() => setShowPrivacy(true)} className="md:hidden mb-4 px-6 py-2 border border-gray-300 rounded hover:bg-[#E91E63] hover:text-white transition-colors text-xs">
          Privacy Policy
        </button>
        <div className="md:hidden flex justify-center mb-4">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: '3s' }}>
              <circle cx="64" cy="64" r="52" fill="none" stroke="black" strokeWidth="2" strokeDasharray="12 12" strokeLinecap="round" />
            </svg>
            <svg className="absolute inset-0 w-full h-full" style={{ animation: 'spin-reverse 4s linear infinite' }}>
              <circle cx="64" cy="64" r="58" fill="none" stroke="#E91E63" strokeWidth="2" strokeDasharray="15 15" strokeLinecap="round" />
            </svg>
            <img 
              src="/logo.png" 
              alt="Phreshy Logo" 
              className="w-24 h-auto relative z-10"
            />
          </div>
        </div>
        <p className="text-xs md:text-sm text-gray-900">© {new Date().getFullYear()} Phreshy Beauty & Cosmetics. All rights reserved.</p>
      </div>

      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setShowPrivacy(false)}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
          <div className="relative bg-gradient-to-br from-white via-pink-50 to-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-slideUp" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gradient-to-r from-[#E91E63] to-[#C2185B] px-8 py-6 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-3">
                <span className="text-3xl animate-bounce">🔒</span>
                <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
              </div>
              <button onClick={() => setShowPrivacy(false)} className="text-white hover:bg-white/20 rounded-full p-2 transition-all hover:rotate-90 duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto max-h-[calc(90vh-100px)] px-8 py-6 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-[#E91E63] animate-slideRight">
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h3>
                <p className="text-gray-700">At PHRESHY Cosmetics, we respect your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or purchase our products.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-[#E91E63] animate-slideRight" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-[#E91E63] mb-2">Personal Information</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Shipping & billing address</li>
                      <li>Payment details</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#E91E63] mb-2">Automatic Information</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>IP address</li>
                      <li>Browser type</li>
                      <li>Device information</li>
                      <li>Cookies & usage data</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-[#E91E63] animate-slideRight" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Process and deliver your orders</li>
                  <li>Send order confirmations and updates</li>
                  <li>Improve our website and services</li>
                  <li>Respond to customer support inquiries</li>
                  <li>Send promotions (only if you opt in)</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-[#E91E63] animate-slideRight" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Payments</h3>
                <p className="text-gray-700">We do not store your full payment details. Payments are processed securely through trusted third-party payment providers.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-[#E91E63] animate-slideRight" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">5. Sharing Your Information</h3>
                <p className="text-gray-700 mb-2 font-semibold">We do not sell your personal data.</p>
                <p className="text-gray-700 mb-2">We may share limited information with:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Shipping partners (to deliver your order)</li>
                  <li>Payment processors</li>
                  <li>Legal authorities if required by law</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-[#E91E63] animate-slideRight" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">6. Cookies</h3>
                <p className="text-gray-700 mb-2">Our website uses cookies to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Improve user experience</li>
                  <li>Track website performance</li>
                  <li>Remember your preferences</li>
                </ul>
                <p className="text-gray-700 mt-2">You can disable cookies in your browser settings.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-[#E91E63] animate-slideRight" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">7. Data Security</h3>
                <p className="text-gray-700">We implement security measures to protect your information. However, no online transmission is 100% secure.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-[#E91E63] animate-slideRight" style={{ animationDelay: '0.7s' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">8. Your Rights</h3>
                <p className="text-gray-700 mb-2">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Request access to your data</li>
                  <li>Request correction of incorrect information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing emails anytime</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-[#E91E63] animate-slideRight" style={{ animationDelay: '0.8s' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3">9. Changes to This Policy</h3>
                <p className="text-gray-700">We may update this Privacy Policy from time to time. Updates will be posted on this page.</p>
              </div>
              <div className="bg-gradient-to-r from-[#E91E63] to-[#C2185B] rounded-2xl p-6 shadow-lg text-white animate-slideRight" style={{ animationDelay: '0.9s' }}>
                <h3 className="text-xl font-bold mb-3">10. Contact Us</h3>
                <p className="mb-2">If you have any questions about this Privacy Policy, Please visit Contact Us page and submit your questions.</p>
                <p className="font-semibold">PHRESHY Cosmetics<br />Best Beauty Items<br />Nakuru City, Naivasha.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features Popup */}
      {showFeatures && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowFeatures(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-lg"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full animate-fadeScale" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#E91E63] to-[#C2185B] px-6 md:px-8 py-4 md:py-6 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl">🛍</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">Product Features</h2>
              </div>
              <button onClick={() => setShowFeatures(false)} className="text-white hover:bg-white/20 rounded-full p-2 transition-all hover:rotate-90 duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <p className="text-sm md:text-base text-gray-700">Each product includes detailed features and usage instructions on the packaging and product container.</p>
              <p className="text-sm md:text-base text-gray-700">We strongly encourage customers to carefully read all instructions, ingredients, and warnings before use.</p>
              <div className="bg-pink-50 rounded-lg p-4">
                <p className="text-sm md:text-base font-semibold text-gray-900 mb-2">For best results:</p>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E91E63]">✓</span>
                    <span>Follow the recommended application instructions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E91E63]">✓</span>
                    <span>Perform a patch test where necessary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E91E63]">✓</span>
                    <span>Store products as directed on the packaging</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm md:text-base text-gray-600 italic">Reading the product label ensures safe and effective use.</p>
            </div>
          </div>
        </div>
      )}

      {/* Size Guide Popup */}
      {showSizeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowSizeGuide(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-lg"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full animate-fadeScale" onClick={(e) => e.stopPropagation()}>
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
            <div className="p-6 md:p-8 space-y-4">
              <p className="text-sm md:text-base text-gray-700">To help you choose the right product size:</p>
              <ul className="space-y-3 text-sm md:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#E91E63]">•</span>
                  <span>Product volume (e.g., 30ml, 50ml, 100ml) is clearly listed on each product page</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E91E63]">•</span>
                  <span>Dimensions and weight may also be provided where applicable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E91E63]">•</span>
                  <span>If unsure, compare the size details before placing your order</span>
                </li>
              </ul>
              <p className="text-sm md:text-base text-gray-600 italic">If you need assistance selecting the right size, our support team is happy to help.</p>
            </div>
          </div>
        </div>
      )}

      {/* Sustainability Popup */}
      {showSustainability && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowSustainability(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-lg"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full animate-fadeScale" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#E91E63] to-[#C2185B] px-6 md:px-8 py-4 md:py-6 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl">🌱</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">Sustainability</h2>
              </div>
              <button onClick={() => setShowSustainability(false)} className="text-white hover:bg-white/20 rounded-full p-2 transition-all hover:rotate-90 duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <p className="text-sm md:text-base text-gray-700">At PHRESHY Cosmetics, we are committed to making conscious choices that reduce environmental impact.</p>
              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm md:text-base font-semibold text-gray-900 mb-3">Our sustainability efforts may include:</p>
                <ul className="space-y-2 text-sm md:text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">🌿</span>
                    <span>Responsible ingredient sourcing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">📦</span>
                    <span>Minimal and recyclable packaging where possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">♻️</span>
                    <span>Reducing unnecessary plastic use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">🤝</span>
                    <span>Supporting ethical production practices</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm md:text-base text-gray-600 italic">We continuously work toward improving our environmental footprint while delivering high-quality beauty products.</p>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Popup */}
      {showFAQ && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowFAQ(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-lg"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-fadeScale" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-[#E91E63] to-[#C2185B] px-6 md:px-8 py-4 md:py-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl">❓</span>
                <h2 className="text-xl md:text-2xl font-bold text-white">Frequently Asked Questions</h2>
              </div>
              <button onClick={() => setShowFAQ(false)} className="text-white hover:bg-white/20 rounded-full p-2 transition-all hover:rotate-90 duration-300">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-center py-4 px-6">
              <p className="text-sm md:text-base text-gray-600">Everything you need to know about PHRESHY.</p>
            </div>
            <div className="overflow-y-auto max-h-[calc(90vh-180px)] p-4 md:p-6 space-y-3">
              {/* FAQ 1 */}
              <div className="border-b border-gray-200 pb-3">
                <button onClick={() => setOpenFAQ(openFAQ === 1 ? null : 1)} className="w-full px-4 md:px-6 py-3 md:py-4 bg-gray-50 hover:bg-pink-50 rounded-xl flex items-center justify-between transition-all duration-300 hover:shadow-md">
                  <span className="font-semibold text-gray-900 text-sm md:text-base text-left">How Do I Know My Skin Type?</span>
                  <span className="text-xl md:text-2xl text-[#E91E63] transition-transform duration-300" style={{ transform: openFAQ === 1 ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                </button>
                {openFAQ === 1 && (
                  <div className="px-4 md:px-6 py-3 md:py-4 bg-white text-xs md:text-sm text-gray-700 animate-fadeScale">
                    <p className="mb-3">Understanding your skin type helps you choose the right products:</p>
                    <ul className="list-disc list-inside space-y-2 mb-3">
                      <li><strong>Oily Skin:</strong> Shiny appearance, especially in T-zone (forehead, nose, chin)</li>
                      <li><strong>Dry Skin:</strong> Tight, flaky feeling, rough texture</li>
                      <li><strong>Combination:</strong> Oily T-zone with dry cheeks</li>
                      <li><strong>Sensitive:</strong> Prone to redness, irritation, or reactions</li>
                    </ul>
                    <div className="bg-pink-50 border-l-4 border-[#E91E63] p-3 rounded">
                      <p className="text-xs md:text-sm font-semibold text-gray-800">💡 Helpful Tip:</p>
                      <p className="text-xs md:text-sm text-gray-700">If unsure, cleanse your face and wait 30 minutes without applying products. Observe how it feels.</p>
                    </div>
                  </div>
                )}
              </div>
              {/* FAQ 2 */}
              <div className="border-b border-gray-200 pb-3">
                <button onClick={() => setOpenFAQ(openFAQ === 2 ? null : 2)} className="w-full px-4 md:px-6 py-3 md:py-4 bg-gray-50 hover:bg-pink-50 rounded-xl flex items-center justify-between transition-all duration-300 hover:shadow-md">
                  <span className="font-semibold text-gray-900 text-sm md:text-base text-left">Shipping & Delivery</span>
                  <span className="text-xl md:text-2xl text-[#E91E63] transition-transform duration-300" style={{ transform: openFAQ === 2 ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                </button>
                {openFAQ === 2 && (
                  <div className="px-4 md:px-6 py-3 md:py-4 bg-white text-xs md:text-sm text-gray-700 animate-fadeScale">
                    <ul className="space-y-2 mb-3">
                      <li><strong>Order Processing Time:</strong> 1–3 business days</li>
                      <li><strong>Delivery Timeline:</strong> 3–7 days (local)</li>
                      <li><strong>Tracking Availability:</strong> Yes, once your order ships</li>
                      <li><strong>What happens if there's a delay:</strong> We'll notify you immediately</li>
                    </ul>
                    <p className="text-xs md:text-sm text-gray-600 italic">📦 We'll always keep you updated via email once your order ships.</p>
                  </div>
                )}
              </div>
              {/* FAQ 3 */}
              <div className="border-b border-gray-200 pb-3">
                <button onClick={() => setOpenFAQ(openFAQ === 3 ? null : 3)} className="w-full px-4 md:px-6 py-3 md:py-4 bg-gray-50 hover:bg-pink-50 rounded-xl flex items-center justify-between transition-all duration-300 hover:shadow-md">
                  <span className="font-semibold text-gray-900 text-sm md:text-base text-left">Return Policy</span>
                  <span className="text-xl md:text-2xl text-[#E91E63] transition-transform duration-300" style={{ transform: openFAQ === 3 ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                </button>
                {openFAQ === 3 && (
                  <div className="px-4 md:px-6 py-3 md:py-4 bg-white text-xs md:text-sm text-gray-700 animate-fadeScale">
                    <p className="mb-3 font-semibold">Due to hygiene and safety reasons, we do not accept returns on opened or used cosmetic products.</p>
                    <p className="mb-2">We only accept returns if:</p>
                    <ul className="list-disc list-inside space-y-1 mb-3">
                      <li>The item was damaged during delivery</li>
                      <li>You received the wrong product</li>
                      <li>The item is defective</li>
                    </ul>
                    <p className="mb-3">You must request a return within 7 days of receiving your order.</p>
                    <div className="bg-pink-50 border-l-4 border-[#E91E63] p-3 rounded mb-3">
                      <p className="font-semibold mb-2">Return Process:</p>
                      <ul className="space-y-1">
                        <li>• Email us at support@phreshycosmetics.com</li>
                        <li>• Include your order number</li>
                        <li>• Attach clear photos of the item showing the issue</li>
                      </ul>
                    </div>
                    <p className="text-gray-600 italic">Our team will review your request within 2–3 business days.</p>
                  </div>
                )}
              </div>
              {/* FAQ 4 */}
              <div className="border-b border-gray-200 pb-3">
                <button onClick={() => setOpenFAQ(openFAQ === 4 ? null : 4)} className="w-full px-4 md:px-6 py-3 md:py-4 bg-gray-50 hover:bg-pink-50 rounded-xl flex items-center justify-between transition-all duration-300 hover:shadow-md">
                  <span className="font-semibold text-gray-900 text-sm md:text-base text-left">Managing My Account</span>
                  <span className="text-xl md:text-2xl text-[#E91E63] transition-transform duration-300" style={{ transform: openFAQ === 4 ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                </button>
                {openFAQ === 4 && (
                  <div className="px-4 md:px-6 py-3 md:py-4 bg-white text-xs md:text-sm text-gray-700 animate-fadeScale">
                    <p className="mb-3">You can log into your account dashboard to:</p>
                    <ul className="list-disc list-inside space-y-1 mb-3">
                      <li>Update your personal details</li>
                      <li>Change your shipping address</li>
                      <li>Track current orders</li>
                      <li>View order history</li>
                      <li>Reset your password</li>
                    </ul>
                    <p className="text-xs md:text-sm text-gray-600 mb-4 italic">Your dashboard gives you full control over your orders and details.</p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 md:p-4 rounded">
                      <p className="text-yellow-800 font-semibold text-xs md:text-sm mb-2">⚠️ Important Account Notice</p>
                      <p className="text-yellow-800 text-xs md:text-sm mb-2">To ensure fair use of our services, PHRESHY Cosmetics reserves the right to deactivate accounts that repeatedly place orders without completing payment or collecting the items.</p>
                      <p className="text-yellow-800 text-xs md:text-sm mb-2">If a customer places more than 10 orders and fails to pay for or pick up those orders, the account may be temporarily deactivated until further notice.</p>
                      <p className="text-yellow-800 text-xs md:text-sm mb-2">This policy helps us maintain reliable service for all customers.</p>
                      <p className="text-yellow-800 text-xs md:text-sm">If your account is affected and you believe this was an error, please contact our support team for assistance.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mission Popup */}
      {showMission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowMission(false)}>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowVision(false)}>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowValues(false)}>
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

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideRight {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes popBounce {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.4s ease-out; }
        .animate-slideRight { animation: slideRight 0.5s ease-out forwards; opacity: 0; }
        .animate-fadeScale { animation: fadeScale 0.3s ease-out; }
        .animate-popBounce { animation: popBounce 0.4s ease-out; }
      `}</style>
    </footer>
  );
};

export default Footer;
