export default function Header() {
  return (
    <header className="w-full bg-primary-dark z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-white text-lg font-medium">
              新大陸
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-white border border-dashed border-white font-bold px-6 py-2 rounded-full hover:bg-white hover:text-primary-dark transition-colors text-sm">
              ログイン
            </button>
            <button className="bg-primary-green text-white font-bold px-12 py-2 rounded-full hover:bg-primary-green/90 transition-colors text-sm">
              無料で始める
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}