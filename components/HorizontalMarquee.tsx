import type { CSSProperties, ReactNode } from 'react';
import styles from './HorizontalMarquee.module.css';

interface HorizontalMarqueeProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  duration?: string;
  label: string;
}

export default function HorizontalMarquee({
  children,
  direction = 'left',
  duration = '48s',
  label,
}: HorizontalMarqueeProps) {
  return (
    <div className={styles.viewport} role="region" aria-label={label}>
      <div
        className={`${styles.track} ${direction === 'right' ? styles.right : styles.left}`}
        style={{ '--marquee-duration': duration } as CSSProperties}
      >
        <div className={styles.group}>{children}</div>
        <div className={styles.group} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
