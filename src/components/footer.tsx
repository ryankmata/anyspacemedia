"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { useFooterVariant } from "@/context/FooterContext";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubscribe = async () => {
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subscribeOnly: true }),
      });

      if (res.ok) {
        setStatus("success");
        // Reset form after delay (similar to contact form)
        setTimeout(() => {
          setStatus("idle");
          setEmail("");
        }, 5000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Subscription failed:", err);
      setStatus("error");
    }
  };

  const { variant } = useFooterVariant();

  const bgClass = variant === "black" ? "bg-[#000000]" : "bg-[#FFFFFF]";
  const bgInvertClass = variant === "black" ? "bg-[#FFD700]" : "bg-[#000000]";
  const bgInvertClassAlt =
    variant === "black" ? "bg-[#FFFFFF]" : "bg-[#000000]";
  const textClass = variant === "black" ? "text-[#FFFFFF]" : "text-[#000000]";
  const textInvertClass =
    variant === "black" ? "text-[#000000]" : "text-[#FFFFFF]";
  const imgClass = variant === "black" ? "/logo.png" : "/logo.png";
  const hoverClass =
    variant === "black"
      ? "group-hover:text-[#000000]"
      : "group-hover:text-[#FFFFFF]";
  const borderClass =
    variant === "black" ? "border-[#FFD700]/80" : "border-[#C2BFB8]/30";

  return (
    <footer className={`${bgClass} ${textClass} pt-16 pb-2 px-6`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Column 1: Logo + Description */}
        <div className="space-y-4">
          <div className="mb-4">
            <Link href="/" className="block w-fit">
              <Image
                src={`${imgClass}`}
                alt="Strategic Finds Logo"
                width={80}
                height={80}
                className="cursor-pointer hover:opacity-80 transition"
              />
            </Link>
          </div>
          <p className="text-sm leading-relaxed">
            High-quality photo and drone media tailored to any space.
          </p>
          {/* FUTURE EDITION: IF WE HAVE A BACKEND LOGIN FOR CLIENTS
          <Link
            href="/login"
            className="flex items-center space-x-2 mt-4 text-sm font-medium hover:underline"
          >
            <span>Client Login</span>
          </Link>
          */}
        </div>

        {/* Column 2: Company */}
        <div>
          <p className={`text-sm font-semibold ${textClass} mb-4`}>Office</p>
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="https://www.google.com/maps?q=6062+Pinyon+Dr,+Saint+George,+Utah+84790"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className=""
              >
                6062 S Pinyon Dr
                <br />
                Saint George, Utah 84790
              </a>
            </li>
            <li className="group relative w-max">
              <a
                href="tel:+14352166499"
                className={`transition-all relative z-10 px-1 ${hoverClass}`}
              >
                +1 (435) 216-6499
              </a>
              <span
                className={`absolute left-0 bottom-0 w-full h-[1px] transition-all ${bgInvertClass} z-0 group-hover:h-full`}
              ></span>
            </li>
            <li className="group relative w-max">
              <a
                href="mailto:contact@anyspacemedia.com"
                className={`transition-all relative z-10 px-1 ${hoverClass}`}
              >
                contact@anyspacemedia.com
              </a>
              <span
                className={`absolute left-0 bottom-0 w-full h-[1px] transition-all ${bgInvertClass} z-0 group-hover:h-full`}
              ></span>
            </li>
          </ul>
        </div>

        {/* Column 3: Company Pages + Social */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <p className={`text-sm font-semibold ${textClass} mb-4`}>Company</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-4 mt-6">
            {/* Don't need rn 
            <a
              href="#"
              aria-label="X"
              className={`${bgInvertClass} ${textInvertClass} p-2 rounded-full hover:opacity-80`}
            >
              <RiTwitterXLine size={16} />
            </a>
            */}
            <a
              href="#"
              aria-label="Facebook"
              className={`${bgInvertClassAlt} ${textInvertClass} p-2 rounded-full hover:${bgInvertClass}`}
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className={`${bgInvertClassAlt} ${textInvertClass} p-2 rounded-full hover:${bgInvertClass}`}
            >
              <FaInstagram size={16} />
            </a>
            {/* Don't need rn 
            <a
              href="https://www.linkedin.com/company/strategicfinds/"
              rel="noopener noreferrer nofollow"
              aria-label="LinkedIn"
              className={`${bgInvertClass} ${textInvertClass} p-2 rounded-full hover:opacity-80`}
            >
              <FaLinkedinIn size={16} />
            </a>
            */}
          </div>
        </div>

        {/* Column 4: Subscribe */}
        <div
          className={`bg-[#FFD700]/10 p-6 rounded-lg -mt-6 pt-6 shadow-2xl border-1 border-[#FFD700]/80`}
        >
          <h4 className={`text-sm font-semibold ${textClass} mb-4`}>
            Subscribe
          </h4>

          {status === "success" ? (
            <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-center">
              <div className="inline-flex items-center justify-center w-8 h-8 bg-green-200 rounded-full mb-2">
                <svg
                  className="w-4 h-4 text-green-700"
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
              <h5 className="text-sm font-semibold text-green-800 mb-1">
                Thank You!
              </h5>
              <p className="text-xs text-green-700">
                You&apos;re now subscribed to our updates.
              </p>
            </div>
          ) : (
            <>
              <div className="flex flex-nowrap items-stretch mb-4 w-full max-w-md">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow min-w-0 px-4 py-3 text-sm border-l-1 border-t-1 border-b-1 border-[#FFD700] text-gray-700 bg-white rounded-l-md border focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                />
                <button
                  onClick={handleSubscribe}
                  disabled={status === "loading"}
                  type="button"
                  className={`px-4 py-3 rounded-r-md transition-colors duration-200 flex items-center justify-center ${
                    status === "loading"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "border-r-1 border-t-1 border-b-1 border-[#FFD700] bg-[#FFD700]/10 hover:bg-[#FFD700]/50"
                  } text-white`}
                  aria-label="Subscribe"
                >
                  {status === "loading" ? (
                    <svg
                      className="w-4 h-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {status === "error" && (
                <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-4">
                  <p className="text-xs text-red-700">
                    Failed to subscribe. Please try again.
                  </p>
                </div>
              )}

              <p className={`text-xs ${textClass} leading-relaxed`}>
                Love great visuals? Subscribe for photography tips,
                behind-the-scenes drone footage, and exclusive offers on shoots
                across any space. No spam, just inspiration.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className={`border-t ${borderClass} mt-10 py-8 text-sm ${textClass}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-y-6 text-center md:text-left">
          {/* Left: Copyright */}
          <p className="md:justify-self-start">
            © 2025 Any Space Media. All rights reserved.
          </p>

          {/* Center: Zion Ops */}
          <div className="justify-self-center">
            <a
              href="https://SureFoundStrategies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Website by SureFound Strategies
            </a>
          </div>

          {/* Right: Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 md:justify-self-end">
            <Link href="/legal#privacy_policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/legal#cookie_policy" className="hover:underline">
              Cookie Policy
            </Link>
            <Link href="/legal#terms_of_use" className="hover:underline">
              Terms of Use
            </Link>
            <Link href="/legal#disclaimer" className="hover:underline">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
