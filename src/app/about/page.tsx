import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Wrench, BarChart3, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About The Farm Media — Built by Operators, Not Just Marketers | The Farm Media',
  description: 'The Farm Media was built by people who understand how local service businesses actually work — seasonality, estimates, lead quality, crew capacity, and the difference between impressions and income.',
  alternates: {
    canonical: 'https://marketwiththefarm.com/about',
  },
}

const values = [
  {
    icon: Phone,
    title: 'Results, Not Reports',
    desc: 'We track calls, booked jobs, and revenue — not impressions, reach, and engagement. If it doesn\'t contribute to a customer, it doesn\'t matter.',
  },
  {
    icon: Wrench,
    title: 'Contractor-First Thinking',
    desc: 'We understand seasonality, crew capacity, average job value, closing rates, and what it actually costs to acquire a customer in your market.',
  },
  {
    icon: BarChart3,
    title: 'Transparent & Accountable',
    desc: 'You\'ll always know exactly where your leads came from, what you paid per lead, and what the marketing investment is generating in return.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-28 pb-20" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-6">
              <span className="text-[#FF5F00] text-sm font-medium">About The Farm Media</span>
            </div>
            <h1 id="about-heading" className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Built by People Who Know<br />
              <span className="text-[#FF5F00]">How Contractors Get Paid.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Most marketing agencies learn about your industry from Wikipedia. The Farm was built by people who understand that a roofing company lives or dies by the quality of their leads in storm season — and that a concrete coating company's phone needs to ring on Monday morning, not generate traffic reports.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#111111] py-20" aria-labelledby="story-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="story-heading" className="text-3xl font-bold text-white mb-8">Why The Farm Exists</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              We watched too many good contractors — people who were exceptional at their craft — get burned by generic marketing agencies that promised results and delivered monthly reports full of numbers that didn't translate into revenue.
            </p>
            <p>
              The problem wasn't that those agencies were bad at marketing. The problem was that they didn't understand the business. They didn't understand what a $4,000 garage floor coating job means to a two-person operation. They didn't understand what happens when leads go cold because nobody followed up within 30 minutes. They didn't understand that a contractor's schedule is either full or their crew is costing them money.
            </p>
            <p>
              So we built The Farm to solve the actual problem: <strong className="text-white">a complete customer acquisition system that treats marketing as part of the business, not a separate department.</strong>
            </p>
            <p>
              Website. Google. Ads. CRM. Follow-up. Reviews. All connected. All tracked. All accountable.
            </p>
            <p>
              Based in Fair Grove, MO, and serving Springfield and the surrounding region.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0A0A0A] py-20" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="values-heading" className="text-3xl font-bold text-white mb-10 text-center">How We Think</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-7 hover:border-[#FF5F00]/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#FF5F00]/10 flex items-center justify-center mb-5">
                  <v.icon className="w-5 h-5 text-[#FF5F00]" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{v.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we understand */}
      <section className="bg-[#111111] py-20" aria-labelledby="understand-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="understand-heading" className="text-3xl font-bold text-white mb-8">
            We Understand Your World
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              'Seasonality and scheduling',
              'Estimate-to-close ratios',
              'Lead quality vs. lead volume',
              'Service area profitability',
              'Crew capacity constraints',
              'Average job value by service',
              'No-show rates and deposits',
              'Google review impact on trust',
              'The cost of a slow response',
              'Phone calls vs. form fills',
              'Referral vs. paid lead quality',
              'What motivates a homeowner to buy',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F00] shrink-0" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to talk?</h2>
          <p className="text-gray-400 mb-8">Let's look at your business and build a plan that actually grows it.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold text-lg px-8 py-4 rounded-md transition-colors group"
          >
            Get a Free Growth Plan
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
