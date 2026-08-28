import type { Metadata } from 'next'
import CaseStudyPage from '@/components/CaseStudyPage'

export const metadata: Metadata = {
  title: 'Show Me Epoxy Case Study — The Farm Media',
  description: 'How The Farm Media built a lead generation system for Show Me Epoxy that delivers consistent qualified leads in the Missouri market.',
  alternates: { canonical: 'https://marketwiththefarm.com/case-studies/show-me-epoxy' },
}

export default function ShowMeEpoxyCase() {
  return (
    <CaseStudyPage data={{
      client: 'Show Me Epoxy',
      url: 'showmeepoxy.com',
      industry: 'Concrete Coatings',
      location: 'Missouri',
      tagline: 'From referral-dependent to a consistent digital lead machine.',
      services: ['Web Design', 'Local SEO', 'Google Ads', 'CRM Automation', 'Review Generation'],
      results: [
        { label: 'Lead Source', value: 'Digital', sub: 'No longer referral-only' },
        { label: 'Google Maps', value: 'Ranking', sub: 'Top positions in market' },
        { label: 'Follow-Up', value: '60 sec', sub: 'Automated SMS response' },
        { label: 'Reviews', value: 'Growing', sub: 'Automated after every job' },
      ],
      challenge: [
        'Business was entirely dependent on word-of-mouth referrals with no predictable lead flow.',
        'No website, no Google presence, and no way for homeowners searching online to find them.',
        'Competitors with inferior work were winning jobs simply because they showed up on Google first.',
        'No system to follow up with leads quickly — hot prospects were going cold.',
      ],
      solution: [
        'Built a fast, mobile-first website engineered to convert visitors into phone calls and form submissions.',
        'Optimized the Google Business Profile for local map pack rankings in their target market.',
        'Launched targeted Google Ads campaigns focused on high-intent keywords like "epoxy garage floor near me."',
        'Set up CRM with automated SMS follow-up firing within 60 seconds of every new lead.',
        'Implemented automated review requests sent after every completed job to build Google rating.',
      ],
      quote: {
        text: 'The Farm built us a system that actually works. The phone rings now, and we know exactly where every lead is coming from.',
        author: 'Show Me Epoxy',
      },
    }} />
  )
}
