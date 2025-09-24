'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  startScale?: number;
}

export default function ScaleIn({ 
  children, 
  className = '',
  delay = 0,
  startScale = 0.8
}: ScaleInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: startScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: [0.34, 1.56, 0.64, 1]
      }}
    >
      {children}
    </motion.div>
  );
}