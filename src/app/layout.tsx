import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import Animations from "./animations";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | GRANDTEX",
    default: "GRANDTEX | Производство одежды под ключ",
  },
  description:
    "GRANDTEX обеспечивает полный цикл пошива одежды: от разработки лекал до упаковки готовой партии.",
  keywords: [
    "пошив одежды",
    "разработка лекал",
    "серийное производство",
    "швейное производство",
  ],
  authors: [{ name: "GRANDTEX" }],
  creator: "GRANDTEX",
  publisher: "GRANDTEX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://v0-grandioooooss.vercel.app"),
  openGraph: {
    title: "GRANDTEX | Производство одежды под ключ",
    description:
      "Полный цикл – от лекал до готовой партии. Точные лекала, современное оборудование и трёхуровневый контроль качества.",
    url: "https://v0-grandioooooss.vercel.app",
    siteName: "GRANDTEX",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
        width: 1200,
        height: 630,
        alt: "GRANDTEX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GRANDTEX | Производство одежды под ключ",
    description:
      "Полный цикл – от лекал до готовой партии. Точные лекала, современное оборудование и трёхуровневый контроль качества.",
    images: ["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} scroll-smooth`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          <Animations />
          {children}
        </ClientBody>
      </body>
    </html>
  );
}
