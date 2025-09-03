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
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#B8860B]/20 to-[#FFD700]/20 rounded-full border border-[#FFD700]/30 mb-8">
                <span className="text-[#FFD700] font-semibold text-sm tracking-wider">
                  BUSINESS MARKETING SOLUTIONS
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8">
                <span className="text-white">Small Business &</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520]">
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
                <button className="group inline-flex items-center px-12 py-5 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] text-black font-bold text-xl rounded-full hover:shadow-2xl hover:shadow-[#FFD700]/40 transition-all duration-300 hover:scale-105">
                  Start Your Project
                  <ArrowRight className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button className="group inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold text-xl rounded-full hover:border-[#FFD700] hover:bg-[#FFD700]/10 transition-all duration-300">
                  <Play className="mr-3 w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  View Our Work
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#FFD700]/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-[#B8860B]/10 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </section>
    </section>
  );
};

// Business Types Section
const BusinessTypes = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    <section className="py-24 bg-gradient-to-b from-black via-neutral-950 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/5 w-96 h-96 bg-gradient-to-r from-[#FFD700]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-gradient-to-l from-[#B8860B]/5 to-transparent rounded-full blur-3xl" />
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520]">
              Has a Story
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From local startups to established enterprises, we help businesses
            across industries create compelling visual content that drives
            growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-[#FFD700]/30 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="text-[#FFD700] mb-4 group-hover:scale-110 transition-transform duration-300">
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
                    <div className="w-1 h-1 bg-[#FFD700] rounded-full mr-2" />
                    {service}
                  </div>
                ))}
              </div>

              {/* Hover Button */}
              <div className="absolute bottom-4 right-4 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <button className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] text-black font-semibold text-xs rounded-full hover:shadow-lg transition-all duration-200">
                  Get Quote
                  <ArrowRight className="ml-1 w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Marketing Solutions Section
