import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
