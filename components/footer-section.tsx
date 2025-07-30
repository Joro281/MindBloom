"use client";

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";
import Link from "next/link";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <Heart className="w-8 h-8 text-blue-300 mr-2" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  MindBloom
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your AI-powered mental wellness companion. Discover personalized insights, connect with licensed professionals, and build lasting wellness habits.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <span className="text-gray-400 hover:text-pink-400 transition-colors duration-300 p-1 rounded-lg hover:bg-gray-800 cursor-pointer">
                <Facebook className="w-5 h-5" />
              </span>
              <span className="text-gray-400 hover:text-pink-400 transition-colors duration-300 p-1 rounded-lg hover:bg-gray-800 cursor-pointer">
                <Twitter className="w-5 h-5" />
              </span>
              <span className="text-gray-400 hover:text-pink-400 transition-colors duration-300 p-1 rounded-lg hover:bg-gray-800 cursor-pointer">
                <Instagram className="w-5 h-5" />
              </span>
              <span className="text-gray-400 hover:text-pink-400 transition-colors duration-300 p-1 rounded-lg hover:bg-gray-800 cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </span>
            </div>
          </div>



          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-base flex items-center group cursor-pointer">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  AI Wellness Companion
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-base flex items-center group cursor-pointer">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Licensed Therapy
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-base flex items-center group cursor-pointer">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Mood Tracking
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-base flex items-center group cursor-pointer">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Meditation Sessions
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-base flex items-center group cursor-pointer">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Family Wellness
                </span>
              </li>
              <li>
                <span className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-base flex items-center group cursor-pointer">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-125 transition-transform"></span>
                  Community Support
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get In Touch</h4>
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <div className="p-2 bg-pink-500/10 rounded-lg">
                  <Mail className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Email</p>
                  <span className="text-gray-300 text-base">hello@mindbloom.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <div className="p-2 bg-pink-500/10 rounded-lg">
                  <Phone className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Phone</p>
                  <span className="text-gray-300 text-base">+1 (555) 123-4567</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                <div className="p-2 bg-pink-500/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Location</p>
                  <span className="text-gray-300 text-base">San Francisco, CA</span>
                </div>
              </div>
            </div>
            

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} MindBloom. All rights reserved.</span>
              <span>•</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-pink-400 fill-current" />
              <span>for mental wellness</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-400 hover:text-pink-400 transition-colors cursor-pointer">
                Privacy Policy
              </span>
              <span className="text-gray-400 hover:text-pink-400 transition-colors cursor-pointer">
                Terms of Service
              </span>
              <span className="text-gray-400 hover:text-pink-400 transition-colors cursor-pointer">
                Cookie Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection; 