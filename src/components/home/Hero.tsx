'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Star, ChevronDown } from 'lucide-react'

const stats = [
  { value: '850+', label: 'Leads Generated' },
  { value: '3.2×', label: 'Avg. Lead Increase' },
  { value: '$28', label: 'Cost Per Lead' },
  { value: '94%', label: 'Client Retention' },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0A]"
      aria-label="Hero"
    >
      {/* ── Layered background ── */}

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(rgba(255,95,0,0.18) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* Primary orange orb — top left */}
      <div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(255,95,0,0.18) 0%, rgba(255,95,0,0.06) 40%, transparent 70%)',
          filter: 'blur(1px)',
        }}
        aria-hidden="true"
      />

      {/* Secondary amber orb — bottom right */}
      <div
        className="absolute -bottom-60 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none animate-float-delayed"
        style={{
          background: 'radial-gradient(circle, rgba(255,120,0,0.12) 0%, rgba(255,95,0,0.04) 50%, transparent 70%)',
          filter: 'blur(1px)',
        }}
        aria-hidden="true"
      />

      {/* Subtle center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,95,0,0.05) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      {/* Horizontal light streak */}
      <div
        className="absolute top-1/3 left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,95,0,0.15) 30%, rgba(255,95,0,0.3) 50%, rgba(255,95,0,0.15) 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="max-w-5xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#FF5F00]/8 border border-[#FF5F00]/20 rounded-full px-4 py-1.5 mb-10 animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5F00] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5F00]" />
            </span>
            <span className="text-[#FF5F00] text-sm font-semibold tracking-wide">Built for Contractors. Proven by Results.</span>
          </div>

          {/* Headline */}
          <h1
            className="text-6xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[0.95] tracking-tighter mb-8 animate-fade-up opacity-0"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <span className="text-white">Stop Buying</span><br />
            <span className="text-white">Marketing.</span>{' '}
            <span
              className="gradient-text"
              style={{ display: 'inline-block' }}
            >
              Start Building
            </span><br />
            <span
              className="gradient-text"
              style={{ display: 'inline-block' }}
            >
              a Lead Machine.
            </span>
          </h1>

          {/* Subhead */}
          <p
            className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl animate-fade-up opacity-0"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            The Farm Media builds complete customer acquisition systems for contractors —
            websites, Google rankings, paid ads, and automated follow-up that work together
            to fill your schedule.
          </p>

          {/* Social proof line */}
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-10 animate-fade-up opacity-0"
            style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FF5F00] text-[#FF5F00]" aria-hidden="true" />
              ))}
              <span className="text-gray-400 text-sm ml-1.5 font-medium">5.0 on Google</span>
            </div>
            <span className="w-px h-4 bg-[#2A2A2A]" aria-hidden="true" />
            <span className="text-gray-500 text-sm">Serving contractors across the Midwest</span>
            <span className="w-px h-4 bg-[#2A2A2A]" aria-hidden="true" />
            <span className="text-gray-500 text-sm">No long-term contracts</span>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-20 animate-fade-up opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 bg-[#FF5F00] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-lg transition-all duration-200 active:scale-95 overflow-hidden"
              style={{ boxShadow: '0 0 0 1px rgba(255,95,0,0.5), 0 4px 30px rgba(255,95,0,0.35), 0 0 80px rgba(255,95,0,0.12)' }}
            >
              {/* shimmer sweep on hover */}
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
              Get a Free Growth Plan
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 glass border-[#2A2A2A] hover:border-[#FF5F00]/40 text-gray-300 hover:text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-lg transition-all duration-200"
            >
              See Real Results
            </Link>

            <a
              href="tel:+14173655383"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-white text-sm font-medium transition-colors sm:hidden"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              (417) 365-5383
            </a>
          </div>

          {/* Stats bar */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#2A2A2A] animate-fade-up opacity-0"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#0D0D0D] px-6 py-5 group hover:bg-[#111] transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-black text-white leading-none mb-1 group-hover:text-[#FF5F00] transition-colors duration-300">
                  {s.value}
                </div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-700 animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  )
}
