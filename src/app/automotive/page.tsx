"use client";
import { useEffect } from "react";
import { useFooterVariant } from "@/context/FooterContext";
import AutomotiveHero from "@/components/automotive/00_AutomotiveHero";
import Blog from "@/components/blog";

const AutomotivePage: React.FC = () => {
  const { setVariant } = useFooterVariant();

  useEffect(() => {
    setVariant("black");
  }, [setVariant]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <AutomotiveHero />
      <Blog />
    </div>
  );
};

export default AutomotivePage;
