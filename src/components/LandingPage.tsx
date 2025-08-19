import React from "react";
import { ChevronDown } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/bkg.jpg")',
        }}
      />

      {/* Main Content Area 
      <div className="relative z-10 flex-1 flex items-center justify-center h-screen">
        <div className="text-center text-white px-6">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Welcome to the
            <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-pulse">
              Future
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Experience something extraordinary with our innovative approach to modern design and functionality.
          </p>
        </div>
      </div>
      */}

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center animate-bounce">
          <p className="text-white/70 text-sm mb-2 tracking-wide">
            scroll down
          </p>
          <ChevronDown className="w-5 h-5 text-white/70" />
        </div>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

export default LandingPage;
