import type { Metadata } from 'next'
import CaseStudyPage from '@/components/CaseStudyPage'

export const metadata: Metadata = {
  title: 'Grand Slam Case Study — The Farm Media',
  description: 'How The Farm Media helped Grand Slam drive consistent bookings and local awareness through targeted digital marketing in Missouri.',
  alternates: { canonical: 'https://marketwiththefarm.com/case-studies/grand-slam' },
}

export default function GrandSlamCase() {
  return (
    <CaseStudyPage data={{
      client: 'Grand Slam',
      url: 'play-grandslam.com',
      industry: 'Entertainment',
      location: 'Missouri',
      tagline: 'More bookings. More foot traffic. More fun.',
      services: ['Google Ads', 'Facebook & Meta Ads', 'Local SEO', 'Landing Pages', 'Retargeting'],
      results: [
        { label: 'Bookings', value: 'Up', sub: 'Online reservations' },
        { label: 'Local Reach', value: 'Expanded', sub: 'Wider audience' },
        { label: 'Ad ROI', value: 'Positive', sub: 'Revenue-tracked' },
        { label: 'Awareness', value: 'Strong', sub: 'Top of market' },
      ],
      challenge: [
        'Needed to drive consistent foot traffic and online bookings beyond their existing customer base.',
        'Local awareness was limited — potential customers didn\'t know they existed or what they offered.',
        'No structured digital advertising strategy — missing the audience that lives online.',
        'Couldn\'t attribute revenue to specific marketing channels, making optimization impossible.',
      ],
      solution: [
        'Built targeted Google Search campaigns capturing local intent searches for entertainment and activities.',
        'Launched Facebook and Instagram ad campaigns reaching families and groups in the surrounding area.',
        'Optimized the Google Business Profile for entertainment and activity searches.',
        'Created dedicated landing pages for each offering with clear booking CTAs.',
        'Set up retargeting campaigns to bring back website visitors who didn\'t convert.',
      ],
      quote: {
        text: 'The Farm got our name in front of the right people. Our bookings went up and we\'re seeing new customers who found us through Google and Facebook.',
        author: 'Grand Slam',
      },
    }} />
  )
}
