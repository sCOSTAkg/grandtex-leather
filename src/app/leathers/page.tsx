import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

export default function LeathersPage() {
  // Sample leather products data
  const leatherProducts = [
    {
      id: "opulent",
      name: "Opulent",
      collection: "Весна-Лето 27",
      type: "Гладкая",
      finish: "Естественная барабанная отделка",
      treatment: "Полуанилиновая",
      image: "https://ext.same-assets.com/1118492138/331861169.jpeg",
    },
    {
      id: "papyrus",
      name: "Papyrus",
      collection: "Весна-Лето 27",
      type: "Гладкая",
      finish: "Естественная барабанная отделка",
      treatment: "Специальная",
      image: "https://ext.same-assets.com/1118492138/3988412587.jpeg",
    },
    {
      id: "boho",
      name: "Boho",
      collection: "Весна-Лето 27",
      type: "Гладкая",
      finish: "Тиснённая",
      treatment: "Анилиновая",
      image: "https://ext.same-assets.com/1118492138/3513175735.jpeg",
    },
    {
      id: "sterling",
      name: "Sterling",
      collection: "Весна-Лето 27",
      type: "Гладкая",
      finish: "Гладкая",
      treatment: "Анилиновая",
      image: "https://ext.same-assets.com/1118492138/3442149313.jpeg",
    },
    {
      id: "vortex",
      name: "Vortex",
      collection: "Осень-Зима 26",
      type: "Нубук",
      finish: "Тиснённая",
      treatment: "Вощёная",
      image: "https://ext.same-assets.com/1118492138/1400919951.jpeg",
    },
    {
      id: "meridian",
      name: "Meridian",
      collection: "Осень-Зима 26",
      type: "Спилок",
      finish: "Естественная барабанная отделка",
      treatment: "Специальная",
      image: "https://ext.same-assets.com/1118492138/542915801.jpeg",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] bg-primary text-primary-foreground mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1118492138/3442149313.jpeg"
            alt="Наши кожи"
            fill
            style={{ objectFit: "cover", opacity: 0.7 }}
            priority
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">Наши кожи</h1>
            <p className="text-xl max-w-2xl">
              Ознакомьтесь с нашими премиальными кожаными продуктами, созданными
              с мастерством и устойчивыми практиками.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-8 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-4">
              <select className="px-4 py-2 border border-border rounded-md bg-background">
                <option>Все коллекции</option>
                <option>Весна-Лето 27</option>
                <option>Осень-Зима 26</option>
              </select>

              <select className="px-4 py-2 border border-border rounded-md bg-background">
                <option>Все типы</option>
                <option>Гладкая</option>
                <option>Нубук</option>
                <option>Спилок</option>
                <option>Подкладочная</option>
              </select>

              <select className="px-4 py-2 border border-border rounded-md bg-background">
                <option>Все обработки</option>
                <option>Анилиновая</option>
                <option>Полуанилиновая</option>
                <option>Специальная</option>
                <option>Вощёная</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Сортировать:</span>
              <select className="px-4 py-2 border border-border rounded-md bg-background">
                <option>Новинки</option>
                <option>Название (А-Я)</option>
                <option>Коллекция</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leatherProducts.map((product) => (
              <Link
                key={product.id}
                href={`/leathers/${product.id}`}
                className="group border border-border rounded-md overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Коллекция {product.collection}
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">
                        ТИП
                      </span>
                      <p className="text-sm">{product.type}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">
                        ОТДЕЛКА
                      </span>
                      <p className="text-sm">{product.finish}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">
                        ОБРАБОТКА
                      </span>
                      <p className="text-sm">{product.treatment}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Request Samples CTA */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Запросить образцы</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Интересует наша продукция? Запросите физические образцы, чтобы лично
            убедиться в её качестве.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg inline-block"
          >
            Свяжитесь с нами
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
