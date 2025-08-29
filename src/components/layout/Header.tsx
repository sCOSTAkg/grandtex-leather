"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { defaultNavLinks, NavLink } from './navLinks';

/**
 * Отрисовывает адаптивный заголовок сайта. На больших экранах пункты
 * меню отображаются в одну строку. На мобильных устройствах иконка
 * гамбургера открывает выезжающее меню. Компонент использует набор
 * ссылок по умолчанию, но может принимать собственный список через
 * пропсы.
 */
interface HeaderProps {
  /**
   * Позволяет заменить стандартную навигацию собственным набором ссылок.
   */
  links?: NavLink[];
}

const headerClasses =
  "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent";
const textClasses = "text-foreground";

export default function Header({ links }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const navLinks = links ?? defaultNavLinks;

  useEffect(() => {
    const onScroll = () => {
      document
        .querySelector("header")
        ?.setAttribute("data-scrolled", window.scrollY > 20 ? "true" : "false");
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * Рекурсивно отображает список ссылок. Если у пункта есть подменю,
   * оно показывается вложенным списком на мобильных устройствах.
   */
  const renderLinks = (items: NavLink[], depth = 0) => {
    return items.map((item) => (
      <div key={item.title} className={depth === 0 ? 'mt-4' : 'ml-4 mt-2'}>
        <Link
          href={item.href}
          className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
          onClick={() => setOpen(false)}
        >
          {item.title}
        </Link>
        {item.subLinks && item.subLinks.length > 0 && (
          <div>{renderLinks(item.subLinks, depth + 1)}</div>
        )}
      </div>
    ));
  };

  return (
    <header
      className={
        headerClasses +
        " data-[scrolled=true]:backdrop-blur data-[scrolled=true]:bg-background/70"
      }
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl text-primary">
          GRANDTEX
        </Link>
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((item) => (
            <div key={item.title} className="group relative">
              <Link
                href={item.href}
                className={`${textClasses} text-sm font-medium hover:text-primary transition-colors`}
              >
                {item.title}
              </Link>
              {item.subLinks && item.subLinks.length > 0 && (
                <div className="absolute left-0 top-full mt-2 hidden min-w-max rounded-md bg-card shadow-lg group-hover:block">
                  <div className="p-4 space-y-2">
                    {item.subLinks.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        className={`${textClasses} block text-sm hover:text-primary`}
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        {/* Mobile menu toggle */}
        <button
          className={`md:hidden p-2 ${textClasses}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute right-0 top-0 h-full w-64 bg-background p-6 shadow-lg overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4 text-primary">Меню</h2>
            {renderLinks(navLinks)}
          </div>
        </div>
      )}
    </header>
  );
}
