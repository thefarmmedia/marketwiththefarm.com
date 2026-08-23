import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Reputation Management & Google Reviews for Contractors | The Farm Media',
  description: 'Automated Google review generation for contractors. We build systems that consistently collect 5-star reviews, monitor your reputation, and help you respond to all feedback.',
  alternates: { canonical: 'https://marketwiththefarm.com/services/reputation-management' },
}

export default function ReputationPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] pt-28 pb-20" aria-labelledby="rep-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#FF5F00] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-[#FF5F00] transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300" aria-current="page">Reputation Management</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-6">
              <span className="text-[#FF5F00] text-sm font-medium">Reputation Management</span>
            </div>
            <h1 id="rep-heading" className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              More Google Reviews.<br />
              <span className="text-[#FF5F00]">More Customers. Less Work.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              87% of customers read Google reviews before calling a local business. We build automated systems that consistently generate 5-star reviews so your rating works for you around the clock.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold px-7 py-3.5 rounded-md transition-colors group">
              Start Generating More Reviews
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Reviews Matter More Than Ever</h2>
              <div className="space-y-4 text-gray-300">
                <p>Google uses review quantity and quality as a ranking signal for local search. More good reviews = higher rankings. Higher rankings = more calls.</p>
                <p>On top of that, a prospect comparing two contractors with similar websites and prices will choose the one with more — and better — reviews every time.</p>
                <p>The problem is that asking for reviews manually is awkward and inconsistent. Our system sends a review request automatically after every completed job, making it effortless for happy customers to leave a review.</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Automated review requests via SMS & email', detail: 'Sent after every completed job, no manual effort required' },
                { label: 'Review monitoring across all platforms', detail: 'Know within minutes when a new review appears' },
                { label: 'Response management', detail: 'We help respond to all reviews — positive and negative' },
                { label: 'Review performance tracking', detail: 'Monthly reporting on rating, volume, and sentiment trends' },
              ].map((item) => (
                <div key={item.label} className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-5 flex gap-3">
                  <Star className="w-5 h-5 text-[#FF5F00] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="font-medium text-white text-sm">{item.label}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FF5F00] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Start collecting Google reviews automatically.</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF5F00] font-bold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  )
}
