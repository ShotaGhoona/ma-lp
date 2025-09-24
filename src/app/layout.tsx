import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEO Tiger | AI自動SEO記事生成ツール",
  description: "キーワードを入力するだけで、AIが検索上位表示を狙えるSEO最適化された記事を数分で自動作成。チャットベースの編集機能で簡単カスタマイズ。無料でお試しいただけます。",
  keywords: "SEO, AI, 記事生成, コンテンツ作成, SEO対策, AIO, 検索エンジン最適化, 自動生成, 新大陸",
  authors: [{ name: "新大陸" }],
  creator: "新大陸",
  publisher: "新大陸",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://seo-tiger.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SEO Tiger | AI自動SEO記事生成ツール",
    description: "キーワードを入力するだけで、AIが検索上位表示を狙えるSEO最適化された記事を数分で自動作成。",
    url: 'https://seo-tiger.com',
    siteName: 'SEO Tiger',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SEO Tiger - AI自動SEO記事生成ツール',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Tiger | AI自動SEO記事生成ツール",
    description: "キーワードを入力するだけで、AIが検索上位表示を狙えるSEO最適化された記事を数分で自動作成。",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary-beige`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
