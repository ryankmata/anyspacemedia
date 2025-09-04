import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Video,
  Building,
  Users,
  Briefcase,
  ShoppingBag,
  Coffee,
  Stethoscope,
  Scissors,
  Hammer,
  Car,
  GraduationCap,
  ArrowRight,
  Play,
  Star,
  Clock,
  Award,
  Shield,
  TrendingUp,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Monitor,
  Smartphone,
  Globe,
  Target,
  Zap,
  CheckCircle,
} from "lucide-react";

// Hero Section Component
const CommercialHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-28 md:pt-0 bg-black">
      <section className="relative w-full md:min-h-[calc(100vh)] overflow-hidden">
        {/* Background Video or Image */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black">
          <div
            className="absolute inset-0 bg-grid-pattern opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,215,0,0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#8E6B0F]/20 to-[#EDC577]/20 rounded-full border border-[#EDC577]/30 mb-8">
                <span className="text-[#EDC577] font-semibold text-sm tracking-wider">
                  BUSINESS MARKETING SOLUTIONS
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8">
                <span className="text-white">Small Business &</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C]">
                  Commercial Media
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Professional photography and video content that drives business
                growth. From website galleries to social media campaigns, we
                create visual content that attracts customers and builds your
                brand.
              </p>

              <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                <button className="group inline-flex items-center px-12 py-5 bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C] text-black font-bold text-xl rounded-full hover:shadow-2xl hover:shadow-[#EDC577]/40 transition-all duration-300 hover:scale-105">
                  Start Your Project
                  <ArrowRight className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button className="group inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold text-xl rounded-full hover:border-[#EDC577] hover:bg-[#EDC577]/10 transition-all duration-300">
                  <Play className="mr-3 w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  View Our Work
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#EDC577]/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-[#8E6B0F]/10 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </section>
    </section>
  );
};
