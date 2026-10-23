import CareersSection from '../../components/CareersSection';
import styles from './careers.module.css';

export default function Careers() {
  return (
    <main className={`${styles.careers} careers-page`}>
      <CareersSection />
    </main>
  );
}
