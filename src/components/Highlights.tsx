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
 * Displays recent news or blog posts with hover and scroll animations.
 */
export default function Highlights() {
  const highlights: Highlight[] = [
    {
      title: "New EcoSoft line launched",
      excerpt: "Our softest casual leather now comes with 40% less water usage.",
      image: "https://picsum.photos/seed/highlight1/800/600",
      href: "/highlights/ecosoft",
    },
    {
      title: "PrimeFlex wins innovation award",
      excerpt: "Recognised for durability and performance in athletic footwear.",
      image: "https://picsum.photos/seed/highlight2/800/600",
      href: "/highlights/primeflex-award",
    },
    {
      title: "Tanneries reach carbon milestone",
      excerpt: "Our facilities now run on 80% renewable energy worldwide.",
      image: "https://picsum.photos/seed/highlight3/800/600",
      href: "/highlights/carbon-milestone",
    },
  ];

  return (
    <section className="bg-secondary">
      <div className="container py-16">
        <h2 className="text-3xl md:text-4xl font-semibold">Highlights</h2>
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
                  Read more
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

