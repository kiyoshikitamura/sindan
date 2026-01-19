import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google"; // 修正: 次の行で使用するためimportを変更
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold
});

export const metadata: Metadata = {
  title: "夜職適性診断 ♡ 地雷・量産系",
  description: "あなたにぴったりの夜職を見つけます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
