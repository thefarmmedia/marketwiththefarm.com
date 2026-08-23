import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Search, TrendingUp, FileText, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Local SEO for Contractors — Rank on Google Maps & Search | The Farm Media',
  description: 'Local SEO services for contractors and local service businesses. We optimize your Google Business Profile, build service-area pages, and get you ranking where your customers are searching.',
  alternates: {
    canonical: 'https://marketwiththefarm.com/services/seo',
  },
}

const tactics = [
  { icon: MapPin, title: 'Google Business Profile', desc: 'Full optimization, photo strategy, Q&A, posts, and ongoing management to dominate the local map pack.' },
  { icon: Search, title: 'Keyword Research', desc: 'Finding the exact searches your customers use in your market — then building pages that capture them.' },
  { icon: FileText, title: 'Service-Area Pages', desc: 'Individual pages for each city and suburb you serve, built to rank for "[service] + [city]" searches.' },
  { icon: TrendingUp, title: 'Technical SEO', desc: 'Core Web Vitals, page speed, schema markup, crawlability, and site structure that Google rewards.' },
]

export default function SEOPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] pt-28 pb-20" aria-labelledby="seo-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#FF5F00] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-[#FF5F00] transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300" aria-current="page">Local SEO</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-6">
              <span className="text-[#FF5F00] text-sm font-medium">Local SEO for Contractors</span>
            </div>
            <h1 id="seo-heading" className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Show Up First When<br />
              <span className="text-[#FF5F00]">Customers Are Searching.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              When someone searches "epoxy floor coating near me" or "HVAC repair Springfield MO," they're ready to buy. We make sure your company is the one they find and call.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold px-7 py-3.5 rounded-md transition-colors group">
              Get a Free SEO Audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10">How We Get Contractors to Page 1</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tactics.map((t) => (
              <div key={t.title} className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-6 flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#FF5F00]/10 flex items-center justify-center shrink-0">
                  <t.icon className="w-5 h-5 text-[#FF5F00]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{t.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FF5F00] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Find out where you stand on Google right now.</h2>
          <p className="text-white/80 mb-8">Free SEO visibility report — see exactly how you rank vs. your competitors.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF5F00] font-bold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors">
            Get My Free SEO Report
          </Link>
        </div>
      </section>
    </>
  )
}
