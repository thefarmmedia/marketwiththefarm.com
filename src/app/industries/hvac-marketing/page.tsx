import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/ui/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'HVAC Marketing — More Heating & Cooling Leads | The Farm Media',
  description: 'Marketing for HVAC companies. We help heating and cooling contractors get more calls, rank on Google, and keep technicians busy year-round.',
  alternates: { canonical: 'https://marketwiththefarm.com/industries/hvac-marketing' },
}

const data = {
  emoji: '❄️',
  title: 'HVAC Marketing',
  tagline: 'More Heating & Cooling Calls.|Year-Round.',
  heroDesc: 'HVAC companies live and die by seasonal peaks. We build marketing systems that maximize volume during peak season and keep your technicians busy during slower months — through SEO, paid ads, and local visibility that works 24/7.',
  whyMatters: 'HVAC marketing requires capturing two different customer types: homeowners with a broken system who need help NOW, and homeowners planning a seasonal tune-up or system replacement. Your marketing needs both — emergency searches with fast response, and planned searches with trust-building content. We build campaigns that handle both without cannibalizing each other.',
  topKeywords: [
    'AC repair near me', 'HVAC company [city]', 'furnace repair [city]',
    'AC installation near me', 'heat pump installation [city]', 'air conditioning service near me',
    'HVAC contractor [city]', 'furnace replacement cost', 'central air installation [city]',
  ],
  strategies: [
    { title: 'Emergency Keyword Targeting', desc: 'When someone\'s AC breaks in July, they search immediately. We make sure your company appears at the top of those urgent searches with a fast-response landing page.' },
    { title: 'Seasonal Campaign Strategy', desc: 'Spring AC tune-up campaigns, fall furnace check campaigns — timed advertising that captures demand at peak moments.' },
    { title: 'Google Business Profile Optimization', desc: 'A fully optimized GBP with photos, services, Q&A, and weekly posts that keep your profile active and ranking.' },
    { title: 'Maintenance Plan Lead Generation', desc: 'Landing pages designed to sell service plans — the recurring revenue that stabilizes your business during off-peak months.' },
    { title: 'Review Generation System', desc: 'After every service call, an automated review request goes out. 5-star reviews are one of the strongest trust signals for HVAC homeowners.' },
    { title: 'Multi-City SEO', desc: 'Service-area pages for every city and suburb you serve, each optimized for local HVAC searches.' },
  ],
  websiteNeeds: [
    'Emergency call button visible on every page on mobile', 'Individual service pages (AC repair, furnace install, etc.)',
    'City-specific landing pages', 'Clear pricing guidance or "free estimate" offer',
    'Google reviews prominently displayed', 'Online booking or instant contact form',
    'Brand and manufacturer certifications visible', 'Seasonal offer banners',
  ],
  cta: 'Ready to keep your technicians busy year-round?',
}

export default function HVACPage() {
  return <IndustryPageTemplate data={data} slug="hvac" />
}
