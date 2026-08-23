import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Facebook & Meta Ads for Contractors | The Farm Media',
  description: 'Facebook and Instagram ad management for local service businesses. Targeted social campaigns that reach homeowners in your service area and generate qualified leads.',
  alternates: { canonical: 'https://marketwiththefarm.com/services/facebook-ads' },
}

export default function FacebookAdsPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] pt-28 pb-20" aria-labelledby="fbads-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#FF5F00] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-[#FF5F00] transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300" aria-current="page">Facebook & Meta Ads</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-6">
              <span className="text-[#FF5F00] text-sm font-medium">Facebook & Meta Ads</span>
            </div>
            <h1 id="fbads-heading" className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Reach Homeowners Before<br />
              <span className="text-[#FF5F00]">They Search Google.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Facebook and Instagram ads let you put your business in front of homeowners in your service area before they even know they need you. Perfect for demand generation, seasonal offers, and retargeting website visitors who didn't call.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold px-7 py-3.5 rounded-md transition-colors group">
              Get a Free Social Ads Strategy
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Why Social Ads Work for Contractors</h2>
          <div className="space-y-6 text-gray-300">
            <p>Facebook and Instagram give you access to one thing Google can't: the ability to target people by where they live, what they own, and what they're interested in — even before they're actively searching.</p>
            <p>That means you can show your best garage floor coating project to homeowners in your ZIP code who own a home and have the household income to afford it. You're creating demand, not just capturing it.</p>
            <p>Combined with a strong retargeting campaign — showing ads to people who visited your website but didn't call — social ads fill the gaps between your SEO and Google Ads traffic.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            {[
              { title: 'Audience Targeting', desc: 'Homeowners in your ZIP codes, specific income levels, home ownership status' },
              { title: 'Lead Generation Ads', desc: 'Forms that fill out inside Facebook — no website visit required' },
              { title: 'Retargeting', desc: 'Follow website visitors with ads until they book' },
              { title: 'Seasonal Campaigns', desc: 'Special offers timed to your busy season' },
            ].map((item) => (
              <div key={item.title} className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-5">
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FF5F00] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Let's build a social ad strategy for your market.</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF5F00] font-bold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors">
            Get Started
          </Link>
        </div>
      </section>
    </>
  )
}
