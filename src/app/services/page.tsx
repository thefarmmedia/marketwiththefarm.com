import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, Search, Megaphone, Share2, Database, Star, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contractor Marketing Services — Web Design, SEO, Google Ads & More',
  description: 'The Farm Media offers web design, local SEO, Google Ads, Facebook Ads, CRM automation, and reputation management for contractors and local service businesses in Missouri and beyond.',
  alternates: {
    canonical: 'https://marketwiththefarm.com/services',
  },
}

const services = [
  {
    icon: Globe,
    title: 'Web Design & Development',
    href: '/services/web-design',
    desc: 'High-converting contractor websites that turn visitors into calls. Mobile-first, lightning-fast, and built with conversion architecture from the ground up.',
    features: ['Conversion-focused design', 'Mobile-first development', 'Service & location pages', 'Instant quote tools', 'Call tracking integration', 'You own it outright'],
    badge: 'Most Popular',
  },
  {
    icon: Search,
    title: 'Local SEO',
    href: '/services/seo',
    desc: 'Rank higher on Google Maps and organic search in your service area. We handle technical SEO, content, Google Business Profile, and service-area page strategy.',
    features: ['Google Business Profile', 'Map pack optimization', 'Service-area pages', 'Local citation building', 'Technical SEO audit', 'Content strategy'],
  },
  {
    icon: Megaphone,
    title: 'Google Ads Management',
    href: '/services/google-ads',
    desc: 'Search campaigns built to generate qualified leads — not clicks. We manage Google Search, Google Local Services Ads, and Performance Max for service businesses.',
    features: ['Search campaigns', 'Local Services Ads', 'Conversion tracking', 'Landing page creation', 'Cost-per-lead reporting', 'Continuous optimization'],
  },
  {
    icon: Share2,
    title: 'Facebook & Meta Ads',
    href: '/services/facebook-ads',
    desc: 'Targeted social ads that reach homeowners in your service area before they search Google. Great for demand generation, special offers, and retargeting.',
    features: ['Facebook & Instagram Ads', 'Audience targeting', 'Lead generation ads', 'Retargeting campaigns', 'Creative strategy', 'A/B testing'],
  },
  {
    icon: Database,
    title: 'CRM & Automation',
    href: '/services/crm-automation',
    desc: 'Automate your follow-up so you never lose a lead again. Instant SMS, email sequences, missed-call text back, and a pipeline that shows you every lead\'s status.',
    features: ['CRM setup & training', 'Instant SMS (60-sec)', 'Email sequences', 'Missed-call text back', 'Pipeline management', 'Lead source tracking'],
  },
  {
    icon: Star,
    title: 'Reputation Management',
    href: '/services/reputation-management',
    desc: 'Build your Google reviews faster and protect your online reputation. Automated review requests, monitoring, and response management.',
    features: ['Automated review requests', 'Google review strategy', 'Review monitoring', 'Response management', 'Review page creation', 'Negative review handling'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] pt-28 pb-20" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-6">
              <span className="text-[#FF5F00] text-sm font-medium">Our Services</span>
            </div>
            <h1 id="services-heading" className="text-5xl sm:text-6xl font-bold text-white mb-5 leading-tight">
              Every Piece of the<br />
              <span className="text-[#FF5F00]">Growth Machine</span>
            </h1>
            <p className="text-xl text-gray-400">
              We offer each service individually or as a complete connected system. Most clients find the system works better than any single piece on its own.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group relative bg-[#111111] border border-[#2A2A2A] rounded-2xl p-7 hover:border-[#FF5F00]/40 transition-all duration-300 flex flex-col"
              >
                {s.badge && (
                  <div className="absolute top-5 right-5 bg-[#FF5F00] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {s.badge}
                  </div>
                )}
                <div className="w-11 h-11 rounded-xl bg-[#FF5F00]/10 flex items-center justify-center mb-5 group-hover:bg-[#FF5F00]/20 transition-colors">
                  <s.icon className="w-5 h-5 text-[#FF5F00]" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF5F00] transition-colors">{s.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                <ul className="space-y-2 mb-6" role="list">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F00]" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1 text-[#FF5F00] text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">Not sure which service is right for your business?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold text-lg px-8 py-4 rounded-md transition-colors group"
            >
              Get a Free Strategy Call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
