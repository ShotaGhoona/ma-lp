import GridBackground from '@/components/common/GridBackground';
import CloudShape from '@/components/common/CloudShape';
import CloudShapeTwo from '@/components/common/CloudShapeTwo';
import CloudShapeThree from '@/components/common/CloudShapeThree';

const flowSteps = [
  {
    step: "01",
    title: "無料ではじめる",
    description: "まずは無料ではじめるをクリック。簡単な登録で、すぐにSEO Tigerの機能をお試しいただけます。",
    image: "/flow-step-1.svg"
  },
  {
    step: "02", 
    title: "ログインパスワード入力画像",
    description: "ログインID・パスワードを設定。安全で使いやすいアカウントを作成し、パーソナライズされた体験を開始します。",
    image: "/flow-step-2.svg"
  },
  {
    step: "03",
    title: "新規記事作成画像",
    description: "新規記事作成をクリックし、狙いたいキーワードで記事生成をしてみましょう。AIが自動でSEOに最適化された高品質な記事を作成します。",
    image: "/flow-step-3.svg"
  }
];

export default function FlowSection() {
  return (
    <section className="relative overflow-hidden bg-primary-beige py-32">
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary-dark mb-8">
            ご利用の流れ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            わずか3ステップで高品質なSEO記事が完成
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {flowSteps.map((step, index) => (
            <div key={index} className="relative">
              
              {/* Step Number - Top Left */}
              <div className="text-left mb-8">
                <div className="text-primary-green text-sm font-bold tracking-wider mb-1">STEP</div>
                <div className="text-primary-green text-5xl font-bold leading-none">{step.step}</div>
                <div className="w-12 h-1 bg-primary-orange mt-2"></div>
              </div>

              {/* Illustration Area */}
              <div className="mb-8 h-64 flex items-center justify-center">
                <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🎨</div>
                    <div className="text-sm">イラスト画像</div>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-primary-green mb-4 text-center">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-sm text-center">
                {step.description}
              </p>

            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-primary-green text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-primary-green/90 transition-colors shadow-lg">
            無料で始める
          </button>
        </div>

      </div>
    </section>
  );
}