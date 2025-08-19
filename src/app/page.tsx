"use client";
import { useEffect } from "react";
import { useFooterVariant } from "@/context/FooterContext";
import LandingPage from "@/components/home/00_HomeHero";
import SpaceSelection from "@/components/home/SpaceSelection";

export default function Home() {
  const { setVariant } = useFooterVariant();

  useEffect(() => {
    setVariant("cream");
  }, [setVariant]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <LandingPage />
      <SpaceSelection />
    </div>
  );
}
