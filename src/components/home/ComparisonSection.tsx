import { Check, X } from 'lucide-react'

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
    <section className="bg-[#111111] py-20 lg:py-28" aria-labelledby="comparison-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="comparison-heading" className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Farm vs. The Typical Agency
          </h2>
          <p className="text-xl text-gray-400">
            Most marketing agencies could be interchangeable. The Farm is built differently — specifically for contractors.
          </p>
        </div>

        <div className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#161616] border-b border-[#2A2A2A]">
            <div className="p-4 col-span-1">
              <span className="text-gray-500 text-sm font-medium">What they offer</span>
            </div>
            <div className="p-4 text-center border-l border-[#2A2A2A]">
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5F00]" aria-hidden="true" />
                <span className="text-[#FF5F00] font-bold text-sm">The Farm Media</span>
              </div>
            </div>
            <div className="p-4 text-center border-l border-[#2A2A2A]">
              <span className="text-gray-500 text-sm">Typical Agency</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 border-b border-[#2A2A2A] last:border-0 ${
                i % 2 === 0 ? '' : 'bg-[#0D0D0D]'
              }`}
            >
              <div className="p-4 flex items-center">
                <span className="text-gray-300 text-sm leading-relaxed">{row.label}</span>
              </div>
              <div className="p-4 flex items-center justify-center border-l border-[#2A2A2A]">
                {row.farm ? (
                  <Check className="w-5 h-5 text-[#FF5F00]" aria-label="Yes" />
                ) : (
                  <X className="w-4 h-4 text-gray-600" aria-label="No" />
                )}
              </div>
              <div className="p-4 flex items-center justify-center border-l border-[#2A2A2A]">
                {row.typical === true ? (
                  <Check className="w-5 h-5 text-gray-500" aria-label="Yes" />
                ) : row.typical === 'sometimes' ? (
                  <span className="text-gray-600 text-xs font-medium">Sometimes</span>
                ) : (
                  <X className="w-4 h-4 text-gray-700" aria-label="No" />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold px-8 py-4 rounded-md transition-colors"
          >
            Talk to The Farm
          </a>
        </div>
      </div>
    </section>
  )
}
