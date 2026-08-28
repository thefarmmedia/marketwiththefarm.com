'use client'

import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Phone, Star, Users, DollarSign, MapPin } from 'lucide-react'
import Link from 'next/link'

const results = [
  {
    icon: Phone,
    metric: '2,400%',
    label: 'Call Volume Increase',
    detail: 'Concrete coating contractor · Springfield, MO',
    sub: 'From 3 calls/week to 72 calls/week in 90 days',
  },
  {
    icon: TrendingUp,
    metric: '#1',
    label: 'Google Ranking',
    detail: '"epoxy floor coating Springfield MO"',
    sub: 'Page 4 → Position 1 in 6 months',
  },
  {
    icon: DollarSign,
    metric: '$24',
    label: 'Cost Per Lead',
    detail: 'HVAC company · Southwest Missouri',
    sub: 'Previous agency was charging $180/lead',
  },
  {
    icon: Star,
    metric: '4.9★',
    label: 'Google Rating',
    detail: 'Garage door company · 112 new reviews',
    sub: '8 reviews to 120 in 4 months',
  },
  {
    icon: Users,
    metric: '38',
    label: 'Leads in Month 1',
    detail: 'Pressure washing company · Just launched',
    sub: 'Zero online presence before The Farm',
  },
  {
    icon: MapPin,
    metric: '15+',
    label: 'Cities Ranking',
    detail: 'Roofing company · Multi-market SEO',
    sub: 'First page across 15 service areas',
  },
]

const logos = [
  'Show Me Epoxy', 'HH Next Level Epoxy', 'Twin Lakes Epoxy', 'Crete Creations',
  'Grand Slam', 'Shippmates Epoxy', 'Field of Screams Nixa', 'Missouri Epic', 'The Farm Media',
]

function ResultCard({ r, index }: { r: typeof results[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`card-hover relative bg-[#0D0D0D] border border-[#1E1E1E] rounded-2xl p-6 overflow-hidden group transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Orange corner accent */}
      <div
        className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'radial-gradient(circle at top right, rgba(255,95,0,0.12) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#FF5F00]/10 border border-[#FF5F00]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF5F00]/20 group-hover:border-[#FF5F00]/30 transition-all duration-300">
          <r.icon className="w-4.5 h-4.5 text-[#FF5F00]" aria-hidden="true" />
        </div>

        <div className="min-w-0">
          <div className="text-4xl font-black text-white leading-none mb-1 tracking-tight group-hover:text-[#FF5F00] transition-colors duration-300">
            {r.metric}
          </div>
          <div className="text-xs font-bold text-[#FF5F00]/80 uppercase tracking-widest mb-3">{r.label}</div>
          <div className="text-xs text-gray-500 font-medium mb-1 leading-relaxed">{r.detail}</div>
          <div className="text-xs text-gray-600 leading-relaxed">{r.sub}</div>
        </div>
      </div>

      {/* Bottom border highlight on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5F00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
    </div>
  )
}

export default function ProofSection() {
  const headRef = useRef<HTMLDivElement>(null)
  const [headVisible, setHeadVisible] = useState(false)

  useEffect(() => {
    const el = headRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeadVisible(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="relative bg-[#080808] py-24 lg:py-32 overflow-hidden" aria-labelledby="proof-heading">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" aria-hidden="true" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,95,0,0.8) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headRef}
          className={`text-center mb-16 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="inline-flex items-center gap-2 bg-[#FF5F00]/8 border border-[#FF5F00]/15 rounded-full px-4 py-1 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F00]" aria-hidden="true" />
            <span className="text-[#FF5F00] text-sm font-semibold tracking-wide">Real Results. Real Businesses.</span>
          </div>
          <h2 id="proof-heading" className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight">
            Proof Before<br />
            <span className="gradient-text">Promises.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Every number below belongs to a real contractor in a real market. No made-up metrics.
          </p>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
          {results.map((r, i) => (
            <ResultCard key={r.label} r={r} index={i} />
          ))}
        </div>

        {/* Logo marquee */}
        <div className="border-t border-[#1A1A1A] pt-14 mb-12">
          <p className="text-center text-gray-700 text-[11px] uppercase tracking-[0.25em] font-semibold mb-8">
            Trusted by businesses across Missouri
          </p>
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #080808, transparent)' }} aria-hidden="true" />
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #080808, transparent)' }} aria-hidden="true" />
            <div className="flex animate-marquee whitespace-nowrap">
              {[...logos, ...logos].map((logo, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-3 text-gray-600 font-bold text-sm tracking-tight mx-8 hover:text-gray-400 transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-[#FF5F00]/40" aria-hidden="true" />
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[#FF5F00] font-semibold hover:text-white transition-colors duration-200 group text-sm uppercase tracking-widest"
          >
            Read the full case studies
            <span className="transition-transform group-hover:translate-x-1.5 inline-block" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" aria-hidden="true" />
    </section>
  )
}
