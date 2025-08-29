"use client";

import Image from 'next/image';

interface Client {
  name: string;
  logo: string;
}

/**
 * Отображает карусель/сетку логотипов клиентов. В примере используются
 * локальные SVG-логотипы, размещённые в каталоге `/public/clients`.
 */
export default function ClientLogos() {
  const clients: Client[] = [
    { name: 'Business Fashion', logo: '/clients/business-fashion.svg' },
    { name: 'Elle Style', logo: '/clients/elle-style.svg' },
    { name: 'SberBank', logo: '/clients/sberbank.svg' },
    { name: 'ActiveWear Pro', logo: '/clients/activewear-pro.svg' },
    { name: 'Glamour Boutique', logo: '/clients/glamour-boutique.svg' },
    { name: 'Kids Fashion', logo: '/clients/kids-fashion.svg' },
    { name: 'Medical Uniform', logo: '/clients/medical-uniform.svg' },
    { name: 'School Dress', logo: '/clients/school-dress.svg' },
  ];
  return (
    <section id="clients" className="py-16">
      <div className="container text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Нам доверяют мировые бренды</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          Мы сотрудничаем с компаниями любого масштаба. Соединяя высокое
          качество и персонализированный сервис, мы создаём одежду, которая
          поднимает бренды на новый уровень.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client) => (
            <div key={client.name} className="flex flex-col items-center">
              <Image
                src={client.logo}
                alt={client.name}
                width={200}
                height={100}
                className="object-contain h-16 w-auto"
              />
              <span className="mt-2 text-sm text-muted-foreground">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
