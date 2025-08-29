import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

// Обычно данные берутся из базы или API
const getProduct = (id: string) => {
  const products = {
    opulent: {
      id: "opulent",
      name: "Opulent",
      collection: "Весна-Лето 27",
      type: "Гладкая",
      finish: "Естественная барабанная отделка",
      treatment: "Полуанилиновая",
      description:
        "Изделие Opulent имеет богатую, изысканную текстуру с превосходной глубиной цвета. Идеально подходит для люксовой обуви и аксессуаров, где требуется элегантность и долговечность.",
      colors: ["Чёрный", "Коричневый", "Бордовый", "Тёмно-синий", "Оливковый"],
      thickness: "1.2-1.4 мм",
      applications: ["Люксовая обувь", "Сумки", "Ремни", "Кошельки"],
      sustainability:
        "Производится с использованием водосберегающих процессов, сокращающих потребление воды на 30% по сравнению с традиционными методами.",
      images: [
        "https://ext.same-assets.com/1118492138/331861169.jpeg",
        "https://ext.same-assets.com/1118492138/3505676007.jpeg",
        "https://ext.same-assets.com/1118492138/1829320189.jpeg",
      ],
    },
    papyrus: {
      id: "papyrus",
      name: "Papyrus",
      collection: "Весна-Лето 27",
      type: "Гладкая",
      finish: "Естественная барабанная отделка",
      treatment: "Специальная",
      description:
        "Изделие Papyrus имеет уникальную, тонкую текстуру, напоминающую древнюю бумагу. Этот материал обработан инновационными технологиями.",
      colors: ["Белый", "Кремовый", "Песочный", "Светло-серый", "Натуральный"],
      thickness: "1.0-1.2 мм",
      applications: ["Модная обувь", "Аксессуары", "Элементы обивки"],
      sustainability:
        "Обработана с использованием биоразлагаемых дубильных агентов, минимизируя воздействие на окружающую среду.",
      images: [
        "https://ext.same-assets.com/1118492138/3988412587.jpeg",
        "https://ext.same-assets.com/1118492138/3757510803.jpeg",
        "https://ext.same-assets.com/1118492138/3872106694.jpeg",
      ],
    },
    boho: {
      id: "boho",
      name: "Boho",
      collection: "Весна-Лето 27",
      type: "Гладкая",
      finish: "Тиснённая",
      treatment: "Анилиновая",
      description:
        "Материал Boho характеризуется выразительным тиснёным рисунком, придающим изделию характер и визуальную привлекательность. Анилиновая обработка позволяет сохранить естественную красоту ткани.",
      colors: [
        "Коньячный",
        "Рыжий",
        "Красно-коричневый",
        "Охра",
        "Тёмно-коричневый",
      ],
      thickness: "1.1-1.3 мм",
      applications: ["Повседневная обувь", "Сумки", "Ремни", "Мебель"],
      sustainability:
        "Произведена на фабриках с рейтингом LWG Gold и полной прослеживаемостью.",
      images: [
        "https://ext.same-assets.com/1118492138/3513175735.jpeg",
        "https://ext.same-assets.com/1118492138/3036160331.jpeg",
        "https://ext.same-assets.com/1118492138/1119344263.jpeg",
      ],
    },
    sterling: {
      id: "sterling",
      name: "Sterling",
      collection: "Весна-Лето 27",
      type: "Гладкая",
      finish: "Гладкая",
      treatment: "Анилиновая",
      description:
        "Материал Sterling обладает гладкой поверхностью с лёгким природным рисунком. Анилиновая обработка усиливает его роскошное ощущение, сохраняя природные особенности.",
      colors: [
        "Серо-серебристый",
        "Платиновый",
        "Угольно-серый",
        "Сине-серый",
        "Чёрный",
      ],
      thickness: "1.2-1.4 мм",
      applications: [
        "Премиальная обувь",
        "Предметы роскоши",
        "Модные аксессуары",
      ],
      sustainability:
        "Обработана с использованием солнечной энергии, что снижает углеродный след на 40%.",
      images: [
        "https://ext.same-assets.com/1118492138/3442149313.jpeg",
        "https://ext.same-assets.com/1118492138/1034291345.jpeg",
        "https://ext.same-assets.com/1118492138/68077734.jpeg",
      ],
    },
  };

  return products[id as keyof typeof products] || null;
};

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
            Продукция, которую вы ищете, не существует или была удалена.
          </p>
          <Link
            href="/products"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-full"
          >
            Вернуться к продукции
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
              Продукция
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
                    ТИП
                  </h3>
                  <p>{product.type}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    ОТДЕЛКА
                  </h3>
                  <p>{product.finish}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    ОБРАБОТКА
                  </h3>
                  <p>{product.treatment}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    ТОЛЩИНА
                  </h3>
                  <p>{product.thickness}</p>
                </div>

                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    ПРИМЕНЕНИЕ
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted rounded-full text-sm"
                      >
                        {app}
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

              {/* Sustainability Info */}
              <div className="bg-secondary p-6 rounded-md mb-8">
                <h3 className="text-lg font-medium mb-2">Устойчивость</h3>
                <p className="text-muted-foreground">{product.sustainability}</p>
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
              {Object.values(
                getProduct("opulent")
                  ? {
                      papyrus: getProduct("papyrus"),
                      boho: getProduct("boho"),
                      sterling: getProduct("sterling"),
                      opulent: getProduct("opulent"),
                    }
                  : {},
              )
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
