"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-gradient-to-br from-white via-pink-50 to-purple-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Text Content - Left Side */}
          <div className="flex-1 text-left">
            <div className="space-y-8">
              <div className="relative">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
                  <span className="text-sm font-light text-gray-500 tracking-[0.3em] uppercase">Thrive</span>
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empowering Your{" "}
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Mental Wellness
                </span>{" "}
                Journey
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                At MindBloom, we offer a holistic approach to mental wellness. Our services are designed to support you in achieving your mental health goals through personalized insights and expert guidance.
              </p>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="flex-1">
            <div className="relative">
              {/* Image container with enhanced styling */}
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/pink.jpg"
                  alt="Mental wellness journey"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg"></div>
              
              {/* Background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl -z-10 transform -rotate-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 