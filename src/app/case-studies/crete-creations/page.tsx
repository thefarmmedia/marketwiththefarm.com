import type { Metadata } from 'next'
import CaseStudyPage from '@/components/CaseStudyPage'

export const metadata: Metadata = {
  title: 'Crete Creations LLC Case Study — The Farm Media',
  description: 'How The Farm Media rebuilt Crete Creations LLC\'s website for conversion and increased lead quality in the Missouri concrete coating market.',
  alternates: { canonical: 'https://marketwiththefarm.com/case-studies/crete-creations' },
}

export default function CreteCreationsCase() {
  return (
    <CaseStudyPage data={{
      client: 'Crete Creations LLC',
      url: 'cretecreationsllc.com',
      industry: 'Concrete Coatings',
      location: 'Missouri',
      tagline: 'Traffic was there. Conversions weren\'t. We fixed that.',
      services: ['Web Design', 'Conversion Optimization', 'Call Tracking', 'Local SEO', 'CRM Automation'],
      results: [
        { label: 'Conversions', value: 'Up', sub: 'Visitors becoming leads' },
        { label: 'Load Speed', value: 'Fast', sub: 'Mobile-optimized' },
        { label: 'Lead Capture', value: 'Active', sub: 'Multi-point CTAs' },
        { label: 'Calls', value: 'Tracked', sub: 'Source attribution' },
      ],
      challenge: [
        'Crete Creations had an existing website but it wasn\'t converting visitors into leads or calls.',
        'Traffic was arriving from search but leaving without taking action — no clear calls to action.',
        'Mobile experience was poor, causing high bounce rates from the most common device.',
        'No way to track which leads came from which source, making it impossible to optimize spend.',
      ],
      solution: [
        'Rebuilt the website with conversion as the primary goal — clear CTAs above the fold on every page.',
        'Rebuilt for mobile-first performance with fast load times and tap-friendly design.',
        'Added multiple lead capture points: phone number, contact form, and instant quote tool.',
        'Integrated dynamic call tracking numbers to attribute every call to the correct campaign.',
        'Connected all leads into CRM with automated follow-up sequences.',
      ],
      quote: {
        text: 'We had traffic but nobody was calling. The Farm rebuilt the site with a focus on getting people to actually pick up the phone. Night and day difference.',
        author: 'Crete Creations LLC',
      },
    }} />
  )
}
