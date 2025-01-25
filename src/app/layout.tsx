import { getSEOTags } from '@/lib/seo'
import { AuthProvider } from '@/providers/AuthProvider'
import { GtagProvider } from '@/providers/GtagProvider'
import ReactQueryProviders from '@/providers/useReactQueryProvider'
import Scripts from '@/shared/components/analytics/GoogleAnalytics'
import { Header } from '@/shared/components/header'
import { ThemeProvider } from '@/shared/components/theme/theme-provider'
import './globals.css'
import { spoqa } from './nextFont'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}
// 앱의 모든 페이지에 기본 SEO 태그가 추가됩니다.
// getSOTags() 함수에 매개변수를 전달하여 각 페이지에서 이를 재정의할 수 있습니다.
export const metadata = getSEOTags()

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <Scripts />

      <body className={spoqa.className}>
        <main>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
            storageKey='theme-preference' // 테마 설정을 저장할 키 추가
            enableColorScheme={false} // color-scheme 스타일 비활성화
          >
            <ReactQueryProviders>
              <AuthProvider>
                <GtagProvider>
                  <Header />
                  {children}
                </GtagProvider>
              </AuthProvider>
            </ReactQueryProviders>
          </ThemeProvider>
        </main>
      </body>
    </html>
  )
}
