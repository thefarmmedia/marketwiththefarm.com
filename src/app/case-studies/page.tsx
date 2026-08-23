import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Phone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contractor Marketing Case Studies — Real Results from Real Businesses | The Farm Media',
  description: 'See real results from real contractors who work with The Farm Media. Case studies showing lead increases, SEO rankings, cost per lead, and revenue generated.',
  alternates: { canonical: 'https://marketwiththefarm.com/case-studies' },
}

const caseStudies = [
  {
    slug: 'concrete-coating-springfield',
    client: 'Concrete Coating Company',
    industry: 'Concrete Coatings',
    location: 'Springfield, MO',
    problem: 'Zero online presence. Getting 3–5 calls per week from word of mouth only.',
    result: '72 calls/week. #1 Google ranking. $24 average cost per lead.',
    metrics: [
      { label: 'Call Volume Increase', value: '2,400%', icon: Phone },
      { label: 'Google Ranking', value: '#1', icon: TrendingUp },
      { label: 'Cost Per Lead', value: '$24', icon: TrendingUp },
      { label: 'Google Reviews', value: '112', icon: Star },
    ],
    timeline: '6 months',
    services: ['Web Design', 'Local SEO', 'Google Ads', 'CRM Automation', 'Review Generation'],
    featured: true,
  },
  {
    slug: 'hvac-southwest-missouri',
    client: 'HVAC Company',
    industry: 'HVAC',
    location: 'Southwest Missouri',
    problem: 'Paying $180 per lead from previous agency. Couldn\'t scale profitably.',
    result: 'Reduced cost per lead to $28. Grew monthly leads by 340%.',
    metrics: [
      { label: 'Cost Per Lead Reduction', value: '84%', icon: TrendingUp },
      { label: 'Lead Volume Increase', value: '340%', icon: Phone },
      { label: 'New Cost Per Lead', value: '$28', icon: TrendingUp },
      { label: 'Monthly Leads', value: '85+', icon: Phone },
    ],
    timeline: '4 months',
    services: ['Google Ads Rebuild', 'Landing Pages', 'Conversion Tracking', 'CRM Setup'],
    featured: true,
  },
  {
    slug: 'roofing-multi-city-seo',
    client: 'Roofing Company',
    industry: 'Roofing',
    location: 'Missouri',
    problem: 'Only ranking in their home city. Missing leads in 12 surrounding markets.',
    result: 'First-page Google rankings in 15 cities. 280% increase in organic leads.',
    metrics: [
      { label: 'Cities Ranking', value: '15+', icon: TrendingUp },
      { label: 'Organic Lead Increase', value: '280%', icon: Phone },
      { label: 'New Market Revenue', value: 'Significant', icon: TrendingUp },
      { label: 'Ranking Position', value: 'Top 3', icon: Star },
    ],
    timeline: '8 months',
    services: ['Service-Area SEO', 'City Landing Pages', 'Google Business Profile', 'Content Strategy'],
    featured: false,
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] pt-28 pb-16" aria-labelledby="cs-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-6">
              <span className="text-[#FF5F00] text-sm font-medium">Real Results</span>
            </div>
            <h1 id="cs-heading" className="text-5xl sm:text-6xl font-bold text-white mb-5">
              Proof, Not Promises.
            </h1>
            <p className="text-xl text-gray-400">
              Every number on this page belongs to a real contractor in a real market. We don't fabricate case studies to win business.
            </p>
          </div>

          <div className="space-y-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.slug}
                className={`bg-[#111111] border rounded-2xl p-8 ${cs.featured ? 'border-[#FF5F00]/30' : 'border-[#2A2A2A]'}`}
              >
                {cs.featured && (
                  <div className="inline-block bg-[#FF5F00] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Featured Case Study
                  </div>
                )}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="text-white font-bold text-xl">{cs.client}</span>
                      <span className="bg-[#2A2A2A] text-gray-400 text-xs px-2.5 py-1 rounded-full">{cs.industry}</span>
                      <span className="text-gray-500 text-sm">{cs.location}</span>
                    </div>
                    <div className="mb-5">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">The Problem</div>
                      <p className="text-gray-400">{cs.problem}</p>
                    </div>
                    <div className="mb-5">
                      <div className="text-xs font-bold text-[#FF5F00] uppercase tracking-wider mb-1">The Result</div>
                      <p className="text-white font-medium">{cs.result}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cs.services.map((s) => (
                        <span key={s} className="bg-[#0A0A0A] border border-[#2A2A2A] text-gray-400 text-xs px-2.5 py-1 rounded-md">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-3">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-4 text-center">
                          <div className="text-2xl font-bold text-[#FF5F00] mb-1">{m.value}</div>
                          <div className="text-xs text-gray-500">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs text-gray-600">
                      <span>Timeline: {cs.timeline}</span>
                      <Link
                        href={`/case-studies/${cs.slug}`}
                        className="text-[#FF5F00] font-semibold hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        Full case study
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Want to see results like these?</h2>
            <p className="text-gray-400 mb-6">Let's talk about what's possible for your business in your market.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold px-8 py-4 rounded-md transition-colors group"
            >
              Get a Free Growth Plan
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
