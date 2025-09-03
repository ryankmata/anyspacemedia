import React, { useState, useEffect, JSX } from "react";
import { motion } from "framer-motion";
import { Camera, Video, Building2 } from "lucide-react";
import Link from "next/link";

// Services Overview Component
const ServicesOverview: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();
      setIsSubmitted(true);

      // Reset form after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          inquiryType: "",
          message: "",
        });
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        "Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<
    "photography" | "video" | "virtual" | "custom"
  >("photography");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceCategories: Record<
    "photography" | "video" | "virtual" | "custom",
    {
      title: string;
      icon: JSX.Element;
      description: string;
      services: Array<{ name: string; price: string; details: string }>;
    }
  > = {
    photography: {
      title: "Photography Services",
      icon: <Camera className="w-6 h-6" />,
      description:
        "Professional architectural and interior photography that showcases spaces at their finest",
      services: [
        {
          name: "Architectural Photography",
          price: "$190 - $520",
          details: "25-75 images based on property size",
        },
        {
          name: "Interior Photography",
          price: "$190 - $370",
          details: "Complete interior coverage",
        },
        {
          name: "Exterior & Aerial",
          price: "$150 - $250",
          details: "Ground and drone perspectives",
        },
        {
          name: "Virtual Staging",
          price: "$35",
          details: "Per image, human-designed",
        },
      ],
    },
    video: {
      title: "Video Production",
      icon: <Video className="w-6 h-6" />,
      description:
        "Cinematic video content that brings spaces to life and engages your audience",
      services: [
        {
          name: "Cinematic Property Video",
          price: "$400 - $1,200",
          details: "Silver, Gold, or Platinum packages",
        },
        {
          name: "Walkthrough Videos",
          price: "$150 - $375",
          details: "Vertical format for social media",
        },
        {
          name: "FPV Fly-Through",
          price: "$400",
          details: "Unique drone perspectives",
        },
        {
          name: "Social Media Reels",
          price: "$350",
          details: "Host presentation included",
        },
      ],
    },
    virtual: {
      title: "Virtual Solutions",
      icon: <Building2 className="w-6 h-6" />,
      description:
        "Interactive 3D experiences that allow clients to explore spaces remotely",
      services: [
        {
          name: "Matterport 3D Tours",
          price: "$180 - $450",
          details: "Based on square footage",
        },
        {
          name: "Zillow 3D Home Tours",
          price: "$100 - $340",
          details: "Interactive floor plans",
        },
        {
          name: "2D Floor Plans",
          price: "$75 - $125",
          details: "Under or over 5,000 sq ft",
        },
        {
          name: "3D Floor Plans",
          price: "$130 - $190",
          details: "Colored with furnishings",
        },
      ],
    },
    custom: {
      title: "Custom Package",
      icon: <Camera className="w-6 h-6" />,
      description:
        "Professional architectural and interior photography that showcases spaces at their finest",
      services: [
        {
          name: "Architectural Photography",
          price: "$190 - $520",
          details: "25-75 images based on property size",
        },
        {
          name: "Interior Photography",
          price: "$190 - $370",
          details: "Complete interior coverage",
        },
        {
          name: "Exterior & Aerial",
          price: "$150 - $250",
          details: "Ground and drone perspectives",
        },
        {
          name: "Virtual Staging",
          price: "$35",
          details: "Per image, human-designed",
        },
      ],
    },
  };

  return (
    <section
      id="services"
      className="py-24 z-9 bg-gradient-to-b from-black via-neutral-900 to-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-l from-[#FFD700]/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Complete </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520]">
              Visual Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From high-end photography to immersive virtual experiences, we
            provide everything you need to showcase architectural and design
            excellence.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
            {(
              Object.keys(serviceCategories) as Array<
                keyof typeof serviceCategories
              >
            ).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center px-6 py-3 rounded-2xl font-semibold transition-all duration-300 mx-6 my-3 bg-white/10 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] text-black"
                    : "text-white hover:bg-[#FFD700]/30"
                }`}
              >
                {serviceCategories[category].icon}
                <span className="ml-2">
                  {serviceCategories[category].title}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active Category Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-3xl border border-white/10 p-8 mb-8">
            {serviceCategories[activeCategory].title === "Custom Package" ? (
              <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-3xl shadow-2xl border border-[#FFD700]/20 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  Contact Us to Start Your Project
                </h3>

                {isSubmitted ? (
                  <div className="bg-gradient-to-r from-[#B8860B]/20 to-[#FFD700]/20 border border-[#FFD700]/30 rounded-2xl p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#FFD700] to-[#DAA520] rounded-full mb-4">
                      <svg
                        className="w-8 h-8 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-[#FFD700] mb-2">
                      Thank You!
                    </h4>
                    <p className="text-gray-300 text-lg">
                      We'll be in touch within 24 hours to discuss your project.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-semibold text-[#FFD700] mb-2"
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="rounded-2xl w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all duration-300 text-white placeholder-gray-400"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-semibold text-[#FFD700] mb-2"
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all duration-300 text-white placeholder-gray-400"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-[#FFD700] mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-[#FFD700] mb-2"
                      >
                        Phone Number
                        <span className="text-gray-400 text-xs ml-1 font-normal">
                          (optional)
                        </span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-[#FFD700] mb-2"
                      >
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all duration-300 resize-vertical text-white placeholder-gray-400"
                        placeholder="Tell us about your space, timeline, and vision. What story do you want to tell?"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 shadow-lg transform hover:scale-105 ${
                        isSubmitting
                          ? "bg-gray-600 cursor-not-allowed text-white"
                          : "bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] text-black hover:shadow-2xl hover:shadow-[#FFD700]/25"
                      }`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
                {submitError && (
                  <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 mt-4">
                    <p className="text-red-300">{submitError}</p>
                  </div>
                )}
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {serviceCategories[activeCategory].title}
                </h3>
                <p className="text-gray-300 text-lg mb-8">
                  {serviceCategories[activeCategory].description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 ">
                  {serviceCategories[activeCategory].services.map(
                    (service, index) => (
                      <div
                        key={index}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#FFD700]/30 transition-all duration-300"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-white font-semibold text-lg">
                            {service.name}
                          </h4>
                          <span className="text-[#FFD700] font-bold text-lg">
                            {service.price}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm">
                          {service.details}
                        </p>
                      </div>
                    )
                  )}
                </div>
                <div className="flex justify-center mt-10">
                  <Link
                    href="https://listings.anyspacemedia.com/order"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="group relative inline-flex items-center px-12 py-5 bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520] text-black font-bold text-xl rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFD700]/40">
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
                      <div className="absolute inset-0 bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
