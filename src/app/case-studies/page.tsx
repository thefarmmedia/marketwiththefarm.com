import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Phone, Star, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contractor Marketing Case Studies — Real Results from Real Businesses | The Farm Media',
  description: 'See real results from real contractors who work with The Farm Media. Case studies showing lead increases, SEO rankings, cost per lead, and revenue generated.',
  alternates: { canonical: 'https://marketwiththefarm.com/case-studies' },
}

const caseStudies = [
  {
    slug: 'show-me-epoxy',
    client: 'Show Me Epoxy',
    industry: 'Concrete Coatings',
    location: 'Missouri',
    url: 'showmeepoxy.com',
    problem: 'Relying on referrals with no predictable lead flow. Needed a digital presence that could generate consistent inbound leads.',
    result: 'New website, Google Maps rankings, and paid ads working together to deliver consistent qualified leads month over month.',
    metrics: [
      { label: 'Lead Flow', value: 'Consistent', icon: Phone },
      { label: 'Google Maps', value: 'Ranking', icon: TrendingUp },
      { label: 'Website', value: 'Live', icon: TrendingUp },
      { label: 'Reviews', value: 'Growing', icon: Star },
    ],
    services: ['Web Design', 'Local SEO', 'Google Ads', 'Review Generation'],
    featured: true,
  },
  {
    slug: 'hh-next-level-epoxy',
    client: 'HH Next Level Epoxy',
    industry: 'Concrete Coatings',
    location: 'Missouri',
    url: 'hhnextlevelepoxy.com',
    problem: 'Strong work quality but no online visibility. Competitors with inferior work were winning jobs simply because they showed up first on Google.',
    result: 'High-converting website with Google Maps presence and automated lead follow-up driving booked estimates.',
    metrics: [
      { label: 'Online Presence', value: 'Built', icon: TrendingUp },
      { label: 'Lead System', value: 'Live', icon: Phone },
      { label: 'Follow-Up', value: 'Automated', icon: TrendingUp },
      { label: 'Visibility', value: 'Top 3', icon: Star },
    ],
    services: ['Web Design', 'Local SEO', 'CRM Automation', 'Google Business Profile'],
    featured: true,
  },
  {
    slug: 'twin-lakes-epoxy',
    client: 'Twin Lakes Epoxy',
    industry: 'Concrete Coatings',
    location: 'Missouri',
    url: 'twinlakesepoxy.com',
    problem: 'Zero digital footprint. Getting by on word of mouth alone in a competitive market with no way to scale.',
    result: 'Complete digital presence built from scratch — website, SEO, and ads generating steady inbound leads.',
    metrics: [
      { label: 'Start Point', value: 'Zero', icon: TrendingUp },
      { label: 'Website', value: 'Built', icon: Phone },
      { label: 'SEO', value: 'Ranking', icon: TrendingUp },
      { label: 'Leads', value: 'Flowing', icon: Star },
    ],
    services: ['Web Design', 'Local SEO', 'Google Ads', 'CRM Setup'],
    featured: false,
  },
  {
    slug: 'crete-creations',
    client: 'Crete Creations LLC',
    industry: 'Concrete Coatings',
    location: 'Missouri',
    url: 'cretecreationsllc.com',
    problem: 'Existing website wasn\'t converting visitors into leads. Traffic existed but the phone wasn\'t ringing.',
    result: 'Rebuilt for conversion with proper CTAs, fast mobile load times, and integrated lead capture that turns visitors into calls.',
    metrics: [
      { label: 'Conversions', value: 'Up', icon: TrendingUp },
      { label: 'Mobile Speed', value: 'Fast', icon: Phone },
      { label: 'Lead Capture', value: 'Active', icon: TrendingUp },
      { label: 'Phone Calls', value: 'Ringing', icon: Star },
    ],
    services: ['Web Design', 'Conversion Optimization', 'Call Tracking', 'Local SEO'],
    featured: false,
  },
  {
    slug: 'grand-slam',
    client: 'Grand Slam',
    industry: 'Entertainment',
    location: 'Missouri',
    url: 'play-grandslam.com',
    problem: 'Needed to drive consistent foot traffic and online bookings through digital channels.',
    result: 'Digital marketing strategy driving local awareness, bookings, and repeat customers through targeted paid ads.',
    metrics: [
      { label: 'Bookings', value: 'Up', icon: Phone },
      { label: 'Local Reach', value: 'Expanded', icon: MapPin },
      { label: 'Ad ROI', value: 'Positive', icon: TrendingUp },
      { label: 'Visibility', value: 'Strong', icon: Star },
    ],
    services: ['Google Ads', 'Facebook Ads', 'Local SEO', 'Landing Pages'],
    featured: false,
  },
  {
    slug: 'shippmates-epoxy',
    client: 'Shippmates Epoxy',
    industry: 'Concrete Coatings',
    location: 'Missouri',
    url: 'shippmatesepoxy.com',
    problem: 'Leads were inconsistent — feast or famine. Needed a reliable, predictable system to keep the calendar full.',
    result: 'CRM automation and Google Ads working together to ensure no lead goes cold and the schedule stays full.',
    metrics: [
      { label: 'Lead Loss', value: 'Zero', icon: Phone },
      { label: 'Follow-Up', value: '60 sec', icon: TrendingUp },
      { label: 'Schedule', value: 'Full', icon: TrendingUp },
      { label: 'System', value: 'Running', icon: Star },
    ],
    services: ['CRM Automation', 'Google Ads', 'Web Design', 'Review Generation'],
    featured: false,
  },
  {
    slug: 'field-of-screams-nixa',
    client: 'Field of Screams Nixa',
    industry: 'Entertainment',
    location: 'Nixa, MO',
    url: 'fieldofscreamsnixa.com',
    problem: 'Seasonal business needing maximum awareness and ticket sales during a short operating window each fall.',
    result: 'Targeted paid campaigns and local SEO driving ticket sales and awareness during the critical season.',
    metrics: [
      { label: 'Ticket Sales', value: 'Up', icon: TrendingUp },
      { label: 'Local Awareness', value: 'High', icon: MapPin },
      { label: 'Season', value: 'Maxed', icon: Phone },
      { label: 'ROI', value: 'Strong', icon: Star },
    ],
    services: ['Facebook Ads', 'Google Ads', 'Local SEO', 'Landing Pages'],
    featured: false,
  },
  {
    slug: 'missouri-epic',
    client: 'Missouri Epic',
    industry: 'Entertainment / Events',
    location: 'Missouri',
    url: 'missouriepic.com',
    problem: 'Needed a strong digital presence and lead generation strategy to grow the business and reach more customers across Missouri.',
    result: 'Full digital marketing system built to drive awareness, generate leads, and convert local interest into customers.',
    metrics: [
      { label: 'Presence', value: 'Built', icon: TrendingUp },
      { label: 'Reach', value: 'Statewide', icon: MapPin },
      { label: 'Leads', value: 'Flowing', icon: Phone },
      { label: 'Growth', value: 'On Track', icon: Star },
    ],
    services: ['Web Design', 'Local SEO', 'Google Ads', 'Social Ads'],
    featured: false,
  },
]

