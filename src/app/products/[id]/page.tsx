import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

interface Product {
  id: string;
  name: string;
  collection: string;
  category: string;
  sizes: string[];
  composition: string;
  description: string;
  colors: string[];
  features: string[];
  care: string;
  images: string[];
}

// Sample clothing products data
const products: Record<string, Product> = {
  "classic-tee": {
    id: "classic-tee",
    name: "Classic Tee",
    collection: "Лето 27",
    category: "Футболки",
    sizes: ["S", "M", "L", "XL"],
    composition: "100% хлопок",
    description: "Универсальная хлопковая футболка для повседневного использования.",
    colors: ["Белый", "Чёрный", "Серый"],
    features: ["Мягкая ткань", "Прямой крой"],
    care: "Машинная стирка при 30°C, не отбеливать.",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
    ],
  },
  "denim-jacket": {
    id: "denim-jacket",
    name: "Denim Jacket",
    collection: "Осень 26",
    category: "Куртки",
    sizes: ["M", "L", "XL"],
    composition: "100% хлопок (деним)",
    description: "Классическая джинсовая куртка со слегка свободным кроем.",
    colors: ["Синий", "Чёрный"],
    features: ["Прочный деним", "Металлические пуговицы"],
    care: "Стирать наизнанку при 30°C.",
    images: [
      "https://images.unsplash.com/photo-1520975967284-cf9d0b05a76a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975967284-cf9d0b05a76a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520975967284-cf9d0b05a76a?auto=format&fit=crop&w=800&q=80",
    ],
  },
  "flowy-dress": {
    id: "flowy-dress",
    name: "Flowy Dress",
    collection: "Лето 27",
    category: "Платья",
    sizes: ["S", "M", "L"],
    composition: "Вискоза",
    description: "Лёгкое струящееся платье для тёплых дней.",
    colors: ["Красный", "Синий", "Бежевый"],
    features: ["Свободный силуэт", "Пояс в комплекте"],
    care: "Ручная стирка или деликатный режим.",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    ],
  },
  "athletic-shorts": {
    id: "athletic-shorts",
    name: "Athletic Shorts",
    collection: "Лето 27",
    category: "Шорты",
    sizes: ["M", "L", "XL"],
    composition: "Полиэстер",
    description: "Спортивные шорты с влагоотводящей технологией.",
    colors: ["Чёрный", "Серый"],
    features: ["Лёгкий материал", "Сетчатая подкладка"],
    care: "Машинная стирка при 30°C.",
    images: [
      "https://images.unsplash.com/photo-1511827490797-3e7bf90c16e3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511827490797-3e7bf90c16e3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511827490797-3e7bf90c16e3?auto=format&fit=crop&w=800&q=80",
    ],
  },
  "wool-sweater": {
    id: "wool-sweater",
    name: "Wool Sweater",
    collection: "Зима 26",
    category: "Свитеры",
    sizes: ["S", "M", "L"],
    composition: "Шерсть",
    description: "Тёплый шерстяной свитер с высоким горлом.",
    colors: ["Бежевый", "Серый", "Зелёный"],
    features: ["Узор крупной вязки", "Комфортный крой"],
    care: "Только ручная стирка, сушить горизонтально.",
    images: [
      "https://images.unsplash.com/photo-1517341729106-01f7cc19d5a1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517341729106-01f7cc19d5a1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517341729106-01f7cc19d5a1?auto=format&fit=crop&w=800&q=80",
    ],
  },
  "chino-pants": {
    id: "chino-pants",
    name: "Chino Pants",
    collection: "Осень 26",
    category: "Брюки",
    sizes: ["S", "M", "L", "XL"],
    composition: "Хлопок, эластан",
    description: "Универсальные чиносы для повседневного образа.",
    colors: ["Хаки", "Бежевый", "Синий"],
    features: ["Эластичный пояс", "Прямой крой"],
    care: "Машинная стирка при 30°C, гладить при низкой температуре.",
    images: [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
    ],
  },
};

const getProduct = (id: string) => products[id];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return (
      <MainLayout transparentHeader={{ transparent: false }}>
        <div className="py-40 px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Продукт не найден</h1>
          <p className="mb-8">
            Продукт, который вы ищете, не существует или был удалён.
          </p>
          <Link
            href="/products"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-full"
          >
            Вернуться к каталогу
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout transparentHeader={{ transparent: false }}>
      <div className="mt-20 pt-8">
        {/* Breadcrumb */}
        <div className="container mx-auto px-8 mb-8">
          <div className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Главная
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-foreground">
              Одежда
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>

        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-md overflow-hidden border border-border">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-md overflow-hidden border border-border"
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 2}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Коллекция {product.collection}
              </p>

              <div className="prose max-w-none mb-8">
                <p>{product.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    КАТЕГОРИЯ
                  </h3>
                  <p>{product.category}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    РАЗМЕРЫ
                  </h3>
                  <p>{product.sizes.join(", ")}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    СОСТАВ
                  </h3>
                  <p>{product.composition}</p>
                </div>

                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    ОСОБЕННОСТИ
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    ДОСТУПНЫЕ ЦВЕТА
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted rounded-full text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Care Info */}
              <div className="bg-secondary p-6 rounded-md mb-8">
                <h3 className="text-lg font-medium mb-2">Уход</h3>
                <p className="text-muted-foreground">{product.care}</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full"
                >
                  Запросить образцы
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-3 border border-primary rounded-full"
                >
                  Технические характеристики
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20 py-16 px-8 bg-secondary">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10">
              Вам также может понравиться
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(products)
                .filter((p) => p.id !== id)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/products/${relatedProduct.id}`}
                    className="group border border-border bg-background rounded-md overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Коллекция {relatedProduct.collection}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
