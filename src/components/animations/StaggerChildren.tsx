'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export default function StaggerChildren({ 
  children, 
  className = '',
  delay = 0,
  staggerDelay = 0.1
}: StaggerChildrenProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ 
  children, 
  className = '',
  direction = 'up'
}: { 
  children: ReactNode; 
  className?: string;
  direction?: 'up' | 'left' | 'right';
}) {
  const directionVariants = {
    up: { opacity: 0, y: 30 },
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 }
  };

  return (
    <motion.div
      className={className}
      variants={{
        hidden: directionVariants[direction],
        visible: { 
          opacity: 1, 
          x: 0, 
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" }
        }
      }}
    >
      {children}
    </motion.div>
  );
}