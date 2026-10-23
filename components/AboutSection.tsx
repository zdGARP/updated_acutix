import Image from 'next/image';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import styles from './AboutSection.module.css';

const testimonials = [
  {
    name: 'Prathab Singh',
    text: `I have worked as freelancer with Acutix soft LLP (formerly Digital Touch IT Solutions), and it has been a fantastic experience. It's a great place to work and make meaningful contributions. Their internship support for students is highly commendable. For small businesses, they are the ideal choice for software solutions.`,
    rating: 5
  },
  {
    name: 'Rishi Krishna',
    text: `We had the privilege of collaborating with an expert from Acutix soft LLP (formerly Digital Touch IT Solutions) for an event organized by CIT (HackFusion-24). The panel member carefully assessed all participants' projects and identified the best ones.`,
    rating: 5
  },
  {
    name: 'Dinesh Vasudevan',
    text: `I collaborated with Acutix soft LLP (formerly Digital Touch IT Solutions) to develop websites for my cricket coaching center. Their team delivered an impressive website at a reasonable cost. Definitely a reliable company for your software needs!`,
    rating: 5
  },
  {
    name: 'Suriyakumar CR',
    text: `Skilled software professionals, their expertise and dedication made a significant impact on clients' project. They get into the requirements well and delivering high-quality solutions.`,
    rating: 5
  },
  {
    name: 'Nithisha J',
    text: `I collaborated with experts from Acutix soft LLP (formerly Digital Touch IT Solutions) to conduct a knowledge-sharing session on IoT and Blockchain. They delivered an insightful and highly valuable session.`,
    rating: 5
  }
];

const values = [
  {
    title: 'Excellence',
    description: "We are committed to delivering top-tier quality in everything we do. Excellence is not just a goal—it's a standard."
  },
  {
    title: 'Innovation',
    description: 'We believe in pushing boundaries and thinking ahead. Our culture encourages creative problem-solving and smart solutions.'
  },
  {
    title: 'Education',
    description: 'We value learning as a continuous journey. By fostering curiosity and growth, we invest in knowledge and long-term success.'
  },
  {
    title: 'Collaboration',
    description: 'We grow stronger together. Open communication and teamwork are the foundation of our progress and innovation.'
  }
];

const AboutSection = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <header className={styles.intro}>
        <p className={styles.eyebrow}>Who we are</p>
        <h1>About Us</h1>
        <p className={styles.lead}>
          At Acutix Soft LLP, we are passionate about driving digital transformation for small businesses. Our expert
          team is dedicated to provide innovative, affordable, and customer-focused solutions that help businesses
          thrive in today&apos;s competitive world. Our journey is defined by a commitment to excellence, continuous
          learning, and the pursuit of impactful technology solutions.
        </p>
      </header>

      <div className={styles.purposeGrid}>
        <article className={styles.purposeCard}>
          <div className={styles.purposeIcon} aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" />
              <path d="M24 14v20M14 24h20" />
            </svg>
          </div>
          <div>
            <h2>Our Vision</h2>
            <p>
              To become the go-to partner for small businesses seeking digital transformation, known for our
              expertise, affordability, and customer-centric approach.
            </p>
          </div>
        </article>
        <article className={styles.purposeCard}>
          <div className={styles.purposeIcon} aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="22" />
              <path d="m16 32 8-16 8 16" />
            </svg>
          </div>
          <div>
            <h2>Our Mission</h2>
            <p>
              To empower small businesses through affordable technology solutions, enhancing their operational
              efficiency and driving growth.
            </p>
          </div>
        </article>
      </div>

      <section className={styles.valuesSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>What guides us</p>
          <h2>Our Values</h2>
        </div>
        <ul className={styles.valuesGrid}>
          {values.map((value) => (
            <li className={styles.valueCard} key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.directorCard}>
        <div className={styles.directorPhoto}>
          <Image
            src="/director.png"
            alt="Director Photo"
            width={160}
            height={160}
            className={styles.directorImage}
          />
        </div>
        <div className={styles.directorContent}>
          <blockquote className={styles.quote}>
            <FaQuoteLeft aria-hidden="true" />
            <span>&quot;The best way to predict the future is to create it.&quot; — Peter Drucker</span>
          </blockquote>
          <h2>Director&apos;s Desk</h2>
          <p>
            At Acutix Soft LLP, we are more than just a technology solutions provider — we are passionate believers in
            the transformative power of digitalization.
          </p>
          <p>
            I&apos;ve witnessed firsthand how small businesses, with the right tools and support, can turn their
            dreams into thriving realities. Our mission is to empower entrepreneurs who often face the weight of
            limited resources and tight budgets, offering them the technology and expertise they need to succeed
            without compromise.
          </p>
          <p>
            We understand the hurdles small businesses face because we&apos;ve been there too. That&apos;s why
            we&apos;re dedicated to delivering cutting-edge solutions at prices that won&apos;t break the bank. Every
            service, every tool we offer is crafted with your growth in mind.
          </p>
          <p>
            But our vision extends beyond just providing technology. We are deeply committed to fostering partnerships
            between industry and academia because we believe the future of innovation lies in collaboration.
          </p>
          <p>
            Through our internship programs, tech meetups, and guest lectures by seasoned experts, we aim to inspire
            and nurture the next generation of leaders.
          </p>
          <p>
            Together, we can build a community where small businesses flourish, future talent thrives, and technology
            becomes the bridge to endless possibilities. Thank you for being part of this journey — we are here to
            help you every step of the way.
          </p>
          <p className={styles.signoff}>
            Regards,
            <br />
            Director, Acutix Soft LLP
          </p>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>What people say</p>
          <h2>Testimonials</h2>
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <article className={styles.testimonialCard} key={testimonial.name}>
              <div className={styles.testimonialAuthor}>
                <span aria-hidden="true">{testimonial.name[0]}</span>
                <h3>{testimonial.name}</h3>
              </div>
              <p>{testimonial.text}</p>
              <div className={styles.rating} aria-label={`${testimonial.rating} out of 5 stars`}>
                {[...Array(testimonial.rating)].map((_, index) => (
                  <FaStar key={index} aria-hidden="true" />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  </section>
);

export default AboutSection;
