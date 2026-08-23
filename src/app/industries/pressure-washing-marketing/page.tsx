import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/ui/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Pressure Washing Marketing — More Power Washing Leads | The Farm Media',
  description: 'Marketing for pressure washing and exterior cleaning companies. High-volume lead generation, local SEO, and Google Ads that fill your schedule with residential and commercial cleaning jobs.',
  alternates: { canonical: 'https://marketwiththefarm.com/industries/pressure-washing-marketing' },
}

const data = {
  emoji: '💧',
  title: 'Pressure Washing Marketing',
  tagline: 'More Cleaning Jobs.|Less Guesswork.',
  heroDesc: 'Pressure washing is one of the most marketable home services because the results are immediately visible and the before/after photos speak for themselves. We build marketing systems that generate high-volume leads at a low cost per lead.',
  whyMatters: 'Pressure washing companies often grow fast with good marketing because the service is visual, affordable, and easy to upsell. The challenge is finding enough homeowners and commercial clients consistently. Our campaigns target both residential and commercial prospects, and we use your best before/after photos as the core of your marketing creative.',
  topKeywords: [
    'pressure washing near me', 'power washing [city]', 'house washing [city]',
    'driveway cleaning near me', 'deck cleaning [city]', 'commercial pressure washing [city]',
    'soft washing near me', 'roof cleaning [city]', 'concrete cleaning [city]',
  ],
  strategies: [
    { title: 'Before/After Photo Campaigns', desc: 'Your results are your best marketing. We build ad campaigns around your best transformation photos to generate high-converting leads on Facebook and Google.' },
    { title: 'Neighborhood Targeting', desc: 'Facebook ads targeted at homeowners by ZIP code and home value — generating door-to-door-level targeting without the door-to-door cost.' },
    { title: 'Package & Bundle Promotions', desc: 'Promoting house + driveway + deck bundle packages that increase average ticket and close rate.' },
    { title: 'Commercial Account Development', desc: 'Separate campaigns targeting property managers, HOAs, restaurants, and commercial properties for recurring contracts.' },
    { title: 'Google Maps Optimization', desc: 'Ranking in the local map pack for "pressure washing near me" and related searches — the highest-converting local queries.' },
    { title: 'Low Cost-Per-Lead Campaigns', desc: 'Pressure washing typically achieves the lowest CPL of any trade we work with. We optimize aggressively to keep your lead cost under control.' },
  ],
  websiteNeeds: [
    'Before/after gallery front and center', 'Pricing or package information visible',
    'Service pages (house washing, driveway, deck, roof, etc.)', 'Online booking or instant quote form',
    'Google reviews prominently displayed', 'City/service area pages',
    'Commercial services separate from residential', 'Mobile-first click-to-call',
  ],
  cta: 'Ready to fill your power washing schedule with consistent leads?',
}

export default function PressureWashingPage() {
  return <IndustryPageTemplate data={data} slug="pressure-washing" />
}
