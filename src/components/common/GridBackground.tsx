export default function GridBackground({ className = "" }: { className?: string }) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(45,45,37,0.03) 1px, transparent 2px),
          linear-gradient(90deg, rgba(45,45,37,0.03) 1px, transparent 2px)
        `,
        backgroundSize: '80px 80px'
      }}
    />
  );
}