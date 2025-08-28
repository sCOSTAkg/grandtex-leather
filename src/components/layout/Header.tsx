"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';

export default function Header({ transparent = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    transparent && !isScrolled
      ? 'bg-transparent'
      : 'bg-white shadow-sm'
  }`;

  const textClasses = transparent && !isScrolled ? 'text-white' : 'text-black';

  const navLinks = [
    {
      title: 'Leathers',
      href: '/leathers',
      image: 'https://ext.same-assets.com/1118492138/3442149313.jpeg',
      subLinks: [
        {
          title: 'Spring-Summer 27 Collection',
          href: '/collections/spring-summer-2027'
        },
        {
          title: 'Fall-Winter 26 Collection',
          href: '/collections/fw26'
        }
      ]
    },
    {
      title: 'Emboss & Perforation',
      href: '/emboss-perforation',
      image: 'https://ext.same-assets.com/1118492138/3513175735.jpeg',
    },
    {
      title: 'Why GRANDTEX?',
      href: '/why-grandtex',
      image: 'https://ext.same-assets.com/1118492138/2560085916.jpeg',
      subLinks: [
        {
          title: 'About GRANDTEX',
          href: '/about-grandtex'
        },
        {
          title: 'Tanneries',
          href: '/tanneries'
        }
      ]
    },
    {
      title: 'Sustainability',
      href: '/sustainability',
      image: 'https://ext.same-assets.com/1118492138/180971912.jpeg',
      subLinks: [
        {
          title: 'Operational Excellence',
          href: '/sustainability#operational-excellence'
        },
        {
          title: 'Circularity',
          href: '/sustainability#circularity'
        },
        {
          title: 'Climate Action',
          href: '/sustainability#climate-action'
        },
        {
          title: 'Social Impact',
          href: '/sustainability#social-impact'
        }
      ]
    },
    {
      title: 'Highlights',
      href: '/highlights'
    },
    {
      title: 'Education',
      href: '/education'
    },
    {
      title: 'Locations',
      href: '/contact'
    },
    {
      title: 'Resources',
      href: '/resources'
    }
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
              <span>Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl p-0 overflow-y-auto"
          >
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-center px-8 py-6 border-b">
                <Link href="/" className="text-3xl font-bold">
                  grandtex
                </Link>
                <button
                  className="text-gray-500 hover:text-black transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Close
                </button>
              </div>

              <div className="flex-1 overflow-auto px-8 py-10">
                <nav className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {navLinks.slice(0, 4).map((link, index) => (
                      <div key={link.title} className="space-y-4">
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
                                    pathname === subLink.href ? 'font-medium text-black' : ''
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
                              style={{ objectFit: 'cover' }}
                              className="transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4">
                              <span className="text-white font-medium">{link.title}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-lg font-medium">More Information</h2>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                      {navLinks.slice(4).map((link) => (
                        <li key={link.title}>
                          <Link
                            href={link.href}
                            className={`text-gray-600 hover:text-black transition-colors ${
                              pathname === link.href ? 'font-medium text-black' : ''
                            }`}
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
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
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
