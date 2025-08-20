"use client";
import { useEffect } from "react";
import { useFooterVariant } from "@/context/FooterContext";
import Form from "@/components/contact/01_Form";
import RvMarineHero from "@/components/rv-marine/00_RvMarineHero";

const RvMarinePage: React.FC = () => {
  const { setVariant } = useFooterVariant();

  useEffect(() => {
    setVariant("black");
  }, [setVariant]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <RvMarineHero />
      <Form />
    </div>
  );
};

export default RvMarinePage;
