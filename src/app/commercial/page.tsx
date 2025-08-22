"use client";
import { useEffect } from "react";
import { useFooterVariant } from "@/context/FooterContext";
import Form from "@/components/contact/01_Form";
import CommercialHero from "@/components/commercial/00_CommercialHero";
import Blog from "@/components/blog";

const CommercialPage: React.FC = () => {
  const { setVariant } = useFooterVariant();

  useEffect(() => {
    setVariant("black");
  }, [setVariant]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <CommercialHero />
      <Blog />
    </div>
  );
};

export default CommercialPage;
