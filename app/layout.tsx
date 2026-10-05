import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { CartProvider } from '@/components/cart-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Project Pizza | Authentieke Italiaanse pizza',
  description: 'Authentieke Italiaanse pizza en pasta, vers bereid met liefde en verse ingrediënten.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Project Pizza',
    description: 'Authentieke Italiaanse pizza, vers uit de oven.',
    type: 'website',
    url: '/',
    images: ['https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Pizza',
    description: 'Authentieke Italiaanse pizza, vers uit de oven',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full bg-[#f7f2eb] text-[#1d2a1f] antialiased">
        <CartProvider>
          <div className="min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
