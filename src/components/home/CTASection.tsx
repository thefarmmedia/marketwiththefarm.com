import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight } from 'lucide-react'

const trust = [
  'No long-term contracts',
  'Free strategy call — no commitment',
  'Results-focused, not retainer-focused',
  'Contractor-only agency',
]

export default function CTASection() {
  return (
    <section
      className="relative bg-[#0A0A0A] py-28 lg:py-36 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background glow orbs */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,95,0,0.12) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,95,0,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F00] animate-pulse" aria-hidden="true" />
          <span className="text-[#FF5F00] text-sm font-semibold tracking-wide">Free Growth Plan — No Commitment</span>
        </div>

        <h2
          id="cta-heading"
          className="text-5xl sm:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.02] tracking-tight mb-6"
        >
          Find Out Where Your<br />
          <span className="gradient-text">Next 20 Jobs Come From.</span>
        </h2>

        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          No sales pitch. No agency buzzwords. Just a straight conversation about what&apos;s working,
          what isn&apos;t, and what we&apos;d do first to fill your schedule.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center gap-2 bg-[#FF5F00] hover:bg-[#E55500] text-white font-black text-lg px-10 py-4 rounded-xl transition-all duration-200 active:scale-95 group overflow-hidden"
            style={{ boxShadow: '0 0 0 1px rgba(255,95,0,0.4), 0 8px 40px rgba(255,95,0,0.35)' }}
          >
            <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden="true" />
            Get Your Free Growth Plan
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <a
            href="tel:+14173655383"
            className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] hover:border-[#FF5F00]/40 text-gray-300 hover:text-white font-semibold text-lg px-10 py-4 rounded-xl transition-all duration-200"
          >
            <Phone className="w-5 h-5 text-[#FF5F00]" aria-hidden="true" />
            (417) 365-5383
          </a>
        </div>

        {/* Trust list */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trust.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle className="w-3.5 h-3.5 text-[#FF5F00] shrink-0" aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
