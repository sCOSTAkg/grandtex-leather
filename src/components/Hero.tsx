import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-white text-gray-900 overflow-hidden">
      <AnimatedSection speed={0.3} className="absolute inset-0 z-0">
        <Image
          src="https://ext.same-assets.com/1118492138/3414069527.jpeg"
          alt="Фоновая текстура кожи"
          fill
          style={{ objectFit: "cover", opacity: 0.2 }}
          priority
          className="animate-ken-burns"
        />
      </AnimatedSection>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center md:justify-between h-full px-4 sm:px-8 py-24">
        <AnimatedSection>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-4 leading-tight text-center md:text-left">
            Ускоряйтесь <br />
            <span className="inline-block mt-2">вперёд.</span>
          </h1>
          <div className="mt-6 max-w-xl mx-auto md:mx-0 text-center md:text-left">
            <p className="text-lg sm:text-2xl font-medium">
              Ваш партнёр по кожевенному
              <br />
              производству, ориентированный на будущее.
            </p>
          </div>
        </AnimatedSection>

        {/* Navigation Cards */}
        <div className="w-full max-w-6xl mx-auto mt-12 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <AnimatedSection>
              <Link
                href="/about-grandtex"
                className="relative h-40 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] group"
              >
                <Image
                  src="https://ext.same-assets.com/1118492138/1723594169.jpeg"
                  alt="О GRANDTEX"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-gray-900 font-medium text-xl mb-1 block">
                      О GRANDTEX
                    </span>
                    <p className="text-gray-700 text-sm">
                      Узнайте нашу историю, ценности и видение
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Link
                href="/tanneries"
                className="relative h-40 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] group"
              >
                <Image
                  src="https://ext.same-assets.com/1118492138/3036160331.jpeg"
                  alt="Наши кожевенные заводы"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-gray-900 font-medium text-xl mb-1 block">
                      Наши кожевенные заводы
                    </span>
                    <p className="text-gray-700 text-sm">
                      Ознакомьтесь с нашими передовыми производствами
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
          <div className="mt-8 flex justify-center md:justify-start">
            <Link
              href="/leathers"
              className="px-8 py-3 border border-black text-black rounded-full inline-block hover:bg-black hover:text-white transition-colors duration-300"
            >
              Исследуйте наши кожи
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
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
