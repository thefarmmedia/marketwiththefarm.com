import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Video, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contractor Marketing Resources — Guides, Articles & Tools | The Farm Media',
  description: 'Free marketing resources for contractors and local service businesses. Guides on SEO, Google Ads, lead follow-up, and how to build a marketing system that generates jobs.',
  alternates: { canonical: 'https://marketwiththefarm.com/resources' },
}

const categories = [
  {
    icon: BookOpen,
    title: 'Contractor SEO',
    desc: 'How to rank on Google in your local market',
    articles: [
      { title: 'How Contractor SEO Actually Works (And Why Your Current Strategy Probably Isn\'t)', href: '#' },
      { title: 'Local SEO for Contractors: The Complete 2024 Guide', href: '#' },
      { title: 'How to Rank on Google Maps as a Contractor', href: '#' },
      { title: 'Google Business Profile Optimization for Service Businesses', href: '#' },
      { title: 'Why Contractors Aren\'t Ranking on Google (And How to Fix It)', href: '#' },
    ],
  },
  {
    icon: FileText,
    title: 'Contractor Websites',
    desc: 'What makes a contractor website actually convert',
    articles: [
      { title: 'What Makes a Contractor Website Generate Leads (vs. Just Exist)', href: '#' },
      { title: 'How Many Pages Should a Contractor Website Have?', href: '#' },
      { title: 'Service Pages vs. Location Pages: The Difference and Why Both Matter', href: '#' },
      { title: 'Mobile-First Web Design for Contractors: What to Get Right', href: '#' },
      { title: 'The Contractor Website Conversion Checklist (20 Elements)', href: '#' },
    ],
  },
  {
    icon: Video,
    title: 'Lead Generation & Ads',
    desc: 'Generating more qualified leads',
    articles: [
      { title: 'Google Ads for Contractors: Stop Paying for Clicks, Start Paying for Leads', href: '#' },
      { title: 'Facebook Ads for Home Services: A Complete Guide', href: '#' },
      { title: 'Cost Per Lead Benchmarks for Contractors by Industry', href: '#' },
      { title: 'Google Local Services Ads: Are They Worth It for Contractors?', href: '#' },
      { title: 'How to Build High-Converting Landing Pages for Contractor Ads', href: '#' },
    ],
  },
  {
    icon: BookOpen,
    title: 'Sales & Automation',
    desc: 'Converting leads into booked jobs',
    articles: [
      { title: 'Why Lead Response Time Is Costing Contractors Jobs', href: '#' },
      { title: 'How to Set Up Contractor CRM & Automation (Without It Taking Weeks)', href: '#' },
      { title: 'The SMS Follow-Up Sequences That Close More Contractor Jobs', href: '#' },
      { title: 'How to Get More Google Reviews for Your Contracting Business', href: '#' },
      { title: 'Lead Nurturing for Contractors: Staying Top-of-Mind Until They\'re Ready to Book', href: '#' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] pt-28 pb-20" aria-labelledby="resources-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-6">
              <span className="text-[#FF5F00] text-sm font-medium">Contractor Marketing Resources</span>
            </div>
            <h1 id="resources-heading" className="text-5xl sm:text-6xl font-bold text-white mb-5">
              Learn How to Market<br />
              <span className="text-[#FF5F00]">Your Business Better.</span>
            </h1>
            <p className="text-xl text-gray-400">
              Practical guides written for contractors and local service businesses — not generic digital marketing theory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#FF5F00]/10 flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-[#FF5F00]" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-bold text-white">{cat.title}</h2>
                    <p className="text-gray-500 text-xs">{cat.desc}</p>
                  </div>
                </div>
                <ul className="space-y-3" role="list">
                  {cat.articles.map((article) => (
                    <li key={article.title}>
                      <Link
                        href={article.href}
                        className="group flex items-start gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-[#FF5F00] shrink-0 mt-0.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Want us to audit your marketing instead of reading about it?</h2>
            <p className="text-gray-400 mb-6">A free growth plan call shows you exactly where your biggest opportunities are.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold px-8 py-4 rounded-md transition-colors group">
              Get a Free Growth Plan
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
