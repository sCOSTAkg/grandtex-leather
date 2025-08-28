import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MainLayout from '@/components/layout/MainLayout';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'GRANDTEX — производство одежды под ключ',
    template: '%s | GRANDTEX',
  },
  description:
    'GRANDTEX специализируется на пошиве мужской, женской, деловой, спортивной и детской одежды. Полный цикл от лекал до готовой партии.',
  keywords: [
    'пошив одежды',
    'швейная фабрика',
    'пошив на заказ',
    'калькулятор стоимости',
  ],
  metadataBase: new URL('https://grandtex.ru'),
  openGraph: {
    title: 'GRANDTEX — производство одежды под ключ',
    description:
      'Полный цикл – от лекал до готовой партии. Точные лекала, современное оборудование и трёхуровневый контроль качества.',
    url: 'https://grandtex.ru',
    siteName: 'GRANDTEX',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.variable}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}