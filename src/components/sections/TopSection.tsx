import Image from 'next/image';
import GridBackground from '@/components/common/GridBackground';
import CloudShape from '@/components/common/CloudShape';
import CloudShapeTwo from '@/components/common/CloudShapeTwo';
import CloudShapeThree from '@/components/common/CloudShapeThree';
import FadeInUp from '@/components/common/FadeInUp';
import SlideInLeft from '@/components/animations/SlideInLeft';
import SlideInRight from '@/components/animations/SlideInRight';
import ScaleIn from '@/components/animations/ScaleIn';
import FloatIn from '@/components/animations/FloatIn';

export default function TopSection() {
  return (
    <section 
      className="bg-cover min-h-screen bg-center bg-no-repeat relative py-20"
      style={{
        backgroundImage: `url('/パターン1 (4).png')`
      }}
    >
      <GridBackground />
      
      {/* Cloud background elements */}
      <CloudShape 
        variant="light" 
        className="top-0 right-10 opacity-30" 
      />
      <CloudShapeTwo 
        variant="orange"
        className="top-1/4 left-20 opacity-40" 
      />
      <CloudShapeThree 
        variant="beige"
        className="bottom-10 right-1/3 opacity-50" 
      />
      <CloudShape 
        variant="beige" 
        className="bottom-0 left-10 opacity-25" 
      />
      
      {/* Additional clouds for richer background */}
      <CloudShapeTwo 
        variant="green"
        className="top-1/3 right-5 opacity-35" 
      />
      <CloudShapeThree 
        variant="dark"
        className="bottom-1/4 left-1/3 opacity-40" 
      />
      <CloudShape 
        variant="orange" 
        className="top-1/2 left-5 opacity-20" 
      />
      <CloudShapeTwo 
        variant="beige"
        className="bottom-1/3 right-1/4 opacity-45" 
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <SlideInLeft className="space-y-8">
            <ScaleIn delay={0.3}>
              <Image
                src="/seo-tiger.svg"
                alt="SEO Tiger by jungle AI"
                width={495}
                height={107}
                className="w-[30rem] h-auto"
              />
            </ScaleIn>
            
            <FadeInUp delay={0.5}>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                高品質なSEO記事を<br />
                わずか数分で自動生成
              </h2>
              <p className="text-white text-lg leading-relaxed opacity-90">
                キーワードを入力するだけで、AIが検索上位表示を狙えるSEO最適化された記事を自動作成。<br />
                チャットベースの編集機能で簡単カスタマイズ。
              </p>
            </FadeInUp>
            
            <FadeInUp delay={0.8} className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-green/90 transition-colors">
                無料で始める
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-dark transition-colors">
                機能詳細を見る
              </button>
            </FadeInUp>
          </SlideInLeft>
          
          {/* Right Content - MacBook */}
          <SlideInRight delay={0.4} className="flex justify-center lg:justify-end">
            <FloatIn delay={0.7} className="relative max-w-2xl w-full">
              <Image
                src="/imgi_9_mba15-skyblue-select-202503.png"
                alt="MacBook showing SEO Tiger interface"
                width={900}
                height={640}
                className="w-full h-auto"
                priority
              />
            </FloatIn>
          </SlideInRight>
          
        </div>
        
        {/* Scroll Indicator */}
        <FadeInUp delay={1.2} className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white text-sm opacity-80">SCROLL</span>
            <div className="w-0.5 h-8 bg-white/30 animate-pulse"></div>
            <svg 
              className="w-6 h-6 text-white animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </FadeInUp>
        
      </div>
    </section>
  );
}