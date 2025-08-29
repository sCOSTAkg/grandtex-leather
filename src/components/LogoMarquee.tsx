"use client";

import Image from "next/image";

/**
 * Горизонтальная лента логотипов брендов. Анимация реализована при помощи
 * пользовательских keyframes Tailwind (см. tailwind.config.ts).
 */
export default function LogoMarquee() {
  const logos = [
    "https://source.unsplash.com/random/160x80?adidas",
    "https://source.unsplash.com/random/160x80?nike",
    "https://source.unsplash.com/random/160x80?puma",
    "https://source.unsplash.com/random/160x80?reebok",
    "https://source.unsplash.com/random/160x80?newbalance",
    "https://source.unsplash.com/random/160x80?asics",
  ];

  return (
    <section className="py-16">
      <div className="container">
        <h3 className="text-xl text-muted-foreground text-center mb-10">Нам доверяют</h3>
        <div className="relative overflow-hidden">
          <div className="flex gap-16 animate-marquee">
            {logos.concat(logos).map((logo, idx) => (
              <Image
                key={idx}
                src={logo}
                alt="логотип бренда"
                width={160}
                height={80}
                className="h-12 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

