import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  ShoppingBag,
  Coffee,
  Stethoscope,
  Scissors,
  Hammer,
  Car,
  GraduationCap,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

// Business Types Section
const BusinessTypes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState<Record<number, boolean>>({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const businessTypes = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Retail & E-commerce",
      description:
        "Product photography, store ambiance, and lifestyle shots that drive online and in-store sales.",
      services: [
        "Product catalogs",
        "Store photography",
        "E-commerce imagery",
        "Brand lifestyle shots",
      ],
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Restaurants & Hospitality",
      description:
        "Mouth-watering food photography and inviting atmosphere shots that fill tables and rooms.",
      services: [
        "Menu photography",
        "Atmosphere captures",
        "Chef portraits",
        "Social media content",
      ],
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Healthcare & Wellness",
      description:
        "Professional, welcoming imagery that builds trust and showcases your care quality.",
      services: [
        "Facility tours",
        "Team portraits",
        "Equipment showcases",
        "Patient testimonials",
      ],
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Personal Services",
      description:
        "Beauty salons, spas, and personal care businesses showcasing expertise and results.",
      services: [
        "Before/after galleries",
        "Service demonstrations",
        "Facility highlights",
        "Staff portraits",
      ],
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Construction & Trades",
      description:
        "Document your craftsmanship and completed projects to win more quality contracts.",
      services: [
        "Project portfolios",
        "Process documentation",
        "Team capabilities",
        "Equipment showcases",
      ],
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Professional Services",
      description:
        "Law firms, accounting, consulting - professional imagery that conveys expertise and trust.",
      services: [
        "Office environments",
        "Team headshots",
        "Client meetings",
        "Professional portraits",
      ],
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Automotive & Transportation",
      description:
        "Showcase vehicles, services, and facilities that drive customer confidence and sales.",
      services: [
        "Vehicle photography",
        "Service bay tours",
        "Team expertise",
        "Customer testimonials",
      ],
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education & Training",
      description:
        "Capture learning environments and student success that attracts enrollments.",
      services: [
        "Facility tours",
        "Class sessions",
        "Student activities",
        "Achievement highlights",
      ],
    },
  ];

  return (
    <section className="py-24 z-9 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-gradient-to-r from-[#EDC577]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-gradient-to-l from-[#8E6B0F]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Every Business </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C]">
              Has a Story
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From local startups to established enterprises, we help businesses
            across industries create compelling visual content that drives
            growth.
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
              {businessTypes.map((business, i) => {
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
                        {business.icon}
                      </span>
                      <span className="text-white font-semibold text-base flex-1 text-left">
                        {business.title}
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
                        {business.services.map((s, idx) => (
                          <div
                            key={idx}
                            className="flex items-start text-sm text-gray-300"
                          >
                            <div className="mt-1 w-1.5 h-1.5 bg-[#EDC577] rounded-full mr-3" />
                            <span>{s}</span>
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
              Get a Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Desktop Client Types Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessTypes.map((business, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative pb-20 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-[#EDC577]/30 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="text-[#EDC577] mb-4 group-hover:scale-110 transition-transform duration-300">
                {business.icon}
              </div>

              <h3 className="text-white font-bold text-lg mb-3">
                {business.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {business.description}
              </p>

              <div className="space-y-1 mb-4">
                {business.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-xs text-gray-400"
                  >
                    <div className="w-1 h-1 bg-[#EDC577] rounded-full mr-2" />
                    {service}
                  </div>
                ))}
              </div>

              {/* Alternative approach using CSS transforms for the button */}
              <div className="absolute bottom-6 right-6 md:transform md:translate-x-full md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100 md:transition-all md:duration-300 md:ease-out">
                <Link
                  href="#services"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#8E6B0F] via-[#EDC577] to-[#C89B2C] text-black font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-[#EDC577]/40 transition-all duration-200 hover:scale-105"
                >
                  Get a Quote
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

export default BusinessTypes;
