import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/ui/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'Garage Door Marketing — More Installation & Repair Leads | The Farm Media',
  description: 'Marketing for garage door companies. Emergency repair ads, new door installation campaigns, and local SEO that generates both service calls and high-ticket installation projects.',
  alternates: { canonical: 'https://marketwiththefarm.com/industries/garage-door-marketing' },
}

const data = {
  emoji: '🚪',
  title: 'Garage Door Marketing',
  tagline: 'More Garage Door Jobs.|Emergency & Installation.',
  heroDesc: 'Garage door companies benefit from two very different lead types: urgent repairs that need same-day service, and installation projects where homeowners are ready to invest in a new door. We build marketing that captures both.',
  whyMatters: 'Garage door emergency calls convert at extremely high rates — a broken spring at 7am on a Monday is going to be fixed that day. But new door installations are the high-ticket jobs that make the business profitable. The best garage door marketing systems capture both without one competing with the other.',
  topKeywords: [
    'garage door repair near me', 'garage door company [city]', 'broken garage door spring [city]',
    'garage door installation [city]', 'new garage door [city]', 'garage door opener repair near me',
    'garage door replacement [city]', 'commercial garage door [city]', 'garage door cable repair near me',
  ],
  strategies: [
    { title: 'Emergency Repair Targeting', desc: 'Emergency garage door searches have the highest conversion rates of any trade keyword. We make sure your company owns those searches in your market.' },
    { title: 'New Door Installation Campaigns', desc: 'Separate campaigns and landing pages targeting homeowners shopping for a new garage door — higher ticket, longer research period.' },
    { title: 'Same-Day Service Positioning', desc: 'Marketing that positions your company as the fastest and most reliable option for emergency service in your area.' },
    { title: 'Review Generation After Every Call', desc: 'You serve homeowners on their worst day. A great experience deserves a Google review. We automate the request so you never forget to ask.' },
    { title: 'Google Maps Optimization', desc: 'Dominating the local map pack for garage door searches — the three companies that show up there get the majority of emergency calls.' },
    { title: 'Residential & Commercial Split Strategy', desc: 'Separate targeting for commercial property managers and homeowners, since they search differently and have different priorities.' },
  ],
  websiteNeeds: [
    'Emergency call button sticky on mobile', 'Gallery of installed doors by style',
    'Emergency and repair page separate from installation', 'Pricing guidance for common repairs',
    'Brand partner logos (Clopay, LiftMaster, etc.)', 'Response time commitment visible',
    'Google reviews prominently displayed', 'Service area map or city list',
  ],
  cta: 'Ready to get more garage door calls and installations?',
}

export default function GarageDoorPage() {
  return <IndustryPageTemplate data={data} slug="garage-door" />
}
