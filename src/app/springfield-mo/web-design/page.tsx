import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Design Springfield MO — Contractor Website Design | The Farm Media',
  description: 'Web design for contractors in Springfield, MO. The Farm Media builds high-converting contractor websites that generate leads, rank on Google, and work perfectly on mobile.',
  alternates: { canonical: 'https://marketwiththefarm.com/springfield-mo/web-design' },
}

export default function SpringfieldWebDesignPage() {
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
              <li className="text-gray-300" aria-current="page">Web Design</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Web Design<br />
              <span className="text-[#FF5F00]">Springfield, MO.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              The Farm Media builds contractor websites in Springfield, MO that are engineered to convert visitors into calls. Not just good-looking websites — websites that generate leads, rank on Google, and work flawlessly on mobile.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold px-7 py-3.5 rounded-md transition-colors group">
              Get a Free Website Audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#111111] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Contractor Web Design in Springfield, Missouri</h2>
          <p className="text-gray-400 leading-relaxed mb-4">Springfield contractors deserve websites that work as hard as they do. Too many local businesses have websites that look acceptable but generate nothing — no calls, no form submissions, no leads.</p>
          <p className="text-gray-400 leading-relaxed">We build conversion-focused contractor websites in Springfield that are designed around how homeowners search, how they decide who to hire, and what it takes to get them to call. Every element has a purpose. Every page is built for both humans and search engines.</p>
        </div>
      </section>
    </>
  )
}
