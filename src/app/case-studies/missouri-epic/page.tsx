import type { Metadata } from 'next'
import CaseStudyPage from '@/components/CaseStudyPage'

export const metadata: Metadata = {
  title: 'Missouri Epic Case Study — The Farm Media',
  description: 'How The Farm Media built a complete digital marketing system for Missouri Epic to drive awareness and grow the business statewide.',
  alternates: { canonical: 'https://marketwiththefarm.com/case-studies/missouri-epic' },
}

export default function MissouriEpicCase() {
  return (
    <CaseStudyPage data={{
      client: 'Missouri Epic',
      url: 'missouriepic.com',
      industry: 'Entertainment / Events',
      location: 'Missouri',
      tagline: 'Building a statewide digital presence from the ground up.',
      services: ['Web Design', 'Local SEO', 'Google Ads', 'Facebook & Meta Ads', 'CRM Setup'],
      results: [
        { label: 'Presence', value: 'Built', sub: 'Full digital system' },
        { label: 'Reach', value: 'Statewide', sub: 'Across Missouri' },
        { label: 'Leads', value: 'Flowing', sub: 'Consistent inbound' },
        { label: 'Growth', value: 'On Track', sub: 'Month over month' },
      ],
      challenge: [
        'Needed to establish a strong digital presence to reach customers across a wide geographic area.',
        'No centralized lead generation system — inquiries came in through scattered channels with no follow-up.',
        'Growing competition in the market with better-established digital footprints.',
        'No paid advertising strategy to accelerate awareness and lead generation.',
      ],
      solution: [
        'Built a professional website designed for both statewide reach and local market conversion.',
        'Launched SEO strategy targeting relevant keywords across Missouri.',
        'Developed Google and Facebook ad campaigns reaching the right audience at the right time.',
        'Set up a CRM to centralize and manage all incoming leads with automated follow-up sequences.',
        'Established ongoing reporting to track growth and optimize campaigns month over month.',
      ],
      quote: {
        text: 'The Farm gave us the digital infrastructure we needed to grow. Now we have a real system — not just a website, but an actual lead machine.',
        author: 'Missouri Epic',
      },
    }} />
  )
}
