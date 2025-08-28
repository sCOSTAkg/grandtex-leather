"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  /**
   * Additional classes passed to the underlying motion.div
   */
  className?: string;
  /**
   * Controls parallax intensity. 0 disables the effect.
   */
  speed?: number;
  /**
   * Delay for the initial reveal animation in seconds.
   */
  delay?: number;
  /**
   * Mapping of animation properties to start/end values based on scroll
   * progress. Each property is interpolated from 0 → 1 scroll range.
   */
  progressEffects?: {
    scale?: [number, number];
    rotate?: [number, number];
    opacity?: [number, number];
    x?: [number, number];
    y?: [number, number];
  };
}

/**
 * Utility wrapper that fades content in when it enters the viewport and
 * optionally applies a parallax translation based on scroll position.
 */
export default function AnimatedSection({
  children,
  className = "",
  speed = 0,
  delay = 0,
  progressEffects,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Parallax effect – translate on the Y axis as the page scrolls
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [
    speed * 50,
    speed * -50,
  ]);

  // Scroll‑progress driven transforms (called unconditionally)
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    progressEffects?.scale ?? [1, 1],
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    progressEffects?.rotate ?? [0, 0],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    progressEffects?.opacity ?? [1, 1],
  );
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    progressEffects?.x ?? [0, 0],
  );
  const progY = useTransform(
    scrollYProgress,
    [0, 1],
    progressEffects?.y ?? [0, 0],
  );

  const style: Record<string, unknown> = {};
  if (speed && !progY) style.y = parallaxY;
  if (scale) style.scale = scale;
  if (rotate) style.rotate = rotate;
  if (opacity) style.opacity = opacity;
  if (x) style.x = x;
  if (progY) style.y = progY;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={Object.keys(style).length ? style : undefined}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
