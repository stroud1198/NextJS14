import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ weight:"400", subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My app main title',
  description: 'My app description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
