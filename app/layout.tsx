import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rameshwaram Cafe — South Indian Soul',
  description: 'Tradition on a plate. Memories in every bite. Authentic South Indian cuisine in Bengaluru.',
  icons: {
    icon: '/images/app-logo.png',
    apple: '/images/app-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-black text-cream font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