const MarketingSolutions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "website" | "social" | "marketing"
  >("website");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutions = {
    website: {
      title: "Website Content",
      icon: <Monitor className="w-6 h-6" />,
      description:
        "Professional imagery that makes your website convert visitors into customers",
      features: [
        {
          icon: <Eye className="w-5 h-5" />,
          title: "Hero Images",
          desc: "Stunning headers that capture attention",
        },
        {
          icon: <Camera className="w-5 h-5" />,
          title: "Product/Service Galleries",
          desc: "Showcase what you offer",
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "Team Photos",
          desc: "Build trust with professional portraits",
        },
        {
          icon: <Building className="w-5 h-5" />,
          title: "Location Showcases",
          desc: "Highlight your business space",
        },
      ],
    },
    social: {
      title: "Social Media",
      icon: <Smartphone className="w-6 h-6" />,
      description:
        "Engaging content that grows your social media presence and drives engagement",
      features: [
        {
          icon: <Heart className="w-5 h-5" />,
          title: "Story Content",
          desc: "Behind-the-scenes and daily updates",
        },
        {
          icon: <Share2 className="w-5 h-5" />,
          title: "Shareable Posts",
          desc: "Content designed to go viral",
        },
        {
          icon: <Video className="w-5 h-5" />,
          title: "Reels & Videos",
          desc: "Dynamic content for maximum reach",
        },
        {
          icon: <MessageCircle className="w-5 h-5" />,
          title: "Engagement Drivers",
          desc: "Content that sparks conversation",
        },
      ],
    },
    marketing: {
      title: "Marketing Campaigns",
      icon: <Target className="w-6 h-6" />,
      description:
        "Strategic visual content that drives measurable business results",
      features: [
        {
          icon: <TrendingUp className="w-5 h-5" />,
          title: "Brand Campaigns",
          desc: "Cohesive visual storytelling",
        },
        {
          icon: <Globe className="w-5 h-5" />,
          title: "Digital Advertising",
          desc: "Assets for paid campaigns",
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Seasonal Promotions",
          desc: "Timely marketing content",
        },
        {
          icon: <Award className="w-5 h-5" />,
          title: "Brand Recognition",
          desc: "Memorable visual identity",
        },
      ],
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black via-neutral-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Complete </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520]">
              Marketing Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From your website to social media campaigns, we create visual
            content that works across all your marketing channels.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
            {(Object.keys(solutions) as Array<keyof typeof solutions>).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] text-black"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {solutions[tab].icon}
                  <span className="ml-2">{solutions[tab].title}</span>
                </button>
              )
            )}
          </div>
        </div>

        {/* Active Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-3xl border border-white/10 p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                {solutions[activeTab].title}
              </h3>
              <p className="text-gray-300 text-lg">
                {solutions[activeTab].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions[activeTab].features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300"
                >
                  <div className="text-[#FFD700] mb-4">{feature.icon}</div>
                  <h4 className="text-white font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Services & Pricing Section
const ServicesAndPricing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const packages = [
    {
      name: "Startup Package",
      price: "$299",
      description: "Perfect for new businesses getting started",
      features: [
        "Up to 15 professional photos",
        "Basic editing & color correction",
        "High-resolution delivery",
        "Usage rights included",
        "1-2 hour shoot",
        "Social media sized formats",
      ],
      popular: false,
    },
    {
      name: "Growth Package",
      price: "$599",
      description: "Ideal for growing businesses needing more content",
      features: [
        "Up to 40 professional photos",
        "Premium editing & retouching",
        "High-resolution delivery",
        "Extended usage rights",
        "3-4 hour shoot",
        "Web & print formats",
        "Basic video snippets",
        "Rush delivery available",
      ],
      popular: true,
    },
    {
      name: "Enterprise Package",
      price: "$999",
      description: "Comprehensive solution for established businesses",
      features: [
        "Up to 75 professional photos",
        "Advanced editing suite",
        "Multiple format delivery",
        "Commercial usage rights",
        "Full day shoot",
        "Professional video content",
        "Drone footage (if applicable)",
        "Brand guideline integration",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-neutral-950 to-neutral-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Simple, </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520]">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Choose the package that fits your business needs. All packages
            include professional editing and commercial usage rights.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className={`relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-3xl border p-8 transition-all duration-300 hover:scale-105 ${
                pkg.popular
                  ? "border-[#FFD700] shadow-2xl shadow-[#FFD700]/20"
                  : "border-white/10 hover:border-[#FFD700]/30"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] text-black px-6 py-2 rounded-full font-bold text-sm">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-bold text-[#FFD700] mb-2">
                  {pkg.price}
                </div>
                <p className="text-gray-400">{pkg.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#FFD700] mr-3" />
                    {feature}
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 ${
                  pkg.popular
                    ? "bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] text-black hover:shadow-2xl hover:shadow-[#FFD700]/40"
                    : "bg-white/10 text-white border border-white/20 hover:bg-[#FFD700]/10 hover:border-[#FFD700]/50"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-center bg-gradient-to-r from-[#FFD700]/10 via-[#B8860B]/5 to-[#FFD700]/10 rounded-3xl p-12 border border-[#FFD700]/20"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Need Something Custom?
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            We create tailored packages for unique business needs, ongoing
            partnerships, and large-scale projects.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] text-black font-bold rounded-full hover:shadow-2xl hover:shadow-[#FFD700]/30 transition-all duration-300 hover:scale-105">
            Discuss Custom Solutions
            <Briefcase className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section
const FinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-32 bg-gradient-to-br from-black via-neutral-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial from-[#FFD700]/10 to-transparent rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-radial from-[#B8860B]/10 to-transparent rounded-full blur-2xl animate-pulse"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520]">
              Your Business?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Professional visual content is the foundation of successful business
            marketing. Let's create content that drives real results for your
            business.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
            <button className="group inline-flex items-center px-12 py-5 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] text-black font-bold text-xl rounded-full hover:shadow-2xl hover:shadow-[#FFD700]/40 transition-all duration-300 hover:scale-105">
              Start Your Project Today
              <ArrowRight className="ml-3 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button className="group inline-flex items-center px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold text-xl rounded-full hover:border-[#FFD700] hover:bg-[#FFD700]/10 transition-all duration-300">
              <Camera className="mr-3 w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              Free Consultation
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#FFD700]" />
              <span>Available 7 Days a Week</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#FFD700]" />
              <span>150+ Successful Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#FFD700]" />
              <span>Licensed & Insured</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Page Component
const SMCPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <CommercialHero />
      <BusinessTypes />
      <MarketingSolutions />
      <ServicesAndPricing />
      <FinalCTA />
    </div>
  );
};

export default SMCPage;
