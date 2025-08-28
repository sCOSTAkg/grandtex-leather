"use client";

import { useEffect } from "react";
import {
  useScrollFadeIn,
  initParallaxEffect,
  initProductHoverEffects,
} from "@/lib/animate";

export default function Animations() {
  useScrollFadeIn();

  useEffect(() => {
    // Initialize parallax effects
    const cleanupParallax = initParallaxEffect();

    // Initialize product hover effects
    initProductHoverEffects();

    // Cleanup on unmount
    return () => {
      if (cleanupParallax) cleanupParallax();
    };
  }, []);

  // This component doesn't render anything
  return null;
}
