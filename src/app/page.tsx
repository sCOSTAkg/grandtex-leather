import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  const projects = [
    {
      title: "Коллекция деловых рубашек",
      description: "2000 ед. за 25 дней. Хлопок премиум, классический крой.",
      image: "https://images.unsplash.com/photo-1520974735194-acc27882dbe6",
      tags: ["Рубашки", "Хлопок"],
    },
    {
      title: "Женские блузы премиум-класса",
      description: "1500 ед. за 20 дней. Шёлк и сложные элементы дизайна.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
      tags: ["Блузы", "Шёлк"],
    },
    {
      title: "Корпоративная униформа",
      description: "500 ед. за 18 дней. Смесовые ткани, брендированная фурнитура.",
      image: "https://images.unsplash.com/photo-1520974746834-a5a2124b83f8",
      tags: ["Униформа", "Смесовая ткань"],
    },
    {
      title: "Спортивная линия одежды",
      description: "800 ед. за 22 дня. Дышащие материалы и эргономичный крой.",
      image: "https://images.unsplash.com/photo-1503342394128-cdd158b06d76",
      tags: ["Спорт", "Трикотаж"],
    },
    {
      title: "Вечерние платья",
      description: "300 ед. за 30 дней. Атлас и ручная отделка.",
      image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59",
      tags: ["Платья", "Атлас"],
    },
    {
      title: "Детская одежда",
      description: "1000 ед. за 25 дней. Натуральный хлопок и безопасная фурнитура.",
      image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
      tags: ["Детская", "Хлопок"],
    },
  ];

  const advantages = [
    {
      title: "Профессиональная команда",
      description:
        "Опытные конструкторы, технологи, швеи и персональные менеджеры.",
    },
    {
      title: "Контроль качества",
      description:
        "Трёхуровневый контроль: входной, промежуточный и финальный.",
    },
    {
      title: "Соблюдение сроков",
      description: "Чёткое планирование — партия от 100 ед. за 15–30 дней.",
    },
    {
      title: "Индивидуальный подход",
      description:
        "Персональный менеджер, гибкие условия оплаты и скидки для крупных заказов.",
    },
  ];

  const clients = [
    { name: "Business Fashion", logo: "https://via.placeholder.com/120x60?text=BF" },
    { name: "Elle Style", logo: "https://via.placeholder.com/120x60?text=ES" },
    { name: "SberBank", logo: "https://via.placeholder.com/120x60?text=SB" },
    { name: "ActiveWear Pro", logo: "https://via.placeholder.com/120x60?text=AW" },
    { name: "Glamour Boutique", logo: "https://via.placeholder.com/120x60?text=GB" },
    { name: "Kids Fashion", logo: "https://via.placeholder.com/120x60?text=KF" },
    { name: "Medical Uniform", logo: "https://via.placeholder.com/120x60?text=MU" },
    { name: "School Dress", logo: "https://via.placeholder.com/120x60?text=SD" },
  ];

  return (
    <MainLayout transparentHeader={true}>
      {/* Hero Section */}
      <section className="relative w-full h-screen text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1582719478181-0d5fdb1f4080"
          alt="Швейный цех"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Производство одежды под ключ
          </h1>
          <p className="text-lg sm:text-2xl mb-10">
            Полный цикл – от лекал до готовой партии. Точные лекала, современное
            оборудование и трёхуровневый контроль качества.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/calculator"
              className="px-6 py-3 bg-white text-black rounded-full hover:shadow-lg transition"
            >
              Рассчитать стоимость
            </Link>
            <Link
              href="/portfolio"
              className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              Портфолио
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-8 bg-white">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши проекты</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-lg overflow-hidden shadow-sm"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="object-cover w-full h-56"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href="#"
                className="absolute inset-0 flex items-center justify-center bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Подробнее
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-gray-600">
          От эскиза до серийной партии, GRANDTEX реализует проекты любой
          сложности. Обращайтесь к нам за качественными и стильными коллекциями.
        </p>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv) => (
              <AnimatedSection
                key={adv.title}
                className="p-6 bg-white rounded-lg shadow hover:-translate-y-1 hover:shadow-lg transition"
              >
                <h3 className="font-semibold mb-2">{adv.title}</h3>
                <p className="text-sm text-gray-600">{adv.description}</p>
              </AnimatedSection>
            ))}
          </div>
          <div className="relative h-96">
            <Image
              src="https://images.unsplash.com/photo-1582719478290-e110fba59a1f"
              alt="Швейная фабрика"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white/70 p-4 backdrop-blur rounded-md max-w-xs">
              <h4 className="font-semibold mb-1">Наша гарантия</h4>
              <p className="text-sm text-gray-800">
                Мы гарантируем 100% соответствие продукции вашим требованиям,
                предоставляем образец за 3 дня и даём 30‑дневную гарантию на
                изделия.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 px-8">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Нам доверяют</h2>
          <p className="text-gray-600">
            Нам доверяют компании любого масштаба. Соединяя высокое качество и
            персонализированный сервис, мы создаём одежду, которая поднимает
            бренды на новый уровень.
          </p>
        </AnimatedSection>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client) => (
            <div key={client.name} className="flex flex-col items-center">
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={60}
                className="object-contain"
              />
              <span className="mt-2 text-sm text-gray-700">{client.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Готовы начать сотрудничество?</h2>
        <p className="mb-8">
          Оцените возможности GRANDTEX – наш премиальный пошив поможет
          реализовать ваши идеи.
        </p>
        <Link
          href="/contact"
          className="px-8 py-3 bg-white text-black rounded-full hover:shadow-lg transition"
        >
          Связаться с нами
        </Link>
      </section>
    </MainLayout>
  );
}

