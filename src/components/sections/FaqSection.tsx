'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "SEO Tigerの料金プランはどのようになっていますか？",
    answer: "SEO Tigerは月額制のサービスで、スタンダードプラン（月額9,800円）とプレミアムプラン（月額19,800円）をご用意しています。スタンダードプランでは月10記事まで、プレミアムプランでは月30記事まで生成可能です。初回30日間は無料でお試しいただけます。"
  },
  {
    question: "生成される記事の品質はどの程度ですか？",
    answer: "SEO Tigerは最新のAI技術を使用し、SEOに最適化された高品質な記事を生成します。生成された記事は検索上位表示を狙える構造になっており、実際に多くのお客様が検索順位の向上を実現されています。ただし、生成後の校正・編集をお勧めしています。"
  },
  {
    question: "どのような業界・ジャンルに対応していますか？",
    answer: "SEO TigerはBtoB、BtoC問わず幅広い業界に対応しています。IT、不動産、医療、教育、美容、飲食など様々な分野での記事生成が可能です。専門性の高い分野については、事前にキーワードや業界情報を詳しく設定していただくことで、より精度の高い記事を生成できます。"
  },
  {
    question: "記事生成にはどのくらい時間がかかりますか？",
    answer: "1記事あたりの生成時間は約2〜3分です。キーワードを入力してから、構成案の作成、本文の生成、画像の選定まで全自動で行われます。従来の手動での記事作成と比較して、約90%の時間短縮を実現できます。"
  },
  {
    question: "生成した記事の著作権はどうなりますか？",
    answer: "SEO Tigerで生成された記事の著作権は、お客様に帰属します。生成された記事は自由に編集・公開・商用利用していただけます。ただし、他社の商標権や著作権を侵害する内容が含まれる場合は、お客様の責任において修正をお願いします。"
  },
  {
    question: "サポート体制について教えてください",
    answer: "専属のカスタマーサポートチームが、平日9:00〜18:00でお客様をサポートします。チャット、メール、電話でのお問い合わせに対応しており、操作方法から効果的な活用方法まで丁寧にご案内します。また、定期的にオンラインセミナーも開催しています。"
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark">
            よくあるご質問
          </h2>
        </div>

        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border-b border-gray-200">
              
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-primary-green text-lg font-bold flex-shrink-0 mt-1">
                    Q
                  </span>
                  <span className="text-primary-dark font-medium">
                    {faq.question}
                  </span>
                </div>
                
                <div className="flex-shrink-0 ml-4">
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-8">
                  <div className="flex items-start space-x-4 pt-2">
                    <span className="text-primary-orange text-lg font-bold flex-shrink-0">
                      A
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}