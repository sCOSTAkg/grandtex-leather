"use client";

import { useEffect } from "react";
import { useScrollFadeIn, initParallaxEffect } from "../lib/animate";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useScrollFadeIn();

  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased font-inter bg-background";
    const cleanupParallax = initParallaxEffect();
  }, []);

  return <div className="antialiased font-inter">{children}</div>;
}
