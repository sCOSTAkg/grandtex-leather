import Header from './Header';
import Footer from './Footer';
import type { ReactNode } from 'react';

/**
 * MainLayout composes the Header, page content and Footer. It accounts for
 * the fixed header by adding top padding to the main element. Use this
 * layout as a wrapper for all page-level components.
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