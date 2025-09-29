import GridBackground from '@/components/common/GridBackground';
import CloudShape from '@/components/common/CloudShape';
import CloudShapeTwo from '@/components/common/CloudShapeTwo';
import CloudShapeThree from '@/components/common/CloudShapeThree';

const pricingPlans = [
  {
    name: "シンプルプラン",
    price: "¥4,980",
    period: "/月",
    description: "個人・小規模サイト向け",
    features: [
      "月5記事まで生成",
      "基本的なSEO最適化",
      "メールサポート",
      "記事テンプレート利用"
    ],
    buttonText: "シンプルプランを始める",
    isPopular: false,
    color: "gray"
  },
  {
    name: "スタンダードプラン", 
    price: "¥9,800",
    period: "/月",
    description: "中小企業・ブログ運営者向け",
    features: [
      "月20記事まで生成",
      "高度なSEO最適化",
      "画像自動生成",
      "チャットサポート",
      "分析レポート機能",
      "カスタムテンプレート"
    ],
    buttonText: "スタンダードプランを始める",
    isPopular: true,
    color: "green"
  },
  {
    name: "プレミアムプラン",
    price: "¥19,800", 
    period: "/月",
    description: "企業・代理店向け",
    features: [
      "月50記事まで生成",
      "プレミアムSEO最適化",
      "高品質画像生成",
      "優先サポート",
      "詳細分析ダッシュボード",
      "API連携",
      "専用アカウントマネージャー"
    ],
    buttonText: "プレミアムプランを始める",
    isPopular: false,
    color: "orange"
  }
];

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-primary-beige py-32">
      <GridBackground />
      
      {/* Cloud background elements */}
      <CloudShape 
        variant="beige" 
        className="top-0 left-0 opacity-20" 
      />
      <CloudShapeTwo 
        variant="orange"
        className="top-1/4 right-10 opacity-35" 
      />
      <CloudShapeThree 
        variant="dark"
        className="bottom-10 left-1/3 opacity-40" 
      />
      <CloudShape 
        variant="light" 
        className="bottom-0 right-0 opacity-30" 
      />
      
      {/* Additional clouds for richer background */}
      <CloudShapeTwo 
        variant="green"
        className="top-1/2 left-10 opacity-40" 
      />
      <CloudShapeThree 
        variant="light"
        className="bottom-1/3 right-20 opacity-25" 
      />
      <CloudShape 
        variant="orange" 
        className="top-3/4 left-1/3 opacity-35" 
      />
      <CloudShapeTwo 
        variant="beige"
        className="bottom-10 left-5 opacity-50" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary-dark mb-4">
            料金プラン
          </h2>
          <div className="w-16 h-1 bg-primary-orange mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            あなたのニーズに合わせた柔軟な料金体系をご用意しています<br />
            全プラン30日間無料でお試しいただけます
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`relative ${plan.isPopular ? 'transform lg:scale-105' : ''}`}>
              
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary-orange text-white px-4 py-1 rounded-full text-xs font-bold">
                    人気
                  </div>
                </div>
              )}

              <div className={`bg-white rounded-2xl overflow-hidden h-full flex flex-col ${plan.isPopular ? 'shadow-xl border-2 border-primary-green' : 'shadow-lg border border-gray-200'}`}>
                
                {/* Header */}
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary-dark mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className={`text-5xl font-bold ${plan.isPopular ? 'text-primary-green' : 'text-primary-dark'}`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-600 text-lg ml-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-8 pt-0 flex-grow flex flex-col">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 ${plan.isPopular ? 'bg-primary-green' : 'bg-gray-400'}`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button - Always at bottom */}
                  <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors ${
                    plan.isPopular 
                      ? 'bg-primary-green text-white hover:bg-primary-green/90' 
                      : 'bg-gray-100 text-primary-dark hover:bg-gray-200 border border-gray-300'
                  }`}>
                    {plan.buttonText}
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            全プラン共通特典
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-700">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              30日間無料トライアル
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              いつでもプラン変更可能
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              解約手数料なし
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}