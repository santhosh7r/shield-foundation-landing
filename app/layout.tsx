import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Shield Foundation - Social Impact',
  description: 'Shield Foundation - Rehabilitation, Healthcare, Care Homes & Community Upliftment. Structured care network delivering compassionate services.',
  icons: {
    icon: '/logo1.jpeg',
    apple: '/logo1.jpeg',
  },
  openGraph: {
    title: 'Shield Foundation - Social Impact',
    description: 'Shield Foundation - Rehabilitation, Healthcare, Care Homes & Community Upliftment.',
    images: [
      {
        url: '/logo1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Shield Foundation Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shield Foundation - Social Impact',
    description: 'Shield Foundation - Rehabilitation, Healthcare, Care Homes & Community Upliftment.',
    images: ['/logo1.jpeg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
