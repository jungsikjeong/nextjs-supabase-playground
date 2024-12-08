import type { Metadata } from 'next'
import { AuthProvider } from '@/providers/AuthProvider'
import './globals.css'
import { spoqa } from './nextFont'
import config from '@/config'
import { getSEOTags } from '@/lib/seo'
import Scripts from '@/shared/components/analytics/GoogleAnalytics'
import { Header } from '@/shared/components/header'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}
// 앱의 모든 페이지에 기본 SEO 태그가 추가됩니다.
// getSOTags() 함수에 매개변수를 전달하여 각 페이지에서 이를 재정의할 수 있습니다.
export const metadata = getSEOTags()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <Scripts />

      <body className={spoqa.className}>
        <main>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </main>
      </body>
    </html>
  )
}
