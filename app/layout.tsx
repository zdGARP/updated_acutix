import React from 'react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

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
                  "name": "What services does Acutix Soft LLP provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Acutix Soft LLP provides end-to-end digital transformation services including Website Development, Mobile Application Development (Android/iOS), and Custom Software Solutions, alongside Industrial-Academic Collaboration and technical training."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is Acutix Soft LLP located?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Acutix Soft LLP is located in Chennai, India, at No: 4/110, 4th Cross Street, Kalathumettu Street, Kottivakkam, Chennai, Tamil Nadu 600041."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the core products in the Acutix Product Suite?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The suite includes Gym Pad (fitness management), Clinic CMS (medical practice onboarding), and the ASCAS System (fertility center management)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does the Acutix Gym Pad product work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Gym Pad features three interconnected portals: a Trainee Portal for booking, a Trainer Dashboard for diet and attendance, and an Admin Control Center for oversight."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the Acutix Mentorship Program?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It is a structured training initiative for students offering hands-on experience with live projects in Web Development, AI Tools, and UI/UX."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Acutix Soft LLP offer custom software for startups?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, they specialize in affordable, agile, and scalable tech solutions specifically tailored for startups and small businesses."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What technologies does Acutix use for development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Acutix uses a modern stack including React, Django, SQLite, AWS, and WhatsApp API (AiSensy) integration."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the focus of the Acutix 'Latest Insights' blog?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The blog focuses on emerging technologies like Agentic AI, AIOps, AI Expert Systems, and technical guides on GenAI and SEO."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can a business contact Acutix Soft LLP for a project?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Businesses can contact Acutix via email at contact@acutixsoft.com or by phone at +91 6369936706."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why should small businesses choose Acutix Soft LLP?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Acutix offers 'Pocket-Friendly Quality,' transparent pricing, and scalable solutions designed to drive operational efficiency for entrepreneurs."
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