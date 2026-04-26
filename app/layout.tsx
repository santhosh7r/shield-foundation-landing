import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Shield Foundation - Social Impact',
  description: 'Shield Foundation - Rehabilitation, Healthcare, Care Homes & Community Upliftment. Structured care network delivering compassionate services.',
  metadataBase: new URL('https://www.shieldfoundations.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Shield Foundation - Social Impact',
    description: 'Shield Foundation - Rehabilitation, Healthcare, Care Homes & Community Upliftment.',
    url: 'https://www.shieldfoundations.com',
    siteName: 'Shield Foundation',
    images: [
      {
        url: '/logo1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Shield Foundation Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': 'Shield Foundation',
              'url': 'https://www.shieldfoundations.com',
              'logo': 'https://www.shieldfoundations.com/logo1.jpeg',
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
