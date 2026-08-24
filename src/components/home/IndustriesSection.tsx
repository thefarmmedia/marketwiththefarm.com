import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const industries = [
  { label: 'Concrete Coatings', icon: '🏗️', href: '/industries/concrete-coating-marketing', desc: 'Epoxy, polyaspartic, decorative concrete' },
  { label: 'HVAC', icon: '❄️', href: '/industries/hvac-marketing', desc: 'Heating, cooling & air quality' },
  { label: 'Roofing', icon: '🏠', href: '/industries/roofing-marketing', desc: 'Residential & commercial roofing' },
  { label: 'Plumbing', icon: '🔧', href: '/industries/plumber-marketing', desc: 'Plumbers & drain service companies' },
  { label: 'Electrical', icon: '⚡', href: '/industries/electrician-marketing', desc: 'Electricians & panel upgrades' },
  { label: 'Landscaping', icon: '🌿', href: '/industries/landscaping-marketing', desc: 'Lawn care, landscaping & hardscape' },
  { label: 'Pressure Washing', icon: '💧', href: '/industries/pressure-washing-marketing', desc: 'Power washing & exterior cleaning' },
  { label: 'Garage Doors', icon: '🚪', href: '/industries/garage-door-marketing', desc: 'Installation, repair & springs' },
  { label: 'Painting', icon: '🎨', href: '/industries/painter-marketing', desc: 'Interior & exterior painting' },
  { label: 'General Contractors', icon: '🔨', href: '/industries/general-contractor-marketing', desc: 'Remodeling & construction' },
]

export default function IndustriesSection() {
  return (
    <section className="bg-[#111111] py-24 lg:py-32" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FF5F00]/8 border border-[#FF5F00]/15 rounded-full px-4 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F00]" aria-hidden="true" />
              <span className="text-[#FF5F00] text-sm font-semibold tracking-wide">Industry Expertise</span>
            </div>
            <h2 id="industries-heading" className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight">
              We Speak<br />
              <span className="gradient-text">Contractor.</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-md leading-relaxed">
              Generic agencies don&apos;t understand your business. We&apos;re built specifically for trades and local service companies.
            </p>
          </div>
          <Link
            href="/industries"
            className="flex items-center gap-2 text-[#FF5F00] font-semibold hover:text-white transition-colors group whitespace-nowrap text-sm"
          >
            View all industries
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {industries.map((ind) => (
            <Link
              key={ind.href}
              href={ind.href}
              className="relative group bg-[#0D0D0D] border border-[#1E1E1E] rounded-xl p-5 overflow-hidden transition-all duration-300 hover:border-[#FF5F00]/30 hover:-translate-y-0.5"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,95,0,0.07) 0%, transparent 70%)' }}
                aria-hidden="true"
              />
              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to right, transparent, rgba(255,95,0,0.5), transparent)' }}
                aria-hidden="true"
              />

              <div className="relative">
                <div className="text-3xl mb-4" aria-hidden="true">{ind.icon}</div>
                <div className="font-bold text-white text-sm mb-1.5 group-hover:text-[#FF5F00] transition-colors duration-200">
                  {ind.label}
                </div>
                <div className="text-xs text-gray-600 leading-relaxed">{ind.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
