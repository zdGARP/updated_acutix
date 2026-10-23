import ContactSection from '../../components/ContactSection';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <main className={`${styles.contact} contact-page`}>
      <ContactSection />
    </main>
  );
}
