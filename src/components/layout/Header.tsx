"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";
import { Search, Plus, ArrowRight } from "lucide-react";

export default function Header({ transparent = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    transparent && !isScrolled ? "bg-transparent" : "bg-background shadow-sm"
  }`;

  const textClasses =
    transparent && !isScrolled ? "text-primary-foreground" : "text-foreground";

  const navLinks: {
    title: string;
    href: string;
    image?: string;
    subLinks?: { title: string; href: string; image?: string }[];
  }[] = [
    {
      title: "Кожа",
      href: "/leathers",
      image: "https://ext.same-assets.com/1118492138/3442149313.jpeg",
      subLinks: [
        {
          title: "Коллекция Весна-Лето 27",
          href: "/collections/spring-summer-2027",
        },
        {
          title: "Коллекция Осень-Зима 26",
          href: "/collections/fw26",
        },
      ],
    },
    {
      title: "Тиснение и перфорация",
      href: "/emboss-perforation",
      image: "https://ext.same-assets.com/1118492138/3513175735.jpeg",
    },
    {
      title: "Почему GRANDTEX?",
      href: "/why-grandtex",
      image: "https://ext.same-assets.com/1118492138/2560085916.jpeg",
      subLinks: [
        {
          title: "О GRANDTEX",
          href: "/about-grandtex",
        },
        {
          title: "Кожевенные заводы",
          href: "/tanneries",
        },
      ],
    },
    {
      title: "Устойчивость",
      href: "/sustainability",
      image: "https://ext.same-assets.com/1118492138/180971912.jpeg",
      subLinks: [
        {
          title: "Операционное совершенство",
          href: "/sustainability#operational-excellence",
        },
        {
          title: "Циркулярность",
          href: "/sustainability#circularity",
        },
        {
          title: "Климатические действия",
          href: "/sustainability#climate-action",
        },
        {
          title: "Социальное воздействие",
          href: "/sustainability#social-impact",
        },
      ],
    },
    {
      title: "Основные моменты",
      href: "/highlights",
    },
    {
      title: "Обучение",
      href: "/education",
    },
    {
      title: "Локации",
      href: "/contact",
    },
    {
      title: "Ресурсы",
      href: "/resources",
    },
  ];

  return (
    <header className={headerClasses}>
      <div className="flex items-center justify-between w-full px-4 py-4">
        {/* Search */}
        <Sheet>
          <SheetTrigger asChild>
            <button className={`${textClasses} p-2`}>
              <Search className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="top" className="h-[60vh] p-6">
            <div className="flex items-center gap-2">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Поиск по коже"
                className="flex-1 bg-transparent border-b border-muted-foreground/20 pb-1 outline-none"
              />
            </div>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link
          href="/"
          className={`text-2xl font-bold transition-colors duration-300 ${textClasses}`}
        >
          GRANDTEX
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle className={`hidden md:block ${textClasses}`} />
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button className={`${textClasses} p-2`}>
                <Plus className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="h-[80vh] p-0 flex flex-col overflow-hidden"
            >
              <div className="flex gap-4 overflow-x-auto p-4 border-b">
                {navLinks.map((link, index) => (
                  <button
                    key={link.title}
                    onClick={() => setActiveIndex(index)}
                    className={`whitespace-nowrap ${
                      activeIndex === index
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.title}
                  </button>
                ))}
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 gap-4">
                  {(navLinks[activeIndex].subLinks ?? [navLinks[activeIndex]]).map(
                    (item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="relative h-32 rounded-xl overflow-hidden block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {(item.image || navLinks[activeIndex].image) && (
                          <Image
                            src={item.image ?? navLinks[activeIndex].image!}
                            alt={item.title}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 p-4 flex flex-col justify-between">
                          <span className="text-primary-foreground text-lg font-medium">
                            {item.title}
                          </span>
                          <ArrowRight className="self-end h-5 w-5 text-primary-foreground" />
                        </div>
                      </Link>
                    )
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
