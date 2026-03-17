import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kurly Commerce',
  description: 'Kurly-style ecommerce frontend placeholder',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
