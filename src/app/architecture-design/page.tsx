"use client";
import { useEffect } from "react";
import { useFooterVariant } from "@/context/FooterContext";
import Form from "@/components/contact/01_Form";
import ArchitectureDesignHero from "@/components/architecture-design/00_ArchitectureDesignHero";
import TestimonialsSection from "@/components/architecture-design/01_";
import ArchitectureCTA from "@/components/architecture-design/03_";
import PortfolioShowcase from "@/components/architecture-design/02_";

const ArchitectureDesignPage: React.FC = () => {
  const { setVariant } = useFooterVariant();

  useEffect(() => {
    setVariant("black");
  }, [setVariant]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ArchitectureDesignHero />
      <TestimonialsSection />
      <PortfolioShowcase />

      <ArchitectureCTA />
    </div>
  );
};

export default ArchitectureDesignPage;
