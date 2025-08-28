import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
import { BLUR_DATA_URL } from "@/lib/blur";

export default function SustainabilityPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-black text-white mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1118492138/180971912.jpeg"
            alt="Устойчивость"
            fill
            style={{ objectFit: "cover", opacity: 0.7 }}
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">Устойчивость</h1>
            <p className="text-xl max-w-2xl">
              В GRANDTEX устойчивость лежит в основе всего, что мы делаем. Мы
              стремимся создавать более устойчивое будущее для нашей планеты и
              людей.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Наша приверженность</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Устойчивость всегда была в центре бизнеса GRANDTEX. Мы усилили
              нашу приверженность, установив цели по четырём направлениям:
              Операционное совершенство, Циркулярность, Климатические действия и
              Социальное воздействие.
            </p>

            <p>
              Наш подход к устойчивости интегрирован во все аспекты нашей
              деятельности — от закупки сырья до производственных процессов и
              взаимодействия с сообществами. Мы верим, что ответственная работа
              создаёт ценность для наших клиентов, сотрудников, сообществ и
              окружающей среды.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="operational-excellence" className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Операционное совершенство</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="prose prose-lg">
                <p>
                  Мы стремимся к операционному совершенству на наших кожевенных
                  заводах, уделяя внимание эффективному использованию ресурсов,
                  сокращению отходов и предотвращению загрязнений. Наши
                  передовые предприятия используют современные технологии, чтобы
                  минимизировать воздействие на окружающую среду и при этом
                  поддерживать высочайшие стандарты качества.
                </p>

                <ul>
                  <li>
                    Системы рециркуляции воды, сокращающие её потребление до 40%
                  </li>
                  <li>Энергоэффективное оборудование и процессы</li>
                  <li>Комплексные программы управления отходами</li>
                  <li>Строгое соблюдение экологических норм</li>
                </ul>
              </div>
            </div>

            <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1118492138/2187990376.jpeg"
                alt="Операционное совершенство"
                fill
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="circularity" className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Циркулярность</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="order-2 md:order-1 relative h-64 md:h-auto rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1118492138/3191814221.jpeg"
                alt="Циркулярность"
                fill
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="prose prose-lg">
                <p>
                  Мы внедряем принципы цикличной экономики, проектируя продукты
                  с учётом их полного жизненного цикла. Это включает
                  использование побочных продуктов других отраслей, разработку
                  биоразлагаемой кожи и создание программ повторного
                  использования.
                </p>

                <ul>
                  <li>
                    Использование кожаных обрезков для создания новых изделий
                  </li>
                  <li>
                    Сотрудничество с дизайнерами по принципам цикличного дизайна
                  </li>
                  <li>Исследования биоразлагаемых обработок и покрытий</li>
                  <li>
                    Программы возврата изделий из кожи после использования
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="climate-action" className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Климатические действия</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="prose prose-lg">
                <p>
                  Мы осознаём необходимость борьбы с изменением климата и
                  предпринимаем шаги по сокращению нашего углеродного следа.
                  Наша цель — достичь углеродной нейтральности во всех операциях
                  к 2030 году.
                </p>

                <ul>
                  <li>
                    Инвестиции в возобновляемую энергию на наших предприятиях
                  </li>
                  <li>Повышение энергоэффективности на всех объектах</li>
                  <li>Снижение транспортных выбросов в цепочке поставок</li>
                  <li>
                    Программы компенсации углерода для неизбежных выбросов
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1118492138/615841938.jpeg"
                alt="Климатические действия"
                fill
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="social-impact" className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Социальное воздействие</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="order-2 md:order-1 relative h-64 md:h-auto rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/1118492138/1359941812.jpeg"
                alt="Социальное воздействие"
                fill
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
              />
            </div>

            <div className="order-1 md:order-2">
              <div className="prose prose-lg">
                <p>
                  Мы стремимся оказывать положительное влияние на сообщества, в
                  которых работаем. Это включает справедливые трудовые практики,
                  инициативы по развитию сообществ и образовательные программы.
                </p>

                <ul>
                  <li>
                    Безопасные и здоровые условия труда для всех сотрудников
                  </li>
                  <li>Справедливая заработная плата и льготы</li>
                  <li>Инициативы по разнообразию и инклюзии</li>
                  <li>
                    Программы поддержки сообществ в регионах нашей деятельности
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-16 px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Отчёты по устойчивости</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[2025, 2024, 2023].map((year) => (
              <div key={year} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-2">
                  Отчёт по устойчивости за {year} год
                </h3>
                <p className="text-gray-600 mb-4">
                  Наш ежегодный отчёт, описывающий усилия в области
                  устойчивости, достижения и цели.
                </p>
                <Link
                  href="#"
                  className="text-black font-medium hover:underline"
                >
                  Скачать PDF
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Присоединяйтесь к нашему пути устойчивости
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Узнайте больше о наших устойчивых кожаных решениях и о том, как мы
            можем помочь вам достичь ваших целей в области устойчивого развития.
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
