import GridBackground from '@/components/common/GridBackground';
import CloudShape from '@/components/common/CloudShape';
import CloudShapeTwo from '@/components/common/CloudShapeTwo';
import CloudShapeThree from '@/components/common/CloudShapeThree';

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-primary-beige py-20">
      <GridBackground />
      
      {/* Cloud background elements */}
      <CloudShape 
        variant="beige" 
        className="top-0 left-0 opacity-20" 
      />
      <CloudShapeTwo 
        variant="orange"
        className="top-1/4 right-10 opacity-35" 
      />
      <CloudShapeThree 
        variant="dark"
        className="bottom-10 left-1/3 opacity-40" 
      />
      <CloudShape 
        variant="light" 
        className="bottom-0 right-0 opacity-30" 
      />
      
      {/* Additional clouds for richer background */}
      <CloudShapeTwo 
        variant="green"
        className="top-1/2 left-10 opacity-40" 
      />
      <CloudShapeThree 
        variant="light"
        className="bottom-1/3 right-20 opacity-25" 
      />
      <CloudShape 
        variant="orange" 
        className="top-3/4 left-1/3 opacity-35" 
      />
      <CloudShapeTwo 
        variant="beige"
        className="bottom-10 left-5 opacity-50" 
      />
      <p>料金</p>
    </section>
  );
}