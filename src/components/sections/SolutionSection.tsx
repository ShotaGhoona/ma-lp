import Image from 'next/image';
import GridBackground from '@/components/common/GridBackground';
import CloudShape from '@/components/common/CloudShape';
import CloudShapeTwo from '@/components/common/CloudShapeTwo';
import CloudShapeThree from '@/components/common/CloudShapeThree';
import RevealText from '@/components/animations/RevealText';
import SlideInLeft from '@/components/animations/SlideInLeft';
import SlideInRight from '@/components/animations/SlideInRight';
import FadeInUp from '@/components/common/FadeInUp';
import FloatIn from '@/components/animations/FloatIn';
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren';

export default function SolutionSection() {
  return (
    <section className="py-32 bg-primary-beige relative overflow-hidden">
      <GridBackground />
      
      {/* Cloud background elements */}
      <CloudShape 
        variant="orange" 
        className="top-20 left-16 opacity-25" 
      />
      <CloudShapeTwo 
        variant="beige"
        className="top-1/2 right-0 opacity-40" 
      />
      <CloudShapeThree 
        variant="dark"
        className="bottom-10 left-1/3 opacity-35" 
      />
      <CloudShape 
        variant="light" 
        className="bottom-32 right-20 opacity-30" 
      />
      
      {/* Additional clouds for richer background */}
      <CloudShapeTwo 
        variant="green"
        className="top-5 right-5 opacity-25" 
      />
      <CloudShapeThree 
        variant="light"
        className="bottom-1/2 left-10 opacity-40" 
      />
      <CloudShape 
        variant="beige" 
        className="top-3/4 right-1/3 opacity-35" 
      />
      <CloudShapeTwo 
        variant="orange"
        className="bottom-5 left-1/2 opacity-20" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24">
          <RevealText 
            text="SEO Tigerなら、全て解決" 
            className="text-5xl lg:text-6xl font-bold text-primary-dark mb-8"
            delay={0.2}
          />
          <FadeInUp delay={0.8} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SEOに特化した高品質な記事をAIが自動生成。<br />
            コンテンツ作成の業務効率を改善し、集客できるWebページの作成をサポートします。
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <SlideInLeft delay={1.0}>
            <FloatIn delay={0.2}>
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="AI Content Generation"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </FloatIn>
          </SlideInLeft>

          <SlideInRight delay={1.2} className="space-y-8">
            <FadeInUp delay={0.4} className="space-y-4">
              <div className="w-12 h-0.5 bg-primary-orange"></div>
              <h3 className="text-2xl font-bold text-primary-dark">
                主な特徴
              </h3>
            </FadeInUp>
            
            <StaggerChildren delay={0.6} staggerDelay={0.15} className="space-y-6">
              <StaggerItem direction="right">
                <p className="text-gray-700 leading-relaxed">
                  SEOに強い高品質な記事生成がほぼ自動で作成できる
                </p>
              </StaggerItem>
              <StaggerItem direction="right">
                <p className="text-gray-700 leading-relaxed">
                  生成記事の検索順位の推移をチェック、PDCAが回せる
                </p>
              </StaggerItem>
              <StaggerItem direction="right">
                <p className="text-gray-700 leading-relaxed">
                  記事画像も生成できる
                </p>
              </StaggerItem>
              <StaggerItem direction="right">
                <p className="text-gray-700 leading-relaxed">
                  直感的に使いやすいUI/UX
                </p>
              </StaggerItem>
              <StaggerItem direction="right">
                <p className="text-gray-700 leading-relaxed">
                  670社以上の中小企業のWebマーケティング支援実績
                </p>
              </StaggerItem>
            </StaggerChildren>
          </SlideInRight>

        </div>

      </div>
    </section>
  );
}