import type { Metadata } from 'next'
import CaseStudyPage from '@/components/CaseStudyPage'

export const metadata: Metadata = {
  title: 'Twin Lakes Epoxy Case Study — The Farm Media',
  description: 'How The Farm Media built a complete digital presence for Twin Lakes Epoxy from scratch — website, SEO, and paid ads generating steady leads.',
  alternates: { canonical: 'https://marketwiththefarm.com/case-studies/twin-lakes-epoxy' },
}

export default function TwinLakesCase() {
  return (
    <CaseStudyPage data={{
      client: 'Twin Lakes Epoxy',
      url: 'twinlakesepoxy.com',
      industry: 'Concrete Coatings',
      location: 'Missouri',
      tagline: 'Built from zero to fully operational digital lead system.',
      services: ['Web Design', 'Local SEO', 'Google Ads', 'CRM Setup', 'Call Tracking'],
      results: [
        { label: 'Start Point', value: 'Zero', sub: 'No digital presence' },
        { label: 'Website', value: 'Built', sub: 'Conversion-optimized' },
        { label: 'SEO', value: 'Ranking', sub: 'Target keywords' },
        { label: 'Leads', value: 'Flowing', sub: 'Consistent inbound' },
      ],
      challenge: [
        'Twin Lakes Epoxy had zero digital footprint — no website, no Google listing, no reviews.',
        'Getting by entirely on word-of-mouth in a market where competitors were running Google Ads.',
        'No way to scale beyond what referrals could provide, creating a ceiling on growth.',
        'No tracking in place to understand which marketing efforts were working.',
      ],
      solution: [
        'Built a complete website from scratch with conversion-optimized layout, fast load times, and clear CTAs.',
        'Created and verified their Google Business Profile, optimizing every field for local ranking.',
        'Launched Google Ads campaigns targeting epoxy and garage floor keywords in their service area.',
        'Implemented full call tracking so every lead source is attributed correctly.',
        'Set up CRM integration so every lead flows into one organized pipeline automatically.',
      ],
      quote: {
        text: 'We started with absolutely nothing online. The Farm built the whole thing and now we have a real business with a real pipeline of leads.',
        author: 'Twin Lakes Epoxy',
      },
    }} />
  )
}
