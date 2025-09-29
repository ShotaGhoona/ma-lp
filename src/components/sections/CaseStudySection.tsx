import GridBackground from '@/components/common/GridBackground';
import CloudShape from '@/components/common/CloudShape';
import CloudShapeTwo from '@/components/common/CloudShapeTwo';
import CloudShapeThree from '@/components/common/CloudShapeThree';

export default function CaseStudySection() {
  return (
    <section className="relative overflow-hidden bg-primary-beige py-20">
      <GridBackground />
      
      {/* Cloud background elements */}
      <CloudShape 
        variant="light" 
        className="top-10 left-16 opacity-35" 
      />
      <CloudShapeTwo 
        variant="green"
        className="top-1/3 right-0 opacity-45" 
      />
      <CloudShapeThree 
        variant="beige"
        className="bottom-20 left-1/4 opacity-30" 
      />
      <CloudShape 
        variant="orange" 
        className="bottom-0 right-20 opacity-25" 
      />
      
      {/* Additional clouds for richer background */}
      <CloudShapeTwo 
        variant="beige"
        className="top-2/3 left-0 opacity-20" 
      />
      <CloudShapeThree 
        variant="orange"
        className="top-1/2 left-1/2 opacity-35" 
      />
      <CloudShape 
        variant="light" 
        className="top-5 right-1/3 opacity-40" 
      />
      <CloudShapeTwo 
        variant="orange"
        className="bottom-1/3 right-10 opacity-30" 
      />
      
      <p>他社事例</p>
    </section>
  );
}