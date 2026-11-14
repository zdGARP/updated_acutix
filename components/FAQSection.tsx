import FAQAccordion from '@/components/FAQAccordion';

export default function FAQSection() {
  return (
    <FAQAccordion
      eyebrow="FAQ"
      title="Frequently Asked Questions"
      description="Practical information for businesses, students and academic partners."
      items={[
        {
          question: 'What software development services does Acutix offer?',
          answer: 'Acutix works on websites, web and mobile applications, custom software, and digital products. Contact the team to discuss the requirements and suitable scope for your project.',
        },
        {
          question: 'How does your development process work?',
          answer: 'Start with a conversation about your goals and workflows. The project scope, priorities, milestones, and delivery expectations can then be discussed with the Acutix team.',
        },
        {
          question: 'How can a college partner with Acutix?',
          answer: 'Colleges can contact Acutix to discuss academic collaboration, workshops, training, or other proposed initiatives. Visit the collaboration page to learn more.',
        },
        {
          question: 'Do you offer internships or industrial visits?',
          answer: 'Visit the Careers page for current opportunities and contact Acutix to ask about internship or industrial-visit availability.',
        },
        {
          question: 'How do I request a project estimate?',
          answer: 'Use the contact form to describe your goals, required features, and timeline. The team can follow up to clarify the scope and discuss an estimate.',
        },
        {
          question: 'What happens after a project launches?',
          answer: 'Post-launch support and ongoing improvements can be discussed as part of your project requirements. Contact Acutix to outline the support you need.',
        },
      ]}
    />
  );
}
