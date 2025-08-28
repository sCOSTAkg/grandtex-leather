"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ThemeToggle";
import { Search, Plus, ArrowRight } from "lucide-react";

import { defaultNavLinks } from "./navLinks";

export interface NavLink {
  title: string;
  href: string;
  image?: string;
  subLinks?: NavLink[];
}

export interface HeaderConfig {
  transparent: boolean;
  links?: NavLink[];
}

interface HeaderProps {
  config: HeaderConfig;
}
export default function Header({ config }: HeaderProps) {
  const { transparent, links } = config;
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
    transparent && !isScrolled ? "bg-transparent" : "bg-background"
  } ${
    isScrolled
      ? "mx-auto w-max rounded-full backdrop-blur shadow-md"
      : "shadow-sm"
  }`;

  const textClasses =
    transparent && !isScrolled ? "text-primary-foreground" : "text-foreground";
  const navLinks = links ?? defaultNavLinks;

  return (
    <>
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
            <button
              className={`${textClasses} p-2 md:hidden`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <Plus
                className={`h-6 w-6 transition-transform ${
                  isMenuOpen ? "rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-background transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-end p-4 border-b">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-foreground"
            aria-label="Close menu"
          >
            <Plus className="h-6 w-6 rotate-45" />
          </button>
        </div>
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
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
