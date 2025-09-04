"use client";
import { useEffect } from "react";
import { useFooterVariant } from "@/context/FooterContext";
import Form from "@/components/contact/01_Form";
import RealEstateHero from "@/components/real-estate/00_RealEstateHero";
import RealEstateServices from "@/components/real-estate/01_RealEstateServices";
import ServicesOverview from "@/components/real-estate/02_ServicesOverview";
import PortfolioShowcase from "@/components/real-estate/04_PortfolioShowcase";
import RealEstateCTA from "@/components/real-estate/07_RealEstateCTA";

const RealEstatePage: React.FC = () => {
  const { setVariant } = useFooterVariant();

  useEffect(() => {
    setVariant("black");
  }, [setVariant]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <RealEstateHero />
      <RealEstateServices />
      <PortfolioShowcase />
      <ServicesOverview />
      <RealEstateCTA />
    </div>
  );
};

export default RealEstatePage;
