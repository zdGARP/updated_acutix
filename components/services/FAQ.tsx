import FAQAccordion from '@/components/FAQAccordion';

const faqs = [
  { question: 'How long does development take?', answer: 'Development timelines vary based on the complexity and scope of the project. A standard website might take 4-8 weeks, whereas a complex custom enterprise software solution could take 3-6 months. We provide detailed estimates during the planning phase.' },
  { question: 'Can existing software be integrated?', answer: 'Absolutely. We specialize in legacy system modernization and API integrations. We can connect your new platform seamlessly with your existing CRMs, ERPs, and third-party tools.' },
  { question: 'Do you provide source code?', answer: 'Yes. Once the project is completed and fully paid for, all intellectual property rights and the complete source code are transferred to you.' },
  { question: 'Do you offer maintenance?', answer: 'We offer comprehensive post-launch support and maintenance packages to ensure your software remains secure, up-to-date, and optimized for performance.' },
  { question: 'How secure are your applications?', answer: 'Security is a top priority. We follow industry best practices, conduct rigorous penetration testing, and implement robust encryption to ensure your data is always protected against vulnerabilities.' }
];

export default function FAQ() {
  return (
    <FAQAccordion
      title="Frequently Asked Questions"
      description="Everything you need to know about our services and processes."
      items={faqs}
    />
  );
}
