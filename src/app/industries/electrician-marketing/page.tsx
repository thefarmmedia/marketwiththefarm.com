import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/ui/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Electrician Marketing — More Electrical Leads & Panel Jobs | The Farm Media',
  description: 'Marketing for electricians and electrical contractors. Local SEO, Google Ads, and lead generation for panel upgrades, EV chargers, residential and commercial electrical work.',
  alternates: { canonical: 'https://marketwiththefarm.com/industries/electrician-marketing' },
}

const data = {
  emoji: '⚡',
  title: 'Electrician Marketing',
  tagline: 'More Electrical Jobs.|Less Chasing.',
  heroDesc: 'Electricians compete for some of the highest-value residential service jobs in the trades. We build marketing that generates both emergency electrical calls and high-ticket planned projects like panel upgrades, whole-home rewiring, and EV charger installation.',
  whyMatters: 'Electrical work spans both urgent emergencies (power outages, tripped breakers) and high-value planned projects (panel upgrades, EV charger installation, whole-home rewiring). Both have different search behaviors and different conversion paths. We build targeting strategies for both so your marketing captures the full range of electrical work available in your market.',
  topKeywords: [
    'electrician near me', 'electrical panel upgrade [city]', 'EV charger installation [city]',
    'emergency electrician [city]', 'residential electrician [city]', 'electrical contractor [city]',
    'whole home rewiring [city]', 'generator installation [city]', 'ceiling fan installation [city]',
  ],
  strategies: [
    { title: 'Panel Upgrade Campaign Strategy', desc: 'Electrical panel upgrades are high-value, high-margin jobs. We build specific campaigns and landing pages targeting homeowners searching for panel replacement and service upgrades.' },
    { title: 'EV Charger Installation Marketing', desc: 'EV charger installation is one of the fastest-growing segments in residential electrical. We target EV owners searching for home charging installation in your market.' },
    { title: 'Emergency Electrical Targeting', desc: 'Power emergencies generate immediate, high-intent searches. We make sure your company appears first for emergency electrical keywords.' },
    { title: 'Commercial Electrical Lead Gen', desc: 'Separate campaigns targeting property managers, business owners, and contractors who need commercial electrical work.' },
    { title: 'License & Credential Promotion', desc: 'In electrical work, credentials matter. We make your license, insurance, and certifications prominent trust signals throughout your web presence.' },
    { title: 'Service Area Expansion SEO', desc: 'Systematically building ranking in every city and suburb in your service area with individual optimized landing pages.' },
  ],
  websiteNeeds: [
    'License number prominently displayed', 'Service pages for each electrical service',
    'EV charger installation page (high-value emerging market)', 'Panel upgrade dedicated landing page',
    'Emergency electrical page', 'Google reviews on homepage',
    'Before/after project photos', 'City-specific pages for service area',
  ],
  cta: 'Ready to get more of the electrical jobs you actually want?',
}

export default function ElectricianPage() {
  return <IndustryPageTemplate data={data} slug="electrician" />
}
