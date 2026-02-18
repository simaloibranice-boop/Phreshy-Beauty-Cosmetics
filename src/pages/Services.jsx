import { useEffect, useState } from 'react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.service-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Personalized Beauty Consultation",
      description: "We offer personalized beauty guidance to help you choose products that match your skin type, tone, and goals.",
      features: ["Skin type analysis", "Shade matching assistance", "Product recommendations", "Routine building support"],
      cta: "Book a Consultation"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Makeup Advisory",
      description: "Professional guidance on selecting shades, finishes, and products for different occasions.",
      features: ["Everyday glam", "Event-ready looks", "Bridal prep guidance", "Beginner-friendly routines"],
      cta: "Get Expert Advice"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Skincare Routine Planning",
      description: "We help you build a customized skincare routine based on your skin type, concerns, and lifestyle.",
      features: ["Skin type assessment", "Concern-focused solutions", "Morning & night routines", "Product layering guide"],
      cta: "Build My Routine"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: "Gift Packaging Services",
      description: "Make every purchase special with our premium gift packaging options.",
      features: ["Premium gift wrapping", "Personalized notes", "Special occasion packaging", "Luxury presentation"],
      cta: "Customize Your Gift"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: "Bulk & Wholesale Orders",
      description: "We provide bulk purchasing options for events, salons, and retail partners.",
      features: ["Competitive pricing", "Custom orders", "Salon partnerships", "Event packages"],
      cta: "Request Wholesale Pricing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
      {/* Falling Beauty Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-200 opacity-10 animate-beautyFall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              fontSize: `${20 + Math.random() * 20}px`
            }}
          >
            {['💄', '✨', '💎', '🌸', '💫'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      {/* Floating Gradient Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl animate-floatSlow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-floatSlow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200/20 rounded-full blur-3xl animate-floatSlow" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 pt-24 md:pt-32 pb-12 md:pb-20 px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20 animate-heroFadeIn">
          <div className="inline-block mb-3 md:mb-4">
            <span className="text-4xl md:text-5xl animate-sparkle">✨</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 animate-slideUpHero">
            Our Services
          </h1>
          <p className="text-base md:text-xl text-gray-600 px-4 animate-slideUpHero" style={{ animationDelay: '0.2s' }}>
            Elevate your beauty journey with personalized guidance and premium care
          </p>
        </div>

        {/* Service Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              data-index={index}
              className={`service-card bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-pink-100 group ${
                visibleCards.includes(String(index)) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-[#E91E63] mb-4 md:mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-[#E91E63] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-4 md:mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                    <span className="text-[#E91E63]">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2.5 md:py-3 bg-gradient-to-r from-[#E91E63] to-[#C2185B] text-white rounded-full font-medium text-sm md:text-base hover:shadow-lg hover:scale-105 transition-all duration-300 group-hover:animate-breathe">
                {service.cta}
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-pink-100 animate-ctaFadeIn">
          <div className="mb-3 md:mb-4">
            <span className="text-3xl md:text-4xl animate-pulse">💖</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
            We've got you. Our beauty experts are here to guide you every step of the way.
          </p>
          <button className="px-8 md:px-12 py-3 md:py-4 bg-gradient-to-r from-[#E91E63] to-[#C2185B] text-white rounded-full font-bold text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-breathe">
            Get Started
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes beautyFall {
          0% {
            transform: translateY(-100px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.15;
          }
          90% {
            opacity: 0.15;
          }
          100% {
            transform: translateY(100vh) translateX(30px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUpHero {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.2) rotate(180deg);
            opacity: 0.8;
          }
        }

        @keyframes breathe {
          0%, 100% {
            box-shadow: 0 0 20px rgba(233, 30, 99, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(233, 30, 99, 0.6);
          }
        }

        @keyframes ctaFadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-beautyFall {
          animation: beautyFall linear infinite;
        }

        .animate-floatSlow {
          animation: floatSlow 20s ease-in-out infinite;
        }

        .animate-heroFadeIn {
          animation: heroFadeIn 0.6s ease-out;
        }

        .animate-slideUpHero {
          animation: slideUpHero 0.6s ease-out backwards;
        }

        .animate-sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }

        .animate-breathe {
          animation: breathe 2s ease-in-out infinite;
        }

        .animate-ctaFadeIn {
          animation: ctaFadeIn 0.8s ease-out 0.5s backwards;
        }
      `}</style>
    </div>
  );
};

export default Services;
