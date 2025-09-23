export default function Header() {
  return (
    <header className="w-full bg-primary-beige border-b border-primary-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-primary-dark text-xl font-bold">
              ロゴ
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-primary-dark hover:text-primary-orange transition-colors">
              サービス
            </a>
            <a href="#" className="text-primary-dark hover:text-primary-orange transition-colors">
              事例
            </a>
            <a href="#" className="text-primary-dark hover:text-primary-orange transition-colors">
              料金
            </a>
            <a href="#" className="text-primary-dark hover:text-primary-orange transition-colors">
              会社概要
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="bg-primary-orange text-white px-6 py-2 rounded-lg hover:bg-primary-orange/90 transition-colors">
              お問い合わせ
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}