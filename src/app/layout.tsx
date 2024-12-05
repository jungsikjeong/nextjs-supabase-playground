import type { Metadata } from 'next';

import { AuthProvider } from '@/providers/auth-provider';
import '../globals.css';
import { spoqa } from './nextFont';

export const metadata: Metadata = {
  title: '마음 톡톡 ',
  description: '당신의 따뜻한 마음을 전하세요. 특별한 순간을 더 특별하게',
  openGraph: {
    title: '마음을 톡톡 두드려요',
    description: '당신의 따뜻한 마음을 전하세요',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={spoqa.className}>
        <AuthProvider>{children}</AuthProvider> *
      </body>
    </html>
  );
}
