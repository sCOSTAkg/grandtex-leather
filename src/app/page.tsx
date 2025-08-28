import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import AnimatedSection from "@/components/AnimatedSection";
import LetterLoader from "@/components/LetterLoader";
import Hero from "@/components/Hero";

export default function Home() {
  const latestProducts = [
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
  ];

  const featuredBrands = [
    {
      name: "Adidas",
      logo: "https://ext.same-assets.com/1118492138/542915801.jpeg",
    },
    {
      name: "Camper",
      logo: "https://ext.same-assets.com/1118492138/1400919951.jpeg",
    },
    {
      name: "Carhartt",
      logo: "https://ext.same-assets.com/1118492138/3272561453.jpeg",
    },
    {
      name: "Nike",
      logo: "https://ext.same-assets.com/1118492138/271436679.jpeg",
    },
    {
      name: "Clarks",
      logo: "https://ext.same-assets.com/1118492138/68077734.jpeg",
    },
  ];

  const sustainabilityPillars = [
    {
      title: "Операционное совершенство",
      description:
        "Оптимизация процессов для сокращения отходов и потребления ресурсов.",
    },
    {
      title: "Циркулярность",
      description:
        "Внедрение принципов цикличной экономики на протяжении жизненного цикла продукта.",
    },
    {
      title: "Климатические действия",
      description:
        "Сокращение углеродного следа и инвестиции в возобновляемую энергию.",
    },
    {
      title: "Социальное воздействие",
      description:
        "Создание положительных изменений в сообществах, где мы работаем.",
    },
  ];

  return (
    <MainLayout transparentHeader={{ transparent: true }}>
      <LetterLoader
        text="Grandtex Leather"
        className="mt-8 text-center text-4xl font-bold"
      />
      <Hero />

      {/* Leathers Section */}
      <section className="w-full py-24 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Последняя коллекция</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Откройте нашу коллекцию Весна-Лето 27, включающую премиальные
              кожи, созданные для универсальности и высокой производительности.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {latestProducts.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.15}>
                <Link
                  href={`/leathers/${product.id}`}
                  className="group block bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {product.collection}
                    </p>
                    <div className="mt-4 space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Тип
                        </span>
                        <span className="text-sm">{product.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Отделка
                        </span>
                        <span className="text-sm">{product.finish}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Обработка
                        </span>
                        <span className="text-sm">{product.treatment}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.6} className="mt-16 text-center">
            <p className="mb-8 text-muted-foreground max-w-3xl mx-auto">
              От спортзала до офиса, коллекция SS27 отражает глубину и широту
              того, что GRANDTEX умеет лучше всего — создавать универсальные
              кожи, которые масштабируются под ваши нужды. В рамках нашего
              ребрендинга этот сезон ознаменует обновлённое стремление
              обслуживать бренды любого размера с точностью, целью и
              партнёрством.
            </p>
            <Link
              href="/collections/spring-summer-2027"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full inline-block hover:bg-primary/80 transition-colors"
            >
              Откройте коллекцию
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="w-full py-24 px-8 bg-secondary relative overflow-hidden opacity-0 animate-fade-in-scroll">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="https://ext.same-assets.com/1118492138/180971912.jpeg"
            alt="Фон устойчивости"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="opacity-0 animate-fade-in-scroll">
              <h2 className="text-4xl font-bold mb-6">Устойчивость</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Устойчивость всегда была в основе бизнеса GRANDTEX. Мы пошли
                дальше и определили цели по четырём направлениям: Операционное
                совершенство, Циркулярность, Климатические действия и Социальное
                воздействие.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {sustainabilityPillars.map((pillar, index) => (
                  <div
                    key={pillar.title}
                    className="bg-background p-6 rounded-lg shadow-sm transform transition-transform duration-300 hover:scale-[1.03] opacity-0 animate-fade-in-scroll"
                    style={{ animationDelay: `${index * 150 + 300}ms` }}
                  >
                    <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
                    <p className="text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/sustainability"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full inline-block hover:bg-primary/80 transition-colors"
              >
                Узнайте больше о наших инициативах
              </Link>
            </div>

            <div
              className="relative opacity-0 animate-fade-in-scroll"
              style={{ animationDelay: "600ms" }}
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/1118492138/180971912.jpeg"
                  alt="Устойчивость"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-2/3 bg-background p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-[1.02]">
                <h3 className="text-xl font-bold mb-2">Наша приверженность</h3>
                <p className="text-muted-foreground">
                  К 2030 году мы стремимся сократить потребление воды на 50%,
                  достичь углеродной нейтральности и обеспечить переработку или
                  повторное использование 100% кожаных отходов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="w-full py-24 px-8 bg-background opacity-0 animate-fade-in-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-fade-in-scroll">
            <h2 className="text-4xl font-bold mb-4">
              Нам доверяют мировые бренды
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы сотрудничаем с брендами любого масштаба, сочетая мастерство
              мирового уровня с персонализированным сервисом для создания
              исключительных кожаных продуктов.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {featuredBrands.map((brand, index) => (
              <div
                key={brand.name}
                className="aspect-square relative bg-secondary rounded-lg overflow-hidden group hover:shadow-md transition-all opacity-0 animate-fade-in-scroll"
                style={{ animationDelay: `${index * 150 + 300}ms` }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  style={{ objectFit: "cover", opacity: 0.8 }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-primary-foreground font-medium">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-20 bg-primary rounded-2xl p-12 text-primary-foreground text-center opacity-0 animate-fade-in-scroll"
            style={{ animationDelay: "800ms" }}
          >
            <h3 className="text-3xl font-bold mb-6">Готовы начать?</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Оцените преимущество GRANDTEX и узнайте, как наши премиальные кожи
              могут улучшить ваши продукты.
            </p>
            <Link
              href="/contact"
              className="px-8 py-4 bg-background text-foreground rounded-full text-lg font-medium inline-block hover:bg-muted transition-colors"
            >
              Свяжитесь с нами сегодня
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
