"use client";
import { useEffect } from "react";
import { useFooterVariant } from "@/context/FooterContext";
import Form from "@/components/contact/01_Form";
import RealEstateHero from "@/components/real-estate/00_RealEstateHero";

const RealEstatePage: React.FC = () => {
  const { setVariant } = useFooterVariant();

  useEffect(() => {
    setVariant("black");
  }, [setVariant]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <RealEstateHero />
      <Form />
    </div>
  );
};

export default RealEstatePage;
