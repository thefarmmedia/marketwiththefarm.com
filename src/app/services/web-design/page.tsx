import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Smartphone, Zap, Search, Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contractor Web Design — Websites That Generate Leads, Not Just Impressions',
  description: 'The Farm Media builds high-converting websites for contractors and local service businesses. Mobile-first, fast-loading, SEO-ready, and designed to turn visitors into booked jobs.',
  alternates: {
    canonical: 'https://marketwiththefarm.com/services/web-design',
  },
}

const features = [
  { icon: Smartphone, title: 'Mobile-First Design', desc: 'Over 70% of contractor searches happen on mobile. Your site is designed phone-first.' },
  { icon: Zap, title: 'Lightning Fast', desc: 'Sub-3-second load times. Slow sites lose leads before they even see your content.' },
  { icon: Search, title: 'SEO-Ready Architecture', desc: 'Built with clean code, proper schema, and a page structure Google can crawl and rank.' },
  { icon: Phone, title: 'Conversion Architecture', desc: 'Every page is designed with one goal: get the visitor to call or fill out a form.' },
]

export default function WebDesignPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] pt-28 pb-20" aria-labelledby="webdesign-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#FF5F00] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-[#FF5F00] transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300" aria-current="page">Web Design</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-6">
                <span className="text-[#FF5F00] text-sm font-medium">Contractor Web Design</span>
              </div>
              <h1 id="webdesign-heading" className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
                Your Website Should Be Your<br />
                <span className="text-[#FF5F00]">Best Salesperson.</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Most contractor websites look decent and generate nothing. We build websites engineered to turn visitors into calls — with conversion architecture, local SEO structure, and mobile UX that actually works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold px-7 py-3.5 rounded-md transition-colors group">
                  Get a Free Website Audit
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] hover:border-[#FF5F00]/50 text-white hover:text-[#FF5F00] font-semibold px-7 py-3.5 rounded-md transition-colors">
                  See Our Work
                </Link>
              </div>
            </div>

            {/* Browser mockup */}
            <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl overflow-hidden">
              <div className="bg-[#1A1A1A] border-b border-[#2A2A2A] px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" aria-hidden="true" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" aria-hidden="true" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" aria-hidden="true" />
                </div>
                <div className="flex-1 bg-[#0A0A0A] rounded px-3 py-1 text-xs text-gray-500 ml-4 font-mono">
                  smithconcretecoatings.com
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="bg-[#FF5F00] rounded-lg p-5 text-center">
                  <div className="text-white font-bold text-lg mb-1">FREE Instant Quote</div>
                  <div className="text-white/80 text-sm mb-3">Garage Floor Coatings in Springfield, MO</div>
                  <div className="bg-white rounded-md p-3 text-[#0A0A0A] text-sm font-bold text-center cursor-pointer hover:bg-gray-100 transition-colors">
                    📞 Get My Free Quote Now
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {['⭐ 4.9 Rating', '✅ Licensed', '🏆 5+ Years'].map((t) => (
                    <div key={t} className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg p-2 text-center text-xs text-gray-400">
                      {t}
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {['Garage Floor Epoxy', 'Polyaspartic Coating', 'Concrete Resurfacing', 'Basement Floors'].map((s) => (
                    <div key={s} className="flex items-center justify-between py-2 border-b border-[#2A2A2A] last:border-0">
                      <span className="text-gray-300 text-xs">{s}</span>
                      <span className="text-[#FF5F00] text-xs font-medium">→</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#111111] py-20" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="features-heading" className="text-3xl font-bold text-white mb-10 text-center">What Every Farm Website Includes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((f) => (
              <div key={f.title} className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-[#FF5F00]/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-[#FF5F00]" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Every Farm website includes:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                'Custom design — no templates',
                'Homepage built to convert',
                'Service pages (one per service)',
                'City / service-area pages',
                'About page',
                'Contact page with form',
                'Google Analytics 4 setup',
                'Google Search Console setup',
                'Call tracking integration',
                'Google Business Profile optimization',
                'Schema markup (LocalBusiness)',
                'SSL, security hardening',
                'Fast hosting setup',
                'Mobile-responsive across all devices',
                'You own it — no platform lock-in',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-[#FF5F00] shrink-0" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FF5F00] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to see what a real contractor website looks like?</h2>
          <p className="text-white/80 mb-8">We'll audit your current site for free and show you exactly where it's losing leads.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF5F00] font-bold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors">
            Get Your Free Website Audit
          </Link>
        </div>
      </section>
    </>
  )
}
