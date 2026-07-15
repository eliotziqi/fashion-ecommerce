import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '时尚女装 - 您的专属衣橱',
  description: '精选时尚女装，打造您的专属风格',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}


