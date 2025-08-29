"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Компонент часто задаваемых вопросов. Использует локальное состояние для
 * раскрытия и скрытия ответов. Может использоваться как на отдельной
 * странице FAQ, так и внутри других страниц.
 */
export default function FAQ() {
  const items: FAQItem[] = [
    {
      question: 'Какой минимальный объём заказа?',
      answer: 'Минимальный тираж составляет 100 единиц. Для крупных заказов действуют скидки.',
    },
    {
      question: 'Сколько времени занимает производство?',
      answer: 'Сроки зависят от сложности изделия и объёма. В среднем — от 3 до 6 недель.',
    },
    {
      question: 'Какие виды одежды вы шьёте?',
      answer: 'Мы специализируемся на мужской, женской, деловой, спортивной и детской одежде, а также на спецодежде.',
    },
    {
      question: 'Вы работаете с лекалами заказчика?',
      answer: 'Да, мы можем использовать ваши готовые лекала или разработать новые в соответствии с требованиями.',
    },
    {
      question: 'Как производится оплата?',
      answer: 'Мы принимаем оплату по безналичному расчёту. Условия и график платежей обсуждаются индивидуально.',
    },
    {
      question: 'Предоставляете ли вы скидки?',
      answer: 'Да. Скидка 5% предоставляется от 200 единиц, 10% — от 500 единиц, 20% — от 1000 единиц.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Часто задаваемые вопросы</h2>
        <div className="max-w-3xl mx-auto divide-y divide-border">
          {items.map((item, idx) => {
            const open = openIndex === idx;
            return (
              <div key={item.question} className="py-4">
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => setOpenIndex(open ? null : idx)}
                >
                  <span className="font-medium text-foreground">{item.question}</span>
                  {open ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-primary" />
                  )}
                </button>
                {open && (
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}