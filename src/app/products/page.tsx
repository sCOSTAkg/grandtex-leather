import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

export default function ProductsPage() {
  // Sample clothing products catalog
  const clothingProducts = [
    {
      id: "classic-tee",
      name: "Classic Tee",
      collection: "Лето 27",
      category: "Футболки",
      sizes: ["S", "M", "L", "XL"],
      composition: "100% хлопок",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "denim-jacket",
      name: "Denim Jacket",
      collection: "Осень 26",
      category: "Куртки",
      sizes: ["M", "L", "XL"],
      composition: "100% хлопок (деним)",
      image:
        "https://images.unsplash.com/photo-1520975967284-cf9d0b05a76a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "flowy-dress",
      name: "Flowy Dress",
      collection: "Лето 27",
      category: "Платья",
      sizes: ["S", "M", "L"],
      composition: "Вискоза",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "athletic-shorts",
      name: "Athletic Shorts",
      collection: "Лето 27",
      category: "Шорты",
      sizes: ["M", "L", "XL"],
      composition: "Полиэстер",
      image:
        "https://images.unsplash.com/photo-1511827490797-3e7bf90c16e3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "wool-sweater",
      name: "Wool Sweater",
      collection: "Зима 26",
      category: "Свитеры",
      sizes: ["S", "M", "L"],
      composition: "Шерсть",
      image:
        "https://images.unsplash.com/photo-1517341729106-01f7cc19d5a1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "chino-pants",
      name: "Chino Pants",
      collection: "Осень 26",
      category: "Брюки",
      sizes: ["S", "M", "L", "XL"],
      composition: "Хлопок, эластан",
      image:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <MainLayout transparentHeader={{ transparent: false }}>
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] bg-primary text-primary-foreground mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521335629791-ce4aec67ddaf?auto=format&fit=crop&w=1600&q=80"
            alt="Наша одежда"
            fill
            style={{ objectFit: "cover", opacity: 0.7 }}
            priority
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">Каталог одежды</h1>
            <p className="text-xl max-w-2xl">
              Ознакомьтесь с нашим ассортиментом современной и функциональной одежды
              для разных сезонов и стилей.
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
                <option>Лето 27</option>
                <option>Осень 26</option>
                <option>Зима 26</option>
              </select>

              <select className="px-4 py-2 border border-border rounded-md bg-background">
                <option>Все категории</option>
                <option>Футболки</option>
                <option>Куртки</option>
                <option>Платья</option>
                <option>Шорты</option>
                <option>Свитеры</option>
                <option>Брюки</option>
              </select>

              <select className="px-4 py-2 border border-border rounded-md bg-background">
                <option>Все материалы</option>
                <option>Хлопок</option>
                <option>Деним</option>
                <option>Вискоза</option>
                <option>Полиэстер</option>
                <option>Шерсть</option>
                <option>Смесь</option>
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
            {clothingProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
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
                        КАТЕГОРИЯ
                      </span>
                      <p className="text-sm">{product.category}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">
                        РАЗМЕРЫ
                      </span>
                      <p className="text-sm">{product.sizes.join(", ")}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-xs font-medium text-muted-foreground">
                        СОСТАВ
                      </span>
                      <p className="text-sm">{product.composition}</p>
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
