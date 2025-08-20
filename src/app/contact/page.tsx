"use client";
import { useEffect } from "react";
import { useFooterVariant } from "@/context/FooterContext";
import ContactHero from "@/components/contact/00_ContactHero";
import Form from "@/components/contact/01_Form";

const ContactPage: React.FC = () => {
  const { setVariant } = useFooterVariant();

  useEffect(() => {
    setVariant("black");
  }, [setVariant]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ContactHero />
      <Form />
    </div>
  );
};

export default ContactPage;
