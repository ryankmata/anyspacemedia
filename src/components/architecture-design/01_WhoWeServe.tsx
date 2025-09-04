import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Building2,
  Home,
  PaintBucket,
  Store,
  BookOpen,
  HelpCircle,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

// Who We Serve Component
const WhoWeServe = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const clientTypes = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Home Builders",
      description:
        "Showcase your craftsmanship with stunning photography that sells homes before they're even finished. Professional imagery that elevates your marketing materials and attracts quality buyers.",
      benefits: [
        "Pre-sale marketing",
        "Progress documentation",
        "Model home portfolios",
        "Website galleries",
      ],
    },
    {
      icon: <PaintBucket className="w-8 h-8" />,
      title: "Interior Designers",
      description:
        "Transform your design vision into compelling visual stories. Capture the essence of your spaces with expert lighting and composition that highlights every carefully chosen detail.",
      benefits: [
        "Portfolio enhancement",
        "Before & after documentation",
        "Social media content",
        "Client presentations",
      ],
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Architects",
      description:
        "Bring your architectural concepts to life through professional photography that communicates your design philosophy and attracts new clients seeking innovative solutions.",
      benefits: [
        "Award submissions",
        "Concept visualization",
        "Technical documentation",
        "Media publications",
      ],
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: "Furniture & Showrooms",
      description:
        "Showcase your products in beautifully styled environments. Create aspirational imagery that drives sales and establishes your brand as a leader in design.",
      benefits: [
        "Catalog photography",
        "Showroom documentation",
        "Lifestyle imagery",
        "E-commerce visuals",
      ],
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Publications & Media",
      description:
        "Editorial-quality photography that meets the highest standards for architectural and design publications. Professional imagery ready for print and digital media.",
      benefits: [
        "Editorial standards",
        "High-resolution delivery",
        "Rights documentation",
        "Publication-ready formats",
      ],
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "Industry Not Listed?",
      description:
        "We work with any business that values exceptional visual storytelling for architectural and design spaces.",
      benefits: [
        "Custom solutions available",
        "Flexible service packages",
        "Industry expertise",
        "Tailored approach",
      ],
    },
  ];
  const [open, setOpen] = useState<Record<number, boolean>>({});

  return (
    <section className="pt-24 pb-10 z-9 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EDC577]/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Who We </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C]">
              Partner With
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From custom home builders to luxury showrooms, we understand the
            unique visual needs of the architecture and design industry.
          </p>
        </motion.div>

        {/* Mobile Client Types Grid */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-[#edc577]/10 p-4 sm:p-6 overflow-hidden"
          >
            <ul className="divide-y divide-[#edc577]/10 pb-16">
              {clientTypes.map((client, i) => {
                const isOpen = !!open[i];
                return (
                  <li key={i} className="py-3">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}
                      className="w-full flex items-center gap-3"
                    >
                      <span className="text-[#EDC577] shrink-0">
                        {client.icon}
                      </span>
                      <span className="text-white font-semibold text-base flex-1 text-left">
                        {client.title}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-300 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 space-y-2 pl-9">
                        {client.benefits.map((b, idx) => (
                          <div
                            key={idx}
                            className="flex items-start text-sm text-gray-300"
                          >
                            <div className="mt-1 w-1.5 h-1.5 bg-[#EDC577] rounded-full mr-3" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </li>
                );
              })}
            </ul>

            <Link
              href="#services"
              className="absolute bottom-4 right-4 inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C] text-black font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-[#EDC577]/40 transition-all duration-200"
            >
              Explore Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Desktop Client Types Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-16">
          {clientTypes.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group relative pb-20 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-[#EDC577]/30 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"
            >
              {/* Icon */}
              <div className="text-[#EDC577] mb-6 group-hover:scale-110 transition-transform duration-300">
                {client.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-xl mb-4">
                {client.title}
              </h3>

              {/* Description */}
              <p className="hidden md:block text-gray-300 mb-6 leading-relaxed">
                {client.description}
              </p>

              {/* Benefits */}
              <div className="space-y-2">
                {client.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-sm text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 bg-[#EDC577] rounded-full mr-3" />
                    {benefit}
                  </div>
                ))}
              </div>

              {/* Alternative approach using CSS transforms for the button */}
              <div className="absolute bottom-6 right-6 md:transform md:translate-x-full md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100 md:transition-all md:duration-300 md:ease-out">
                <Link
                  href="#services"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C] text-black font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-[#EDC577]/40 transition-all duration-200 hover:scale-105"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
