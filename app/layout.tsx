import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codra Care - نظام إدارة العيادات",
  description: "نظام متكامل لإدارة العيادات الطبية، المواعيد، والسجلات المرضية بكفاءة عالية.",
  openGraph: {
    title: "Codra Care - نظام إدارة العيادات",
    description: "نظام متكامل لإدارة العيادات الطبية، المواعيد، والسجلات المرضية بكفاءة عالية.",
    url: 'https://codracare.com',
    siteName: 'Codra Care',
    images: [
      {
        url: 'https://codracare.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Codra Care Dashboard Preview',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Codra Care - نظام إدارة العيادات',
    description: 'نظام متكامل لإدارة العيادات الطبية بكفاءة عالية.',
    images: ['https://codracare.com/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
