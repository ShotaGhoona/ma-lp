import Image from 'next/image';
import GridBackground from '@/components/common/GridBackground';

export default function WhySeoSection() {
  return (
    <section className="py-24 bg-primary-beige relative">
      <GridBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary-dark mb-6">
            なぜ今SEOが重要なのか
          </h2>
          <div className="w-24 h-1 bg-primary-orange mx-auto"></div>
        </div>

        {/* SEOとは */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary-dark mb-6">
                そもそもSEOとは？
              </h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  SEOとは「Search Engine Optimization（検索エンジン最適化）」の略称です。これは、GoogleやYahoo!といった検索エンジンの検索結果において、自社のWebサイトやコンテンツを上位に表示させるための施策全般を指します。
                </p>
                <p>
                  今日のビジネス環境において、顧客は何かを検討する際にまず検索エンジンを利用します。この初期段階でのタッチポイントを最大化することが、SEO目的です。
                </p>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="SEO Analytics Dashboard"
                width={600}
                height={400}
                className="shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* 重要性の4つのポイント */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-primary-dark text-center mb-16">
            SEOが重要な4つの理由
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Point 1 */}
            <div className="bg-white/80 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary-orange to-primary-orange/80 flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Analytics and Growth"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover opacity-80"
                />
                {/* <div className="absolute inset-0 bg-primary-orange/40"></div> */}
              </div>
              <div className="p-6">
                <div className="w-8 h-0.5 bg-primary-orange mb-4"></div>
                <h4 className="text-lg font-bold text-primary-dark mb-3 leading-tight">
                  圧倒的な集客力と<br />認知度向上
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  検索エンジンの検索結果で上位に表示されることで、ターゲット顧客の目に触れる機会が格段に増加します。これは、実店舗が「一等地の路面店」に位置するのと同義であり、効果的なオンライン上での見込み客の創出に直結します。
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="bg-white/80 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary-green to-primary-green/80 flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Cost Effectiveness"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover opacity-80"
                />
                {/* <div className="absolute inset-0 bg-primary-green/40"></div> */}
              </div>
              <div className="p-6">
                <div className="w-8 h-0.5 bg-primary-green mb-4"></div>
                <h4 className="text-lg font-bold text-primary-dark mb-3 leading-tight">
                  高い費用対効果<br />（ROI）
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  リスティング広告のような有料広告とは異なり、SEOは基本的に広告費がかかりません。一度上位表示されれば、持続的に自然検索からのアクセスを獲得できるため、長期的に見て非常に高い投資対効果（ROI）を実現します。
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="bg-white/80 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-primary-dark to-primary-dark/80 flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Trust and Authority"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover opacity-80"
                />
                {/* <div className="absolute inset-0 bg-primary-dark/40"></div> */}
              </div>
              <div className="p-6">
                <div className="w-8 h-0.5 bg-primary-dark mb-4"></div>
                <h4 className="text-lg font-bold text-primary-dark mb-3 leading-tight">
                  ブランドの<br />信頼性構築
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  検索エンジンの上位に表示されることは、Googleなどの検索エンジンがその情報を「信頼できる、質の高い情報源」と評価していることを意味します。これにより、ユーザーからのブランド信頼度や権威性が向上します。
                </p>
              </div>
            </div>

            {/* Point 4 */}
            <div className="bg-white/80 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Quality Leads"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover opacity-80"
                />
                {/* <div className="absolute inset-0 bg-blue-500/40"></div> */}
              </div>
              <div className="p-6">
                <div className="w-8 h-0.5 bg-blue-500 mb-4"></div>
                <h4 className="text-lg font-bold text-primary-dark mb-3 leading-tight">
                  質の高い<br />リード獲得
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  検索行動は、ユーザーが特定の課題やニーズを抱えている状態で行われます。そのため、SEOによって獲得する訪問者は、すでに解決策を検討している「見込み度の高いリード」である可能性が高く、効率的なコンバージョンに繋がりやすいというメリットがあります。
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* AIO進化セクション - max-widthを突破 */}
      <div className="relative py-32 overflow-hidden bg-primary-beige">
        
        {/* 背景画像 - 画面左半分全体に拡張 */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="AI Technology"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 max-w-4xl ml-auto mr-8 text-left">
            
            <h3 className="text-5xl lg:text-6xl font-bold text-primary-dark mb-16">
              SEO対策は<br />AIO対策へと進化する
            </h3>
            
            <div className="space-y-8 text-xl text-gray-700 leading-relaxed">
              <p>
                これまでのSEO対策は、Google検索での上位表示を目指すものでした。もちろん今後も重要な施策ですが、生成AIの登場により、最近の視点が「AIO（AI Optimization）」へと広がっていきます。
              </p>
              
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-orange"></div>
                <p className="pl-8 font-semibold text-primary-dark">
                  重要なのは、キーワードを詰め込むことではなく、AIが理解しやすい構造、信頼性・専門性のある中身を備えること。本質的な価値のある情報発信を発信し続けることが、あらゆるチャネルでの成果につながるのです。
                </p>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}