import Header, { HeaderConfig } from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import Animations from '@/app/animations';

interface MainLayoutProps {
  children: React.ReactNode;
  transparentHeader?: HeaderConfig;
}

export default function MainLayout({
  children,
  transparentHeader = { transparent: false }
}: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header config={transparentHeader} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <CookieConsent />
      <Animations />
    </div>
  );
}
