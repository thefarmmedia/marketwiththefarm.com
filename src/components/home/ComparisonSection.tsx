import Link from 'next/link'
import { Check, X, ArrowRight } from 'lucide-react'

const rows = [
  { label: 'Understands how contractors actually get paid', farm: true, typical: false },
  { label: 'Full CRM & lead pipeline setup', farm: true, typical: false },
  { label: 'You own your website completely', farm: true, typical: false },
  { label: 'Automated lead follow-up built in', farm: true, typical: false },
  { label: 'Google review generation system', farm: true, typical: false },
  { label: 'Every lead tracked back to its source', farm: true, typical: false },
  { label: 'Service-area page SEO strategy', farm: true, typical: 'sometimes' },
  { label: 'Dedicated account manager who knows your business', farm: true, typical: false },
  { label: 'Transparent cost-per-lead reporting', farm: true, typical: false },
  { label: 'No long-term contracts required', farm: true, typical: false },
  { label: 'Results-based strategy (calls, jobs — not impressions)', farm: true, typical: false },
  { label: 'Sends you vanity metric reports', farm: false, typical: true },
]

export default function ComparisonSection() {
  return (
    <section className="bg-[#0A0A0A] py-24 lg:py-32 overflow-hidden" aria-labelledby="comparison-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FF5F00]/8 border border-[#FF5F00]/15 rounded-full px-4 py-1 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F00]" aria-hidden="true" />
            <span className="text-[#FF5F00] text-sm font-semibold tracking-wide">Why Us</span>
          </div>
          <h2 id="comparison-heading" className="text-4xl sm:text-5xl font-black text-white mb-5 leading-[1.05] tracking-tight">
            The Farm vs.<br />
            <span className="gradient-text">The Typical Agency</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Most marketing agencies are interchangeable. The Farm is built exclusively for contractors — that changes everything.
          </p>
        </div>

        {/* Table */}
        <div className="relative rounded-2xl overflow-hidden border border-[#1E1E1E]">
          {/* Subtle top glow on Farm column */}
          <div
            className="absolute top-0 left-1/3 right-0 h-1 pointer-events-none"
            style={{ background: 'linear-gradient(to right, transparent, rgba(255,95,0,0.6), transparent)' }}
            aria-hidden="true"
          />

          {/* Header */}
          <div className="grid grid-cols-3 bg-[#111111] border-b border-[#1E1E1E]">
            <div className="p-5 col-span-1">
              <span className="text-gray-600 text-xs font-semibold uppercase tracking-widest">Feature</span>
            </div>
            <div className="p-5 text-center border-l border-[#1E1E1E] bg-[#FF5F00]/5">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5F00]" aria-hidden="true" />
                <span className="text-[#FF5F00] font-black text-sm tracking-tight">The Farm Media</span>
              </div>
            </div>
            <div className="p-5 text-center border-l border-[#1E1E1E]">
              <span className="text-gray-600 text-xs font-semibold uppercase tracking-widest">Typical Agency</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 border-b border-[#1A1A1A] last:border-0 group transition-colors duration-150 hover:bg-[#141414]`}
            >
              <div className="p-4 sm:p-5 flex items-center">
                <span className="text-gray-400 text-sm leading-relaxed">{row.label}</span>
              </div>
              <div className={`p-4 sm:p-5 flex items-center justify-center border-l border-[#1A1A1A] ${i % 2 === 0 ? 'bg-[#FF5F00]/[0.03]' : 'bg-[#FF5F00]/[0.02]'}`}>
                {row.farm ? (
                  <div className="w-6 h-6 rounded-full bg-[#FF5F00]/15 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[#FF5F00]" aria-label="Yes" />
                  </div>
                ) : (
                  <X className="w-4 h-4 text-gray-700" aria-label="No" />
                )}
              </div>
              <div className="p-4 sm:p-5 flex items-center justify-center border-l border-[#1A1A1A]">
                {row.typical === true ? (
                  <Check className="w-4 h-4 text-gray-600" aria-label="Yes" />
                ) : row.typical === 'sometimes' ? (
                  <span className="text-gray-700 text-xs font-medium">Sometimes</span>
                ) : (
                  <X className="w-4 h-4 text-gray-800" aria-label="No" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#E55500] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 group"
            style={{ boxShadow: '0 0 20px rgba(255,95,0,0.25)' }}
          >
            Talk to The Farm
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
