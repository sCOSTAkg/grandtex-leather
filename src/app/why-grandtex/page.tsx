import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import { BLUR_DATA_URL } from "@/lib/blur";

export default function WhyGrandtexPage() {
  const advantages = [
    {
      title: "Высокое качество",
      description:
        "Наша приверженность качеству неизменна. Мы объединяем традиционное мастерство с современными технологиями, создавая кожи, соответствующие самым высоким стандартам производительности и эстетики.",
      icon: "🏆",
    },
    {
      title: "Инновации",
      description:
        "Мы постоянно инвестируем в исследования и разработки, создавая инновационные кожаные решения, отвечающие меняющимся потребностям наших клиентов и отрасли.",
      icon: "💡",
    },
    {
      title: "Устойчивость",
      description:
        "Экологическая ответственность лежит в основе нашей деятельности. Мы внедряем устойчивые практики, минимизируя влияние на окружающую среду и повышая качество продукции.",
      icon: "🌱",
    },
    {
      title: "Глобальное присутствие",
      description:
        "Благодаря стратегическим локациям в ключевых производственных регионах мы обеспечиваем эффективный сервис и надёжные поставки клиентам по всему миру.",
      icon: "🌎",
    },
    {
      title: "Ориентация на клиента",
      description:
        "Мы строим долгосрочные отношения с клиентами благодаря оперативному сервису, совместной разработке и глубокому пониманию их уникальных потребностей.",
      icon: "👥",
    },
    {
      title: "Универсальность",
      description:
        "Наш широкий ассортимент кож подходит для различных сфер — от обуви и аксессуаров до обивки и автомобильной промышленности.",
      icon: "🔄",
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-black text-white mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1118492138/2560085916.jpeg"
            alt="Почему GRANDTEX"
            fill
            style={{ objectFit: "cover", opacity: 0.7 }}
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">Почему GRANDTEX?</h1>
            <p className="text-xl max-w-2xl">
              Узнайте, что отличает нас как вашего надёжного партнёра по
              премиальным кожаным решениям.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Ваш партнёр по кожевенному производству, ориентированный на будущее
          </h2>

          <div className="prose prose-lg max-w-none">
            <p>
              В GRANDTEX мы не просто производим кожу — мы создаём возможности.
              Будучи одной из ведущих кожевенных групп мира, мы объединяем
              многовековое мастерство с передовыми инновациями, чтобы
              предоставлять кожаные изделия, превосходящие ожидания по качеству,
              устойчивости и производительности.
            </p>

            <p>
              Наша уникальность заключается в способности обслуживать бренды
              любого масштаба с одинаковой преданностью совершенству. Независимо
              от того, являетесь ли вы глобальным производителем обуви или
              бутиковым брендом, создающим лимитированные аксессуары, мы
              привносим ту же приверженность качеству, сервису и инновациям в
              каждое партнёрство.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Преимущества GRANDTEX
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-gray-700">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Команда экспертов</h2>

              <div className="prose prose-lg max-w-none">
                <p>
                  Наша команда объединяет специалистов по коже со всего мира,
                  сочетая разнообразные взгляды и опыт для создания выдающихся
                  продуктов. От мастеров-кожевников с десятилетиями опыта до
                  инновационных химиков и экологов — наши профессионалы работают
                  вместе, чтобы расширять границы возможного в производстве
                  кожи.
                </p>

                <p>
                  Такое сочетание традиционных знаний и прогрессивных инноваций
                  позволяет нам решать сложные задачи, разрабатывать
                  индивидуальные решения и постоянно совершенствовать наши
                  продукты и процессы.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/about-grandtex"
                  className="px-6 py-3 border border-black rounded-full inline-block"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/1118492138/800804989.jpeg"
                  alt="GRANDTEX Expert Team"
                  fill
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/1118492138/3646578739.jpeg"
                  alt="GRANDTEX Technology"
                  fill
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </div>
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">
                Технологии и инновации
              </h2>

              <div className="prose prose-lg max-w-none">
                <p>
                  Наши ультрасовременные предприятия сочетают традиционные
                  техники дубления с новейшими технологическими инновациями.
                  Этот подход позволяет сохранять ремесленное качество наших
                  кож, достигая при этом стабильности, эффективности и
                  устойчивости в масштабе.
                </p>

                <p>
                  Мы постоянно инвестируем в исследования и разработки,
                  сотрудничая с ведущими институтами и технологическими
                  партнёрами для внедрения новых процессов, материалов и
                  приложений. От водосберегающих технологий до инновационных
                  методов отделки — стремление к развитию лежит в основе всего,
                  что мы делаем.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/tanneries"
                  className="px-6 py-3 border border-black rounded-full inline-block"
                >
                  Исследуйте наши предприятия
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer-Centric Approach */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Наш клиентоориентированный подход
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Понимание</h3>
              <p className="text-gray-700">
                Мы уделяем время глубокому пониманию ваших потребностей, задач и
                видения, формируя основу успешного сотрудничества.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Сотрудничество</h3>
              <p className="text-gray-700">
                Наша команда тесно работает с вашей, объединяя опыт для
                разработки решений, соответствующих вашим требованиям.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Результат</h3>
              <p className="text-gray-700">
                Мы выполняем работу с точностью, предоставляя высококачественные
                кожи вовремя и согласно спецификациям, обеспечивая надёжную
                поддержку на всех этапах.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Что говорят наши партнёры
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-2xl text-accent mb-4">"</div>
              <p className="text-lg mb-6">
                GRANDTEX постоянно поставляет исключительную кожу,
                соответствующую нашим строгим стандартам. Их техническая
                экспертиза и совместный подход сделали их незаменимым партнёром
                в процессе разработки продукции.
              </p>
              <div>
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-gray-400">
                  Директор по материалам, глобальный обувной бренд
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="text-2xl text-accent mb-4">"</div>
              <p className="text-lg mb-6">
                Как небольшое производство, мы ценим готовность GRANDTEX
                работать с меньшими объёмами заказов, сохраняя при этом тот же
                уровень качества и сервиса, что и для крупных брендов.
              </p>
              <div>
                <p className="font-bold">Michael Chen</p>
                <p className="text-gray-400">
                  Основатель, ремесленные изделия из кожи
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Готовы испытать преимущество GRANDTEX?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Свяжитесь с нашей командой уже сегодня, чтобы обсудить ваши
            потребности в коже и узнать, как мы можем помочь вам достичь целей.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-black text-white rounded-full text-lg inline-block"
          >
            Свяжитесь с нами
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
