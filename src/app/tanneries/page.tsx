import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

export default function TanneriesPage() {
  const tanneries = [
    {
      id: "vietnam",
      name: "GRANDTEX Vietnam",
      location: "Хошимин, Вьетнам",
      established: 2003,
      size: "45 000 м²",
      capacity: "8 миллионов квадратных футов в год",
      specialties: [
        "Кожа для спортивной обуви",
        "Высокопрочная кожа",
        "Устойчивые процессы",
      ],
      description:
        "Наш флагманский завод во Вьетнаме специализируется на высокопроизводительных кожах для спортивной и повседневной обуви. Оснащённый современным оборудованием и укомплектованный квалифицированными специалистами, этот завод сочетает традиционное мастерство с современными производственными технологиями.",
      sustainability:
        "Завод во Вьетнаме оснащён передовой системой рециркуляции воды, сокращающей её потребление на 40% по сравнению с обычными кожевенными производствами. Солнечные панели обеспечивают 30% потребности предприятия в энергии.",
      certifications: ["LWG Gold Rated", "ISO 14001", "ISO 9001"],
      image: "https://ext.same-assets.com/1118492138/3036160331.jpeg",
      additionalImages: [
        "https://ext.same-assets.com/1118492138/2874748320.jpeg",
        "https://ext.same-assets.com/1118492138/2563376526.jpeg",
      ],
    },
    {
      id: "china",
      name: "GRANDTEX China",
      location: "Гуанчжоу, Китай",
      established: 2005,
      size: "38 000 м²",
      capacity: "6 миллионов квадратных футов в год",
      specialties: ["Модная кожа", "Специальные отделки", "Тиснёная кожа"],
      description:
        "Наш китайский завод сосредоточен на инновационных отделках и модных видах кожи. Он известен своей универсальностью и способностью производить небольшие партии специализированных кож с уникальными характеристиками и отделками.",
      sustainability:
        "Китайский завод использует замкнутую производственную систему, минимизирующую отходы и выбросы. Благодаря инновационным технологиям обработки предприятие сократило использование химикатов на 25%.",
      certifications: ["LWG Silver Rated", "ISO 14001", "ZDHC Level 3"],
      image: "https://ext.same-assets.com/1118492138/800804989.jpeg",
      additionalImages: [
        "https://ext.same-assets.com/1118492138/3646578739.jpeg",
        "https://ext.same-assets.com/1118492138/1723594169.jpeg",
      ],
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-black text-white mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1118492138/3036160331.jpeg"
            alt="Наши кожевенные заводы"
            fill
            style={{ objectFit: "cover", opacity: 0.7 }}
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HwAFgwJ/lK1gnwAAAABJRU5ErkJggg=="
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">Наши кожевенные заводы</h1>
            <p className="text-xl max-w-2xl">
              Ознакомьтесь с нашими мирового класса производственными
              площадками, где традиции встречаются с инновациями.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Мировое производственное мастерство
          </h2>

          <div className="prose prose-lg max-w-none text-center mb-12">
            <p>
              GRANDTEX управляет стратегически расположенными кожевенными
              заводами в ключевых производственных регионах, сочетая
              традиционный опыт с передовыми технологиями для производства
              исключительных кож для мировых брендов.
            </p>

            <p>
              Наши предприятия спроектированы так, чтобы соответствовать
              высочайшим стандартам качества, эффективности и устойчивости,
              обеспечивая поставку премиальных кож при минимальном воздействии
              на окружающую среду.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">14M+</div>
              <p className="text-gray-700">
                Квадратных футов кожи производится ежегодно
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">600+</div>
              <p className="text-gray-700">
                Квалифицированных сотрудников на предприятиях
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">20+</div>
              <p className="text-gray-700">
                Лет производственного совершенства
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tanneries */}
      {tanneries.map((tannery, index) => (
        <section
          key={tannery.id}
          id={tannery.id}
          className={`py-16 px-8 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className={`${index % 2 === 1 ? "order-2" : ""}`}>
                <h2 className="text-3xl font-bold mb-4">{tannery.name}</h2>
                <p className="text-xl text-gray-600 mb-6">{tannery.location}</p>

                <div className="prose prose-lg max-w-none mb-8">
                  <p>{tannery.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-lg font-bold mb-2">Основан</h3>
                    <p className="text-gray-700">{tannery.established}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      Размер предприятия
                    </h3>
                    <p className="text-gray-700">{tannery.size}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Годовая мощность</h3>
                    <p className="text-gray-700">{tannery.capacity}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Сертификаты</h3>
                    <div className="flex flex-wrap gap-2">
                      {tannery.certifications.map((cert, i) => (
                        <span
                          key={i}
                          className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-accent">
                  <h3 className="text-lg font-bold mb-2">Специализация</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-1">
                    {tannery.specialties.map((specialty, i) => (
                      <li key={i}>{specialty}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-bold mb-2">
                    Инициативы устойчивости
                  </h3>
                  <p className="text-gray-700">{tannery.sustainability}</p>
                </div>
              </div>

              <div className={`space-y-4 ${index % 2 === 1 ? "order-1" : ""}`}>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={tannery.image}
                    alt={tannery.name}
                    fill
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HwAFgwJ/lK1gnwAAAABJRU5ErkJggg=="
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {tannery.additionalImages.map((image, i) => (
                    <div
                      key={i}
                      className="relative aspect-square rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`${tannery.name} view ${i + 2}`}
                        fill
                        style={{ objectFit: "cover" }}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HwAFgwJ/lK1gnwAAAABJRU5ErkJggg=="
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Manufacturing Process */}
      <section className="py-16 px-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Наш производственный процесс
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {[
              {
                step: 1,
                title: "Выбор сырья",
                description:
                  "Мы закупаем сырьё высочайшего качества, отдавая предпочтение поставщикам, соблюдающим этичные и устойчивые практики.",
              },
              {
                step: 2,
                title: "Предварительная обработка",
                description:
                  "Шкуры проходят тщательную подготовку посредством замачивания, зольного обезволашивания и мездрения.",
              },
              {
                step: 3,
                title: "Дубление",
                description:
                  "Используются инновационные методы дубления, сочетающие традиционные технологии с современными экологичными подходами.",
              },
              {
                step: 4,
                title: "Постдубильная обработка",
                description:
                  "Кожа повторно дубится, окрашивается и жируется для получения требуемых характеристик и свойств.",
              },
              {
                step: 5,
                title: "Отделка",
                description:
                  "Нанесение специализированных покрытий для улучшения внешнего вида, прочности и эксплуатационных характеристик.",
              },
              {
                step: 6,
                title: "Контроль качества",
                description:
                  "Строгие испытания гарантируют, что каждая партия кожи соответствует нашим высоким стандартам перед отправкой.",
              },
              {
                step: 7,
                title: "Резка и сортировка",
                description:
                  "Точная резка и тщательная сортировка оптимизируют выход и обеспечивают стабильное качество.",
              },
              {
                step: 8,
                title: "Отгрузка",
                description:
                  "Эффективная логистика обеспечивает своевременную доставку клиентам по всему миру.",
              },
            ].map((step) => (
              <div key={step.step} className="relative">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>

                {step.step < 8 && (
                  <div className="hidden md:block absolute top-6 left-12 w-full h-px bg-gray-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Гарантия качества
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12h20M2 12a10 10 0 0 1 20 0M2 12a10 10 0 0 0 20 0M4 12a8 8 0 0 1 16 0M4 12a8 8 0 0 0 16 0M6 12a6 6 0 0 1 12 0M6 12a6 6 0 0 0 12 0M8 12a4 4 0 0 1 8 0M8 12a4 4 0 0 0 8 0M10 12a2 2 0 0 1 4 0M10 12a2 2 0 0 0 4 0"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Лабораторные испытания</h3>
              <p className="text-gray-700">
                Наши лаборатории проводят строгие испытания физических свойств,
                химического состава и эксплуатационных характеристик.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5v14"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Стандарты инспекции</h3>
              <p className="text-gray-700">
                Мы соблюдаем строгие протоколы проверки на каждом этапе
                производства, чтобы обеспечить стабильное качество и выявлять
                проблемы на ранних стадиях.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Сертификация</h3>
              <p className="text-gray-700">
                Наши предприятия сертифицированы в соответствии с международными
                стандартами управления качеством, экологической эффективности и
                безопасности.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tour CTA */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Посетите наши предприятия</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Хотите посетить один из наших кожевенных заводов? Мы организуем
            экскурсии для клиентов и партнёров, чтобы вы смогли лично увидеть
            наши производственные процессы.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-black text-white rounded-full text-lg inline-block hover:bg-gray-900 transition-colors"
          >
            Запланировать визит
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
