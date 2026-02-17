import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-end -mt-24">
        <div className="absolute inset-0 -z-10">
          <img
            src="/hero-bg.jpg"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-2xl mr-64 px-8 text-left">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest text-gray-900 font-medium">
              Winter Offers Running
            </p>
            
            <h1 className="text-6xl font-bold text-gray-900 leading-tight whitespace-nowrap">
              BEST BEAUTY ITEMS
            </h1>
            
            <p className="text-gray-900 text-lg leading-relaxed">
              Discover our curated collection of premium skincare and beauty essentials, 
              crafted with natural ingredients for your radiant glow.
            </p>
            
            <div className="flex items-center gap-6 pt-4">
              <Link to="/shop">
                <button className="px-8 py-4 bg-[#E91E63] text-white rounded-full hover:bg-[#C2185B] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Start Shopping
                </button>
              </Link>
              
              <Link to="/shop" className="text-gray-900 hover:text-gray-700 transition-colors duration-300 underline underline-offset-4">
                See Our Offers
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Natural Organic Skin Care Section */}
      <div className="bg-[#FAF8F6] py-24">
        <div className="max-w-7xl mx-auto px-16">
          <div className="grid grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-pink-300 rounded-2xl animate-pulse opacity-30"></div>
              <img 
                src="/Product.jpg" 
                alt="Natural Skincare Product" 
                className="relative w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Natural Organic<br />Skin Care
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                Every treatment is specifically designed to offer a unique experience, 
                combining nature's finest ingredients with modern skincare science.
              </p>
              
              <div className="space-y-6 pt-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-[#8B9D83]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No Chemicals, 100% Pure</h3>
                    <p className="text-gray-600">Formulated with natural ingredients only, free from harmful additives and synthetic chemicals.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-[#8B9D83]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Real Results</h3>
                    <p className="text-gray-600">Proven effectiveness backed by science, delivering visible improvements to your skin.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-[#8B9D83]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Allergen-Free Cosmetics</h3>
                    <p className="text-gray-600">Safe for sensitive skin, dermatologically tested to prevent irritation and allergic reactions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop By Categories Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-16">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Shop By Categories</h2>
          
          <div className="grid grid-cols-7 gap-6">
            {['Skin Cream', 'Shower Gel', 'Aging Cleanser', 'Serum', 'Eye Cream', 'Hair Care', 'Facewash'].map((category) => (
              <Link key={category} to="/shop" className="group">
                <div className="bg-[#FAF8F6] rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#8B9D83]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Sustainability Section */}
      <div className="bg-[#FAF8F6] py-24">
        <div className="max-w-7xl mx-auto px-16">
          <div className="grid grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1661346376364-706a9eac60ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Sustainability" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <p className="text-sm text-[#8B9D83] font-medium">Welcome to Beauty Store!</p>
              
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                Our Commitment to Sustainability
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                We want to meet the needs of the present without jeopardizing future generations. 
                Our commitment to sustainability drives every decision we make, from sourcing ingredients 
                to packaging design, ensuring a better tomorrow for all.
              </p>
              
              <Link to="/about">
                <button className="px-8 py-3 bg-[#E91E63] text-white rounded-full hover:bg-[#C2185B] transition-all duration-300 shadow-lg hover:shadow-xl">
                  More About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-16">
          <div className="relative">
            <img 
              src="/Newsletter.jpg" 
              alt="Newsletter" 
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 flex flex-col pt-16 pl-16">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-gray-900">Join Our Newsletter</h2>
                <p className="text-lg text-gray-700">Subscribe to our newsletter to receive products announcements</p>
              </div>
              
              <div className="flex flex-col items-start justify-center mt-16 gap-12 ml-0">
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-80 border-b-2 border-gray-900 bg-transparent focus:outline-none py-2"
                />
                
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-80 border-b-2 border-gray-900 bg-transparent focus:outline-none py-2"
                />
                
                <button className="px-12 py-3 border-2 border-[#E91E63] text-gray-900 rounded-[10px] hover:bg-[#E91E63] hover:text-white transition-all duration-300 font-semibold">
                  SUBSCRIBE
                </button>
                
                <div className="relative flex gap-4 items-center mt-8">
                  {/* Traveling Lights */}
                  <div className="absolute bottom-0 w-3 h-3 bg-yellow-300 rounded-full shadow-lg shadow-yellow-500 light-left"></div>
                  <div className="absolute bottom-0 w-3 h-3 bg-yellow-300 rounded-full shadow-lg shadow-yellow-500 light-right"></div>
                  
                  {/* Floating Particles */}
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="absolute bottom-0 particle" style={{left: `${Math.random() * 100}%`}}>
                      <span className="text-2xl">{i % 2 === 0 ? '❄️' : '🌲'}</span>
                    </div>
                  ))}
                  
                  <h3 className="text-4xl font-bold text-[#E91E63] tracking-wider bounce-word">
                    PHRESHY
                  </h3>
                  <h3 className="text-4xl font-bold text-[#E91E63] tracking-wider bounce-word">
                    COSMETICS
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
