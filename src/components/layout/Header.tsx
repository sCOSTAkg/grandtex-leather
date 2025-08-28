"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";

export default function Header({ transparent = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    transparent && !isScrolled ? "bg-transparent" : "bg-white shadow-sm"
  }`;

  const textClasses = transparent && !isScrolled ? "text-white" : "text-black";

  const navLinks = [
    {
      title: "Услуги",
      href: "/services",
      image: "https://images.unsplash.com/photo-1582719478171-2d80782c32b5",
      subLinks: [
        { title: "Разработка лекал", href: "/services#patterns" },
        { title: "Пошив образцов", href: "/services#samples" },
        { title: "Серийное производство", href: "/services#mass" },
        { title: "Упаковка", href: "/services#packaging" },
      ],
    },
    {
      title: "О нас",
      href: "/about",
      image: "https://images.unsplash.com/photo-1525171254930-643fcf1f5ec4",
    },
    {
      title: "Портфолио",
      href: "/portfolio",
      image: "https://images.unsplash.com/photo-1542060748-10c28b62716a",
    },
    {
      title: "Производство",
      href: "/production",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      subLinks: [
        { title: "Мужская одежда", href: "/production/men" },
        { title: "Женская одежда", href: "/production/women" },
        { title: "Деловые костюмы", href: "/production/business" },
        { title: "Спортивная одежда", href: "/production/sport" },
        { title: "Детская одежда", href: "/production/kids" },
      ],
    },
    {
      title: "Контакты",
      href: "/contact",
      image: "https://images.unsplash.com/photo-1520975698519-59cfeeee39a4",
    },
  ];

  const extraLinks = [
    { title: "Калькулятор стоимости", href: "/calculator" },
    { title: "FAQ", href: "/faq" },
    { title: "Блог", href: "/blog" },
  ];

  return (
    <header className={headerClasses}>
      <div className="flex justify-between items-center w-full px-8 py-6">
        <Link
          href="/"
          className={`text-3xl font-bold transition-colors duration-300 ${textClasses}`}
        >
          GRANDTEX
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <button
              className={`flex items-center space-x-2 transition-colors duration-300 ${textClasses} hover:opacity-75`}
              onClick={() => setIsMenuOpen(true)}
            >
              <span>Меню</span>
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl p-0 overflow-y-auto"
          >
            <AnimatedSection className="h-full flex flex-col">
              <div className="flex justify-between items-center px-8 py-6 border-b">
                <Link href="/" className="text-3xl font-bold">
                  grandtex
                </Link>
                <button
                  className="text-gray-500 hover:text-black transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Закрыть
                </button>
              </div>

              <div className="flex-1 overflow-auto px-8 py-10">
                <nav className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {navLinks.slice(0, 4).map((link, index) => (
                      <AnimatedSection
                        key={link.title}
                        delay={index * 0.1}
                        className="space-y-4"
                      >
                        <Link
                          href={link.href}
                          className="flex items-center space-x-2 text-lg font-medium hover:text-accent transition-colors"
                        >
                          <span>{link.title}</span>
                        </Link>

                        {link.subLinks && (
                          <ul className="space-y-2 ml-4">
                            {link.subLinks.map((subLink) => (
                              <li key={subLink.title}>
                                <Link
                                  href={subLink.href}
                                  className={`text-gray-600 hover:text-black transition-colors ${
                                    pathname === subLink.href
                                      ? "font-medium text-black"
                                      : ""
                                  }`}
                                >
                                  {subLink.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                        {link.image && (
                          <div className="relative h-32 rounded-md overflow-hidden mt-4 group">
                            <Image
                              src={link.image}
                              alt={link.title}
                              fill
                              style={{ objectFit: "cover" }}
                              className="transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4">
                              <span className="text-white font-medium">
                                {link.title}
                              </span>
                            </div>
                          </div>
                        )}
                      </AnimatedSection>
                    ))}
                  </div>

                  <AnimatedSection delay={0.4} className="space-y-4">
                    <h2 className="text-lg font-medium">
                      Дополнительная информация
                    </h2>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                      {extraLinks.map((link) => (
                        <li key={link.title}>
                          <Link
                            href={link.href}
                            className={`text-gray-600 hover:text-black transition-colors ${
                              pathname === link.href
                                ? "font-medium text-black"
                                : ""
                            }`}
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>
                </nav>
              </div>

              <div className="p-8 border-t">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.linkedin.com"
                      className="text-gray-500 hover:text-black transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </Link>
                    <Link
                      href="https://www.instagram.com"
                      className="text-gray-500 hover:text-black transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </Link>
                  </div>
                  <Link
                    href="/contact"
                    className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                  >
                    Контакты
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
