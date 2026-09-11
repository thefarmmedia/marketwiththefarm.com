import type { Metadata } from 'next'
import CaseStudyPage from '@/components/CaseStudyPage'

export const metadata: Metadata = {
  title: 'Ozarks Concrete Coatings Case Study — The Farm Media',
  description: 'How The Farm Media helped Ozarks Concrete Coatings dominate their local market over 6 years — from a new business to the go-to garage floor company in the Missouri Ozarks.',
  alternates: { canonical: 'https://marketwiththefarm.com/case-studies/ozarks-concrete-coatings' },
}

export default function OzarksConcreteCase() {
  return (
    <CaseStudyPage data={{
      client: 'Ozarks Concrete Coatings',
      url: 'ozarksconcretecoatings.com',
      industry: 'Concrete Coatings',
      location: 'Missouri Ozarks',
      tagline: "The Farm's first and longest-running client — 6 years of compounding growth.",
      services: ['Web Design', 'Local SEO', 'Google Ads', 'CRM Automation', 'Review Generation', 'Facebook & Meta Ads'],
      results: [
        { label: 'Client Since', value: '6 Yrs', sub: 'Since The Farm launched' },
        { label: 'Market Position', value: '#1', sub: 'Dominant local rankings' },
        { label: 'Review Profile', value: 'Strong', sub: 'Hundreds of 5-star reviews' },
        { label: 'Lead System', value: 'Full', sub: 'Consistent inbound pipeline' },
      ],
      challenge: [
        'New business entering a competitive local market with no online presence and no existing customer base.',
        'Needed to build credibility and trust fast — homeowners were choosing larger, more established competitors.',
        'No digital infrastructure: no website, no Google profile, no system to capture or follow up on leads.',
        'Limited budget at launch required maximum efficiency from every marketing dollar spent.',
      ],
      solution: [
        'Built the brand from the ground up — website, logo, messaging, and positioning for the local Ozarks market.',
        'Established and fully optimized the Google Business Profile to rank in the Local Pack from day one.',
        'Launched targeted Google Ads campaigns to generate immediate leads while SEO authority was being built.',
        'Implemented an automated review generation system that compounded credibility month over month.',
        'Built a full CRM with automated lead follow-up so no prospect ever fell through the cracks.',
        'Refined and scaled the system over 6 years — more service areas, more keywords, lower cost per lead.',
      ],
      quote: {
        text: "The Farm has been with us since before we had a single customer. They built everything — the website, the ads, the reviews, the whole system. Six years later we're the top-ranked garage floor company in our market and leads come in every single day. This isn't a vendor relationship, it's a partnership.",
        author: 'Ozarks Concrete Coatings',
      },
    }} />
  )
}
