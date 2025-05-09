"use client";

import React, { useEffect } from "react";

declare global {
  interface Window {
    Tally: {
      loadEmbeds: () => void;
    };
  }
}

function Demo() {
  useEffect(() => {
    // Load Tally.so script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Tally.so when script is loaded
    script.onload = () => {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
      }
    };

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#2a2728]">
      <iframe
        data-tally-src="https://tally.so/embed/wkg0qj?dynamicHeight=1"
        loading="lazy"
        title="Astra Symposium Demos!!!"
        className="w-full h-full mb-4 min-h-screen mt-8"
      />
    </div>
  );
}

export default Demo;
