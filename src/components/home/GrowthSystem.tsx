'use client'

import { useState } from 'react'
import { Globe, Search, Megaphone, MessageSquare, Star, BarChart3 } from 'lucide-react'

const stages = [
  {
    number: '01',
    icon: Globe,
    title: 'Foundation',
    tagline: 'Build it right the first time.',
    color: '#FF5F00',
    items: ['High-converting website', 'Conversion tracking setup', 'CRM integration', 'Call tracking', 'Lead capture architecture', 'Mobile-first design'],
    description: 'Before you spend a dollar on ads or SEO, your foundation has to be solid. We build websites that are engineered to convert visitors into calls — not just look pretty. Every element has a job to do.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Get Found',
    tagline: 'Own your market on Google.',
    color: '#FF5F00',
    items: ['Google Business Profile optimization', 'Local SEO strategy', 'Service-area pages', 'City landing pages', 'Map pack rankings', 'Technical SEO'],
    description: 'When someone searches "concrete coating near me" or "HVAC repair Springfield MO," you need to show up first. We optimize your Google presence so high-intent buyers find you before your competitors.',
  },
  {
    number: '03',
    icon: Megaphone,
    title: 'Generate Demand',
    tagline: 'Put your business in front of buyers.',
    color: '#FF5F00',
    items: ['Google Search Ads', 'Google Local Services Ads', 'Facebook & Instagram Ads', 'Landing pages', 'Retargeting campaigns', 'YouTube Ads'],
    description: 'Paid advertising works when it\'s built correctly. We run targeted campaigns that reach homeowners actively looking for your services, then track every lead back to the ad that generated it.',
  },
  {
    number: '04',
    icon: MessageSquare,
    title: 'Convert',
    tagline: 'Turn leads into booked jobs.',
    color: '#FF5F00',
    items: ['Instant lead notification', 'Automated SMS (60-second response)', 'Email follow-up sequences', 'Missed-call text back', 'Instant quote tools', 'Appointment booking'],
    description: 'Speed wins. The contractor who responds first usually wins the job. Our automation fires the moment a lead comes in — text, email, CRM entry — so your team can follow up while the lead is still hot.',
  },
  {
    number: '05',
    icon: Star,
    title: 'Build Trust',
    tagline: 'Become the obvious choice.',
    color: '#FF5F00',
    items: ['Automated review requests', 'Google review strategy', 'Project gallery management', 'Testimonial collection', 'Reputation monitoring', 'Response management'],
    description: 'Reviews are the new word-of-mouth. We automate review requests after every job, so your Google rating climbs and future customers trust you before they ever call.',
  },
  {
    number: '06',
    icon: BarChart3,
    title: 'Scale',
    tagline: 'Expand into new markets profitably.',
    color: '#FF5F00',
    items: ['Monthly reporting', 'Performance optimization', 'New service areas', 'Additional service lines', 'Seasonal strategies', 'Ongoing SEO content'],
    description: 'Once the machine is running, we optimize and expand. New cities, new services, more volume — built systematically so growth doesn\'t break what\'s already working.',
  },
]

export default function GrowthSystem() {
  const [active, setActive] = useState(0)

  const stage = stages[active]

  return (
    <section className="bg-[#111111] py-20 lg:py-28" aria-labelledby="system-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-4">
            <span className="text-[#FF5F00] text-sm font-semibold uppercase tracking-wider">The Farm Growth System™</span>
          </div>
          <h2 id="system-heading" className="text-4xl sm:text-5xl font-bold text-white mb-4">
            One Machine. Every Piece Working Together.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            This is why The Farm is different. We don't sell you a website and disappear.
            We build and operate the entire customer-acquisition machine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Stage selector */}
          <div className="space-y-2">
            {stages.map((s, i) => (
              <button
                key={s.number}
                onClick={() => setActive(i)}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-200 group ${
                  active === i
                    ? 'bg-[#FF5F00]/10 border-[#FF5F00]/40'
                    : 'bg-[#0A0A0A] border-[#2A2A2A] hover:border-[#FF5F00]/20 hover:bg-[#FF5F00]/5'
                }`}
                aria-pressed={active === i}
                aria-controls="stage-detail"
              >
                <div className="flex items-center gap-4">
                  <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    active === i ? 'bg-[#FF5F00]' : 'bg-[#2A2A2A] group-hover:bg-[#FF5F00]/20'
                  }`}>
                    <s.icon className={`w-5 h-5 ${active === i ? 'text-white' : 'text-gray-400 group-hover:text-[#FF5F00]'}`} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${active === i ? 'text-[#FF5F00]' : 'text-gray-600'}`}>
                        {s.number}
                      </span>
                      <span className={`font-bold ${active === i ? 'text-white' : 'text-gray-300'}`}>{s.title}</span>
                    </div>
                    <p className={`text-sm mt-0.5 ${active === i ? 'text-gray-400' : 'text-gray-600'}`}>{s.tagline}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Stage detail */}
          <div
            id="stage-detail"
            className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-2xl p-8 flex flex-col justify-between"
            aria-live="polite"
          >
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FF5F00] flex items-center justify-center shrink-0">
                  <stage.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-[#FF5F00] text-xs font-bold uppercase tracking-wider mb-1">Stage {stage.number}</div>
                  <h3 className="text-2xl font-bold text-white">{stage.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{stage.tagline}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8">{stage.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {stage.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F00] shrink-0" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[#2A2A2A]">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Stage {active + 1} of {stages.length}</span>
                <div className="flex gap-1.5">
                  {stages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-1 rounded-full transition-all duration-300 ${i === active ? 'bg-[#FF5F00] w-6' : 'bg-[#2A2A2A] w-2 hover:bg-gray-500'}`}
                      aria-label={`Go to stage ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
