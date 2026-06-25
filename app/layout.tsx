import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
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
  title: 'Acutix Soft LLP',
  description: 'Driving digital transformation for small businesses.',
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
        <Header />
        <main>{children}</main>
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What digital solutions help businesses improve efficiency and growth?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Custom software, web applications, mobile apps, SaaS platforms, and business automation solutions help organizations streamline operations, improve customer experiences, and support long-term growth through technology."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why do businesses invest in custom software solutions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Custom software is built around specific business needs, helping improve productivity, automate workflows, enhance data management, and provide greater flexibility than generic off-the-shelf solutions."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can SaaS platforms support modern business operations?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cloud-based SaaS platforms simplify business processes, improve accessibility, reduce infrastructure costs, and enable teams to manage operations, customers, and workflows more efficiently from anywhere."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes a successful website, application, or digital product?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Successful digital products combine clear business goals, user-focused design, reliable technology, scalability, security, and continuous optimization to deliver long-term value and performance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What technologies are commonly used to build scalable software solutions?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Modern software solutions leverage cloud infrastructure, APIs, databases, web technologies, mobile frameworks, and secure architectures to deliver reliable, high-performance digital experiences."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why are maintenance, support, and continuous improvements important?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Regular updates, security enhancements, performance monitoring, and feature improvements help software remain reliable, secure, and aligned with evolving business and customer requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do practical training programs and real-world projects benefit students?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Hands-on learning through live projects helps students develop technical skills, understand industry workflows, gain professional experience, and improve career readiness in the technology sector."
                  }
                }
              ]
            })
          }}
        />
        <Footer />
      </body>
    </html>
  );
}