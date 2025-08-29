"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Highlight {
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

/**
 * Отображает недавние новости или статьи с анимациями при наведении и
 * прокрутке.
 */
export default function Highlights() {
  const highlights: Highlight[] = [
    {
      title: "Запущена новая линия EcoSoft",
      excerpt:
        "Наш самый мягкий повседневный продукт теперь требует на 40% меньше воды.",
      image: "https://picsum.photos/seed/highlight1/800/600",
      href: "/highlights/ecosoft",
    },
    {
      title: "PrimeFlex получает премию за инновации",
      excerpt:
        "Отмечен за долговечность и эффективность в спортивной обуви.",
      image: "https://picsum.photos/seed/highlight2/800/600",
      href: "/highlights/primeflex-award",
    },
    {
      title: "Фабрики достигли углеродной вехи",
      excerpt:
        "Наши производства теперь работают на 80% возобновляемой энергии по всему миру.",
      image: "https://picsum.photos/seed/highlight3/800/600",
      href: "/highlights/carbon-milestone",
    },
  ];

  return (
    <section className="bg-secondary">
      <div className="container py-16">
        <h2 className="text-3xl md:text-4xl font-semibold">Новости</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-xl overflow-hidden shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={600}
                className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.excerpt}</p>
                <Link href={item.href} className="mt-4 inline-block text-primary hover:underline">
                  Подробнее
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

