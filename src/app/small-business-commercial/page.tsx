"use client";
import { useEffect } from "react";
import { useFooterVariant } from "@/context/FooterContext";
import SmallBusinessCommercialHero from "@/components/small-business-commercial/00_SmallBusinessCommercialHero";
import Blog from "@/components/blog";

const SmallBusinessCommercialPage: React.FC = () => {
  const { setVariant } = useFooterVariant();

  useEffect(() => {
    setVariant("black");
  }, [setVariant]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SmallBusinessCommercialHero />
      <Blog />
    </div>
  );
};

export default SmallBusinessCommercialPage;
