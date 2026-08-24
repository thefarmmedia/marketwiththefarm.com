'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How long does it take to start getting leads?',
    a: 'With Google Ads, you can see leads in the first week — often within 48 hours of launch. SEO and Google Maps take 60–90 days to build momentum, but the leads they generate cost nothing per click once they rank. Most clients run both simultaneously so paid ads cover the short term while organic builds the long-term machine.',
  },
  {
    q: 'Do I have to sign a long-term contract?',
    a: 'No long-term contracts. We work month-to-month after the initial onboarding period. We keep clients because the results justify staying, not because they\'re locked in. Most clients have been with us for 12–24+ months because the system keeps producing.',
  },
  {
    q: 'What makes The Farm different from other marketing agencies?',
    a: 'Most agencies sell you one piece — ads, or a website, or "SEO." We build the full system: your website converts, your SEO ranks you, your ads send qualified traffic, and your CRM closes the loop with instant follow-up. We also specialize exclusively in contractors and local service businesses, so everything we build is proven in your market.',
  },
  {
    q: 'What does it cost?',
    a: 'Pricing depends on your market size, competition, and which services you need. We don\'t have package pricing on the website because a one-location concrete coatings company in a small market has very different needs than a regional HVAC company. The best next step is a free growth plan call — we\'ll tell you exactly what it would take and what it would cost.',
  },
  {
    q: 'Will this work in my market / for my trade?',
    a: 'If homeowners in your market use Google to find contractors — and they do — this system works. We\'ve generated results for concrete coatings, HVAC, roofing, plumbing, electrical, landscaping, pressure washing, and garage doors across markets from 40,000 to 500,000 people. If anything, smaller markets are often easier to dominate.',
  },
  {
    q: 'What do I need to get started?',
    a: 'Just a working phone number and a willingness to answer it. We handle the technical setup — domain, website, Google Business Profile, ad accounts, CRM. We\'ll need your logo, some photos of your work (phone photos are fine to start), and a one-hour onboarding call. That\'s it.',
  },
  {
    q: 'Do you offer reputation management and review generation?',
    a: 'Yes, and it\'s one of the highest-ROI services we offer. We automate review requests via SMS immediately after job completion. Most clients go from under 20 reviews to 80–100+ in four to six months. More reviews mean higher Google Maps rankings, which means more free leads — it compounds over time.',
  },
  {
    q: 'Can I see examples of your work?',
    a: 'Yes — visit our Case Studies page for detailed breakdowns of real client results including before/after lead volume, cost per lead, and revenue attribution. We\'re also happy to show you live examples of websites we\'ve built and rankings we\'ve achieved during a strategy call.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-[#080808] py-24 lg:py-32" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

          {/* Left column — sticky header */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 bg-[#FF5F00]/8 border border-[#FF5F00]/15 rounded-full px-4 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F00]" aria-hidden="true" />
              <span className="text-[#FF5F00] text-sm font-semibold tracking-wide">Common Questions</span>
            </div>
            <h2
              id="faq-heading"
              className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight mb-6"
            >
              Questions We<br />
              <span className="gradient-text">Hear Every Day</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Still not sure? Everything contractors ask before getting started — answered straight.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#E55500] text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 text-sm"
              style={{ boxShadow: '0 0 20px rgba(255,95,0,0.25)' }}
            >
              Talk to us directly
            </Link>
          </div>

          {/* Right column — accordion */}
          <div className="lg:col-span-8" role="list">
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <div
                  key={i}
                  role="listitem"
                  className={`border-b transition-colors duration-200 ${
                    isOpen ? 'border-[#FF5F00]/25' : 'border-[#1E1E1E]'
                  }`}
                >
                  <button
                    className="w-full text-left flex items-start justify-between gap-4 py-6 group"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className={`font-bold text-base sm:text-lg leading-snug transition-colors duration-200 ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                      {faq.q}
                    </span>
                    <span
                      className={`shrink-0 mt-0.5 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? 'bg-[#FF5F00] border-[#FF5F00] text-white'
                          : 'border-[#2A2A2A] text-gray-500 group-hover:border-[#FF5F00]/50 group-hover:text-[#FF5F00]'
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-400 text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
