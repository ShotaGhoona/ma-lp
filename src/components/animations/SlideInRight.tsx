'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideInRightProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}

export default function SlideInRight({ 
  children, 
  className = '',
  delay = 0,
  distance = 100
}: SlideInRightProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: distance }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.6, 0.05, 0.01, 0.9]
      }}
    >
      {children}
    </motion.div>
  );
}