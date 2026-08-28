import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, MapPin, ExternalLink } from 'lucide-react'

export interface CaseStudyData {
  client: string
  url: string
  industry: string
  location: string
  tagline: string
  services: string[]
  challenge: string[]
  solution: string[]
  results: { label: string; value: string; sub?: string }[]
  quote?: { text: string; author: string }
}

export default function CaseStudyPage({ data }: { data: CaseStudyData }) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0A0A0A] pt-28 pb-16 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,95,0,0.07) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm mb-10 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            All case studies
          </Link>

          <div className="inline-flex items-center gap-2 bg-[#FF5F00]/8 border border-[#FF5F00]/15 rounded-full px-4 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F00]" aria-hidden="true" />
            <span className="text-[#FF5F00] text-sm font-semibold tracking-wide">{data.industry} · Case Study</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-[1.05] tracking-tight">
            {data.client}
          </h1>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed max-w-2xl">{data.tagline}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#FF5F00]" />{data.location}</span>
            <span className="w-px h-4 bg-[#2A2A2A]" aria-hidden="true" />
            <a href={`https://${data.url}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#FF5F00] transition-colors">
              <ExternalLink className="w-3.5 h-3.5" />{data.url}
            </a>
          </div>
        </div>
      </section>

      {/* Services bar */}
      <div className="bg-[#0F0F0F] border-y border-[#1E1E1E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-2">
          <span className="text-gray-600 text-xs font-semibold uppercase tracking-widest mr-2">Services:</span>
          {data.services.map((s) => (
            <span key={s} className="bg-[#0A0A0A] border border-[#2A2A2A] text-gray-400 text-xs px-3 py-1 rounded-full">{s}</span>
          ))}
        </div>
      </div>

      {/* Results bar */}
      <section className="bg-[#080808] border-b border-[#1E1E1E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#1E1E1E]">
            {data.results.map((r) => (
              <div key={r.label} className="px-6 py-8 text-center">
                <div className="text-4xl font-black text-[#FF5F00] mb-1">{r.value}</div>
                <div className="text-sm font-semibold text-white mb-0.5">{r.label}</div>
                {r.sub && <div className="text-xs text-gray-600">{r.sub}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-14">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FF5F00]" aria-hidden="true" />
              The Challenge
            </h2>
            <ul className="space-y-4">
              {data.challenge.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-900/20 border border-red-900/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" aria-hidden="true" />
                  </div>
                  <span className="text-gray-400 leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-14">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#FF5F00]" aria-hidden="true" />
              What The Farm Built
            </h2>
            <ul className="space-y-4">
              {data.solution.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#FF5F00] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-300 leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {data.quote && (
            <div className="relative bg-[#0F0F0F] border border-[#FF5F00]/15 rounded-2xl p-8 mb-14 overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(255,95,0,0.4), transparent)' }}
                aria-hidden="true"
              />
              <blockquote className="text-lg sm:text-xl text-white font-medium leading-relaxed mb-4">
                &ldquo;{data.quote.text}&rdquo;
              </blockquote>
              <footer className="text-[#FF5F00] text-sm font-semibold">— {data.quote.author}</footer>
            </div>
          )}

          <div className="bg-[#0F0F0F] border border-[#1E1E1E] rounded-2xl p-8 text-center">
            <p className="text-gray-400 mb-2">Ready to get results like {data.client}?</p>
            <h3 className="text-2xl font-black text-white mb-6">Let&apos;s talk about your market.</h3>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#E55500] text-white font-black px-8 py-3.5 rounded-xl transition-all duration-200 group"
              style={{ boxShadow: '0 0 20px rgba(255,95,0,0.2)' }}
            >
              Get a Free Growth Plan
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
