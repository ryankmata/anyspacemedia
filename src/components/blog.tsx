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
    <div className="relative z-0 bg-white overflow-hidden min-h-screen">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0">
        {/* Hexagonal Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
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
                  stroke="#036670"
                  strokeWidth="1"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexPattern)" />
          </svg>
        </div>

        {/* Floating Geometric Shapes */}
        <div
          className="absolute top-20 left-1/6 w-16 h-16 border-2 border-[#036670]/20 rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-[#039C9E]/10 transform rotate-12 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-12 h-12 border border-[#036670]/15 rounded-full animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div className="absolute top-2/3 right-1/6 w-6 h-24 bg-[#036670]/5 transform -rotate-12 animate-pulse delay-1000"></div>
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
                <div className="flex items-center justify-center space-x-3 bg-[#036670]/5 border border-[#036670]/20 rounded-full px-6 py-3">
                  <div className="w-2 h-2 bg-[#036670] rounded-full animate-pulse"></div>
                  <span className="text-[#036670] font-semibold text-sm tracking-wide uppercase">
                    The Strategic Finds Advantage
                  </span>
                  <div className="w-2 h-2 bg-[#039C9E] rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
                */}
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-[#036670] mb-8 tracking-tight">
                Coming
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#036670] via-[#039C9E] to-[#036670]">
                  Soon!
                </span>
              </h1>

              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-3xl md:text-4xl text-[#4c4c4c] font-light leading-relaxed mb-8">
                  "It’s not just about deals. It’s about the{" "}
                  <em className="text-[#036670] font-medium">right</em> fit."
                  <br />- Strategic Finds
                </p>
                <div className="flex justify-center">
                  <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#036670] to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
