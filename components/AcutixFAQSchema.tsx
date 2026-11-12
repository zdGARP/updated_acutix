const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What software development services does Acutix offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Acutix works on websites, web and mobile applications, custom software, and digital products. Contact the team to discuss the requirements and suitable scope for your project.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does your development process work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with a conversation about your goals and workflows. The project scope, priorities, milestones, and delivery expectations can then be discussed with the Acutix team.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can a college partner with Acutix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Colleges can contact Acutix to discuss academic collaboration, workshops, training, or other proposed initiatives. Visit the collaboration page to learn more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer internships or industrial visits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visit the Careers page for current opportunities and contact Acutix to ask about internship or industrial-visit availability.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I request a project estimate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the contact form to describe your goals, required features, and timeline. The team can follow up to clarify the scope and discuss an estimate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after a project launches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Post-launch support and ongoing improvements can be discussed as part of your project requirements. Contact Acutix to outline the support you need.',
      },
    },
  ],
};

export default function AcutixFAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
