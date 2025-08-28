"use client";

import { Factory, Recycle, Sun, Users } from "lucide-react";
import { motion } from "framer-motion";

interface Pillar {
  title: string;
  description: string;
  icon: React.ReactElement;
}

/**
 * Displays the four pillars of the "Consciously Crafted" strategy with
 * subtle animations when the cards enter the viewport.
 */
export default function SustainabilityPillars() {
  const pillars: Pillar[] = [
    {
      title: "Operational Excellence",
      description:
        "Efficient resource use, waste reduction and pollution prevention across our tanneries.",
      icon: <Factory className="h-8 w-8 text-primary" />,
    },
    {
      title: "Circularity",
      description:
        "Designing products with a full life-cycle approach and finding new uses for by-products.",
      icon: <Recycle className="h-8 w-8 text-primary" />,
    },
    {
      title: "Climate Action",
      description:
        "Investing in renewable energy and striving for carbon neutrality by 2030.",
      icon: <Sun className="h-8 w-8 text-primary" />,
    },
    {
      title: "Social Impact",
      description:
        "Fair labour practices and community initiatives in every region where we operate.",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
  ];

  return (
    <section className="bg-secondary">
      <div className="container py-20">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold"
        >
          Sustainability
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-muted-foreground max-w-2xl"
        >
          Consciously Crafted strategy across four pillars: Operational Excellence, Circularity, Climate Action and Social Impact.
        </motion.p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-background rounded-xl shadow-sm"
            >
              <div className="mb-4">{pillar.icon}</div>
              <h3 className="text-lg font-semibold">{pillar.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

