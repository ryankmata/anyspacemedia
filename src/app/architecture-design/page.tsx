"use client";
import { useEffect } from "react";
import { useFooterVariant } from "@/context/FooterContext";
import Form from "@/components/contact/01_Form";
import ArchitectureDesignHero from "@/components/architecture-design/00_ArchitectureDesignHero";

const ArchitectureDesignPage: React.FC = () => {
  const { setVariant } = useFooterVariant();

  useEffect(() => {
    setVariant("black");
  }, [setVariant]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ArchitectureDesignHero />
      <Form />
    </div>
  );
};

export default ArchitectureDesignPage;
