import Header from "@/components/common/Header";
import TopSection from "@/components/sections/TopSection";
import VideoSection from "@/components/sections/VideoSection";
import WhySeoSection from "@/components/sections/WhySeoSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import FlowSection from "@/components/sections/FlowSection";
import PricingSection from "@/components/sections/PricingSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import FaqSection from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <TopSection />
        <VideoSection />
        <WhySeoSection />
        <ProblemSection />
        <SolutionSection />
        <CaseStudySection />
        <PricingSection />
        <FlowSection />
        <FaqSection />
      </main>
    </div>
  );
}
