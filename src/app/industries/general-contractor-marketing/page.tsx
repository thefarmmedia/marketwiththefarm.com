import type { Metadata } from 'next'
import IndustryPageTemplate from '@/components/ui/IndustryPageTemplate'

export const metadata: Metadata = {
  title: 'General Contractor Marketing — More Remodeling & Construction Leads | The Farm Media',
  description: 'Marketing for general contractors and remodeling companies. High-value project lead generation through Google Ads, SEO, and social campaigns targeting homeowners ready to invest.',
  alternates: { canonical: 'https://marketwiththefarm.com/industries/general-contractor-marketing' },
}

const data = {
  emoji: '🔨',
  title: 'General Contractor Marketing',
  tagline: 'More Remodeling Leads.|Bigger Jobs.',
  heroDesc: 'General contractors need marketing that generates high-ticket project leads — kitchen remodels, additions, whole-home renovations. We build systems that find homeowners ready to invest in a serious project and get them calling your company first.',
  whyMatters: 'General contracting marketing is a long-game proposition. Customers research extensively, get multiple bids, and make a significant financial decision. Your marketing needs to build trust through portfolio, reviews, and educational content — while also generating the initial inquiry. We build marketing funnels that nurture prospects through a longer decision cycle.',
  topKeywords: [
    'general contractor near me', 'kitchen remodel [city]', 'home addition [city]',
    'basement finishing [city]', 'home renovation contractor [city]', 'bathroom remodel [city]',
    'whole home remodel [city]', 'room addition cost', 'licensed contractor [city]',
  ],
  strategies: [
    { title: 'High-Value Project Targeting', desc: 'Campaigns specifically designed to attract kitchen remodels, additions, and whole-home renovations — not small repair jobs.' },
    { title: 'Portfolio & Showcase Marketing', desc: 'Your completed projects are your portfolio. We build systems for consistently capturing and promoting your best work.' },
    { title: 'Content That Builds Trust', desc: 'Educational blog posts, guides, and project showcase content that ranks on Google and establishes your expertise before a prospect ever calls.' },
    { title: 'Facebook Ads for Home Improvement', desc: 'Targeting homeowners by home value, neighborhood, and interests to reach people who are thinking about major renovations.' },
    { title: 'Lead Nurturing Sequences', desc: 'General contractor leads have a longer decision cycle. Our CRM sequences keep you top-of-mind during the 30–90 day research period.' },
    { title: 'Commercial & Residential Split', desc: 'Separate strategies for commercial projects and residential renovations — different buyers, different search behavior, different selling cycle.' },
  ],
  websiteNeeds: [
    'Project portfolio with high-quality photography', 'Service pages for each project type',
    'Customer testimonials and reviews', 'Case studies showing scope and outcome',
    'Licensing and insurance credentials visible', 'Financing options prominently displayed',
    'Video walkthroughs of completed projects', 'Easy consultation request process',
  ],
  cta: 'Ready to attract more of the remodeling projects you actually want?',
}

export default function GeneralContractorPage() {
  return <IndustryPageTemplate data={data} slug="general-contractor" />
}
