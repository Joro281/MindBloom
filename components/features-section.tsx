"use client";

import Image from "next/image";


const features = [
  {
    category: "AI",
    title: "AI-Powered Insights",
    description: "Advanced mood analysis and personalized recommendations based on your unique patterns and goals.",
    image: "/images/mood.jpg"
  },
  {
    category: "Therapists",
    title: "Licensed Therapists",
    description: "Connect with verified mental health professionals through secure video calls or anonymous chat.",
    image: "/images/therapist.jpg"
  },
  {
    category: "Community",
    title: "Supportive Community",
    description: "Join moderated forums and support groups to share experiences and find understanding.",
    image: "/images/pink.jpg"
  },
  {
    category: "Mindfulness",
    title: "Mindfulness Toolkit",
    description: "Access guided meditations, breathing exercises, and sleep stories tailored to your needs.",
    image: "/images/toolkit.jpg"
  },
  {
    category: "Privacy",
    title: "Privacy First",
    description: "Your mental health data is encrypted and protected with industry-leading security measures.",
    image: "/images/privacy.jpg"
  },
  {
    category: "Personalization",
    title: "Personalized Plans",
    description: "Receive custom wellness routines and daily challenges designed for your mental health journey.",
    image: "/images/community.jpg"
  },
];

const FeaturesSection = () => {
  
  return (
    <section id="features" className="relative min-h-[600px] bg-gradient-to-br from-[#f3e8ff] to-[#e9d5ff] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Whiteboard Title */}
        <div className="text-center mb-16">
          <div className="relative mb-6">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
              <span className="text-sm font-light text-gray-500 tracking-[0.3em] uppercase">Features</span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Everything You Need for Mental Wellness
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines AI technology, professional expertise, and community support to help you thrive.
          </p>
        </div>

        {/* Whiteboard Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
          {features.map((feature, idx) => {
            const rotations = [
              "-rotate-2",
              "rotate-1",
              "rotate-2",
              "-rotate-1",
              "rotate-3",
              "-rotate-3"
            ];
            return (
              <div
                key={idx}
                className={`bg-white/90 shadow-xl rounded-2xl p-6 border border-pink-100 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer flex flex-col items-center ${rotations[idx % rotations.length]}`}
              >
                <div className="w-full h-32 mb-4 rounded-xl overflow-hidden shadow-md bg-gray-100 flex items-center justify-center">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={250}
                    height={128}
                    className="object-cover w-full h-full"
                    priority={idx === 0}
                  />
                </div>
                <p className="text-xs font-semibold text-pink-500 mb-2 tracking-widest uppercase">
                  {feature.category}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base text-center">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Decorative Doodles */}
      <div className="pointer-events-none select-none absolute inset-0 z-0">
        <div className="absolute left-10 top-10 w-24 h-24 bg-pink-100 rounded-full opacity-30 blur-2xl"></div>
        <div className="absolute right-20 bottom-20 w-32 h-32 bg-purple-100 rounded-full opacity-30 blur-2xl"></div>
      </div>
    </section>
  );
};

export default FeaturesSection; 