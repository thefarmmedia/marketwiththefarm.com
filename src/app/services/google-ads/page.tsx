import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Target, BarChart3, DollarSign, MousePointer } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Google Ads for Contractors — Pay for Leads, Not Clicks | The Farm Media',
  description: 'Google Ads management for contractors. We build and manage search campaigns that generate qualified leads, track every conversion, and optimize for cost-per-booked-job — not just traffic.',
  alternates: {
    canonical: 'https://marketwiththefarm.com/services/google-ads',
  },
}

const features = [
  { icon: Target, title: 'Targeted to buyers, not browsers', desc: 'We target high-intent keywords that signal someone is ready to hire — not just researching.' },
  { icon: BarChart3, title: 'Full conversion tracking', desc: 'Every lead traced back to the exact keyword and ad that generated it.' },
  { icon: DollarSign, title: 'Cost-per-lead reporting', desc: 'You\'ll know exactly what you paid for each lead and each booked job.' },
  { icon: MousePointer, title: 'Landing pages that convert', desc: 'Purpose-built landing pages (not your homepage) for each campaign.' },
]

export default function GoogleAdsPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] pt-28 pb-20" aria-labelledby="gads-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#FF5F00] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-[#FF5F00] transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300" aria-current="page">Google Ads</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-6">
              <span className="text-[#FF5F00] text-sm font-medium">Google Ads for Contractors</span>
            </div>
            <h1 id="gads-heading" className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Stop Paying for Clicks.<br />
              <span className="text-[#FF5F00]">Start Paying for Jobs.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Most contractors running Google Ads are wasting money. Wrong keywords, no conversion tracking, sending traffic to a homepage that doesn't convert. We fix all of that and build campaigns that generate actual leads at a predictable cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold px-7 py-3.5 rounded-md transition-colors group">
                Get a Free Ads Audit
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10">What We Do Differently</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
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

          <div className="bg-[#0A0A0A] border border-[#FF5F00]/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">The standard we hold ourselves to</h3>
            <p className="text-gray-300 leading-relaxed">
              We don't consider a Google Ads campaign successful because it got a lot of clicks or a high CTR. We consider it successful when you can tell us how many jobs you booked from it and what you paid per booked job. That's the number that matters. That's what we optimize for.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FF5F00] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Running Google Ads but not sure they're working?</h2>
          <p className="text-white/80 mb-8">We'll audit your current campaigns for free and tell you exactly what's wrong.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF5F00] font-bold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors">
            Get My Free Ads Audit
          </Link>
        </div>
      </section>
    </>
  )
}