export default function CaseStudiesPage() {
  const featured = caseStudies.filter((c) => c.featured)
  const rest = caseStudies.filter((c) => !c.featured)

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-28 pb-16" aria-labelledby="cs-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-[#FF5F00]/8 border border-[#FF5F00]/15 rounded-full px-4 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F00]" aria-hidden="true" />
              <span className="text-[#FF5F00] text-sm font-semibold tracking-wide">Real Clients. Real Results.</span>
            </div>
            <h1 id="cs-heading" className="text-5xl sm:text-6xl font-black text-white mb-5 leading-[1.05] tracking-tight">
              Proof, Not<br />
              <span className="gradient-text">Promises.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Every business below is a real Farm Media client. These aren&apos;t made-up metrics —
              they&apos;re real companies in real Missouri markets.
            </p>
          </div>

          {/* Featured case studies */}
          <div className="space-y-5 mb-5">
            {featured.map((cs) => (
              <div
                key={cs.slug}
                className="relative bg-[#0F0F0F] border border-[#FF5F00]/20 rounded-2xl p-8 lg:p-10 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5F00]/40 to-transparent" aria-hidden="true" />
                <div className="inline-flex items-center gap-1.5 bg-[#FF5F00] text-white text-xs font-bold px-3 py-1 rounded-full mb-6">
                  <span>Featured Client</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <h2 className="text-white font-black text-2xl">{cs.client}</h2>
                      <span className="bg-[#FF5F00]/10 border border-[#FF5F00]/20 text-[#FF5F00] text-xs font-semibold px-2.5 py-1 rounded-full">{cs.industry}</span>
                      <span className="text-gray-500 text-sm flex items-center gap-1"><MapPin className="w-3 h-3" />{cs.location}</span>
                    </div>
                    <div className="mb-4">
                      <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">The Problem</div>
                      <p className="text-gray-400 leading-relaxed">{cs.problem}</p>
                    </div>
                    <div className="mb-6">
                      <div className="text-xs font-bold text-[#FF5F00] uppercase tracking-wider mb-1.5">The Result</div>
                      <p className="text-white font-semibold leading-relaxed">{cs.result}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cs.services.map((s) => (
                        <span key={s} className="bg-[#0A0A0A] border border-[#2A2A2A] text-gray-400 text-xs px-2.5 py-1 rounded-md">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="bg-[#0A0A0A] border border-[#1E1E1E] rounded-xl p-4 text-center">
                          <div className="text-xl font-black text-[#FF5F00] mb-1">{m.value}</div>
                          <div className="text-xs text-gray-600 leading-tight">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="flex items-center justify-center gap-2 w-full border border-[#FF5F00]/30 hover:border-[#FF5F00] text-[#FF5F00] hover:text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-all duration-200 group"
                    >
                      Read full case study
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rest of clients grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {rest.map((cs) => (
              <div
                key={cs.slug}
                className="bg-[#0F0F0F] border border-[#1E1E1E] rounded-2xl p-7 hover:border-[#FF5F00]/20 transition-all duration-300 group"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h2 className="text-white font-black text-lg mb-1">{cs.client}</h2>
                    <div className="flex items-center gap-2">
                      <span className="text-[#FF5F00]/70 text-xs font-semibold">{cs.industry}</span>
                      <span className="w-1 h-1 rounded-full bg-[#2A2A2A]" aria-hidden="true" />
                      <span className="text-gray-600 text-xs flex items-center gap-1"><MapPin className="w-2.5 h-2.5" />{cs.location}</span>
                    </div>
                  </div>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="text-xs text-[#FF5F00] font-semibold hover:text-white transition-colors flex items-center gap-1 group/link shrink-0"
                  >
                    Full story
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{cs.problem}</p>
                <div className="border-t border-[#1A1A1A] pt-4">
                  <div className="text-xs font-bold text-[#FF5F00] uppercase tracking-wider mb-2">Result</div>
                  <p className="text-gray-300 text-sm font-medium leading-relaxed">{cs.result}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {cs.services.map((s) => (
                    <span key={s} className="bg-[#0A0A0A] border border-[#1E1E1E] text-gray-500 text-[11px] px-2 py-0.5 rounded">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-[#0F0F0F] border border-[#1E1E1E] rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-black text-white mb-3">Want results like these?</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">Let&apos;s talk about what&apos;s possible for your business in your market.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#E55500] text-white font-black px-10 py-4 rounded-xl transition-all duration-200 group"
              style={{ boxShadow: '0 0 20px rgba(255,95,0,0.25)' }}
            >
              Get a Free Growth Plan
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
