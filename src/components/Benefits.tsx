"use client";

import { Users, CheckCircle, CalendarClock, Sparkles } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactElement;
}

/**
 * Renders a grid of company advantages. Each card highlights one of the
 * strengths of GRANDTEX with a corresponding icon. The hover effect adds
 * subtle movement to encourage interactivity.
 */
export default function Benefits() {
  const benefits: Benefit[] = [
    {
      title: 'Профессиональная команда',
      description:
        'Опытные конструкторы и швеи обеспечивают высокое качество каждой партии.',
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Контроль качества',
      description:
        'Трёхступенчатый контроль гарантирует соответствие изделий вашим требованиям.',
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Соблюдение сроков',
      description:
        'Современное оборудование и отлаженные процессы позволяют нам работать точно в срок.',
      icon: <CalendarClock className="h-8 w-8 text-primary" />,
    },
    {
      title: 'Индивидуальный подход',
      description:
        'Мы учитываем все пожелания заказчика и подбираем оптимальные решения.',
      icon: <Sparkles className="h-8 w-8 text-primary" />,
    },
  ];
  return (
    <section id="advantages" className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Наши преимущества</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
          Мы стремимся предоставить лучший опыт сотрудничества от момента
          задумки до получения готовой продукции.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-6 bg-card rounded-lg shadow-sm hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}