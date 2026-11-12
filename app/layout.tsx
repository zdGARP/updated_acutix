import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import { MotionConfig } from 'framer-motion';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Acutix Soft | Software Development & Industry-Academia Learning',
  description: 'Acutix Soft builds websites, applications and custom software for businesses and connects students with practical, industry-oriented learning.',
  verification: {
    google: '7B92EabZ6IiowvMgLcEWulas2Z7nOG5o8AIbYRU_IXA',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Google tag (gtag.js) */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6SWH0D7N2K" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6SWH0D7N2K');
        `}
      </Script>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MotionConfig reducedMotion="user">
          <Header />
          <main>{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}