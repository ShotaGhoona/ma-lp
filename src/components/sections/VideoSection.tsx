import GridBackground from '@/components/common/GridBackground';

export default function VideoSection() {
  return (
    <section className="py-20 bg-primary-beige relative">
      <GridBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary-dark mb-4">
            1分でわかるSEO Tiger
          </h2>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-black rounded-2xl shadow-2xl overflow-hidden group cursor-pointer hover:shadow-3xl transition-all duration-300">
            
            {/* Video Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark/90 to-black"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-primary-orange rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
              </div>
            </div>
            
            {/* Video Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h3 className="text-white text-2xl font-semibold mb-2">
                SEO Tiger 機能紹介
              </h3>
              <p className="text-white/80 text-lg">
                AIによる自動記事生成からカスタマイズまで
              </p>
            </div>
            
            {/* Duration Badge */}
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
              1:00
            </div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
}