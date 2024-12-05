import '../globals.css'
import { spoqa } from '../nextFont'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_BASE_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: '문제가 발생했습니다',
  description: '',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ko'>
      <body className={spoqa.className}>{children}</body>
    </html>
  )
}
