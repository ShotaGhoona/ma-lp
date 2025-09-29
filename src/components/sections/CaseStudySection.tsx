import GridBackground from '@/components/common/GridBackground';
import CloudShape from '@/components/common/CloudShape';
import CloudShapeTwo from '@/components/common/CloudShapeTwo';
import CloudShapeThree from '@/components/common/CloudShapeThree';
import FadeInUp from '@/components/common/FadeInUp';
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren';
import RevealText from '@/components/animations/RevealText';

const caseStudies = [
  {
    title: "不動産会社A社",
    result: "運用開始から約半年間で10件のモデル来場予約を獲得",
    industry: "不動産業界",
    challenges: [
      "チラシやDMを配布しているが効果が薄い",
      "資料請求はあるが来場まで繋がらない", 
      "担当者が忙しくて新たな施策が打てない"
    ],
    improvements: [
      "HPの平均セッション数/月が200％以上UP",
      "ブログから資料請求/来場予約の導線を確保",
      "自社で最小工数でブログ運用可能に"
    ]
  },
  {
    title: "ECサイト運営B社",
    result: "SEO記事経由での売上が3ヶ月で150%向上",
    industry: "Eコマース",
    challenges: [
      "広告費が高騰しROASが悪化",
      "オーガニック検索での流入が少ない",
      "記事作成に多くの時間とコストがかかる"
    ],
    improvements: [
      "オーガニック検索流入が月間300%増加",
      "商品関連キーワードでの上位表示を多数達成",
      "記事作成時間を90%短縮、品質は向上"
    ]
  },
  {
    title: "IT企業C社",
    result: "リード獲得数が6ヶ月で250%増加し受注単価も向上",
    industry: "IT・SaaS",
    challenges: [
      "技術的な内容の記事作成が困難",
      "競合他社との差別化ができていない",
      "見込み客へのリーチが限定的"
    ],
    improvements: [
      "専門性の高い記事で業界での認知度向上",
      "問い合わせ質の向上と商談化率アップ",
      "検索上位表示により継続的な集客を実現"
    ]
  }
];

export default function CaseStudySection() {
  return (
    <section className="relative overflow-hidden bg-primary-beige py-32">
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <RevealText 
            text="導入事例" 
            className="text-5xl lg:text-6xl font-bold text-primary-dark mb-4"
            delay={0.2}
          />
          <div className="w-16 h-1 bg-primary-orange mx-auto mb-8"></div>
          <FadeInUp delay={0.6}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              様々な業界のお客様にSEO Tigerをご活用いただき、<br />
              確かな成果を上げています
            </p>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <StaggerChildren key={index} delay={0.8 + index * 0.2} className="h-full">
              <StaggerItem direction="up" className="h-full">
                
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
                  
                  {/* Image */}
                  <div className="h-48 bg-gray-100 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-3xl mb-2">🏢</div>
                      <div className="text-sm">企業画像</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    
                    {/* Header */}
                    <div className="mb-6">
                      <span className="inline-block bg-primary-green/10 text-primary-green px-3 py-1 rounded-full text-xs font-medium mb-3">
                        {study.industry}
                      </span>
                      <h3 className="text-xl font-bold text-primary-dark mb-2">{study.title}</h3>
                    </div>

                    {/* Result Highlight */}
                    <div className="bg-primary-green/5 rounded-lg p-4 mb-6">
                      <div className="text-primary-green text-sm font-semibold mb-2">導入成果</div>
                      <div className="text-primary-dark font-bold text-base leading-tight">{study.result}</div>
                    </div>

                    {/* Before/After Summary */}
                    <div className="space-y-6 flex-grow">
                      
                      {/* Challenges */}
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                            <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></div>
                          </div>
                          <h4 className="text-base font-bold text-primary-dark">課題</h4>
                        </div>
                        <ul className="space-y-3 ml-9">
                          {study.challenges.slice(0, 2).map((challenge, challengeIndex) => (
                            <li key={challengeIndex} className="text-gray-700 text-sm leading-relaxed">
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Improvements */}
                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                          </div>
                          <h4 className="text-base font-bold text-primary-dark">改善</h4>
                        </div>
                        <ul className="space-y-3 ml-9">
                          {study.improvements.slice(0, 2).map((improvement, improvementIndex) => (
                            <li key={improvementIndex} className="text-gray-700 text-sm leading-relaxed">
                              {improvement}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                  </div>

                </div>

              </StaggerItem>
            </StaggerChildren>
          ))}
        </div>

        <FadeInUp delay={1.8} className="text-center mt-16">
          <button className="bg-primary-green text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-primary-green/90 transition-colors shadow-lg">
            無料で始める
          </button>
        </FadeInUp>

      </div>
    </section>
  );
}