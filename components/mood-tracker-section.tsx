"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Smile, Meh, Frown, Calendar, TrendingUp, Zap } from "lucide-react";
import { Brain, Heart, Sun } from "lucide-react";
import { useRef } from "react";

const MoodTrackerSection = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [note, setNote] = useState("");

  const moods = [
    { 
      id: "great", 
      icon: Smile, 
      label: "Great", 
      subtitle: "Feeling fantastic!",
      color: "text-pink-500", 
      bgColor: "bg-pink-50", 
      borderColor: "border-pink-200" 
    },
    { 
      id: "good", 
      icon: Smile, 
      label: "Good", 
      subtitle: "Pretty good day",
      color: "text-purple-500", 
      bgColor: "bg-purple-50", 
      borderColor: "border-purple-200" 
    },
    { 
      id: "okay", 
      icon: Meh, 
      label: "Okay", 
      subtitle: "Just average",
      color: "text-gray-500", 
      bgColor: "bg-white", 
      borderColor: "border-gray-200" 
    },
    { 
      id: "low", 
      icon: Frown, 
      label: "Low", 
      subtitle: "Could be better",
      color: "text-indigo-500", 
      bgColor: "bg-indigo-50", 
      borderColor: "border-indigo-200" 
    },
  ];

  const insights = [
    { label: "Mood improvement", value: "+15%", color: "bg-pink-100 text-pink-700" },
    { label: "Streak of good days", value: "7 days", color: "bg-purple-100 text-purple-700" },
    { label: "Average mood score", value: "4.2/5", color: "bg-indigo-100 text-indigo-700" },
  ];

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId);
    setNote(""); // Clear note when selecting a new mood
  };

  const handleLogMood = () => {
    if (selectedMood) {
      console.log("Mood logged:", selectedMood, "Note:", note);
      setSelectedMood(null);
      setNote("");
    }
  };

  // New insights for the card layout
  const insightsCards = [
    {
      icon: <Brain className="w-7 h-7 text-pink-400 mb-2" />, 
      title: "7-Day Trend",
      description: "Generally positive with some ups and downs"
    },
    {
      icon: <Heart className="w-7 h-7 text-purple-400 mb-2" />, 
      title: "Patterns",
      description: "Mornings tend to be your best time"
    },
    {
      icon: <Sun className="w-7 h-7 text-yellow-400 mb-2" />, 
      title: "Suggestion",
      description: "Try a 5-minute breathing exercise"
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-pink-50 to-purple-50 min-h-[350px] py-24 px-1 sm:px-2 lg:px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-200 to-pink-200 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="max-w-[2000px] mx-auto relative z-10 w-full">
        {/* Global Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
            <span className="text-sm font-light text-gray-500 tracking-[0.3em] uppercase">Mood Tracker</span>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-800">Track Your </span>
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Emotional Journey</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our AI analyzes your mood patterns to provide personalized insights and recommendations for your mental wellness journey.
          </p>
        </div>

        {/* Two Column Layout: Mood Selection | [AI Analysis + Mood Insights] */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch justify-center w-full">
          {/* Left Column: Mood Selection */}
          <div className="flex-1 min-w-[300px] w-full">
            <Card className="p-6 bg-white/90 border-0 shadow-xl rounded-2xl h-full flex flex-col justify-center w-full">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-purple-400" />
                <h2 className="text-lg font-bold text-gray-800">How are you feeling today?</h2>
              </div>
              <p className="text-gray-600 mb-4 text-sm">Select your current mood to track your emotional patterns.</p>
              {/* Mood Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {moods.map((mood) => {
                  const IconComponent = mood.icon;
                  const isSelected = selectedMood === mood.id;
                  return (
                    <button
                      key={mood.id}
                      onClick={() => handleMoodSelect(mood.id)}
                      className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300/50 ${
                        isSelected
                          ? `${mood.bgColor} ${mood.borderColor} shadow-lg`
                          : 'border-gray-200 bg-white hover:border-pink-200'
                      }`}
                    >
                      <IconComponent className={`w-7 h-7 ${mood.color} mb-2`} />
                      <span className="font-bold text-gray-800 text-sm mb-0.5">{mood.label}</span>
                      <span className="text-xs text-gray-600">{mood.subtitle}</span>
                    </button>
                  );
                })}
              </div>

              {/* Mood Note Textarea */}
              {selectedMood && (
                <div className="mb-4">
                  <textarea
                    className="w-full min-h-[60px] rounded-xl border border-pink-200 bg-pink-50 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300/50 resize-none placeholder:text-pink-300"
                    placeholder="Add a note or reflection about your mood..."
                    value={note}
                    onChange={e => setNote(e.target.value)}
                  />
                </div>
              )}

              {/* Log Mood Button */}
              <Button 
                onClick={handleLogMood}
                disabled={!selectedMood}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Log Today's Mood
              </Button>
            </Card>
          </div>

          {/* Right Column: AI Analysis + Mood Insights */}
          <div className="flex-1 min-w-[300px] w-full flex flex-col gap-6">
            {/* AI Analysis Card */}
            <div className="relative w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-white rounded-3xl"></div>
              <div className="relative h-full flex items-center justify-center p-6">
                <Card className="p-6 bg-white/90 border-0 shadow-xl rounded-2xl w-full">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-6 h-6 text-pink-500" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-800 mb-2">AI-Powered Analysis</h2>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      Our intelligent system learns from your patterns to provide meaningful insights about your emotional well-being.
                    </p>
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                      Learn More
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
            {/* Mood Insights Card */}
           <Card className="p-6 bg-white/90 border-0 shadow-none rounded-2xl w-full">
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
               {insightsCards.map((card, idx) => (
                 <div
                   key={idx}
                   className="flex-1 flex flex-col items-center justify-center text-center bg-gradient-to-br from-pink-50 via-purple-50 to-white rounded-2xl border-2 border-transparent shadow-md px-4 py-7 min-w-[180px] transition-transform duration-200 hover:scale-105 hover:shadow-xl"
                   style={{ boxShadow: '0 2px 16px 0 rgba(186, 148, 255, 0.10)' }}
                 >
                   {card.icon}
                   <div className="font-semibold text-gray-800 mb-1 text-base">{card.title}</div>
                   <div className="text-gray-500 text-sm leading-snug">{card.description}</div>
                 </div>
               ))}
             </div>
           </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodTrackerSection; 