import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// Duas famílias, dois trabalhos: Fraunces (display) para títulos, Inter (corpo) para todo o resto.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web Estúdio BR · Criação de Sites e Landing Pages",
  description:
    "Estúdio de criação de sites com design e código na mesma mesa. Sites institucionais, catálogos e landing pages sob medida, rápidos e prontos para converter.",
  keywords: [
    "criação de sites",
    "landing page",
    "site institucional",
    "desenvolvimento web",
    "Next.js",
    "Web Estúdio BR",
  ],
  openGraph: {
    title: "Web Estúdio BR · Criação de Sites e Landing Pages",
    description:
      "Sites completos, rápidos e pensados para cada nicho — da indústria à estética.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
