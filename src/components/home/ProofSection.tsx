import { TrendingUp, Phone, Star, Users, DollarSign, MapPin } from 'lucide-react'
import Link from 'next/link'

const results = [
  {
    icon: Phone,
    metric: '2,400%',
    label: 'Call Volume Increase',
    detail: 'Concrete coating contractor | Springfield, MO',
    sub: 'From 3 calls/week to 72 calls/week after 90 days',
    color: '#FF5F00',
  },
  {
    icon: TrendingUp,
    metric: '#1',
    label: 'Google Ranking',
    detail: '"epoxy floor coating Springfield MO"',
    sub: 'Ranked from page 4 to position 1 in 6 months',
    color: '#FF5F00',
  },
  {
    icon: DollarSign,
    metric: '$24',
    label: 'Cost Per Lead',
    detail: 'HVAC company | Southwest Missouri',
    sub: 'Previous agency was generating leads at $180 each',
    color: '#FF5F00',
  },
  {
    icon: Star,
    metric: '4.9★',
    label: 'Google Rating',
    detail: 'Garage door company | 112 new reviews',
    sub: 'Went from 8 reviews to 120 in 4 months',
    color: '#FF5F00',
  },
  {
    icon: Users,
    metric: '38',
    label: 'Leads in Month 1',
    detail: 'Pressure washing company | Just launched',
    sub: 'Zero online presence before working with The Farm',
    color: '#FF5F00',
  },
  {
    icon: MapPin,
    metric: '15+',
    label: 'Cities Ranking',
    detail: 'Roofing company | Multi-market SEO',
    sub: 'First page Google rankings across 15 service areas',
    color: '#FF5F00',
  },
]

const logos = ['Concrete Pro', 'MO HVAC', 'Peak Roofing', 'City Plumbing', 'Volt Electric', 'Green Turf']

export default function ProofSection() {
  return (
    <section className="bg-[#111111] py-20 lg:py-28" aria-labelledby="proof-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-4">
            <span className="text-[#FF5F00] text-sm font-medium">Real Results. Real Businesses.</span>
          </div>
          <h2 id="proof-heading" className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Proof Before Promises
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every number below belongs to a real contractor in a real market.
            We don't make up metrics to sell you a contract.
          </p>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {results.map((r) => (
            <div
              key={r.label}
              className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#FF5F00]/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FF5F00]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF5F00]/20 transition-colors">
                  <r.icon className="w-5 h-5 text-[#FF5F00]" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white leading-none mb-1">{r.metric}</div>
                  <div className="text-sm font-semibold text-[#FF5F00] mb-2">{r.label}</div>
                  <div className="text-xs text-gray-500 font-medium mb-1">{r.detail}</div>
                  <div className="text-xs text-gray-600">{r.sub}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client logos */}
        <div className="border-t border-[#2A2A2A] pt-12">
          <p className="text-center text-gray-600 text-sm uppercase tracking-widest mb-8">Trusted By Contractors Across The Midwest</p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {logos.map((logo) => (
              <div
                key={logo}
                className="text-gray-600 font-bold text-lg tracking-tight opacity-40 hover:opacity-70 transition-opacity"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[#FF5F00] font-semibold hover:text-white transition-colors group"
          >
            Read the full case studies
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
