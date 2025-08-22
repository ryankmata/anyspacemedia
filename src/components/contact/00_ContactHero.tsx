"use client";

import React, { useEffect, useState } from "react";

const ContactHero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative z-9 bg-gradient-to-br from-black via-neutral-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/10 via-[#FFD700]/20 to-[#DAA520]/10" />
        <div className="absolute top-20 left-10 w-24 h-24 bg-[#FFD700]/10 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-[#B8860B]/20 rounded-lg rotate-45 animate-bounce" />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-[#FFD700]/10 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-12 h-12 bg-[#DAA520]/20 rounded-lg rotate-12 animate-pulse delay-500" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[140px] pb-12 min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[600px]">
          {/* Left Side - Title and Buttons */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1
                className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <span className="text-white">Let's Capture Something</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520]">
                  Extraordinary
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className={`text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 transform translate-x-0"
                    : "opacity-0 transform -translate-x-16"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                Ready to elevate your space with cinematic photography and drone
                footage? Let's discuss your vision and create visual content
                that defines luxury.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-16"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <a
                href="#contact-form"
                className="group relative inline-flex items-center px-12 py-4 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFD700]/30"
              >
                <span className="relative z-10 flex items-center">
                  Start Your Project
                  <svg
                    className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                href="tel:+14352166499"
                className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-[#FFD700] text-[#FFD700] font-semibold text-lg rounded-full hover:bg-[#FFD700]/20 transition-all duration-300 hover:scale-105"
              >
                <svg
                  className="mr-3 w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call (435) 216-6499</span>
              </a>
            </div>
          </div>

          {/* Right Side - Feature Boxes */}
          <div className="space-y-6">
            {/* Fast Response */}
            <div
              className={`group bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFD700]/10 ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-16"
              }`}
              style={{
                transitionDuration: "1000ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: "1200ms",
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FFD700]/30 to-[#B8860B]/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-[#FFD700]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                    Fast Response
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Same-day response guarantee with personalized project
                    consultation and timeline planning
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Excellence */}
            <div
              className={`group bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFD700]/10 ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-16"
              }`}
              style={{
                transitionDuration: "1000ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: "1400ms",
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FFD700]/30 to-[#B8860B]/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-[#FFD700]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                    Professional Excellence
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    20+ years of expertise delivering cinematic quality that
                    exceeds expectations every time
                  </p>
                </div>
              </div>
            </div>

            {/* Complete Service */}
            <div
              className={`group bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFD700]/10 ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-16"
              }`}
              style={{
                transitionDuration: "1000ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: "1600ms",
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FFD700]/30 to-[#B8860B]/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-[#FFD700]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFD700] transition-colors duration-300">
                    Complete Service
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Integrated drone, video, and photography with curated
                    galleries delivered on time, every frame
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
        <p className="text-[#FFD700]/80 text-xs tracking-widest font-black">
          S C R O L L&nbsp;&nbsp;T O&nbsp;&nbsp;C O N T A C T
        </p>
        <div className="flex flex-col items-center">
          <svg
            className="w-4 h-4 text-[#FFD700] animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ animationDelay: "0s" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
