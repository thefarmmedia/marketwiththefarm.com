import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contractor Marketing by Industry — Concrete, HVAC, Roofing & More | The Farm Media',
  description: 'Industry-specific marketing for contractors and local service businesses. From concrete coatings to HVAC to roofing — we build customer acquisition systems tailored to how your business operates.',
  alternates: { canonical: 'https://marketwiththefarm.com/industries' },
}

const industries = [
  {
    emoji: '🏗️',
    title: 'Concrete Coating Marketing',
    href: '/industries/concrete-coating-marketing',
    desc: 'Epoxy, polyaspartic, decorative concrete, and garage floor coating companies. One of our strongest verticals.',
    stats: ['$24 avg. cost per lead', '#1 rankings achieved', '500%+ lead increases'],
  },
  {
    emoji: '❄️',
    title: 'HVAC Marketing',
    href: '/industries/hvac-marketing',
    desc: 'Heating, cooling, air quality, and HVAC installation/repair companies. Seasonal strategies that keep you booked.',
    stats: ['Multi-city SEO', 'Emergency service ads', 'Review automation'],
  },
  {
    emoji: '🏠',
    title: 'Roofing Marketing',
    href: '/industries/roofing-marketing',
    desc: 'Residential and commercial roofing. Storm damage campaigns, insurance lead gen, and local SEO.',
    stats: ['Storm response ads', '15+ cities ranked', 'Insurance lead gen'],
  },
  {
    emoji: '🔧',
    title: 'Plumber Marketing',
    href: '/industries/plumber-marketing',
    desc: 'Plumbers, drain companies, and water heater specialists. Emergency and scheduled service lead gen.',
    stats: ['Emergency keyword targeting', 'Map pack optimization', 'Service area expansion'],
  },
  {
    emoji: '⚡',
    title: 'Electrician Marketing',
    href: '/industries/electrician-marketing',
    desc: 'Electricians, panel upgrades, EV charger installation. Ranking for both emergency and project keywords.',
    stats: ['Panel upgrade campaigns', 'EV charger targeting', 'Commercial leads'],
  },
  {
    emoji: '🌿',
    title: 'Landscaping Marketing',
    href: '/industries/landscaping-marketing',
    desc: 'Lawn care, landscaping, hardscape, irrigation, and outdoor living companies. Seasonal growth strategies.',
    stats: ['Maintenance plan leads', 'Hardscape project gen', 'Year-round strategies'],
  },
  {
    emoji: '💧',
    title: 'Pressure Washing Marketing',
    href: '/industries/pressure-washing-marketing',
    desc: 'Power washing, soft washing, and exterior cleaning companies. High-volume lead generation.',
    stats: ['Low CPL campaigns', 'Package promotion ads', 'Commercial contracts'],
  },
  {
    emoji: '🚪',
    title: 'Garage Door Marketing',
    href: '/industries/garage-door-marketing',
    desc: 'Installation, repair, spring replacement, and new door sales. Emergency and project-based targeting.',
    stats: ['Emergency repair ads', 'New door campaigns', 'Review generation'],
  },
  {
    emoji: '🎨',
    title: 'Painter Marketing',
    href: '/industries/painter-marketing',
    desc: 'Interior and exterior painting companies. Project-based lead generation targeting homeowners in your area.',
    stats: ['Interior lead gen', 'Exterior project ads', 'Seasonal campaigns'],
  },
  {
    emoji: '🔨',
    title: 'General Contractor Marketing',
    href: '/industries/general-contractor-marketing',
    desc: 'Remodeling, additions, new construction, and general contracting companies. Project-value lead gen.',
    stats: ['High-value project leads', 'Before/after portfolio', 'Commercial targeting'],
  },
]

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] pt-28 pb-20" aria-labelledby="industries-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-6">
              <span className="text-[#FF5F00] text-sm font-medium">Industry Expertise</span>
            </div>
            <h1 id="industries-heading" className="text-5xl sm:text-6xl font-bold text-white mb-5">
              We Don't Do Generic<br />
              <span className="text-[#FF5F00]">Marketing.</span>
            </h1>
            <p className="text-xl text-gray-400">
              Every industry has different search behavior, different seasonality, and different ways customers decide who to hire. We build marketing around how your specific business gets customers — not a one-size-fits-all template.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="group bg-[#111111] border border-[#2A2A2A] rounded-2xl p-7 hover:border-[#FF5F00]/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4" aria-hidden="true">{ind.emoji}</div>
                <h2 className="text-lg font-bold text-white mb-3 group-hover:text-[#FF5F00] transition-colors">{ind.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{ind.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {ind.stats.map((s) => (
                    <span key={s} className="bg-[#FF5F00]/10 border border-[#FF5F00]/20 text-[#FF5F00] text-xs px-2.5 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-[#FF5F00] text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FF5F00] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Your industry isn't listed? We still want to hear from you.</h2>
          <p className="text-white/80 mb-8">If you're a local service business, we probably have a strategy for your market.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF5F00] font-bold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors">
            Talk to The Farm
          </Link>
        </div>
      </section>
    </>
  )
}
