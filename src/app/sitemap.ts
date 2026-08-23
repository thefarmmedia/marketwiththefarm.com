import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const baseUrl = 'https://marketwiththefarm.com'

const pages = [
  { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/services/web-design', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/services/seo', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/services/google-ads', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/services/facebook-ads', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/services/crm-automation', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/services/reputation-management', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/industries', priority: 0.9, changeFrequency: 'monthly' as const },
  { url: '/industries/concrete-coating-marketing', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/industries/hvac-marketing', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/industries/roofing-marketing', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/industries/plumber-marketing', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/industries/electrician-marketing', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/industries/landscaping-marketing', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/industries/pressure-washing-marketing', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/industries/garage-door-marketing', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/industries/painter-marketing', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/industries/general-contractor-marketing', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/case-studies', priority: 0.8, changeFrequency: 'weekly' as const },
  { url: '/resources', priority: 0.7, changeFrequency: 'weekly' as const },
  { url: '/springfield-mo', priority: 0.8, changeFrequency: 'monthly' as const },
  { url: '/tools/marketing-scorecard', priority: 0.7, changeFrequency: 'monthly' as const },
  { url: '/tools/roi-calculator', priority: 0.7, changeFrequency: 'monthly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
