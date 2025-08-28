import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import { BLUR_DATA_URL } from "@/lib/blur";

const getCollection = (id: string) => {
  const collections = {
    "spring-summer-2027": {
      id: "spring-summer-2027",
      title: "Весна-Лето 27",
      headline: "Ускоряйтесь вперёд",
      description:
        "От спортзала до ежедневных поездок коллекция SS27 отражает глубину и масштаб того, что GRANDTEX делает лучше всего — создаёт универсальные кожи, которые адаптируются под ваши нужды.",
      longDescription:
        "В рамках нашего ребрендинга этот сезон ознаменует обновлённое стремление обслуживать бренды любого размера с точностью, целью и партнёрством. Независимо от того, создаёте ли вы массовые линии или лимитированные силуэты, наши продукты готовы адаптироваться. От гладких фулгрейнов до прочных нубуков — каждая кожа является результатом экспертного мастерства и промышленной точности, поддержанной обновлённой идентичностью бренда, созданной для движения вперёд. Это GRANDTEX — обновлённый, утончённый и готовый идти вместе с вами.",
      season: "Весна-Лето",
      year: "2027",
      mainImage: "https://ext.same-assets.com/1118492138/1829320189.jpeg",
      galleryImages: [
        "https://ext.same-assets.com/1118492138/3505676007.jpeg",
        "https://ext.same-assets.com/1118492138/3442149313.jpeg",
        "https://ext.same-assets.com/1118492138/331861169.jpeg",
        "https://ext.same-assets.com/1118492138/3988412587.jpeg",
      ],
      products: [
        {
          id: "opulent",
          name: "Opulent",
          type: "Гладкая",
          image: "https://ext.same-assets.com/1118492138/331861169.jpeg",
        },
        {
          id: "papyrus",
          name: "Papyrus",
          type: "Гладкая",
          image: "https://ext.same-assets.com/1118492138/3988412587.jpeg",
        },
        {
          id: "boho",
          name: "Boho",
          type: "Гладкая",
          image: "https://ext.same-assets.com/1118492138/3513175735.jpeg",
        },
        {
          id: "sterling",
          name: "Sterling",
          type: "Гладкая",
          image: "https://ext.same-assets.com/1118492138/3442149313.jpeg",
        },
      ],
      themes: [
        {
          title: "Естественная универсальность",
          description:
            "Кожи, созданные для адаптации к различным применениям при сохранении естественной привлекательности.",
        },
        {
          title: "Городская функциональность",
          description:
            "Прочные и изящные кожи, выдерживающие ритм городской жизни без потери стиля.",
        },
        {
          title: "Устойчивая роскошь",
          description:
            "Премиальные кожи, созданные с соблюдением экологически ответственных процессов.",
        },
      ],
    },
    fw26: {
      id: "fw26",
      title: "Осень-Зима 26",
      headline: "Непреходящая элегантность",
      description:
        "Наша коллекция Осень-Зима 26 сочетает прочность и изящество, предлагая премиальные кожи, разработанные для холодного сезона.",
      longDescription:
        "Коллекция Осень-Зима 26 вдохновлена стойкостью природы в зимние месяцы. Мы разработали кожи, которые обеспечивают тепло и защиту без ущерба для стиля и гибкости. Этот сезон отличается богатыми текстурами, глубокими оттенками и инновационными отделками, которые прекрасно проявляют себя в сложных условиях. Каждая кожа коллекции протестирована на прочность, устойчивость к погоде и комфорт, чтобы удовлетворить требования как дизайнеров, так и конечных пользователей.",
      season: "Осень-Зима",
      year: "2026",
      mainImage: "https://ext.same-assets.com/1118492138/68077734.jpeg",
      galleryImages: [
        "https://ext.same-assets.com/1118492138/1829320189.jpeg",
        "https://ext.same-assets.com/1118492138/1034291345.jpeg",
        "https://ext.same-assets.com/1118492138/3133292209.jpeg",
        "https://ext.same-assets.com/1118492138/1743258186.jpeg",
      ],
      products: [
        {
          id: "vortex",
          name: "Vortex",
          type: "Нубук",
          image: "https://ext.same-assets.com/1118492138/1400919951.jpeg",
        },
        {
          id: "meridian",
          name: "Meridian",
          type: "Спилок",
          image: "https://ext.same-assets.com/1118492138/542915801.jpeg",
        },
      ],
      themes: [
        {
          title: "Зимняя стойкость",
          description:
            "Кожи, сохраняющие свои свойства и внешний вид в холодных и влажных условиях.",
        },
        {
          title: "Тактильная глубина",
          description:
            "Богатые текстуры, придающие объём и выразительность сезонным дизайнам.",
        },
        {
          title: "Изысканная защита",
          description:
            "Элегантные отделки с повышенной долговечностью для зимней носки.",
        },
      ],
    },
  };

  return collections[id as keyof typeof collections] || null;
};

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const collection = getCollection(id);

  if (!collection) {
    return (
      <MainLayout>
        <div className="py-40 px-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Коллекция не найдена</h1>
          <p className="mb-8">
            Коллекция, которую вы ищете, не существует или была удалена.
          </p>
          <Link
            href="/collections"
            className="px-6 py-2 bg-black text-white rounded-full"
          >
            Вернуться к коллекциям
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mt-20">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] bg-black text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src={collection.mainImage}
              alt={collection.title}
              fill
              style={{ objectFit: "cover", opacity: 0.7 }}
              priority
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
          </div>

          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-8">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold mb-2">{collection.title}</h1>
                <h2 className="text-2xl font-light mb-6">
                  {collection.headline}
                </h2>
                <p className="text-xl">{collection.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Collection Overview */}
        <section className="py-16 px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Обзор коллекции</h2>
                <div className="prose prose-lg max-w-none">
                  <p>{collection.longDescription}</p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Темы коллекции</h3>
                  <div className="space-y-4">
                    {collection.themes.map((theme, index) => (
                      <div key={index} className="bg-gray-50 p-5 rounded-md">
                        <h4 className="text-lg font-bold mb-2">
                          {theme.title}
                        </h4>
                        <p className="text-gray-700">{theme.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="#"
                    className="px-6 py-3 bg-black text-white rounded-full inline-block"
                  >
                    Скачать лукбук
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {collection.galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`relative rounded-md overflow-hidden ${
                      index === 0 ? "col-span-2 aspect-video" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${collection.title} image ${index + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Collection Products */}
        <section className="py-16 px-8 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12">Избранные кожи</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {collection.products.map((product) => (
                <Link
                  key={product.id}
                  href={`/leathers/${product.id}`}
                  className="group bg-white border border-gray-200 rounded-md overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">{product.type}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/leathers"
                className="px-6 py-3 border border-black rounded-full inline-block"
              >
                Смотреть все кожи
              </Link>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-6">Применение</h2>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl">
              Коллекция {collection.title} разработана для универсальности в
              различных категориях продукции. Вот некоторые ключевые области
              применения кож этого сезона.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {["Обувь", "Аксессуары", "Одежда", "Товары для дома"].map(
                (application, index) => (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-bold mb-2">{application}</h3>
                    <p className="text-gray-700">
                      Кожи, специально разработанные для превосходства в
                      применении в области {application.toLowerCase()}.
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-8 bg-gray-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Заинтересованы в этой коллекции?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Свяжитесь с нашей командой, чтобы запросить образцы, подробные
              спецификации или обсудить индивидуальные варианты применения.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-gray-900 rounded-full"
              >
                Запросить образцы
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-white text-white rounded-full"
              >
                Связаться с отделом продаж
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
