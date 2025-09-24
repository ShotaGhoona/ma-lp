import GridBackground from '@/components/common/GridBackground';
import CloudShape from '@/components/common/CloudShape';
import CloudShapeTwo from '@/components/common/CloudShapeTwo';
import CloudShapeThree from '@/components/common/CloudShapeThree';

export default function CompanySection() {
  return (
    <section className="relative overflow-hidden bg-primary-beige py-20">
      <GridBackground />
      
      {/* Cloud background elements */}
      <CloudShape 
        variant="beige" 
        className="top-10 left-10 opacity-30" 
      />
      <CloudShapeTwo 
        variant="green"
        className="top-1/2 right-0 opacity-45" 
      />
      <CloudShapeThree 
        variant="orange"
        className="bottom-0 left-1/3 opacity-35" 
      />
      <CloudShape 
        variant="light" 
        className="bottom-10 right-10 opacity-25" 
      />
      
      {/* Additional clouds for richer background */}
      <CloudShapeThree 
        variant="light"
        className="top-5 right-1/2 opacity-25" 
      />
      <CloudShape 
        variant="dark"
        className="top-3/4 left-5 opacity-35" 
      />
      <CloudShapeTwo 
        variant="beige"
        className="bottom-1/2 right-1/4 opacity-45" 
      />
      <CloudShapeThree 
        variant="green"
        className="top-1/3 left-2/3 opacity-30" 
      />
      
      <p>会社概要</p>
    </section>
  );
}