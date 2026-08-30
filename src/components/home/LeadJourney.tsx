'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, Globe, PhoneCall, Database, MessageSquare, Mail, Calendar, Briefcase, Star, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Homeowner Searches',
    detail: '"garage floor coating near me"',
    sub: 'High-intent buyer ready to spend',
    color: '#6366F1',
  },
  {
    icon: Globe,
    title: 'Your Business Shows Up First',
    detail: 'Google Maps + organic result #1',
    sub: 'Local SEO & GBP optimization',
    color: '#FF5F00',
  },
  {
    icon: Globe,
    title: 'They Click Your Landing Page',
    detail: 'Fast, mobile-optimized, built to convert',
    sub: 'Instant quote form above the fold',
    color: '#FF5F00',
  },
  {
    icon: PhoneCall,
    title: 'They Call or Submit a Form',
    detail: 'Lead captured with full source tracking',
    sub: 'Which ad, which keyword, which page',
    color: '#10B981',
  },
  {
    icon: Database,
    title: 'Lead Enters Your CRM',
    detail: 'Tagged, scored, and assigned instantly',
    sub: 'Zero manual data entry',
    color: '#FF5F00',
  },
  {
    icon: MessageSquare,
    title: 'Automatic SMS in 60 Seconds',
    detail: '"Hey, this is [Name] from [Company]..."',
    sub: 'Response rate 8x higher than email',
    color: '#10B981',
  },
  {
    icon: Mail,
    title: 'Follow-Up Email Sequence',
    detail: 'Branded, professional, automatic',
    sub: 'Keeps you top-of-mind if they\'re comparing',
    color: '#FF5F00',
  },
  {
    icon: Calendar,
    title: 'Estimate Scheduled',
    detail: 'Booked directly into your calendar',
    sub: 'Confirmation + reminder texts automated',
    color: '#FF5F00',
  },
  {
    icon: Briefcase,
    title: 'Job Sold',
    detail: 'Revenue tracked back to the original source',
    sub: 'Real ROI, not guesswork',
    color: '#10B981',
  },
  {
    icon: Star,
    title: 'Review Request Sent',
    detail: 'Automated after job completion',
    sub: 'Google reviews generate future customers',
    color: '#FF5F00',
  },
  {
    icon: TrendingUp,
    title: 'Your Rankings Improve',
    detail: 'More reviews = better Google visibility',
    sub: 'The flywheel keeps spinning',
    color: '#FF5F00',
  },
]

export default function LeadJourney() {
  const [visible, setVisible] = useState(0)
  const [running, setRunning] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !running) {
          setRunning(true)
          setVisible(0)
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [running])

  useEffect(() => {
    if (!running) return
    if (visible >= steps.length - 1) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(() => {
      setVisible((v) => {
        if (v >= steps.length - 1) {
          clearInterval(intervalRef.current!)
          return v
        }
        return v + 1
      })
    }, 800)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [running, visible])

  const restart = () => {
    setVisible(0)
    setRunning(false)
    setTimeout(() => setRunning(true), 100)
  }

  return (
    <section
      ref={sectionRef}
      className="bg-[#0A0A0A] py-20 lg:py-28 overflow-hidden"
      aria-labelledby="journey-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-4">
            <span className="text-[#FF5F00] text-sm font-medium">The Lead-to-Job Journey</span>
          </div>
          <h2 id="journey-heading" className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Watch One Lead Become a Customer
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            This is why every piece needs to work together. Follow a single lead from Google search to Google review.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-[#2A2A2A] sm:-translate-x-1/2" aria-hidden="true" />

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`relative flex items-start gap-6 sm:gap-0 transition-all duration-500 ${
                  i <= visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                aria-hidden={i > visible}
              >
                {/* Timeline dot */}
                <div className="relative z-10 shrink-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      i <= visible
                        ? 'border-[#FF5F00] bg-[#FF5F00]/20'
                        : 'border-[#2A2A2A] bg-[#111111]'
                    }`}
                  >
                    <step.icon
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${i <= visible ? 'text-[#FF5F00]' : 'text-gray-600'}`}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Content — alternating sides on desktop */}
                <div
                  className={`flex-1 pb-4 sm:w-5/12 sm:flex-none ${
                    i % 2 === 0 ? 'sm:ml-auto sm:pl-12' : 'sm:mr-auto sm:pr-12 sm:text-right'
                  }`}
                >
                  <div className={`bg-[#111111] border rounded-xl p-4 sm:p-5 transition-all duration-300 ${
                    i <= visible ? 'border-[#FF5F00]/20' : 'border-[#2A2A2A]'
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-[#FF5F00] font-bold uppercase tracking-wider">{String(i + 1).padStart(2, '0')}</span>
                      <h3 className="font-bold text-white text-sm sm:text-base">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm font-medium">{step.detail}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{step.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Restart */}
          {visible >= steps.length - 1 && (
            <div className="text-center mt-12">
              <button
                onClick={restart}
                className="text-sm text-gray-500 hover:text-[#FF5F00] transition-colors underline"
              >
                Watch it again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
