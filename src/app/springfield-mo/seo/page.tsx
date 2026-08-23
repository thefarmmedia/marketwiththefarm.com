import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SEO Springfield MO — Local SEO Agency for Springfield Businesses | The Farm Media',
  description: 'Local SEO services in Springfield, MO. The Farm Media helps contractors and local service businesses rank on Google in Springfield and surrounding Ozarks markets.',
  alternates: { canonical: 'https://marketwiththefarm.com/springfield-mo/seo' },
}

export default function SpringfieldSEOPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#FF5F00] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/springfield-mo" className="hover:text-[#FF5F00] transition-colors">Springfield, MO</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300" aria-current="page">SEO</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              SEO Agency<br />
              <span className="text-[#FF5F00]">Springfield, MO.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              The Farm Media provides local SEO services for contractors and local service businesses in Springfield, Missouri and the surrounding Ozarks region. We help Springfield businesses rank higher on Google, generate more organic leads, and grow their local visibility.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold px-7 py-3.5 rounded-md transition-colors group">
              Get a Free SEO Audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#111111] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">SEO for Springfield, MO Businesses</h2>
          <p className="text-gray-400 leading-relaxed mb-6">Springfield is a competitive local market. Whether you're a contractor, service business, or retail location, ranking on Google in Springfield requires a specific strategy that accounts for the local competition, the most valuable search terms in the market, and the technical requirements that Google rewards.</p>
          <p className="text-gray-400 leading-relaxed">The Farm Media specializes in local SEO for contractors and service businesses specifically — not generic digital marketing. We understand how Springfield homeowners search for services, what keywords drive the highest-value leads, and how to build a Google presence that generates calls consistently.</p>
        </div>
      </section>
    </>
  )
}
