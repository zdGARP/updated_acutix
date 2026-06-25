import React from 'react';

export default function AcutixFAQSchema() {
  const faqData = {
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
  };

 return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}