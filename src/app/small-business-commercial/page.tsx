"use client";
import { useEffect } from "react";
import { useFooterVariant } from "@/context/FooterContext";
import SmallBusinessCommercialHero from "@/components/small-business-commercial/00_SmallBusinessCommercialHero";
import BusinessTypes from "@/components/small-business-commercial/01_";
import PortfolioShowcase from "@/components/small-business-commercial/04_PortfolioShowcase";
import SmallBusinessCommercialCTA from "@/components/small-business-commercial/04_";

const SmallBusinessCommercialPage: React.FC = () => {
  const { setVariant } = useFooterVariant();

  useEffect(() => {
    setVariant("black");
  }, [setVariant]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SmallBusinessCommercialHero />
      <BusinessTypes />
      <PortfolioShowcase />
      <SmallBusinessCommercialCTA />
    </div>
  );
};

export default SmallBusinessCommercialPage;
