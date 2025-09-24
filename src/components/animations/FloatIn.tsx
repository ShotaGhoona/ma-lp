'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  floatHeight?: number;
}

export default function FloatIn({ 
  children, 
  className = '',
  delay = 0,
  floatHeight = 80
}: FloatInProps) {
  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y: floatHeight,
        filter: 'blur(4px)'
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        filter: 'blur(0px)'
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 1.2, 
        delay: delay,
        ease: [0.16, 1, 0.3, 1]
      }}
    >
      {children}
    </motion.div>
  );
}