import Image from 'next/image';
import GridBackground from '@/components/common/GridBackground';

export default function TopSection() {
  return (
    <section 
      className="bg-cover min-h-screen bg-center bg-no-repeat relative py-20"
      style={{
        backgroundImage: `url('/パターン1 (4).png')`
      }}
    >
      <GridBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <Image
                src="/seo-tiger.svg"
                alt="SEO Tiger by jungle AI"
                width={495}
                height={107}
                className="w-[30rem] h-auto"
              />
            </div>
            
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                高品質なSEO記事を<br />
                わずか数分で自動生成
              </h2>
              <p className="text-white text-lg leading-relaxed opacity-90">
                キーワードを入力するだけで、AIが検索上位表示を狙えるSEO最適化された記事を自動作成。<br />
                チャットベースの編集機能で簡単カスタマイズ。
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-green/90 transition-colors">
                無料で始める
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-dark transition-colors">
                機能詳細を見る
              </button>
            </div>
          </div>
          
          {/* Right Content - MacBook */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative max-w-2xl w-full">
              <Image
                src="/imgi_9_mba15-skyblue-select-202503.png"
                alt="MacBook showing SEO Tiger interface"
                width={900}
                height={640}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
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
        </div>
        
      </div>
    </section>
  );
}