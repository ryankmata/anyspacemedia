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

  const bgClass = variant === "cream" ? "bg-[#EFE8DE]" : "bg-[#024E4D]";
  const bgInvertClass = variant === "cream" ? "bg-[#024E4D]" : "bg-[#EFE8DE]";
  const textClass = variant === "cream" ? "text-[#024E4D]" : "text-[#EFE8DE]";
  const textInvertClass =
    variant === "cream" ? "text-[#EFE8DE]" : "text-[#024E4D]";
  const imgClass =
    variant === "cream"
      ? "/strategicfinds_logohorizontal_teal.svg"
      : "/strategicfinds_logohorizontal_cream.svg";
  const hoverClass =
    variant === "cream"
      ? "group-hover:text-[#C2BFB8]"
      : "group-hover:text-[#024e4d]";
  const borderClass =
    variant === "cream" ? "border-[#024e4d]/30" : "border-[#C2BFB8]/30";

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
                width={160}
                height={40}
                className="cursor-pointer hover:opacity-80 transition"
              />
            </Link>
          </div>
          <p className="text-sm leading-relaxed">
            We connect business buyers and sellers through confidential, curated
            deal-making tailored to each of our clients.
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
                href="https://www.google.com/maps?q=169+West+2710+South+Circle,+Suite+202D,+Saint+George,+Utah+84790"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className=""
              >
                169 West 2710 South Circle, Suite 202D
                <br />
                Saint George, Utah 84790
              </a>
            </li>
            <li className="group relative w-max">
              <a
                href="tel:+14355232220"
                className={`transition-all relative z-10 px-1 ${hoverClass}`}
              >
                +1 (435) 523-2220
              </a>
              <span
                className={`absolute left-0 bottom-0 w-full h-[1px] transition-all ${bgInvertClass} z-0 group-hover:h-full`}
              ></span>
            </li>
            <li className="group relative w-max">
              <a
                href="mailto:contact@strategicfinds.com"
                className={`transition-all relative z-10 px-1 ${hoverClass}`}
              >
                contact@strategicfinds.com
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
            {/* addiontal social media to potentially add later
            <a
              href="#"
              aria-label="X"
              className={`${bgInvertClass} ${textInvertClass} p-2 rounded-full hover:opacity-80`}
            >
              <RiTwitterXLine size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className={`${bgInvertClass} ${textInvertClass} p-2 rounded-full hover:opacity-80`}
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className={`${bgInvertClass} ${textInvertClass} p-2 rounded-full hover:opacity-80`}
            >
              <FaInstagram size={16} />
            </a>
            */}
            <a
              href="https://www.linkedin.com/company/strategicfinds/"
              rel="noopener noreferrer nofollow"
              aria-label="LinkedIn"
              className={`${bgInvertClass} ${textInvertClass} p-2 rounded-full hover:opacity-80`}
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        {/* Column 4: Subscribe */}
        <div
          className={`${bgInvertClass} p-6 rounded-lg -mt-6 pt-6 shadow-2xl`}
        >
          <h4 className={`text-sm font-semibold ${textInvertClass} mb-4`}>
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
                You're now subscribed to our updates.
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
                  className="flex-grow min-w-0 px-4 py-3 text-sm text-gray-700 bg-white rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                  onClick={handleSubscribe}
                  disabled={status === "loading"}
                  type="button"
                  className={`px-4 py-3 rounded-r-md transition-colors duration-200 flex items-center justify-center ${
                    status === "loading"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#d75d5d] hover:bg-[#a24649]"
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

              <p className={`text-xs ${textInvertClass} leading-relaxed`}>
                Buying or selling a business? Subscribe for early access to new
                listings, local market insights, and tips for navigating the
                sale or purchase process. No spam, ever.
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
            © 2025 Strategic Finds. All rights reserved.
          </p>

          {/* Center: Zion Ops */}
          <div className="justify-self-center">
            <a
              href="https://zion-ops.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Website by Zion Ops
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
