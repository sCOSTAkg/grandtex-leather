"use client";

import { Factory, Recycle, Sun, Users } from "lucide-react";
import { motion } from "framer-motion";

interface Pillar {
  title: string;
  description: string;
  icon: React.ReactElement;
}

/**
 * Отображает четыре столпа стратегии «Consciously Crafted» с лёгкими
 * анимациями при появлении карточек в области видимости.
 */
export default function SustainabilityPillars() {
  const pillars: Pillar[] = [
    {
      title: "Операционное совершенство",
      description:
        "Эффективное использование ресурсов, сокращение отходов и предотвращение загрязнений на наших фабриках.",
      icon: <Factory className="h-8 w-8 text-primary" />,
    },
    {
      title: "Замкнутый цикл",
      description:
        "Проектирование продукции с учётом полного жизненного цикла и поиск новых применений для побочных материалов.",
      icon: <Recycle className="h-8 w-8 text-primary" />,
    },
    {
      title: "Климатические действия",
      description:
        "Инвестиции в возобновляемую энергию и стремление к углеродной нейтральности к 2030 году.",
      icon: <Sun className="h-8 w-8 text-primary" />,
    },
    {
      title: "Социальное воздействие",
      description:
        "Справедливые условия труда и общественные инициативы в каждом регионе, где мы работаем.",
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
          Устойчивое развитие
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-muted-foreground max-w-2xl"
        >
          Стратегия Consciously Crafted охватывает четыре направления: операционное совершенство, замкнутый цикл, климатические действия и социальное воздействие.
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

