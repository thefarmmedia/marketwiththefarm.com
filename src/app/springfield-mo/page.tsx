import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Marketing Agency Springfield MO — Contractor Marketing | The Farm Media',
  description: 'The Farm Media is a Springfield, MO marketing agency specializing in contractor and local service business marketing. Web design, local SEO, Google Ads, and automation for Springfield-area businesses.',
  alternates: { canonical: 'https://marketwiththefarm.com/springfield-mo' },
}

const localServices = [
  { title: 'SEO Springfield MO', href: '/springfield-mo/seo', desc: 'Local SEO for Springfield businesses' },
  { title: 'Web Design Springfield MO', href: '/springfield-mo/web-design', desc: 'Contractor websites built in Springfield' },
  { title: 'Google Ads Springfield MO', href: '/springfield-mo/google-ads', desc: 'PPC management for Springfield businesses' },
  { title: 'Local SEO Springfield MO', href: '/springfield-mo/local-seo', desc: 'Google Maps & local search optimization' },
]

export default function SpringfieldPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] pt-28 pb-20" aria-labelledby="springfield-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#FF5F00] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300" aria-current="page">Springfield, MO</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-6">
              <MapPin className="w-3.5 h-3.5 text-[#FF5F00]" aria-hidden="true" />
              <span className="text-[#FF5F00] text-sm font-medium">Springfield, Missouri</span>
            </div>
            <h1 id="springfield-heading" className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Springfield's Contractor<br />
              <span className="text-[#FF5F00]">Marketing Agency.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              The Farm Media is based in Springfield, MO and works with contractors across the Ozarks region. We know the Springfield market, the competition, and what it takes to rank and generate leads here.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold px-7 py-3.5 rounded-md transition-colors group">
              Get a Free Growth Plan
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Marketing Services in Springfield, MO</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {localServices.map((s) => (
              <Link key={s.href} href={s.href} className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#FF5F00]/40 transition-colors group">
                <h3 className="font-bold text-white mb-2 group-hover:text-[#FF5F00] transition-colors">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>

          <div className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-5">Why Springfield Contractors Work With The Farm</h2>
            <div className="space-y-4 text-gray-400">
              <p>We're not a remote agency that's never seen your market. We understand Springfield — the competitive landscape, the service areas, the neighborhoods that drive demand, and the search behavior of Ozarks homeowners.</p>
              <p>Springfield contractors across concrete coatings, HVAC, roofing, electrical, landscaping, and more have used our systems to grow their lead volume, increase Google rankings, and build the kind of online presence that makes them the obvious choice in their category.</p>
              <p>We're based here. We answer the phone. And we actually understand how contractors get paid.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FF5F00] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Let's talk about growing your Springfield business.</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF5F00] font-bold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors">
            Get My Free Growth Plan
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'The Farm Media',
            url: 'https://marketwiththefarm.com',
            telephone: '+1-417-365-5383',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Springfield',
              addressRegion: 'MO',
              postalCode: '65801',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 37.2153,
              longitude: -93.2982,
            },
            areaServed: [
              { '@type': 'City', name: 'Springfield', containedIn: 'Missouri' },
              { '@type': 'City', name: 'Nixa', containedIn: 'Missouri' },
              { '@type': 'City', name: 'Ozark', containedIn: 'Missouri' },
              { '@type': 'City', name: 'Republic', containedIn: 'Missouri' },
              { '@type': 'City', name: 'Strafford', containedIn: 'Missouri' },
            ],
            priceRange: '$$',
          }),
        }}
      />
    </>
  )
}
