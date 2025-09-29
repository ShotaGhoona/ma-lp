import Image from 'next/image';
import GridBackground from '@/components/common/GridBackground';
import CloudShape from '@/components/common/CloudShape';
import CloudShapeTwo from '@/components/common/CloudShapeTwo';
import CloudShapeThree from '@/components/common/CloudShapeThree';

export default function ProblemSection() {
  return (
    <section className="py-32 bg-primary-beige relative overflow-hidden">
      <GridBackground />
      
      {/* Cloud background elements */}
      <CloudShape 
        variant="beige" 
        className="top-16 right-0 opacity-20" 
      />
      <CloudShapeTwo 
        variant="green"
        className="top-1/3 left-0 opacity-35" 
      />
      <CloudShapeThree 
        variant="orange"
        className="bottom-20 right-1/4 opacity-45" 
      />
      
      {/* Additional clouds for richer background */}
      <CloudShape 
        variant="light"
        className="top-5 left-1/4 opacity-30" 
      />
      <CloudShapeTwo 
        variant="orange"
        className="bottom-1/3 left-20 opacity-25" 
      />
      <CloudShapeThree 
        variant="dark"
        className="top-1/2 right-10 opacity-35" 
      />
      <CloudShape 
        variant="orange" 
        className="bottom-5 right-1/2 opacity-20" 
      />
      <CloudShapeTwo 
        variant="beige"
        className="top-2/3 left-5 opacity-45" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24">
          <p className="text-gray-600 text-sm mb-4">集客力UPが課題の社長様・ご担当者様へ</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-8 leading-tight">
            SEO対策でホームページへの流入を増やしたいけれど・・・
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="text-center">
            <div className="mb-8 h-40 flex items-center justify-center">
              <Image
                src="/problem-1.svg"
                alt="SEOに強い記事の書き方がわからない"
                width={200}
                height={150}
                className="max-h-full w-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-primary-dark mb-4">
              SEOに強い記事の書き方がわからない
            </h3>
            <p className="text-gray-700 text-sm mb-4">検索しても上位に表示されない</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              記事を書いてみたものの、上位表示されない。どうやったら上位表示できるかもあまりわからない。
            </p>
          </div>

          <div className="text-center">
            <div className="mb-8 h-40 flex items-center justify-center">
              <Image
                src="/problem-2.svg"
                alt="分析・改善ができない"
                width={200}
                height={150}
                className="max-h-full w-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-primary-dark mb-4">
              分析・改善ができない
            </h3>
            <p className="text-gray-700 text-sm mb-4">効果測定の方法がわからない</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              どこが原因で何を改善すればアクセスが増えるのかわからない。データはあっても活用方法が不明。
            </p>
          </div>

          <div className="text-center">
            <div className="mb-8 h-40 flex items-center justify-center">
              <Image
                src="/problem-3.svg"
                alt="記事を書く時間も人手も足りない"
                width={200}
                height={150}
                className="max-h-full w-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-primary-dark mb-4">
              記事を書く時間も人手も足りない
            </h3>
            <p className="text-gray-700 text-sm mb-4">リソース不足で継続が困難</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              担当者不在で現場仕事も忙しく、必要とわかっていても書く時間もない。
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}