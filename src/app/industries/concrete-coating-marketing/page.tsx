import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, Globe, Phone, Star, MapPin, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Concrete Coating Marketing — Epoxy & Polyaspartic Contractor Marketing | The Farm Media',
  description: 'Marketing for concrete coating, epoxy, and polyaspartic contractors. We generate qualified garage floor leads, rank you on Google, and build systems that fill your schedule year-round.',
  alternates: { canonical: 'https://marketwiththefarm.com/industries/concrete-coating-marketing' },
}

const keywords = [
  'garage floor coating near me',
  'epoxy floor coating [city]',
  'polyaspartic garage floor [city]',
  'concrete floor coating contractor',
  'garage floor epoxy cost',
  'epoxy garage floor installation',
  'concrete coating company near me',
  'floor coating contractor [city]',
  'decorative concrete [city]',
  'garage floor resurfacing near me',
]

const strategies = [
  {
    icon: Search,
    title: 'Local SEO That Targets Buyers',
    desc: 'We build city-specific landing pages for every market you serve — so when someone searches "garage floor coating Springfield MO," your company shows up first. We\'ve ranked concrete coating contractors to position #1 in competitive markets.',
  },
  {
    icon: Globe,
    title: 'Conversion-Built Websites',
    desc: 'Your website needs to show before/after photos, pricing guidance, and an easy quote form — above the fold on mobile. We build concrete coating sites that convert visitors into quote requests at rates 3x the industry average.',
  },
  {
    icon: Phone,
    title: 'Instant Lead Follow-Up',
    desc: 'Concrete coating leads are competitive. If you wait 2 hours to call back, they\'ve already booked someone else. Our automation sends a text to every new lead within 60 seconds.',
  },
  {
    icon: Star,
    title: 'Google Review Generation',
    desc: 'After every garage floor installation, our system automatically requests a Google review. Clients have gone from 8 reviews to 120+ in under 6 months — which directly improves Google rankings and customer trust.',
  },
  {
    icon: MapPin,
    title: 'Multi-City Service Area SEO',
    desc: 'If you serve 10 cities, you need 10 pages — each one optimized for local searches. We build a service-area page structure that systematically expands your Google footprint across every market you work in.',
  },
  {
    icon: TrendingUp,
    title: 'Google Ads for Floor Coating',
    desc: 'Paid search campaigns targeting "garage floor coating" and related keywords in your service area. We track every lead to the keyword that generated it and optimize relentlessly for cost-per-booked-job.',
  },
]

const faqs = [
  {
    q: 'How long does it take for SEO to work for a concrete coating company?',
    a: 'Most of our concrete coating clients start seeing increased call volume within 60–90 days for Google Ads, and within 4–6 months for organic SEO and Google Maps. The timeline depends on your market competition and current online presence.',
  },
  {
    q: 'What keywords should a concrete coating company target?',
    a: 'The highest-value keywords are "garage floor coating near me," "epoxy garage floor [city]," "polyaspartic floor coating [city]," and "concrete floor coating contractor." We do full keyword research for your specific service area before building your pages.',
  },
  {
    q: 'How much do leads cost for concrete coating companies?',
    a: 'Our concrete coating clients typically achieve a cost per lead between $18–$45 depending on their market. With an average job value of $3,000–$6,000 and strong close rates, the ROI is typically 10x or higher.',
  },
  {
    q: 'Do I need a new website to work with The Farm?',
    a: 'Not necessarily. We audit your current website and recommend improvements. Sometimes we rebuild it completely; sometimes we add specific pages and fix conversion issues on the existing site. We\'ll be honest about what your situation needs.',
  },
  {
    q: 'Can you help me expand into new cities?',
    a: 'Yes — this is one of our specialties. We build service-area page strategies and Google Business Profile approaches that help concrete coating companies expand their geographic reach systematically without diluting their core market rankings.',
  },
]

