"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Hero section tailored for the GRANDTEX sewing factory. Presents a bold
 * headline, supporting text and two call‑to‑action buttons. The background
 * uses a random image of a sewing factory fetched from Unsplash.
 */
export default function NewHero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/random/1600x900/?sewing,factory')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />
      {/* Content wrapper */}
      <div className="relative z-10 max-w-3xl px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight"
        >
          Производство одежды под ключ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto"
        >
          Полный цикл – от лекал до готовой партии. Точные лекала,
          современное оборудование и трёхуровневый контроль качества.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: 'easeOut', delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link
            href="/calculator"
            className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md hover:bg-primary/90 transition-colors"
          >
            Рассчитать стоимость
          </Link>
          <Link
            href="/portfolio"
            className="inline-block rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Портфолио
          </Link>
        </motion.div>
      </div>
    </section>
  );
}