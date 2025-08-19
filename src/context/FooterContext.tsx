"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type FooterVariant = "cream" | "teal";

interface FooterVariantContextType {
  variant: FooterVariant;
  setVariant: (variant: FooterVariant) => void;
}

const FooterVariantContext = createContext<
  FooterVariantContextType | undefined
>(undefined);

export const useFooterVariant = () => {
  const context = useContext(FooterVariantContext);
  if (!context)
    throw new Error(
      "useFooterVariant must be used within FooterVariantProvider"
    );
  return context;
};

export const FooterVariantProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [variant, setVariant] = useState<FooterVariant>("cream");

  return (
    <FooterVariantContext.Provider value={{ variant, setVariant }}>
      {children}
    </FooterVariantContext.Provider>
  );
};
