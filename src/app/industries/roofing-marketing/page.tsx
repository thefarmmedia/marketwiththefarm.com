import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/ui/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Roofing Marketing — More Roofing Leads & Estimates | The Farm Media',
  description: 'Marketing for roofing companies. Storm damage campaigns, insurance lead generation, local SEO, and Google Ads built for residential and commercial roofers.',
  alternates: { canonical: 'https://marketwiththefarm.com/industries/roofing-marketing' },
}

const data = {
  emoji: '🏠',
  title: 'Roofing Marketing',
  tagline: 'More Roofing Estimates.|More Jobs.',
  heroDesc: 'Roofing is one of the most competitive local markets. We build systems that get you found first, respond to leads instantly, and build the Google reputation that makes homeowners choose you over the guy who knocked on their door after a storm.',
  whyMatters: 'Roofing has unique marketing challenges: storm chasing season, insurance supplement complexity, and high ticket values that make cost-per-lead economics very different from other trades. We understand how roofing companies sell jobs, handle insurance claims, and manage seasonal volume swings. Our campaigns are built around those realities.',
  topKeywords: [
    'roofing company near me', 'roof replacement [city]', 'storm damage roof repair',
    'roof repair near me', 'roofing contractor [city]', 'metal roofing [city]',
    'roof inspection near me', 'insurance roof replacement', 'commercial roofing [city]',
  ],
  strategies: [
    { title: 'Storm Response Campaigns', desc: 'When a hailstorm hits your area, we activate targeted campaigns within hours so your company captures the surge in searches.' },
    { title: 'Insurance Claim Lead Gen', desc: 'Specific landing pages and ad copy targeting homeowners who need help navigating insurance claims for roof damage.' },
    { title: 'Service-Area SEO Across 15+ Cities', desc: 'We\'ve ranked roofing clients across entire service territories — systematically building page rankings for every city they target.' },
    { title: 'Review Generation After Every Job', desc: 'Automated review requests after completion. Your Google rating is your credibility on a high-ticket purchase.' },
    { title: 'Before/After Photo Strategy', desc: 'A system for consistently capturing, organizing, and publishing project photos that convert visitors into callers.' },
    { title: 'Commercial Roofing Campaigns', desc: 'Separate targeting strategies for commercial property managers and building owners who search differently than homeowners.' },
  ],
  websiteNeeds: [
    'Before/after project gallery organized by roof type', 'Storm damage emergency page that ranks fast',
    'Insurance claim help information', 'Financing options prominently displayed',
    'City-specific landing pages', 'Video testimonials where available',
    'Fast mobile form for free inspections', 'Manufacturer certifications and warranties',
  ],
  cta: 'Ready to fill your estimate calendar with roofing jobs?',
}

export default function RoofingPage() {
  return <IndustryPageTemplate data={data} slug="roofing" />
}
