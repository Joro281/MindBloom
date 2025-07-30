"use client";

import { useState, useEffect } from "react";
import { User, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    avatar: "/images/joy.jpg",
    name: "Sarah Chen",
    date: "January 15, 2025",
    rating: 5,
    title: "Finally found my peace",
    body: "MindBloom's guided meditation sessions and mood tracking helped me break free from anxiety. The personalized wellness plans are exactly what I needed to build healthy habits."
  },
  {
    avatar: "/images/mood.jpg",
    name: "Marcus Rodriguez",
    date: "March 5, 2024",
    rating: 5,
    title: "Life-changing journey",
    body: "From struggling with stress to finding inner calm - MindBloom's holistic approach transformed my mental health. The community support and expert guidance are incredible."
  },
  {
    avatar: "/images/pink.jpg",
    name: "Emma Thompson",
    date: "February 20, 2024",
    rating: 5,
    title: "Mindful living made simple",
    body: "The daily mindfulness practices and breathing exercises have become my morning ritual. I feel more centered and present throughout my day thanks to MindBloom."
  },
  {
    avatar: null,
    name: "David Kim",
    date: "April 10, 2024",
    rating: 5,
    title: "Science-backed wellness",
    body: "As someone who values evidence-based approaches, I love how MindBloom combines proven techniques with modern technology. The progress tracking keeps me motivated."
  },
  {
    avatar: null,
    name: "Lisa Park",
    date: "May 15, 2024",
    rating: 5,
    title: "My mental health sanctuary",
    body: "MindBloom feels like a safe space where I can explore my emotions without judgment. The guided journaling and reflection tools have been incredibly healing."
  },
  {
    avatar: null,
    name: "James Wilson",
    date: "June 5, 2024",
    rating: 5,
    title: "Stress management breakthrough",
    body: "After trying countless apps, MindBloom finally helped me develop sustainable stress management techniques. The personalized approach makes all the difference."
  },
  {
    avatar: null,
    name: "Aisha Patel",
    date: "July 25, 2024",
    rating: 5,
    title: "Building resilience daily",
    body: "MindBloom's resilience-building exercises and positive psychology practices have helped me navigate life's challenges with greater strength and optimism."
  },
  {
    avatar: null,
    name: "Michael Chang",
    date: "August 12, 2024",
    rating: 5,
    title: "Sleep quality transformed",
    body: "The sleep meditation sessions and relaxation techniques have dramatically improved my sleep quality. I wake up feeling refreshed and ready to tackle the day."
  },
  {
    avatar: null,
    name: "Rachel Green",
    date: "September 3, 2024",
    rating: 5,
    title: "Emotional intelligence growth",
    body: "MindBloom's emotional awareness exercises and self-reflection tools have helped me understand myself better and improve my relationships with others."
  },
  {
    avatar: null,
    name: "Sophia Martinez",
    date: "October 18, 2024",
    rating: 5,
    title: "Anxiety relief breakthrough",
    body: "MindBloom's anxiety management tools and cognitive behavioral techniques have given me the tools I need to manage my anxiety effectively. I feel more in control."
  },
  {
    avatar: null,
    name: "Alex Johnson",
    date: "November 7, 2024",
    rating: 5,
    title: "Depression recovery support",
    body: "The depression support features and mood tracking have been crucial in my recovery journey. MindBloom's compassionate approach makes healing feel possible."
  },
  {
    avatar: null,
    name: "Maria Garcia",
    date: "December 12, 2024",
    rating: 5,
    title: "Work-life balance achieved",
    body: "MindBloom helped me establish healthy boundaries and work-life balance. The stress management tools are perfect for busy professionals like me."
  },
  {
    avatar: null,
    name: "Kevin Lee",
    date: "January 8, 2025",
    rating: 5,
    title: "Mindfulness for beginners",
    body: "As someone new to mindfulness, MindBloom made it accessible and enjoyable. The guided sessions are perfect for beginners and the progress is noticeable."
  },
  {
    avatar: null,
    name: "Jennifer Adams",
    date: "February 3, 2025",
    rating: 5,
    title: "Relationship improvement",
    body: "MindBloom's emotional intelligence tools have improved my relationships significantly. I communicate better and understand others more deeply."
  },
  {
    avatar: null,
    name: "Carlos Rodriguez",
    date: "March 1, 2025",
    rating: 5,
    title: "Addiction recovery support",
    body: "MindBloom's recovery-focused features and community support have been invaluable in my sobriety journey. The mindfulness practices help with cravings."
  },
  {
    avatar: null,
    name: "Amanda Foster",
    date: "April 5, 2025",
    rating: 5,
    title: "PTSD healing journey",
    body: "The trauma-informed approach and grounding exercises have been essential in my PTSD recovery. MindBloom provides a safe space for healing."
  },
  {
    avatar: null,
    name: "Robert Chen",
    date: "May 12, 2025",
    rating: 5,
    title: "Academic stress relief",
    body: "As a student, MindBloom's study stress management tools and focus techniques have helped me perform better academically while maintaining mental health."
  },
  {
    avatar: null,
    name: "Natalie Williams",
    date: "June 20, 2025",
    rating: 5,
    title: "Parenting with mindfulness",
    body: "MindBloom's parenting stress tools and patience-building exercises have made me a more present and patient parent. My family relationships have improved."
  },
  {
    avatar: null,
    name: "Thomas Brown",
    date: "July 15, 2025",
    rating: 5,
    title: "Grief processing support",
    body: "MindBloom's grief support features and compassionate community have helped me process loss in a healthy way. The healing journey feels supported."
  },
  {
    avatar: null,
    name: "Isabella Silva",
    date: "August 28, 2025",
    rating: 5,
    title: "Self-confidence boost",
    body: "MindBloom's self-esteem building exercises and positive psychology practices have helped me develop a healthier self-image and greater confidence."
  },
  {
    avatar: null,
    name: "Daniel Kim",
    date: "September 10, 2025",
    rating: 5,
    title: "Career transition support",
    body: "During my career change, MindBloom's stress management and confidence-building tools helped me navigate uncertainty with resilience and clarity."
  },
  {
    avatar: null,
    name: "Olivia Taylor",
    date: "October 5, 2025",
    rating: 5,
    title: "Chronic pain management",
    body: "MindBloom's pain management techniques and stress reduction tools have helped me cope with chronic pain more effectively. Quality of life improved significantly."
  },
  {
    avatar: null,
    name: "Ethan Davis",
    date: "November 18, 2025",
    rating: 5,
    title: "Social anxiety breakthrough",
    body: "MindBloom's social anxiety tools and exposure therapy techniques have helped me overcome social fears and build meaningful connections."
  },
  {
    avatar: null,
    name: "Grace Wilson",
    date: "December 8, 2025",
    rating: 5,
    title: "Mindful eating journey",
    body: "MindBloom's mindful eating practices and emotional eating awareness tools have transformed my relationship with food and body image."
  },
  {
    avatar: null,
    name: "Lucas Anderson",
    date: "January 22, 2026",
    rating: 5,
    title: "Creative block breakthrough",
    body: "MindBloom's creativity enhancement tools and stress reduction techniques have helped me overcome creative blocks and find inspiration again."
  },
  {
    avatar: null,
    name: "Zoe Thompson",
    date: "February 14, 2026",
    rating: 5,
    title: "Aging with grace",
    body: "MindBloom's age-appropriate mindfulness practices and cognitive health tools have helped me maintain mental sharpness and emotional well-being."
  },
  {
    avatar: null,
    name: "Mason Clark",
    date: "March 8, 2026",
    rating: 5,
    title: "Digital wellness balance",
    body: "MindBloom's digital detox features and screen time management tools have helped me find a healthy balance with technology and social media."
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Move to the next group of 3 testimonials
        const nextIndex = prevIndex + 3;
        // If we're at the end, loop back to the beginning
        if (nextIndex >= testimonials.length) {
          return 0;
        }
        // Otherwise, continue to the next group
        return nextIndex;
      });
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 flex flex-col items-center justify-center bg-gradient-to-br from-[#f3e8ff] to-[#e9d5ff] relative px-8 overflow-hidden">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          <span className="text-sm font-light text-gray-500 tracking-[0.3em] uppercase">Testimonials</span>
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
          What Our Users Say
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mx-auto">
          Real experiences from people who've found peace, growth, and balance with MindBloom.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl">

        {/* Testimonials Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <div 
              key={`${currentIndex}-${index}`} 
              className={`bg-white rounded-lg shadow-lg px-6 py-4 border border-gray-100 transform transition-all duration-500 hover:scale-105 ${
                index === 0 ? 'rotate-1' : index === 1 ? '-rotate-1' : 'rotate-2'
              }`}
            >
              {/* Testimonial Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    {testimonial.avatar ? (
                      <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="rounded-full object-cover w-12 h-12" />
                    ) : (
                      <User className="w-12 h-12 text-pink-300 bg-pink-50 rounded-full p-2" />
                    )}
                  </div>
                  {/* User Info */}
                  <div className="flex flex-col justify-center">
                    <span className="font-semibold text-gray-800 text-base leading-tight">{testimonial.name}</span>
                    <span className="text-xs text-gray-400 leading-tight">{testimonial.date}</span>
                  </div>
                </div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-300" : "text-gray-200"}`} fill={i < testimonial.rating ? "#fde68a" : "none"} />
                  ))}
                </div>
                <div className="font-bold text-lg text-gray-900 mb-2 leading-tight">{testimonial.title}</div>
                <div className="text-gray-700 text-sm leading-relaxed">{testimonial.body}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(index * 3);
                // Resume auto-play after 5 seconds of inactivity
                setTimeout(() => {
                  setIsAutoPlaying(true);
                }, 5000);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 3) === index 
                  ? 'bg-pink-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 