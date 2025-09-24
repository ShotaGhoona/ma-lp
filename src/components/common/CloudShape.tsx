interface CloudShapeProps {
  className?: string;
  variant?: 'beige' | 'orange' | 'light';
}

export default function CloudShape({ 
  className = '', 
  variant = 'beige'
}: CloudShapeProps) {
  const variantStyles = {
    beige: {
      background: 'radial-gradient(ellipse at 30% 70%, var(--primary-beige) 0%, rgba(251,243,228,0.6) 40%, rgba(251,243,228,0.2) 70%, transparent 100%)',
      filter: 'blur(2px)'
    },
    orange: {
      background: 'radial-gradient(ellipse at 60% 40%, rgba(221,97,50,0.3) 0%, rgba(221,97,50,0.1) 50%, transparent 80%)',
      filter: 'blur(3px)'
    },
    light: {
      background: 'radial-gradient(ellipse at 20% 80%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.3) 50%, transparent 90%)',
      filter: 'blur(1px)'
    }
  };

  return (
    <div 
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: '800px',
        height: '600px',
        ...variantStyles[variant],
        clipPath: 'polygon(15% 0%, 85% 8%, 100% 30%, 95% 55%, 80% 85%, 45% 100%, 10% 95%, 0% 70%, 5% 35%, 20% 15%)',
        transform: 'rotate(-25deg)'
      }}
    />
  );
}