'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  suffix = '',
  duration = 1800,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(value);
      return;
    }

    let frame = 0;
    let startTime: number | null = null;

    const updateCount = (timestamp: number) => {
      startTime ??= timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 4;
      setCount(Math.round(value * easedProgress));

      if (progress < 1) {
        frame = window.requestAnimationFrame(updateCount);
      }
    };

    frame = window.requestAnimationFrame(updateCount);
    return () => window.cancelAnimationFrame(frame);
  }, [duration, isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}
