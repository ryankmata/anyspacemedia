import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const RealEstateCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const urgencyFeatures = [
    "Same-day consultation scheduling",
    "48-hour project proposal delivery",
    "Flexible shoot scheduling",
    "Rush delivery available",
  ];

  return (
    <section className="relative py-32 z-8 bg-gradient-to-br from-black via-neutral-900 to-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EDC577]/50 to-transparent" />
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial from-[#EDC577]/10 to-transparent rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-radial from-[#8E6B0F]/10 to-transparent rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />

        {/* Geometric accents */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <div className="w-2 h-32 bg-gradient-to-b from-transparent via-[#EDC577]/50 to-transparent" />
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <div className="w-2 h-32 bg-gradient-to-b from-transparent via-[#8E6B0F]/50 to-transparent" />
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full bg-grid-pattern"
            style={{
              backgroundImage: `linear-gradient(rgba(255,215,0,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Capture Your </span>
              <br className="hidden md:block" />
              <span className="text-white">Space </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C]">
                Today
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Don't let a home go unnoticed. Professional media that wins
              awards, attracts clients, and elevates your portfolio starts with
              one conversation.
            </p>
          </motion.div>

          {/* Value Proposition Cards 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-[#EDC577] text-2xl mb-3">⚡</div>
              <h3 className="text-white font-bold text-lg mb-2">
                Fast Turnaround
              </h3>
              <p className="text-gray-400 text-sm">
                From shoot to delivery in 3-5 days. Rush options available for
                urgent projects.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-[#EDC577] text-2xl mb-3">🏆</div>
              <h3 className="text-white font-bold text-lg mb-2">
                Award-Winning Quality
              </h3>
              <p className="text-gray-400 text-sm">
                Professional photography that has helped clients win 25+
                industry awards.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-[#EDC577] text-2xl mb-3">💼</div>
              <h3 className="text-white font-bold text-lg mb-2">
                Full Service
              </h3>
              <p className="text-gray-400 text-sm">
                Photography, video, drone work, and virtual staging—everything
                you need in one place.
              </p>
            </div>
          </motion.div>*/}

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12"
          >
            {/* Primary CTA */}
            <Link href="https://listings.anyspacemedia.com/order">
              <button className="group relative inline-flex items-center px-12 py-5 bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C] text-black font-bold text-xl rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#EDC577]/40">
                <span className="relative z-10 flex items-center">
                  Book Your Shoot Now
                  <svg
                    className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#C89B2C] via-[#EDC577] to-[#8E6B0F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>

            {/* Secondary CTA */}
            <Link href="tel:14352166499">
              <button className="group inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold text-xl rounded-full hover:border-[#EDC577] hover:bg-[#EDC577]/10 transition-all duration-300 hover:scale-105">
                <svg
                  className="mr-3 w-6 h-6 transition-transform duration-300 group-hover:scale-110"
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
                Call for Free Consultation
              </button>
            </Link>
          </motion.div>

          {/* Urgency & Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Urgency Features 
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {urgencyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center text-sm text-gray-400"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-[#EDC577] to-[#C89B2C] rounded-full mr-2" />
                  {feature}
                </div>
              ))}
            </div>*/}

            {/* Contact Information */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#EDC577]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>contact@anyspacemedia.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#EDC577]"
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
                  <span>(435) 216-6499</span>
                </div>
              </div>
            </div>

            {/* Final Trust Signal 
            <div className="bg-gradient-to-r from-[#8E6B0F]/10 via-[#EDC577]/10 to-[#C89B2C]/10 rounded-2xl p-6 border border-[#EDC577]/20">
              <p className="text-gray-300 text-center">
                <span className="text-[#EDC577] font-semibold">
                  150+ architectural projects completed
                </span>{" "}
                •<span className="mx-2">98% client satisfaction rate</span> •
                <span className="text-[#EDC577] font-semibold">
                  Licensed & insured nationwide
                </span>
              </p>
            </div>*/}
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#EDC577]/50 to-transparent" />
    </section>
  );
};

export default RealEstateCTA;
