"use client";

import { useUIStore } from "@/lib/store";

const NavbarSection = () => {
  const { isMenuOpen, setMenuOpen } = useUIStore();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-4 right-4 z-50">
      {/* Hamburger menu button */}
      <button
        onClick={toggleMenu}
        className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 flex items-center justify-center hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6">
          <span className={`absolute top-0 left-0 w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'
          }`}></span>
          <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
          <span className={`absolute top-5 left-0 w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-0'
          }`}></span>
        </div>
      </button>

      {/* Menu dropdown */}
      {isMenuOpen && (
        <div className="absolute top-14 right-0 bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl border border-white/20 overflow-hidden min-w-52 animate-in slide-in-from-top-2 duration-300">
          <div className="py-3">
            <button 
              className="block w-full px-6 py-4 text-gray-700 hover:text-pink-500 hover:bg-white/10 transition-all duration-300 text-center font-semibold text-base tracking-wide"
              onClick={() => {
                setMenuOpen(false);
                setTimeout(() => {
                  const element = document.getElementById('home');
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest'
                    });
                  }
                }, 150);
              }}
            >
              Home
            </button>

            <button 
              className="block w-full px-6 py-4 text-gray-700 hover:text-pink-500 hover:bg-white/10 transition-all duration-300 text-center font-semibold text-base tracking-wide"
              onClick={() => {
                setMenuOpen(false);
                setTimeout(() => {
                  const element = document.getElementById('features');
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest'
                    });
                  }
                }, 150);
              }}
            >
              Features
            </button>
            <button 
              className="block w-full px-6 py-4 text-gray-700 hover:text-pink-500 hover:bg-white/10 transition-all duration-300 text-center font-semibold text-base tracking-wide"
              onClick={() => {
                setMenuOpen(false);
                setTimeout(() => {
                  const element = document.getElementById('testimonials');
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest'
                    });
                  }
                }, 150);
              }}
            >
              Testimonials
            </button>
            <button 
              className="block w-full px-6 py-4 text-gray-700 hover:text-pink-500 hover:bg-white/10 transition-all duration-300 text-center font-semibold text-base tracking-wide"
              onClick={() => {
                setMenuOpen(false);
                setTimeout(() => {
                  const element = document.getElementById('pricing');
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest'
                    });
                  }
                }, 150);
              }}
            >
              Pricing
            </button>
            <button 
              className="block w-full px-6 py-4 text-gray-700 hover:text-pink-500 hover:bg-white/10 transition-all duration-300 text-center font-semibold text-base tracking-wide"
              onClick={() => {
                setMenuOpen(false);
                setTimeout(() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest'
                    });
                  }
                }, 150);
              }}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarSection; 