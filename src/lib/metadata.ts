import type { Metadata } from 'next'

const siteUrl = 'https://marketwiththefarm.com'
const siteName = 'The Farm Media'
const defaultDescription = 'The Farm Media builds customer acquisition systems for contractors and local service businesses — websites, SEO, Google Ads, automation, and reputation management that work together to generate more calls, leads, and booked jobs.'

export function buildMetadata({
  title,
  description = defaultDescription,
  path = '',
  noIndex = false,
}: {
  title: string
  description?: string
  path?: string
  noIndex?: boolean
}): Metadata {
  const url = `${siteUrl}${path}`
  const fullTitle = path === '' ? title : `${title} | The Farm Media`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/logo-orange.png`,
          width: 1254,
          height: 1254,
          alt: `${siteName} — Contractor Marketing That Generates Customers`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${siteUrl}/images/logo-orange.png`],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  }
}

export const defaultMetadata: Metadata = buildMetadata({
  title: 'The Farm Media — Contractor Marketing That Generates Customers',
  description: defaultDescription,
})
