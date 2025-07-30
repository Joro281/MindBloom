"use client";

import { Button } from "@/components/ui/button";
import { Heart, Brain, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AuthModal from "./auth-modal";
import { useUIStore } from "@/lib/store";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const { isAuthModalOpen, setAuthModalOpen } = useUIStore();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white opacity-90"
        style={{
          backgroundImage: `url('/images/hero-wellness.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Floating Elements with Parallax */}
      <div
        className="absolute inset-0 z-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)` // Parallax effect
        }}
      >
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200/20 rounded-full animate-pulse transition-all duration-700 ease-in-out" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-purple-200/20 rounded-full animate-bounce transition-all duration-700 ease-in-out" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-indigo-200/30 rounded-full animate-pulse transition-all duration-700 ease-in-out" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content with Parallax */}
      <div
        className="relative z-20 max-w-4xl mx-auto px-6 text-center"
        style={{
          transform: `translateY(${scrollY * 0.1}px)` // Parallax effect
        }}
      >
        <div className="mb-8 flex justify-center">
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 transition-all duration-500 ease-in-out hover:bg-white/20 hover:scale-105">
            <Heart className="w-5 h-5 text-blue-600 transition-colors duration-300" />
            <span className="text-gray-800 font-medium transition-colors duration-300">Your Mental Wellness Journey Starts Here</span>
            <Sparkles className="w-5 h-5 text-purple-600 transition-colors duration-300" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight transition-all duration-700 ease-in-out">
          MindBloom
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-4 font-light transition-all duration-700 ease-in-out">
          Your AI-powered mental wellness companion
        </p>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-in-out">
          Discover personalized insights, connect with licensed professionals, and build lasting wellness habits with our comprehensive mental health platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 ease-in-out">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all duration-500 text-lg px-10 py-7 rounded-2xl font-semibold hover:scale-105 border-0"
            onClick={() => setAuthModalOpen(true)}
          >
            <Brain className="w-6 h-6 mr-3 animate-pulse" />
            Start Your Journey
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white/90 backdrop-blur-md border-2 border-gray-200/50 text-gray-800 hover:bg-white hover:border-pink-300 hover:text-pink-600 transition-all duration-500 text-lg px-10 py-7 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            onClick={() => {
              document.getElementById('pricing')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            Learn More
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex justify-center items-center space-x-8 text-sm text-gray-600 transition-all duration-700 ease-in-out">
          <div className="flex items-center space-x-2 hover:text-gray-800 transition-colors duration-300">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Licensed Therapists</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-gray-800 transition-colors duration-300">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Privacy Protected</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-gray-800 transition-colors duration-300">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection; 