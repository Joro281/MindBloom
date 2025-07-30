"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import NavbarSection from "@/components/navbar-section";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import FeaturesSection from "@/components/features-section";
import MoodTrackerSection from "@/components/mood-tracker-section";
import TestimonialSection from "@/components/testimonial-section";
import BillingSection from "@/components/billing-section";
import FooterSection from "@/components/footer-section";

export default function Home() {
  const [showUpButton, setShowUpButton] = useState(false);

  // Show up button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowUpButton(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <NavbarSection />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <MoodTrackerSection />
        <TestimonialSection />
        <BillingSection />
      </main>
      <FooterSection />

      {/* Up Button */}
      {showUpButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </>
  );
}