export default function ConcreteCoatingPage() {
  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-[#0A0A0A] pt-28 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#FF5F00] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/industries" className="hover:text-[#FF5F00] transition-colors">Industries</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300" aria-current="page">Concrete Coating Marketing</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-[#0A0A0A] py-16" aria-labelledby="cc-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-6">
              <span className="text-[#FF5F00] text-sm font-medium">Concrete Coating Marketing</span>
            </div>
            <h1 id="cc-heading" className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              More Garage Floor Leads.<br />
              <span className="text-[#FF5F00]">Fewer Slow Weeks.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              We build complete marketing systems for epoxy, polyaspartic, and decorative concrete contractors — websites that convert, Google rankings that generate inbound leads, and automation that ensures no lead goes cold. Concrete coating is one of our strongest verticals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold px-7 py-3.5 rounded-md transition-colors group">
                Get a Free Growth Plan
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 border border-[#2A2A2A] hover:border-[#FF5F00]/50 text-white hover:text-[#FF5F00] font-semibold px-7 py-3.5 rounded-md transition-colors">
                See Case Studies
              </Link>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '$24', label: 'Avg. Cost Per Lead' },
                { value: '2,400%', label: 'Call Volume Increase' },
                { value: '#1', label: 'Google Rankings Achieved' },
              ].map((s) => (
                <div key={s.label} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#FF5F00] mb-1">{s.value}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How customers search */}
      <section className="bg-[#111111] py-20" aria-labelledby="search-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 id="search-heading" className="text-3xl font-bold text-white mb-6">
                How Customers Search for Concrete Coating Contractors
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Most concrete coating customers start with a local search on Google. They're typically homeowners who are renovating their garage, moving into a new home, or have seen a neighbor's floor. The purchase decision often happens within 24–72 hours of searching, and they typically get 2–3 quotes.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                The contractor who shows up first, has the best reviews, and responds fastest wins the majority of those jobs. Our system is designed to win on all three of those factors.
              </p>
              <h3 className="text-lg font-bold text-white mb-4">Highest-value search terms:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {keywords.map((kw) => (
                  <div key={kw} className="flex items-center gap-2 text-sm text-gray-400">
                    <Search className="w-3.5 h-3.5 text-[#FF5F00] shrink-0" aria-hidden="true" />
                    {kw}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-2xl p-6">
                <h3 className="font-bold text-white mb-4">The concrete coating customer journey</h3>
                {[
                  'Searches "garage floor coating near me" on mobile',
                  'Views top 3 Google Maps results and reviews',
                  'Visits the website with the best reviews and clearest pricing',
                  'Calls or requests a quote from their phone',
                  'Gets an instant text response within 60 seconds',
                  'Schedules estimate within 24 hours',
                  'Compares 1–2 other quotes',
                  'Hires the company with the fastest response and best reviews',
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-3 py-2 border-b border-[#2A2A2A] last:border-0">
                    <span className="w-5 h-5 rounded-full bg-[#FF5F00] flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                    <span className="text-gray-400 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="bg-[#0A0A0A] py-20" aria-labelledby="strategy-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="strategy-heading" className="text-3xl font-bold text-white mb-10 text-center">
            Our Concrete Coating Marketing Strategy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategies.map((s) => (
              <div key={s.title} className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#FF5F00]/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#FF5F00]/10 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-[#FF5F00]" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What your website needs */}
      <section className="bg-[#111111] py-20" aria-labelledby="website-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="website-heading" className="text-3xl font-bold text-white mb-8">
            What a Concrete Coating Website Needs to Convert
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Most concrete coating websites fail for the same reasons: no clear pricing guidance, no visible reviews above the fold, no mobile-optimized quote form, and no city-specific content. We fix all of this.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Before/after photo gallery prominently displayed',
              'Pricing or "starting at" information visible',
              'Mobile click-to-call button sticky on scroll',
              'Instant quote form above the fold on all pages',
              'Google reviews displayed on homepage',
              'Individual service pages (epoxy, polyaspartic, etc.)',
              'City-specific landing pages for every market served',
              'Clear explanation of your process and timeline',
              'Project photos organized by floor type',
              'Fast load time (under 3 seconds on mobile)',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-[#FF5F00] shrink-0" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#0A0A0A] py-20" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="text-3xl font-bold text-white mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-[#111111] border border-[#2A2A2A] rounded-xl group" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="p-5 cursor-pointer font-semibold text-white group-open:text-[#FF5F00] list-none flex items-center justify-between" itemProp="name">
                  {faq.q}
                  <span className="text-[#FF5F00] ml-4 shrink-0" aria-hidden="true">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#2A2A2A] pt-4" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p itemProp="text">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FF5F00] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to fill your schedule with garage floor jobs?</h2>
          <p className="text-white/80 mb-8">Get a free growth plan for your concrete coating business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF5F00] font-bold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors">
            Get My Free Growth Plan
          </Link>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: { '@type': 'Answer', text: faq.a },
            })),
          }),
        }}
      />
    </>
  )
}
