import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

interface NavCard {
  href: string;
  image: string;
  title: string;
  description: string;
}

const navCards: NavCard[] = [
  {
    href: "/about-grandtex",
    image: "https://ext.same-assets.com/1118492138/1723594169.jpeg",
    title: "О GRANDTEX",
    description: "Узнайте нашу историю, ценности и видение",
  },
  {
    href: "/tanneries",
    image: "https://ext.same-assets.com/1118492138/3036160331.jpeg",
    title: "Наши кожевенные заводы",
    description: "Ознакомьтесь с нашими передовыми производствами",
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden text-center text-gray-900">
      <AnimatedSection speed={0.3} className="absolute inset-0 -z-10">
        <Image
          src="https://ext.same-assets.com/1118492138/3414069527.jpeg"
          alt="Фоновая текстура кожи"
          fill
          priority
          style={{ objectFit: "cover", opacity: 0.2 }}
          className="animate-ken-burns"
        />
      </AnimatedSection>

      <div className="w-full px-4 sm:px-8">
        <AnimatedSection className="mx-auto max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
            Ускоряйтесь вперёд
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            Ваш партнёр по кожевенному производству, ориентированный на будущее.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mx-auto mt-10 max-w-5xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            {navCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group relative h-40 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-white/80 to-transparent p-6 text-left">
                  <div>
                    <span className="mb-1 block text-xl font-medium text-gray-900">
                      {card.title}
                    </span>
                    <p className="text-sm text-gray-700">{card.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-8">
          <Link
            href="/leathers"
            className="inline-block rounded-full border border-black px-8 py-3 transition-colors duration-300 hover:bg-black hover:text-white"
          >
            Исследуйте наши кожи
          </Link>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
