import type { Metadata } from 'next'
import { Inter, Barlow_Condensed } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elevate Trade — B2B Procurement Excellence',
  description: 'We source, negotiate, and manage discounts with manufacturers to deliver faster lead times and better terms. Your strategic bridge to global markets.',
  keywords: 'procurement, B2B, global sourcing, manufacturer, supply chain, China sourcing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  )
}
