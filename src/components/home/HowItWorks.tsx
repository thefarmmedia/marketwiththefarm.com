import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'We Audit Your Market',
    body: 'We show you exactly where your competitors are winning and where the opportunity is. You see the gap before you spend a dollar.',
    color: '#6366F1',
  },
  {
    number: '02',
    title: 'We Build the System',
    body: 'Website, SEO, ads, CRM automation, and review generation — all connected, all optimized to generate real leads in your market.',
    color: '#FF5F00',
  },
  {
    number: '03',
    title: 'You Answer the Phone',
    body: 'The system runs. Leads come in. Our automation follows up instantly. You close jobs and grow while we manage the marketing.',
    color: '#10B981',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#111111] py-24 lg:py-32" aria-labelledby="how-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FF5F00]/8 border border-[#FF5F00]/15 rounded-full px-4 py-1 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F00]" aria-hidden="true" />
            <span className="text-[#FF5F00] text-sm font-semibold tracking-wide">Simple. Proven. Repeatable.</span>
          </div>
          <h2
            id="how-heading"
            className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight"
          >
            How The Farm<br />
            <span className="gradient-text">Fills Your Schedule</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-14">
          {steps.map((step, i) => (
            <div key={step.number} className="relative group">
              {/* Connector line (hidden on last) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-10 left-[calc(100%-1px)] w-6 h-px z-10"
                  style={{ background: 'linear-gradient(to right, rgba(255,95,0,0.3), rgba(255,95,0,0.05))' }}
                  aria-hidden="true"
                />
              )}

              <div className="h-full bg-[#0D0D0D] border border-[#1E1E1E] rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:border-[#FF5F00]/20 relative">
                {/* Step number bg watermark */}
                <div
                  className="absolute -top-4 -right-2 text-[7rem] font-black text-white/[0.015] leading-none select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {step.number}
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ background: `${step.color}18`, color: step.color, border: `1px solid ${step.color}30` }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 leading-tight">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-[#FF5F00] transition-colors group"
          >
            See the full system
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
