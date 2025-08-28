"use client";

import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  volume: string;
  duration: string;
  image: string;
}

/**
 * Portfolio section displays recent sewing projects in a responsive grid. Each
 * project card reveals a call‑to‑action on hover, encouraging visitors to
 * explore further. The sample data can be replaced with real project
 * information or fetched from an API.
 */
export default function Portfolio() {
  const projects: Project[] = [
    {
      id: 'project-a',
      title: 'Бизнес костюмы',
      description: 'Классические комплекты для деловой одежды с подчёркнутой элегантностью.',
      volume: '500 ед.',
      duration: '30 дней',
      image: 'https://source.unsplash.com/random/800x600/?suit,tailoring',
    },
    {
      id: 'project-b',
      title: 'Спортивная коллекция',
      description: 'Лёгкая и дышащая спортивная одежда для активного образа жизни.',
      volume: '750 ед.',
      duration: '45 дней',
      image: 'https://source.unsplash.com/random/800x600/?sportswear,sewing',
    },
    {
      id: 'project-c',
      title: 'Детская мода',
      description: 'Яркие и удобные модели для детей любых возрастов.',
      volume: '600 ед.',
      duration: '35 дней',
      image: 'https://source.unsplash.com/random/800x600/?kids,clothes',
    },
    {
      id: 'project-d',
      title: 'Униформа',
      description: 'Корпоративная и профессиональная форма для сотрудников.',
      volume: '400 ед.',
      duration: '25 дней',
      image: 'https://source.unsplash.com/random/800x600/?uniform,factory',
    },
    {
      id: 'project-e',
      title: 'Вечерние платья',
      description: 'Изысканные наряды для особых случаев.',
      volume: '300 ед.',
      duration: '40 дней',
      image: 'https://source.unsplash.com/random/800x600/?evening-dress,couture',
    },
    {
      id: 'project-f',
      title: 'Спецодежда',
      description: 'Функциональные изделия для рабочих и медицинских учреждений.',
      volume: '800 ед.',
      duration: '50 дней',
      image: 'https://source.unsplash.com/random/800x600/?workwear,industrial',
    },
  ];
  return (
    <section id="portfolio" className="py-16">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Наши проекты</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-10">
          От эскиза до серийной партии GRANDTEX реализует проекты любой сложности. Обращайтесь
          к нам за качественными и стильными коллекциями.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-card"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="h-60 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Объём: {project.volume}</span>
                  <span>Срок: {project.duration}</span>
                </div>
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link
                  href={`/portfolio/${project.id}`}
                  className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}