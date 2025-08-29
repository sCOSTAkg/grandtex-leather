"use client";

import Image from 'next/image';

interface Client {
  name: string;
  logo: string;
}

/**
 * Отображает карусель/сетку логотипов клиентов. В примере используются
 * изображения-заглушки с Unsplash, их следует заменить реальными логотипами.
 */
export default function ClientLogos() {
  const clients: Client[] = [
    { name: 'Business Fashion', logo: 'https://source.unsplash.com/random/200x100/?business,logo,1' },
    { name: 'Elle Style', logo: 'https://source.unsplash.com/random/200x100/?fashion,logo,2' },
    { name: 'SberBank', logo: 'https://source.unsplash.com/random/200x100/?bank,logo,3' },
    { name: 'ActiveWear Pro', logo: 'https://source.unsplash.com/random/200x100/?sport,logo,4' },
    { name: 'Glamour Boutique', logo: 'https://source.unsplash.com/random/200x100/?glamour,logo,5' },
    { name: 'Kids Fashion', logo: 'https://source.unsplash.com/random/200x100/?kids,logo,6' },
    { name: 'Medical Uniform', logo: 'https://source.unsplash.com/random/200x100/?medical,logo,7' },
    { name: 'School Dress', logo: 'https://source.unsplash.com/random/200x100/?school,logo,8' },
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