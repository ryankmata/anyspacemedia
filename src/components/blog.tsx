"use client";
import { useEffect, useState } from "react";

const Blog: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate stats
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-0 bg-gradient-to-br from-black via-neutral-950 to-black overflow-hidden min-h-screen">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0">
        {/* Hexagonal Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 200 200"
            className="absolute inset-0"
          >
            <defs>
              <pattern
                id="hexPattern"
                x="0"
                y="0"
                width="60"
                height="52"
                patternUnits="userSpaceOnUse"
              >
                <polygon
                  points="30,2 52,15 52,37 30,50 8,37 8,15"
                  stroke="#EDC577"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexPattern)" />
          </svg>
        </div>

        {/* Background Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#EDC577]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-l from-[#8E6B0F]/10 to-transparent rounded-full blur-3xl" />

        {/* Floating Geometric Shapes */}
        <div
          className="absolute top-20 left-1/6 w-16 h-16 border-2 border-[#EDC577]/30 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-[#EDC577]/20 transform rotate-12 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-12 h-12 border border-[#8E6B0F]/25 rounded-full animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div className="absolute top-2/3 right-1/6 w-6 h-24 bg-[#EDC577]/10 transform -rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/12 w-4 h-4 bg-[#C89B2C]/30 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-1/6 right-1/2 w-20 h-20 border-2 border-[#8E6B0F]/20 transform rotate-45 animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-45 pb-25">
        <div className="w-full">
          {/* Hero Content - Centered Layout */}
          <div className="text-center mb-20">
            <div
              className={`transform transition-all duration-1200 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              {/*maybe implement later
              <div className="inline-block mb-8">
                <div className="flex items-center justify-center space-x-3 bg-[#EDC577]/5 border border-[#EDC577]/20 rounded-full px-6 py-3">
                  <div className="w-2 h-2 bg-[#EDC577] rounded-full animate-pulse"></div>
                  <span className="text-[#EDC577] font-semibold text-sm tracking-wide uppercase">
                    The Strategic Finds Advantage
                  </span>
                  <div className="w-2 h-2 bg-[#8E6B0F] rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
                */}
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight">
                Coming
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C]">
                  Soon!
                </span>
              </h1>

              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-3xl md:text-4xl text-gray-300 font-light leading-relaxed mb-8">
                  "Inspiration&nbsp;&nbsp;|&nbsp;&nbsp;Passion&nbsp;&nbsp;|&nbsp;&nbsp;Attraction{" "}
                  {/*<em className="text-[#EDC577] font-medium">right</em> fit."*/}
                  <br />- Any Space Media
                </p>
                <div className="flex justify-center">
                  <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#EDC577] to-transparent"></div>
                </div>
              </div>

              {/* Additional glow effect behind text */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-[#EDC577]/5 via-transparent to-transparent -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
