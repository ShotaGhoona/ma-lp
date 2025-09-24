import GridBackground from '@/components/common/GridBackground';
import CloudShape from '@/components/common/CloudShape';
import CloudShapeTwo from '@/components/common/CloudShapeTwo';
import CloudShapeThree from '@/components/common/CloudShapeThree';

export default function FlowSection() {
  return (
    <section className="relative overflow-hidden bg-primary-beige py-20">
      <GridBackground />
      
      {/* Cloud background elements */}
      <CloudShape 
        variant="orange" 
        className="top-0 right-10 opacity-30" 
      />
      <CloudShapeTwo 
        variant="beige"
        className="top-1/2 left-0 opacity-40" 
      />
      <CloudShapeThree 
        variant="dark"
        className="bottom-0 right-1/3 opacity-25" 
      />
      
      {/* Additional clouds for richer background */}
      <CloudShape 
        variant="green"
        className="top-1/3 right-20 opacity-35" 
      />
      <CloudShapeTwo 
        variant="light"
        className="bottom-1/3 left-10 opacity-50" 
      />
      <CloudShapeThree 
        variant="orange"
        className="top-3/4 left-1/2 opacity-30" 
      />
      <CloudShape 
        variant="beige"
        className="bottom-10 right-0 opacity-40" 
      />
      <CloudShapeTwo 
        variant="dark"
        className="top-10 left-1/4 opacity-25" 
      />
      
      <p>ご利用の流れ</p>
    </section>
  );
}