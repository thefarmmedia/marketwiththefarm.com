import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import ProofSection from '@/components/home/ProofSection'
import StatsSection from '@/components/home/StatsSection'
import ProblemSection from '@/components/home/ProblemSection'
import GrowthSystem from '@/components/home/GrowthSystem'
import StuckSection from '@/components/home/StuckSection'
import LeadJourney from '@/components/home/LeadJourney'
import IndustriesSection from '@/components/home/IndustriesSection'
import ComparisonSection from '@/components/home/ComparisonSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import FAQSection from '@/components/home/FAQSection'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'The Farm Media — Contractor Marketing That Generates Customers',
  description: 'The Farm Media builds customer acquisition systems for contractors — websites, SEO, Google Ads, CRM automation, and review generation that work together to fill your schedule with quality jobs.',
  alternates: {
    canonical: 'https://marketwiththefarm.com',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofSection />
      <StatsSection />
      <ProblemSection />
      <GrowthSystem />
      <StuckSection />
      <LeadJourney />
      <IndustriesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
