import type { Metadata } from 'next'
import CaseStudyPage from '@/components/CaseStudyPage'

export const metadata: Metadata = {
  title: 'Field of Screams Nixa Case Study — The Farm Media',
  description: 'How The Farm Media maximized ticket sales and awareness for Field of Screams Nixa during their critical fall season.',
  alternates: { canonical: 'https://marketwiththefarm.com/case-studies/field-of-screams-nixa' },
}

export default function FieldOfScreamsCase() {
  return (
    <CaseStudyPage data={{
      client: 'Field of Screams Nixa',
      url: 'fieldofscreamsnixa.com',
      industry: 'Seasonal Entertainment',
      location: 'Nixa, MO',
      tagline: 'A short season demands a maximum push. We delivered.',
      services: ['Facebook & Meta Ads', 'Google Ads', 'Local SEO', 'Landing Pages', 'Event Promotion'],
      results: [
        { label: 'Ticket Sales', value: 'Up', sub: 'Season over season' },
        { label: 'Local Awareness', value: 'High', sub: 'Top of market' },
        { label: 'Season', value: 'Maxed', sub: 'Full operating windows' },
        { label: 'Ad ROI', value: 'Strong', sub: 'Revenue-attributed' },
      ],
      challenge: [
        'Seasonal business with a narrow operating window — every week of the season matters.',
        'Needed to reach as many potential customers as possible in a short, intense campaign period.',
        'Competing with other fall entertainment options for the same limited audience.',
        'No structured digital strategy for maximizing the season — relying on organic awareness.',
      ],
      solution: [
        'Planned and executed a full-season paid campaign across Google and Facebook starting weeks before opening.',
        'Built targeting audiences by location, interest, and demographics (families, friend groups, thrill-seekers).',
        'Created urgency-driven ad creative highlighting limited nights and popular attractions.',
        'Optimized Google listing for local searches like "haunted houses near Nixa" and "Halloween Nixa MO."',
        'Launched retargeting campaigns to convert website visitors who didn\'t purchase on first visit.',
      ],
      quote: {
        text: 'With a short season, every weekend has to count. The Farm put us in front of the right people at the right time and we saw it in ticket sales.',
        author: 'Field of Screams Nixa',
      },
    }} />
  )
}
