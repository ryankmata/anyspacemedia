"use client";
import { useEffect } from "react";
import { useFooterVariant } from "@/context/FooterContext";

const ContactPage: React.FC = () => {
  const { setVariant } = useFooterVariant();

  useEffect(() => {
    setVariant("black");
  }, [setVariant]);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <div
        className="pt-20 z-9"
        data-embed-url="https://listings.anyspacemedia.com/order"
        dangerouslySetInnerHTML={{
          __html: `<script src="https://listings.anyspacemedia.com/embeds/anyspacemedia"></script>`,
        }}
      />
    </div>
  );
};

export default ContactPage;
