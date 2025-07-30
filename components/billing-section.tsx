"use client";

import { Check, Star, ChevronDown } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "forever",
    description: "Perfect for getting started with mindfulness",
    features: [
      "5 guided meditation sessions",
      "Basic mood tracking",
      "Daily mindfulness reminders",
      "Community access",
      "Email support"
    ],
    popular: false,
    buttonText: "Get Started",
    buttonVariant: "outline"
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "per month",
    yearlyPrice: "$95.90",
    description: "Most popular choice for serious wellness seekers",
    features: [
      "Unlimited guided sessions",
      "Advanced mood analytics",
      "Personalized wellness plans",
      "Priority community access",
      "1-on-1 coaching sessions",
      "Sleep tracking & insights",
      "Stress management tools",
      "24/7 priority support"
    ],
    popular: true,
    buttonText: "Start Free Trial",
    buttonVariant: "primary"
  },
  {
    name: "Family",
    price: "$19.99",
    period: "per month",
    yearlyPrice: "$191.90",
    description: "Wellness for the whole family",
    features: [
      "Everything in Premium",
      "Up to 6 family members",
      "Family wellness challenges",
      "Parent-child meditation sessions",
      "Family mood insights",
      "Shared wellness goals",
      "Family support group access",
      "Dedicated family coach"
    ],
    popular: false,
    buttonText: "Start Free Trial",
    buttonVariant: "outline"
  }
];

const BillingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-white via-pink-50 to-purple-50 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          <span className="text-sm font-light text-gray-500 tracking-[0.3em] uppercase">Pricing</span>
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          <span className="text-gray-900">Choose Your </span>
          <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Wellness Journey</span>
        </h2>
        <p className="text-xl text-gray-800 max-w-2xl mx-auto leading-relaxed mb-8">
          Start your path to mental wellness with flexible plans designed for every stage of your journey.
        </p>
        
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-pink-200 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
            Yearly
            <span className="ml-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Save 20%</span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-4 sm:p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-pink-300 shadow-pink-100 scale-105' 
                  : 'border-gray-200 hover:border-pink-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    <span className="hidden lg:inline">Most Popular</span>
                    <span className="lg:hidden">Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-3">
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {plan.name === "Basic" ? plan.price : billingCycle === 'monthly' ? plan.price : plan.yearlyPrice}
                  </span>
                  <span className="text-gray-700 ml-1 text-sm sm:text-base">
                    /{plan.name === "Basic" ? plan.period : billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                <p className="text-gray-800 text-xs sm:text-sm">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-pink-300 hover:text-pink-600'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              question: "How does MindBloom protect my privacy?",
              answer: "Your privacy is our top priority. All data is encrypted, HIPAA-compliant, and never shared with third parties."
            },
            {
              question: "Are the therapists licensed professionals?",
              answer: "Yes, all therapists on MindBloom are licensed, verified professionals with extensive experience in mental health."
            },
            {
              question: "Can I use MindBloom with my family?",
              answer: "Absolutely! Our Family plan supports up to 6 members with shared wellness goals and dedicated coaching."
            },
            {
              question: "What if I'm not satisfied with the service?",
              answer: "We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your subscription."
            },
            {
              question: "How does the AI companion work?",
              answer: "Our AI analyzes your mood patterns and provides personalized insights tailored to your unique needs."
            },
            {
              question: "Is there a free trial available?",
              answer: "Yes! Premium and Family plans include a 7-day free trial with full access to all features."
            },
            {
              question: "Can I cancel my subscription anytime?",
              answer: "Of course! You can cancel at any time from your account settings. No long-term commitments."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. All payments are secure."
            }
          ].map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-sm">{faq.question}</span>
                <ChevronDown 
                  className={`w-4 h-4 text-gray-500 transition-transform ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openFAQ === index && (
                <div className="px-4 pb-3">
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BillingSection; 