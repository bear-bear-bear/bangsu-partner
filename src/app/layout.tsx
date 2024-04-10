import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import './reset.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '25년 경력의 방수 시공 전문업체, 엘코엘시즈',
  description:
    '엘코엘시즈는 무료 방문 견적을 원칙으로 합니다. 옥상 우레탄 바닥 방수, 외벽 방수, 곰팡이 결로 제거 및 리페인팅으로 건물의 쾌적한 환경을 약속합니다.',
  icons: [{ rel: 'icon', url: '/symbol.svg' }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
