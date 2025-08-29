"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { defaultNavLinks, NavLink } from './navLinks';

/**
 * Renders a responsive site header. On larger viewports the navigation
 * items are displayed inline. On mobile a hamburger icon toggles a
 * slide-over menu. The component uses the default navigation links but
 * accepts an optional override via props.
 */
interface HeaderProps {
  /**
   * Override the default navigation with a custom set of links. Useful when
   * tailoring the header for specific pages or layouts.
   */
  links?: NavLink[];
}

const headerClasses =
  "fixed left-1/2 top-4 -translate-x-1/2 z-50 w-full transition-all duration-300 bg-transparent";
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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  /**
   * Renders a list of links recursively. If a link contains subLinks, they
   * will be displayed as an indented list below the parent on mobile.
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
        " data-[scrolled=true]:w-fit data-[scrolled=true]:rounded-xl data-[scrolled=true]:bg-background/70 data-[scrolled=true]:backdrop-blur data-[scrolled=true]:shadow-lg"
      }
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-4 px-4 md:px-6">
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
          aria-label={open ? 'Close menu' : 'Open menu'}
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
