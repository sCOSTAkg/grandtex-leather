'use client';

import { useEffect } from 'react';
import { initScrollAnimations, initParallaxEffect, initProductHoverEffects } from '@/lib/animate';

export default function Animations() {
  useEffect(() => {
    // Initialize all animations
    initScrollAnimations();

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
