"use client";
import { useEffect } from "react";
import { useFooterVariant } from "@/context/FooterContext";
import HomeHero from "@/components/home/00_HomeHero";
import SpaceSelection from "@/components/home/01_SpaceSelection";
import WhyChooseUs from "@/components/home/02_WhyChooseUs";
import CTABand from "@/components/home/04_HomeCTA";
import TestimonialsSection from "@/components/home/03_Testimonials";

export default function Home() {
  const { setVariant } = useFooterVariant();

  useEffect(() => {
    setVariant("black");
  }, [setVariant]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-900 overflow-x-hidden">
      <HomeHero />
      <SpaceSelection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTABand />
    </div>
  );
}
