import AboutSection from '../../components/AboutSection';
import styles from './about.module.css';

export default function About() {
  return (
    <main className={`${styles.about} about-page pt-32 pb-12`}>
      <AboutSection />
    </main>
  );
}
