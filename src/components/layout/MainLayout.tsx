import Header from './Header';
import Footer from './Footer';
import type { ReactNode } from 'react';

/**
 * MainLayout объединяет Header, содержимое страницы и Footer. Учёт фиксированного
 * заголовка достигается добавлением верхнего отступа к основному элементу.
 * Используйте этот макет как обёртку для компонентов страниц.
 */
interface MainLayoutProps {
  children: ReactNode;
  transparentHeader?: { transparent: boolean };
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}