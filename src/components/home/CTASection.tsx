import Link from 'next/link'
import { Phone, MessageSquare, ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section
      className="relative bg-[#FF5F00] py-20 lg:py-28 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Let's Find Out Where Your<br />Next 20 Jobs Come From.
        </h2>
        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          A free Growth Plan call. No sales pitch. No agency buzzwords.
          Just a straight conversation about what's working, what isn't, and what we'd do first.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#FF5F00] font-bold text-lg px-8 py-4 rounded-md hover:bg-gray-100 transition-colors group"
          >
            Get Your Free Growth Plan
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <a
            href="tel:+14175551234"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold text-lg px-8 py-4 rounded-md hover:border-white hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            Call (417) 555-1234
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            No long-term contracts
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            Free strategy call, no commitment
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            Serving contractors across the Midwest
          </div>
        </div>
      </div>
    </section>
  )
}
