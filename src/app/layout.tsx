import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import Animations from './animations';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | GRANDTEX Leather",
    default: "GRANDTEX | Your Future-Forward Tannery Partner",
  },
  description: "GRANDTEX is your partner for high-quality leather products, focusing on sustainability and innovative leather solutions for global brands.",
  keywords: ["leather", "tannery", "sustainable leather", "footwear leather", "premium leather", "leather manufacturing"],
  authors: [{ name: "GRANDTEX" }],
  creator: "GRANDTEX",
  publisher: "GRANDTEX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://grandtex-leather.netlify.app"),
  openGraph: {
    title: "GRANDTEX | Your Future-Forward Tannery Partner",
    description: "GRANDTEX is your partner for high-quality leather products, focusing on sustainability and innovative leather solutions for global brands.",
    url: "https://grandtex-leather.netlify.app",
    siteName: "GRANDTEX Leather",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ext.same-assets.com/1118492138/3414069527.jpeg",
        width: 1200,
        height: 630,
        alt: "GRANDTEX Leather",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GRANDTEX | Your Future-Forward Tannery Partner",
    description: "GRANDTEX is your partner for high-quality leather products, focusing on sustainability and innovative leather solutions for global brands.",
    images: ["https://ext.same-assets.com/1118492138/3414069527.jpeg"],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
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
