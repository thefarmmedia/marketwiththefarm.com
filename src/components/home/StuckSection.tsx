'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PhoneCall, Globe, MapPin, DollarSign, MessageCircle, Star, Zap, ArrowRight } from 'lucide-react'

const options = [
  {
    icon: PhoneCall,
    label: 'I need more leads',
    desc: 'My phone isn\'t ringing enough',
    href: '/services/google-ads',
    solution: 'Google Ads + landing pages designed to generate qualified leads consistently.',
  },
  {
    icon: Globe,
    label: 'My website sucks',
    desc: 'It doesn\'t convert visitors into calls',
    href: '/services/web-design',
    solution: 'A high-converting contractor website built to turn traffic into phone calls and booked jobs.',
  },
  {
    icon: MapPin,
    label: 'Nobody finds me on Google',
    desc: 'I\'m invisible in search results',
    href: '/services/seo',
    solution: 'Local SEO and Google Business Profile optimization to get you ranking in your market.',
  },
  {
    icon: DollarSign,
    label: 'Google Ads are bleeding me dry',
    desc: 'High spend, low return',
    href: '/services/google-ads',
    solution: 'A complete audit and rebuild of your campaigns with proper tracking so every dollar is accountable.',
  },
  {
    icon: MessageCircle,
    label: 'Leads fall through the cracks',
    desc: 'Nobody follows up fast enough',
    href: '/services/crm-automation',
    solution: 'CRM setup with instant SMS follow-up that fires within 60 seconds of every new lead.',
  },
  {
    icon: Star,
    label: 'We need more reviews',
    desc: 'Competitors have more Google reviews',
    href: '/services/reputation-management',
    solution: 'Automated review generation strategy that consistently builds your Google rating.',
  },
  {
    icon: Zap,
    label: 'Honestly... all of it',
    desc: 'I need the whole growth system',
    href: '/contact',
    solution: 'The full Farm Growth System™ — website, SEO, ads, CRM, and reviews all connected.',
  },
]

export default function StuckSection() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section className="bg-[#0A0A0A] py-20 lg:py-28" aria-labelledby="stuck-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="stuck-heading" className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Where Is Your Business Getting Stuck?
          </h2>
          <p className="text-xl text-gray-400 max-w-xl mx-auto">
            Pick the problem. We'll point you to the solution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-8">
          {options.map((opt, i) => (
            <button
              key={opt.label}
              onClick={() => setSelected(selected === i ? null : i)}
              className={`text-left p-5 rounded-xl border transition-all duration-200 group ${
                selected === i
                  ? 'bg-[#FF5F00]/10 border-[#FF5F00] '
                  : 'bg-[#111111] border-[#2A2A2A] hover:border-[#FF5F00]/40 hover:bg-[#FF5F00]/5'
              }`}
              aria-pressed={selected === i}
            >
              <opt.icon
                className={`w-6 h-6 mb-3 transition-colors ${selected === i ? 'text-[#FF5F00]' : 'text-gray-500 group-hover:text-[#FF5F00]'}`}
                aria-hidden="true"
              />
              <div className={`font-bold text-sm mb-1 transition-colors ${selected === i ? 'text-white' : 'text-gray-300'}`}>
                {opt.label}
              </div>
              <div className="text-xs text-gray-500">{opt.desc}</div>
            </button>
          ))}
        </div>

        {/* Solution panel */}
        {selected !== null && (() => {
          const SelectedIcon = options[selected].icon
          return (
          <div className="bg-[#111111] border border-[#FF5F00]/30 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 animate-fade-up">
            <div>
              <div className="flex items-center gap-2 text-[#FF5F00] font-semibold text-sm mb-2">
                <SelectedIcon className="w-4 h-4" aria-hidden="true" />
                {options[selected].label}
              </div>
              <p className="text-white text-lg font-medium">{options[selected].solution}</p>
            </div>
            <Link
              href={options[selected].href}
              className="shrink-0 inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold px-6 py-3 rounded-md transition-colors group whitespace-nowrap"
            >
              See how it works
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
          )
        })()}
      </div>
    </section>
  )
}
