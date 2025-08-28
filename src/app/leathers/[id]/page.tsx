import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

// This would typically come from a database or API
const getLeatherProduct = (id: string) => {
  const products = {
    opulent: {
      id: "opulent",
      name: "Opulent",
      collection: "Весна-Лето 27",
      type: "Гладкая",
      finish: "Естественная барабанная отделка",
      treatment: "Полуанилиновая",
      description:
        "Кожа Opulent имеет богатую, изысканную текстуру с превосходной глубиной цвета. Идеально подходит для люксовой обуви и аксессуаров, где требуется элегантность и долговечность.",
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
        "Кожа Papyrus имеет уникальную, тонкую текстуру, напоминающую древнюю бумагу. Эта специальная кожа обработана инновационными технологиями.",
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
        "Кожа Boho характеризуется выразительным тиснёным рисунком, придающим изделию характер и визуальную привлекательность. Анилиновая обработка позволяет сохранить естественную красоту материала.",
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
        "Получена на кожевенных заводах с рейтингом LWG Gold и полной прослеживаемостью.",
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
        "Кожа Sterling обладает гладкой поверхностью с лёгким природным рисунком. Анилиновая обработка усиливает её роскошное ощущение, сохраняя природные особенности.",
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

export default async function LeatherDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getLeatherProduct(id);

  if (!product) {
    return (
      <MainLayout>
        <div className="py-40 px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Продукт не найден</h1>
          <p className="mb-8">
            Кожаный продукт, который вы ищете, не существует или был удалён.
          </p>
          <Link
            href="/leathers"
            className="px-6 py-2 bg-black text-white rounded-full"
          >
            Вернуться к коже
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mt-20 pt-8">
        {/* Breadcrumb */}
        <div className="container mx-auto px-8 mb-8">
          <div className="text-sm text-gray-500">
            <Link href="/" className="hover:text-black">
              Главная
            </Link>
            <span className="mx-2">/</span>
            <Link href="/leathers" className="hover:text-black">
              Кожи
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black">{product.name}</span>
          </div>
        </div>

        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-md overflow-hidden border border-gray-200">
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
                    className="relative aspect-square rounded-md overflow-hidden border border-gray-200"
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
              <p className="text-lg text-gray-600 mb-6">
                Коллекция {product.collection}
              </p>

              <div className="prose max-w-none mb-8">
                <p>{product.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    ТИП
                  </h3>
                  <p>{product.type}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    ОТДЕЛКА
                  </h3>
                  <p>{product.finish}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    ОБРАБОТКА
                  </h3>
                  <p>{product.treatment}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    ТОЛЩИНА
                  </h3>
                  <p>{product.thickness}</p>
                </div>

                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    ПРИМЕНЕНИЕ
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="col-span-2">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    ДОСТУПНЫЕ ЦВЕТА
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sustainability Info */}
              <div className="bg-gray-50 p-6 rounded-md mb-8">
                <h3 className="text-lg font-medium mb-2">Устойчивость</h3>
                <p className="text-gray-700">{product.sustainability}</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-black text-white rounded-full"
                >
                  Запросить образцы
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-3 border border-black rounded-full"
                >
                  Технические характеристики
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-20 py-16 px-8 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-10">
              Вам также может понравиться
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(
                getLeatherProduct("opulent")
                  ? {
                      papyrus: getLeatherProduct("papyrus"),
                      boho: getLeatherProduct("boho"),
                      sterling: getLeatherProduct("sterling"),
                      opulent: getLeatherProduct("opulent"),
                    }
                  : {},
              )
                .filter((p) => p.id !== id)
                .slice(0, 3)
                .map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/leathers/${relatedProduct.id}`}
                    className="group border border-gray-200 bg-white rounded-md overflow-hidden hover:shadow-md transition-shadow"
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
                      <p className="text-sm text-gray-500">
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
