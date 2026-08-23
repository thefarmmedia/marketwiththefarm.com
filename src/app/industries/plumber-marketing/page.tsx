import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/ui/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Plumber Marketing — More Plumbing Leads & Service Calls | The Farm Media',
  description: 'Marketing for plumbing companies. Google Ads, local SEO, and automated follow-up that generates emergency and scheduled plumbing leads in your service area.',
  alternates: { canonical: 'https://marketwiththefarm.com/industries/plumber-marketing' },
}

const data = {
  emoji: '🔧',
  title: 'Plumber Marketing',
  tagline: 'More Service Calls.|Less Slow Days.',
  heroDesc: 'Plumbing leads are urgent. When someone has a burst pipe or a clogged drain, they call the first plumber they find. We make sure that\'s you — with Google rankings, Google Ads, and instant follow-up automation that responds faster than any competitor.',
  whyMatters: 'Plumbing has a split customer type: emergency callers who need help immediately and planned-project customers who are researching water heater replacements, repiping, or bathroom renovations. Both are valuable. Both require different strategies. We capture both.',
  topKeywords: [
    'plumber near me', 'emergency plumber [city]', 'plumbing company [city]',
    'water heater replacement [city]', 'drain cleaning near me', 'burst pipe repair [city]',
    'plumbing repair near me', 'toilet repair [city]', 'sewer line repair [city]',
  ],
  strategies: [
    { title: 'Emergency Search Dominance', desc: 'Emergency plumbing searches convert at extremely high rates. We make your company the one that shows up when someone needs help immediately.' },
    { title: '24/7 Instant Response', desc: 'Our automation sends an instant SMS the moment a lead comes in — day or night. Emergency plumbing leads go cold within minutes.' },
    { title: 'Google Maps Optimization', desc: 'The three companies in the Google Maps pack get 70% of clicks for local plumbing searches. We get you into that map pack.' },
    { title: 'Planned Project Landing Pages', desc: 'Separate campaigns and landing pages for water heater replacement, whole-home repiping, and bathroom plumbing — higher ticket, planned purchases.' },
    { title: 'Review Strategy', desc: 'More reviews = better map pack rankings = more calls. We automate review collection after every service call.' },
    { title: 'Service Area Expansion', desc: 'Strategic service-area pages that systematically expand your Google presence into new cities and suburbs.' },
  ],
  websiteNeeds: [
    'Emergency call button above the fold on mobile', 'Service pages for each plumbing service',
    'Clear statement of service area and response time', 'Financing options for large projects',
    'Google reviews visible on homepage', 'City-specific service pages',
    '24/7 availability prominently communicated', 'Licensing and insurance credentials displayed',
  ],
  cta: 'Ready to get more plumbing calls without more guesswork?',
}

export default function PlumberPage() {
  return <IndustryPageTemplate data={data} slug="plumber" />
}
