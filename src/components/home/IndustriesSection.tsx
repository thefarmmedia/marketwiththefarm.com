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
    <section className="bg-[#0A0A0A] py-20 lg:py-28" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-4">
              <span className="text-[#FF5F00] text-sm font-medium">Industry Expertise</span>
            </div>
            <h2 id="industries-heading" className="text-4xl sm:text-5xl font-bold text-white">
              We Speak Contractor.
            </h2>
            <p className="text-gray-400 mt-3 max-w-lg">
              Generic marketing agencies don't understand your business. We're built specifically for trades and local service companies.
            </p>
          </div>
          <Link href="/industries" className="text-[#FF5F00] font-semibold hover:text-white transition-colors flex items-center gap-1.5 group whitespace-nowrap">
            All industries
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {industries.map((ind) => (
            <Link
              key={ind.href}
              href={ind.href}
              className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-5 hover:border-[#FF5F00]/40 hover:bg-[#FF5F00]/5 transition-all duration-200 group"
            >
              <div className="text-3xl mb-3" aria-hidden="true">{ind.icon}</div>
              <div className="font-bold text-white text-sm mb-1 group-hover:text-[#FF5F00] transition-colors">{ind.label}</div>
              <div className="text-xs text-gray-500">{ind.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
