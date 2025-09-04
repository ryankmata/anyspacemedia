"use client";
import { useEffect } from "react";
import { useFooterVariant } from "@/context/FooterContext";
import ArchitectureDesignHero from "@/components/architecture-design/00_ArchitectureDesignHero";
import TestimonialsSection from "@/components/architecture-design/05_Testimonials";
import ArchitectureCTA from "@/components/architecture-design/07_ArchitectureDesignCTA";
import PortfolioShowcase from "@/components/architecture-design/04_PortfolioShowcase";
import WhoWeServe from "@/components/architecture-design/01_WhoWeServe";
import ServicesOverview from "@/components/architecture-design/02_ServicesOverview";
import WhyChooseUs from "@/components/architecture-design/06_WhyChooseUs";

const ArchitectureDesignPage: React.FC = () => {
  const { setVariant } = useFooterVariant();

  useEffect(() => {
    setVariant("black");
  }, [setVariant]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ArchitectureDesignHero />
      <WhoWeServe />
      <PortfolioShowcase />
      <WhyChooseUs />
      <ServicesOverview />
      <TestimonialsSection />
      <ArchitectureCTA />
    </div>
  );
};

export default ArchitectureDesignPage;
