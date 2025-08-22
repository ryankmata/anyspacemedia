"use client";

import React, { useState } from "react";
import Link from "next/link";

const ContactForm: React.FC = () => {
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

  const contactInfo = [
    {
      icon: (
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
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: "Phone",
      value: "(435) 216-6499",
      link: "tel:+14352166499",
    },
    {
      icon: (
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
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: "contact@anyspacemedia.com",
      link: "mailto:contact@anyspacemedia.com",
    },
    {
      icon: (
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: "Service Area",
      value: "Mountain & Western U.S.",
      subvalue:
        "Specializing in luxury properties across Utah, Colorado, Nevada, and beyond",
    },
    {
      icon: (
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      label: "Response Time",
      value: "Same Day Response",
      subvalue:
        "Available for urgent projects and consultations outside regular hours",
    },
  ];

  return (
    <div
      id="contact-form"
      className="min-h-screen z-8 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 scroll-mt-22"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B]/5 via-[#FFD700]/10 to-[#DAA520]/5 opacity-50" />
      </div>

      {/* Main Contact Section */}
      <div className="relative z-8 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] via-[#FFD700] to-[#DAA520]">
                Get in Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to capture something extraordinary? Let's discuss your
              vision and create visual content that defines luxury.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-3xl shadow-2xl border border-[#FFD700]/20 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Start Your Project
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
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all duration-300 text-white placeholder-gray-400"
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
                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all duration-300 text-white placeholder-gray-400"
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
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all duration-300 text-white placeholder-gray-400"
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
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label
                      htmlFor="inquiryType"
                      className="block text-sm font-semibold text-[#FFD700] mb-2"
                    >
                      Project Type:
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all duration-300 text-white"
                    >
                      <option value="" className="bg-neutral-800 text-white">
                        Please select...
                      </option>
                      <option
                        value="real-estate"
                        className="bg-neutral-800 text-white"
                      >
                        Real Estate Photography
                      </option>
                      <option
                        value="architecture"
                        className="bg-neutral-800 text-white"
                      >
                        Architecture & Design
                      </option>
                      <option
                        value="commercial"
                        className="bg-neutral-800 text-white"
                      >
                        Commercial Space
                      </option>
                      <option
                        value="drone"
                        className="bg-neutral-800 text-white"
                      >
                        Drone Cinematography
                      </option>
                      <option
                        value="automotive"
                        className="bg-neutral-800 text-white"
                      >
                        Automotive
                      </option>
                      <option
                        value="rv-marine"
                        className="bg-neutral-800 text-white"
                      >
                        RV & Marine
                      </option>
                      <option
                        value="other"
                        className="bg-neutral-800 text-white"
                      >
                        Other/Custom Project
                      </option>
                    </select>
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
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-[#FFD700] focus:border-[#FFD700] transition-all duration-300 resize-vertical text-white placeholder-gray-400"
                      placeholder="Tell us about your space, timeline, and vision. What story do you want to tell?"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg transform hover:scale-105 ${
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

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Ready to Connect?
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Prefer to reach out directly? We're here to help through any
                  of these channels and can discuss your project immediately.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#FFD700]/10"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#FFD700]/30 to-[#B8860B]/30 rounded-xl flex items-center justify-center text-[#FFD700] group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#FFD700] mb-1 group-hover:text-white transition-colors duration-300">
                          {item.label}
                        </h4>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-white hover:text-[#FFD700] transition-colors duration-200 font-medium text-lg"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium text-lg">
                            {item.value}
                          </p>
                        )}
                        {item.subvalue && (
                          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                            {item.subvalue}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Services */}
              <div className="bg-gradient-to-r from-[#B8860B]/20 via-[#FFD700]/20 to-[#DAA520]/20 rounded-2xl p-6 border border-[#FFD700]/30">
                <h4 className="font-bold text-[#FFD700] mb-4 text-lg">
                  Want to Learn More First?
                </h4>
                <div className="space-y-3">
                  <Link
                    href="/gallery"
                    className="flex items-center text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 mr-3 text-[#FFD700]"
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
                    Explore our portfolio and recent work
                  </Link>
                  <Link
                    href="/services"
                    className="flex items-center text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 mr-3 text-[#FFD700]"
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
                    Learn about our services and pricing
                  </Link>
                  <a
                    href="mailto:contact@anyspacemedia.com"
                    className="flex items-center text-gray-300 hover:text-[#FFD700] transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 mr-3 text-[#FFD700]"
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
                    Email us directly for quick questions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Message */}
      <div className="relative z-8 py-16 border-t border-[#FFD700]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-[#B8860B]/10 via-[#FFD700]/10 to-[#DAA520]/10 rounded-2xl p-8 border border-[#FFD700]/20">
            <p className="text-lg text-gray-300 italic mb-4">
              "Every great project begins with a conversation."
            </p>
            <p className="text-[#FFD700] font-semibold">
              We look forward to capturing your vision and creating something
              extraordinary together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
