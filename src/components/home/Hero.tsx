'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Star, ChevronDown } from 'lucide-react'

const stats = [
  { value: '850+', label: 'Leads Generated' },
  { value: '3.2x', label: 'Avg. Lead Increase' },
  { value: '$28', label: 'Avg. Cost Per Lead' },
  { value: '94%', label: 'Client Retention' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0A]"
      aria-label="Hero"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,95,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,95,0,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #FF5F00 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FF5F00] animate-pulse" aria-hidden="true" />
            <span className="text-[#FF5F00] text-sm font-medium">Built for Contractors. Proven by Results.</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6">
            Stop Buying<br />Marketing.{' '}
            <span
              className="text-[#FF5F00]"
              style={{
                textShadow: '0 0 60px rgba(255,95,0,0.4)',
              }}
            >
              Start Building<br />a Lead Machine.
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed mb-10 max-w-3xl">
            The Farm Media builds complete customer acquisition systems for contractors
            — websites, Google rankings, paid ads, automated follow-up, and review growth
            that all work together to fill your schedule.
          </p>

          {/* Proof line */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-10">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FF5F00] text-[#FF5F00]" aria-hidden="true" />
              ))}
              <span className="text-gray-400 text-sm ml-1">5.0 on Google</span>
            </div>
            <span className="text-gray-600 hidden sm:block" aria-hidden="true">•</span>
            <span className="text-gray-400 text-sm">Serving contractors across the Midwest</span>
            <span className="text-gray-600 hidden sm:block" aria-hidden="true">•</span>
            <span className="text-gray-400 text-sm">No long-term contracts</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold text-lg px-8 py-4 rounded-md transition-all duration-200 active:scale-95 group"
            >
              Get a Free Growth Plan
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] hover:border-[#FF5F00]/50 text-white hover:text-[#FF5F00] font-semibold text-lg px-8 py-4 rounded-md transition-all duration-200"
            >
              See Real Results
            </Link>
            <a
              href="tel:+14175551234"
              className="inline-flex items-center justify-center gap-2 text-gray-400 hover:text-white font-semibold text-base px-4 py-4 transition-colors sm:hidden"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call (417) 555-1234
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  )
}
