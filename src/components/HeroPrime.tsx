"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroPrime() {
  return (
    <section className="relative h-[100svh] overflow-hidden">
      {/* video background (можно заменить на свой .mp4) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://videos.pexels.com/video-files/856966/856966-uhd_2560_1440_25fps.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 h-full container flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight"
        >
          Accelerate Ahead.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="mt-4 max-w-xl text-lg md:text-xl text-muted-foreground"
        >
          Future-forward tannery expertise for brands of every size.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="mt-8 flex gap-4"
        >
          <Link href="/products" className="px-5 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition">
            Explore Products
          </Link>
          <Link href="/sustainability" className="px-5 py-3 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition">
            Sustainability
          </Link>
        </motion.div>
      </div>
      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">Scroll</div>
    </section>
  );
}
