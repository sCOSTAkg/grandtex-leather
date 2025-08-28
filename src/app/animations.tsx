'use client';

import { useEffect } from 'react';
import { initScrollAnimations, initParallaxEffect, initProductHoverEffects, initProgressAnimations } from '@/lib/animate';

export default function Animations() {
  useEffect(() => {
    // Initialize all animations
    initScrollAnimations();

    // Initialize parallax effects
    const cleanupParallax = initParallaxEffect();

    // Initialize product hover effects
    initProductHoverEffects();
    initProgressAnimations();

    // Cleanup on unmount
    return () => {
      if (cleanupParallax) cleanupParallax();
    };
  }, []);

  // This component doesn't render anything
  return null;
}
