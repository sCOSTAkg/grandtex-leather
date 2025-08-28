import Image from "next/image";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";

export default function AboutPage() {
  return (
    <MainLayout transparentHeader={{ transparent: false }}>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-primary text-primary-foreground mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ext.same-assets.com/1118492138/1723594169.jpeg"
            alt="О GRANDTEX"
            fill
            style={{ objectFit: "cover", opacity: 0.7 }}
            priority
          />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl font-bold mb-4">О GRANDTEX</h1>
            <p className="text-xl max-w-2xl">
              Узнайте историю GRANDTEX, мирового лидера в производстве кожи.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Наша история</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              GRANDTEX возник из стремления соединить традиционный процесс
              производства кожи многолетнего кожевенного предприятия с ростом
              обувной промышленности в Азии.
            </p>

            <p>
              В 1999 году два ведущих американских кожевенника объединились с
              глобальным производителем обуви и создали GRANDTEX, разработав
              новую бизнес-модель, предлагающую кожу премиального качества с
              надёжной поставкой в регионы производства обуви. Стратегия была
              сосредоточена на создании кожевенных заводов, адаптирующих
              традиционный американский опыт к требованиям стремительно
              развивающейся мировой обувной индустрии по качеству, стоимости и
              срокам поставки.
            </p>

            <p>
              Основой культуры GRANDTEX стало сочетание американской экспертизы
              в выделке кожи с наиболее прогрессивными азиатскими
              производственными практиками. Это создало среду, где традиционное
              мастерство объединяется с современными технологиями, что приводит
              к инновационным и эффективным методам производства кожи.
            </p>

            <p>
              Сегодня GRANDTEX управляет двумя стратегически расположенными
              кожевенными заводами: одним во Вьетнаме для обслуживания обувной
              промышленности Юго-Восточной Азии и другим в Китае для внутреннего
              китайского рынка. Каждое предприятие нанимает квалифицированных
              работников и поддерживает высочайшие стандарты качества, уделяя
              особое внимание устойчивым практикам.
            </p>

            <p>
              Смотря в будущее, GRANDTEX остаётся приверженным инновациям,
              устойчивости и поддержанию высочайших стандартов качества в
              производстве кожи. Мы продолжаем инвестировать в новые технологии
              и процессы, которые сокращают наше воздействие на окружающую среду
              и повышают эксплуатационные и эстетические характеристики нашей
              продукции.
            </p>
          </div>

          <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Наша миссия</h3>
              <p className="text-muted-foreground">
                Создавать превосходные кожаные изделия с использованием
                инновационных и устойчивых практик, выступая надёжным партнёром
                для брендов по всему миру.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Наше видение</h3>
              <p className="text-muted-foreground">
                Лидировать в кожевенной отрасли по показателям устойчивости,
                инноваций и качества, устанавливая новые стандарты
                ответственного производства.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Руководящая команда</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="aspect-square bg-muted rounded-full w-48 h-48 mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold">Имя руководителя</h3>
                  <p className="text-muted-foreground">Должность</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Присоединяйтесь к нашему пути
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Узнайте, как GRANDTEX может стать вашим партнёром в создании
            высококачественных и устойчивых кожаных изделий.
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
