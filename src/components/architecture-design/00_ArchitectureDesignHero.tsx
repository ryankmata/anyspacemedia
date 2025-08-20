import React from "react";
import { ChevronDown } from "lucide-react";

const ArchitectureDesignHero = () => {
  return (
    <section className="pt-28 md:pt-0 bg-black">
      {/* Media block (image now, video later) */}
      <section className="relative w-full md:min-h-[calc(100vh)] overflow-hidden">
        {/* Media */}
        <img
          src="/bkg.jpg"
          alt=""
          className="
            block w-full h-auto
            md:absolute md:inset-0 md:w-full md:h-full md:object-cover
          "
        />

        {/* Optional overlay on top of image */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {/* Scroll cue positioned under the image */}
        <div className="hidden md:flex pointer-events-none absolute inset-x-0 bottom-5 items-center justify-center space-x-4">
          <p className="text-white/80 text-xs tracking-widest font-black">
            S C R O L L&nbsp;&nbsp;T O&nbsp;&nbsp;D I S C O V E R
          </p>
          <div className="flex flex-col items-center">
            <ChevronDown
              className="w-4 h-4 text-white animate-chevron"
              style={{ animationDelay: "0s" }}
            />
            <ChevronDown
              className="w-4 h-4 text-white animate-chevron"
              style={{ animationDelay: "0.2s" }}
            />
            <ChevronDown
              className="w-4 h-4 text-white animate-chevron"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ArchitectureDesignHero;
