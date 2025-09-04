import React, { useState, useEffect, JSX } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Building2,
  Home,
  PaintBucket,
  Store,
  BookOpen,
  Award,
  Clock,
  Shield,
  Plane,
} from "lucide-react";

// Why Choose Us Component
const WhyChooseUs: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const advantages = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Recognition",
      description:
        "Our photography has contributed to 25+ industry awards for our clients, establishing credibility and attracting premium projects.",
      stats: "25+ Awards Won",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Rapid Turnaround",
      description:
        "Standard 3-5 day delivery with rush options available. We understand project deadlines and marketing schedules in the design industry.",
      stats: "48hr Rush Available",
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Advanced Technology",
      description:
        "State-of-the-art drone capabilities, professional lighting equipment, and cutting-edge post-production ensure exceptional results every time.",
      stats: "Latest Tech Stack",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Licensed & Insured",
      description:
        "Fully licensed drone operations, comprehensive insurance coverage, and professional certifications give you peace of mind on every project.",
      stats: "Nationwide Coverage",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation & Planning",
      description:
        "We discuss your vision, timeline, and specific needs to create a customized shoot plan.",
    },
    {
      number: "02",
      title: "Professional Shoot",
      description:
        "Our experienced team captures your space using professional equipment and proven techniques.",
    },
    {
      number: "03",
      title: "Expert Post-Production",
      description:
        "Advanced editing and color correction ensure every image meets professional publication standards.",
    },
    {
      number: "04",
      title: "Delivery & Support",
      description:
        "Receive your high-resolution images with usage rights and ongoing support for your marketing needs.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-neutral-950 to-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EDC577]/50 to-transparent" />
        <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-to-r from-[#EDC577]/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-gradient-to-l from-[#8E6B0F]/6 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Why Design Professionals </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C]">
              Choose Us
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We understand the unique challenges of the architecture and design
            industry. Here's how we deliver results that drive your business
            forward.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group text-center"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#EDC577]/20 to-[#8E6B0F]/20 rounded-full flex items-center justify-center text-[#EDC577] border border-[#EDC577]/30 group-hover:scale-110 group-hover:border-[#EDC577]/50 transition-all duration-300">
                {advantage.icon}
              </div>

              {/* Content */}
              <h3 className="text-white font-bold text-xl mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {advantage.description}
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-[#EDC577]/10 rounded-full border border-[#EDC577]/20">
                <span className="text-[#EDC577] font-semibold text-sm">
                  {advantage.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section 
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-3xl border border-white/10 p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Proven Process
            </h3>
            <p className="text-gray-300 text-lg">
              A streamlined approach that delivers exceptional results every
              time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Step Number 
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#EDC577] to-[#8E6B0F] rounded-full flex items-center justify-center text-black font-bold text-xl">
                  {step.number}
                </div>

                {/* Connector Line (except last item) 
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#EDC577]/50 to-[#8E6B0F]/50 transform translate-x-8" />
                )}

                {/* Content 
                <h4 className="text-white font-semibold text-lg mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
        */}

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Elevate Your Visual Marketing?
          </h3>
          {/*<p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
            Join the growing number of design professionals who trust Any Space
            Media to showcase their work at the highest level.
          </p>*/}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C] text-black font-bold rounded-full hover:shadow-2xl hover:shadow-[#EDC577]/30 transition-all duration-300 hover:scale-105">
              Start Your Project
              <Camera className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:border-[#EDC577] hover:bg-[#EDC577]/10 transition-all duration-300">
              View Our Portfolio
              <Building2 className="ml-2 w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
