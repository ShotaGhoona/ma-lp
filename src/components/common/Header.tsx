'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        // 上部近くでは常に表示
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // 下スクロール: 隠す
        setIsVisible(false);
      } else {
        // 上スクロール: 表示
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 w-full bg-primary-dark z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-white text-lg font-medium">
              新大陸
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-white border border-dashed border-white font-bold px-6 py-2 rounded-lg hover:bg-white hover:text-primary-dark transition-colors text-sm">
              ログイン
            </button>
            <button className="bg-primary-green text-white font-bold px-12 py-2 rounded-lg hover:bg-primary-green/90 transition-colors text-sm">
              無料で始める
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}