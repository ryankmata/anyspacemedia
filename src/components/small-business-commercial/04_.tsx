import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Clock,
  Award,
  Shield,
  Scissors,
  Hammer,
  Car,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const SmallBusinessCommercialCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-32 z-9 bg-gradient-to-br from-black via-neutral-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial from-[#EDC577]/10 to-transparent rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-radial from-[#8E6B0F]/10 to-transparent rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Ready to Grow </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C]">
              Your Business?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Professional visual content is the foundation of successful business
            marketing. Let's create content that drives real results for your
            business.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <button className="group inline-flex items-center px-12 py-5 bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C] text-black font-bold text-xl rounded-full hover:shadow-2xl hover:shadow-[#EDC577]/40 transition-all duration-300 hover:scale-105">
              Start Your Project Today
              <ArrowRight className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="group inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold text-xl rounded-full hover:border-[#EDC577] hover:bg-[#EDC577]/10 transition-all duration-300">
              <Camera className="mr-3 w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              Free Consultation
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#EDC577]" />
              <span>Available 7 Days a Week</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#EDC577]" />
              <span>150+ Successful Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#EDC577]" />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmallBusinessCommercialCTA;
