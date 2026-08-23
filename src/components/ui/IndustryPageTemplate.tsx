import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export type IndustryData = {
  emoji: string
  title: string
  tagline: string
  heroDesc: string
  whyMatters: string
  strategies: { title: string; desc: string }[]
  topKeywords: string[]
  websiteNeeds: string[]
  cta: string
}

export default function IndustryPageTemplate({ data, slug }: { data: IndustryData; slug: string }) {
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
              <li className="text-gray-300" aria-current="page">{data.title}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-[#0A0A0A] py-16" aria-labelledby={`${slug}-heading`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-6">
              <span className="text-[#FF5F00] text-sm font-medium">{data.emoji} {data.title}</span>
            </div>
            <h1 id={`${slug}-heading`} className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              {data.tagline.split('|').map((part, i) => (
                <span key={i}>
                  {i === 1 ? <span className="text-[#FF5F00]">{part}</span> : part}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">{data.heroDesc}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold px-7 py-3.5 rounded-md transition-colors group">
              Get a Free Growth Plan
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-[#111111] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Marketing That Fits How Your Business Actually Works</h2>
          <p className="text-gray-300 text-lg leading-relaxed">{data.whyMatters}</p>
        </div>
      </section>

      {/* Top keywords */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Top Search Terms in Your Industry</h2>
              <p className="text-gray-400 mb-6">These are the searches your potential customers are doing right now. Our job is to make your business the one they find.</p>
              <div className="space-y-2">
                {data.topKeywords.map((kw) => (
                  <div key={kw} className="flex items-center gap-3 bg-[#111111] border border-[#2A2A2A] rounded-lg px-4 py-2.5 text-sm text-gray-300 font-mono">
                    <span className="text-[#FF5F00]">🔍</span>
                    {kw}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What Your Website Needs</h2>
              <div className="space-y-3">
                {data.websiteNeeds.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#FF5F00] shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="bg-[#111111] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10">Our {data.title} Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.strategies.map((s) => (
              <div key={s.title} className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#FF5F00]/30 transition-colors">
                <h3 className="font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FF5F00] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">{data.cta}</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF5F00] font-bold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors">
            Get My Free Growth Plan
          </Link>
        </div>
      </section>
    </>
  )
}
