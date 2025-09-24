interface CloudShapeTwoProps {
  className?: string;
  variant?: 'beige' | 'orange' | 'green';
}

export default function CloudShapeTwo({ 
  className = '', 
  variant = 'beige'
}: CloudShapeTwoProps) {
  const variantStyles = {
    beige: {
      background: 'radial-gradient(ellipse at 40% 30%, var(--primary-beige) 0%, rgba(251,243,228,0.4) 60%, transparent 100%)',
    },
    orange: {
      background: 'radial-gradient(ellipse at 70% 20%, rgba(221,97,50,0.25) 0%, rgba(221,97,50,0.08) 70%, transparent 100%)',
    },
    green: {
      background: 'radial-gradient(ellipse at 50% 60%, rgba(89,144,111,0.2) 0%, rgba(89,144,111,0.05) 80%, transparent 100%)',
    }
  };

  return (
    <div 
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: '700px',
        height: '500px',
        ...variantStyles[variant],
        clipPath: 'polygon(25% 0%, 75% 3%, 95% 20%, 100% 45%, 90% 70%, 65% 95%, 35% 100%, 10% 85%, 0% 60%, 8% 30%, 15% 10%)',
        filter: 'blur(4px)',
        transform: 'rotate(45deg)'
      }}
    />
  );
}