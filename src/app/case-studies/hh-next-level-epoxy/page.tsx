import type { Metadata } from 'next'
import CaseStudyPage from '@/components/CaseStudyPage'

export const metadata: Metadata = {
  title: 'HH Next Level Epoxy Case Study — The Farm Media',
  description: 'How The Farm Media helped HH Next Level Epoxy build a dominant online presence and automated lead follow-up system in Missouri.',
  alternates: { canonical: 'https://marketwiththefarm.com/case-studies/hh-next-level-epoxy' },
}

export default function HHNextLevelCase() {
  return (
    <CaseStudyPage data={{
      client: 'HH Next Level Epoxy',
      url: 'hhnextlevelepoxy.com',
      industry: 'Concrete Coatings',
      location: 'Missouri',
      tagline: 'Quality work deserves to be found. We made sure it was.',
      services: ['Web Design', 'Local SEO', 'CRM Automation', 'Google Business Profile', 'Review Generation'],
      results: [
        { label: 'Visibility', value: 'Top 3', sub: 'Google Maps ranking' },
        { label: 'Website', value: 'Live', sub: 'Built to convert' },
        { label: 'Lead System', value: 'Active', sub: 'Running 24/7' },
        { label: 'Follow-Up', value: 'Instant', sub: 'Automated on every lead' },
      ],
      challenge: [
        'HH Next Level Epoxy had exceptional craftsmanship but almost no online visibility.',
        'Competitors with inferior work were winning bids because they ranked on Google Maps and HH did not.',
        'No website meant no way for homeowners to find them when searching online.',
        'Leads from word-of-mouth were inconsistent and provided no path to growth.',
      ],
      solution: [
        'Designed and built a professional website showcasing their work and optimized to generate phone calls.',
        'Fully optimized the Google Business Profile with photos, services, and keyword-rich descriptions.',
        'Built out local SEO strategy targeting epoxy and concrete coating keywords in their service area.',
        'Set up a CRM system with instant lead notification and automated SMS follow-up.',
        'Launched a review generation campaign to build their Google rating and outrank competitors.',
      ],
      quote: {
        text: 'We had the skills but nobody could find us. The Farm fixed that — now we\'re the ones showing up first, and the quality of our leads is way better.',
        author: 'HH Next Level Epoxy',
      },
    }} />
  )
}
