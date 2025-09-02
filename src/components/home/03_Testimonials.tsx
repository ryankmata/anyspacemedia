import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "First Last",
      role: "Role/Position",
      company: "Company Name",
      location: "City, State",
      image: "/architecture-design_CYS.jpg",
      testimonial:
        "Any Space Media transformed our architectural portfolio completely. Their ability to capture the essence of our designs—from the grand gestures to the intimate details—is simply unmatched. The twilight shots of our residential project won us three industry awards.",
      project: "Hillside Modern Residence",
      rating: 5,
    },
    {
      id: 2,
      name: "First Last",
      role: "Role/Position",
      company: "Company Name",
      location: "City, State",
      image: "/real-estate_CYS.jpg",
      testimonial:
        "Working with Any Space Media on our luxury condominium project was a game-changer. Their drone cinematography showcased our waterfront location beautifully, and the virtual staging helped us sell 80% of units before construction completion. Exceptional professionalism and results.",
      project: "Bayfront Luxury Towers",
      rating: 5,
    },
    {
      id: 3,
      name: "First Last",
      role: "Role/Position",
      company: "Company Name",
      location: "City, State",
      image: "/commercial_CYS.jpg",
      testimonial:
        "The team at Any Space Media has an incredible eye for architectural photography. They understood our vision for the medical center project and delivered images that perfectly communicated our design philosophy. Their attention to lighting and composition is masterful.",
      project: "Central Texas Medical Plaza",
      rating: 5,
    },
    {
      id: 4,
      name: "First Last",
      role: "Role/Position",
      company: "Company Name",
      location: "City, State",
      image: "/automotive_CYS.jpg",
      testimonial:
        "Any Space Media doesn't just take photographs—they create visual stories. Their work on our mixed-use development captured both the architectural innovation and the human experience of the spaces. The final portfolio exceeded all our expectations and helped secure our next major commission.",
      project: "Pioneer Square Commons",
      rating: 5,
    },
    {
      id: 5,
      name: "First Last",
      role: "Role/Position",
      company: "Company Name",
      location: "City, State",
      image: "/rv-marine_CYS.jpg",
      testimonial:
        "From initial consultation to final delivery, Any Space Media demonstrated the highest level of professionalism. Their drone work revealed perspectives of our project we hadn't even considered, and their post-production quality is simply outstanding. They're now our go-to photography partner.",
      project: "RiNo Arts District Complex",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="pt-32 z-9 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          {/*<div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#B8860B]/20 to-[#FFD700]/20 rounded-full border border-[#FFD700]/30 mb-6">
            <span className="text-[#FFD700] font-semibold text-sm tracking-wider">
              CLIENT SUCCESS STORIES
            </span>
          </div>*/}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">What Our Clients </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520]">
              Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients say about
            their experience working with Any Space Media.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Testimonial Content */}
                <div className="p-12 lg:p-16 flex flex-col justify-center">
                  {/* Stars Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map(
                      (_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 text-[#FFD700] mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      )
                    )}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-8 font-light italic">
                    "{testimonials[activeTestimonial].testimonial}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="mb-6">
                    <h4 className="text-white font-bold text-lg mb-1">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-[#FFD700] font-semibold mb-1">
                      {testimonials[activeTestimonial].role}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonials[activeTestimonial].company} •{" "}
                      {testimonials[activeTestimonial].location}
                    </p>
                  </div>

                  {/* Project Tag 
                  <div className="inline-flex items-center">
                    <span className="px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#B8860B]/20 backdrop-blur-sm rounded-full text-[#FFD700] text-sm font-semibold border border-[#FFD700]/30">
                      Project: {testimonials[activeTestimonial].project}
                    </span>
                  </div>*/}
                </div>

                {/* Project Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].project}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-200 hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-200 hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial
                  ? "bg-gradient-to-r from-[#FFD700] to-[#DAA520] scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
