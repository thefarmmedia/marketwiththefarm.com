import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'The Farm Media — Contractor Marketing That Generates Customers',
    template: '%s | The Farm Media',
  },
  description: 'The Farm Media builds customer acquisition systems for contractors and local service businesses — websites, SEO, Google Ads, automation, and reputation management working together to fill your schedule.',
  metadataBase: new URL('https://marketwiththefarm.com'),
  openGraph: {
    type: 'website',
    siteName: 'The Farm Media',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="icon" type="image/png" href="/images/logo-orange.png" />
        {/* Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'The Farm Media',
              url: 'https://marketwiththefarm.com',
              logo: 'https://marketwiththefarm.com/images/logo-orange.png',
              description: 'Customer acquisition systems for contractors and local service businesses.',
              telephone: '+1-417-365-5383',
              email: 'stephen@thefarmmedia.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Springfield',
                addressRegion: 'MO',
                addressCountry: 'US',
              },
              areaServed: {
                '@type': 'State',
                name: 'Missouri',
              },
              sameAs: [
                'https://facebook.com/thefarmmedia',
                'https://instagram.com/thefarmmedia',
                'https://linkedin.com/company/thefarmmedia',
              ],
              serviceType: [
                'Web Design',
                'Local SEO',
                'Google Ads Management',
                'Facebook Ads Management',
                'CRM Setup',
                'Reputation Management',
              ],
            }),
          }}
        />
      </head>
      <body className="grain bg-[#0A0A0A] text-white antialiased relative">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#FF5F00] text-white px-4 py-2 rounded-md z-[100] font-medium">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
