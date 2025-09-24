'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8
}: AnimatedSectionProps) {
  const directionVariants = {
    up: { opacity: 0, y: 50 },
    down: { opacity: 0, y: -50 },
    left: { opacity: 0, x: 50 },
    right: { opacity: 0, x: -50 }
  };

  return (
    <motion.div
      className={className}
      initial={directionVariants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1] // easeOutQuart
      }}
    >
      {children}
    </motion.div>
  );
}