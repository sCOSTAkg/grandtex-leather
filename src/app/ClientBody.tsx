"use client";

import { useEffect } from "react";
import { initScrollAnimations, initParallaxEffect } from "../lib/animate";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased font-inter bg-background";
    initScrollAnimations();
    const cleanupParallax = initParallaxEffect();

    return () => {
      if (cleanupParallax) cleanupParallax();
    };
  }, []);

  return <div className="antialiased font-inter">{children}</div>;
}
