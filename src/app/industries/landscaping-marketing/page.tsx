import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/ui/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Landscaping Marketing — More Lawn Care & Landscape Leads | The Farm Media',
  description: 'Marketing for landscaping and lawn care companies. We generate maintenance accounts, hardscape project leads, and irrigation jobs through local SEO and Google Ads.',
  alternates: { canonical: 'https://marketwiththefarm.com/industries/landscaping-marketing' },
}

const data = {
  emoji: '🌿',
  title: 'Landscaping Marketing',
  tagline: 'More Landscape Jobs.|Year After Year.',
  heroDesc: 'Landscaping and lawn care businesses need both recurring maintenance accounts and high-value project leads. We build marketing that generates both — filling your mowing schedule and your design/build calendar at the same time.',
  whyMatters: 'The landscaping business model is unique: recurring maintenance revenue provides a predictable baseline, while design/build projects (patios, retaining walls, outdoor kitchens) drive the highest margins. Smart marketing generates both — targeting homeowners who want weekly lawn service and homeowners ready to invest in their outdoor space.',
  topKeywords: [
    'landscaping company near me', 'lawn care service [city]', 'landscape design [city]',
    'lawn mowing service [city]', 'patio installation [city]', 'retaining wall contractor [city]',
    'irrigation installation [city]', 'tree trimming [city]', 'sod installation [city]',
  ],
  strategies: [
    { title: 'Maintenance Account Lead Generation', desc: 'Campaigns targeted at homeowners who want recurring lawn care service — the recurring revenue that makes your business predictable.' },
    { title: 'Design/Build Project Campaigns', desc: 'Separate targeting for high-value hardscape, outdoor living, and landscape installation projects.' },
    { title: 'Seasonal Timing Strategy', desc: 'Spring pre-season campaigns, fall cleanup promotions, and winter planning content that generates leads before your competitors are even advertising.' },
    { title: 'Project Photo Portfolio', desc: 'A strategy for consistently publishing your best work in a way that generates interest and drives inquiries from homeowners who want something similar.' },
    { title: 'Neighborhood Targeting', desc: 'Facebook and Instagram ads targeted by neighborhood and home value — reaching the homeowners most likely to invest in professional landscaping.' },
    { title: 'Google Business Profile Optimization', desc: 'Fully optimized with photos updated weekly, seasonal services listed, and review generation that builds your local ranking.' },
  ],
  websiteNeeds: [
    'High-quality project photography prominently displayed', 'Separate pages for maintenance vs. design/build',
    'Online quote request for maintenance services', 'Before/after transformation gallery',
    'Service area map or city list', 'Seasonal offer promotions',
    'Google reviews on homepage', 'Video walkthrough of completed projects',
  ],
  cta: 'Ready to grow your landscaping business with marketing that gets results?',
}

export default function LandscapingPage() {
  return <IndustryPageTemplate data={data} slug="landscaping" />
}
