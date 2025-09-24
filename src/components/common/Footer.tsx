export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-8">会社情報</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <dt className="text-gray-300 text-sm mb-1">会社名</dt>
                  <dd className="text-white">株式会社新大陸</dd>
                </div>
                
                <div>
                  <dt className="text-gray-300 text-sm mb-1">設立</dt>
                  <dd className="text-white">1989年04月</dd>
                </div>
                
                <div>
                  <dt className="text-gray-300 text-sm mb-1">資本金</dt>
                  <dd className="text-white">1,000万円</dd>
                </div>
                
                <div>
                  <dt className="text-gray-300 text-sm mb-1">代表者</dt>
                  <dd className="text-white">代表取締役 鈴木 宏佳</dd>
                </div>
                
                <div>
                  <dt className="text-gray-300 text-sm mb-1">スタッフ数</dt>
                  <dd className="text-white">50名</dd>
                </div>
                
                <div>
                  <dt className="text-gray-300 text-sm mb-1">売上高</dt>
                  <dd className="text-white">9億円 / グループ売上高 12億円（2024年度実績）</dd>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <dt className="text-gray-300 text-sm mb-3">運営事業</dt>
                  <dd className="text-white space-y-1">
                    <div>・Webマーケティング事業</div>
                    <div>・SNS運用サービス</div>
                    <div>・ホームページ制作</div>
                    <div>・インターネット広告の戦略的運用</div>
                    <div>・マーケティングAIエージェント開発</div>
                  </dd>
                </div>
                
                <div>
                  <dt className="text-gray-300 text-sm mb-3">グループ会社</dt>
                  <dd className="text-white space-y-1">
                    <div>ワビサビ株式会社</div>
                    <div>Off Beat株式会社</div>
                    <div>株式会社＋1℃</div>
                  </dd>
                </div>
              </div>
            </div>
          </div>
          
          {/* SEO Tiger Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary-orange mb-6">SEO Tiger</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              AIが自動生成する高品質なSEO記事で、<br />
              あなたのWebマーケティングを<br />
              次のレベルへ。
            </p>
            
            <div className="space-y-3">
              <button className="w-full bg-primary-green text-white py-3 px-6 font-semibold hover:bg-primary-green/90 transition-colors">
                無料で始める
              </button>
              <button className="w-full border border-white text-white py-3 px-6 font-semibold hover:bg-white hover:text-primary-dark transition-colors">
                お問い合わせ
              </button>
            </div>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-600 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 株式会社新大陸. All rights reserved.
          </p>
        </div>
        
      </div>
    </footer>
  );
}