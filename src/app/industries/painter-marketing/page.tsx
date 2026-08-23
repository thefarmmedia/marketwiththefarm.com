import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/ui/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Painter Marketing — More Painting Leads & Estimates | The Farm Media',
  description: 'Marketing for painting companies. Interior and exterior painting lead generation through Google Ads, local SEO, and Facebook ads targeting homeowners in your service area.',
  alternates: { canonical: 'https://marketwiththefarm.com/industries/painter-marketing' },
}

const data = {
  emoji: '🎨',
  title: 'Painter Marketing',
  tagline: 'More Painting Estimates.|Better Clients.',
  heroDesc: 'Painting is a competitive market where your portfolio and reviews make or break the sale. We build marketing that showcases your best work, generates high-quality estimate requests, and converts visitors into booked projects at a predictable cost.',
  whyMatters: 'Painting customers are making an aesthetic decision for their home. They want to see your work, read your reviews, and trust that you\'ll show up on time and do clean work. The marketing that wins in painting leads with visual proof — before/afters, project photos, and testimonials — paired with clear calls to action that make it easy to get a quote.',
  topKeywords: [
    'interior painter near me', 'exterior painting [city]', 'house painting contractor [city]',
    'painting company near me', 'home painter [city]', 'commercial painting [city]',
    'cabinet painting [city]', 'deck staining near me', 'painting estimate near me',
  ],
  strategies: [
    { title: 'Portfolio-Driven Campaigns', desc: 'Your before/after photos are your most powerful marketing asset. We build campaigns around your best transformation work to generate high-converting leads.' },
    { title: 'Interior vs. Exterior Split Targeting', desc: 'Interior painting customers have different search intent and price sensitivity than exterior customers. We run separate campaigns optimized for each.' },
    { title: 'Seasonal Campaign Strategy', desc: 'Spring exterior painting rush, holiday interior refresh season — timed campaigns that capitalize on natural demand peaks.' },
    { title: 'Cabinet Painting Lead Gen', desc: 'Cabinet painting and refinishing is a high-margin, high-demand service. Dedicated campaigns targeting homeowners searching for this specific upgrade.' },
    { title: 'Neighborhood Facebook Targeting', desc: 'Facebook ads targeted at homeowners in specific neighborhoods and ZIP codes — showing your work to people who can afford and value professional painting.' },
    { title: 'Review & Testimonial Strategy', desc: 'Painting is a trust business. We automate review collection after every project and feature your best testimonials across your web presence.' },
  ],
  websiteNeeds: [
    'Before/after gallery organized by project type', 'Separate pages for interior, exterior, commercial',
    'Cabinet painting page (high search volume)', 'Customer testimonials with project photos',
    'Easy online estimate request form', 'Color inspiration or project portfolio',
    'Google reviews prominently featured', 'City-specific landing pages',
  ],
  cta: 'Ready to fill your painting schedule with the right clients?',
}

export default function PainterPage() {
  return <IndustryPageTemplate data={data} slug="painter" />
}
