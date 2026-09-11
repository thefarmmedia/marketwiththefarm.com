'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

type Score = {
  category: string
  question: string
  answer: 'yes' | 'no' | 'partial' | null
  weight: number
  tip: string
}

const questions: Score[] = [
  { category: 'Website', question: 'Does your website load in under 3 seconds on mobile?', answer: null, weight: 10, tip: 'Slow websites lose leads before they see your content. Speed directly impacts both conversions and SEO rankings.' },
  { category: 'Website', question: 'Is there a click-to-call button visible on your homepage above the fold on mobile?', answer: null, weight: 10, tip: 'On mobile, a sticky click-to-call button can increase phone leads by 40–80%.' },
  { category: 'Website', question: 'Do you have individual service pages (one per service)?', answer: null, weight: 8, tip: 'Individual service pages let each service rank for its own keywords rather than competing on one page.' },
  { category: 'SEO', question: 'Does your Google Business Profile have 50+ reviews with a rating above 4.5?', answer: null, weight: 12, tip: 'Google reviews are one of the strongest local ranking signals AND trust signals for potential customers.' },
  { category: 'SEO', question: 'Does your business appear in the Google Maps 3-pack for your main service keyword?', answer: null, weight: 12, tip: 'The local 3-pack captures 70%+ of clicks for local service searches.' },
  { category: 'SEO', question: 'Do you have separate landing pages for each city/area you serve?', answer: null, weight: 8, tip: 'City-specific pages are the #1 way to rank in surrounding markets you already serve.' },
  { category: 'Advertising', question: 'Do you have conversion tracking set up in your Google Ads account?', answer: null, weight: 10, tip: 'Without conversion tracking, you\'re flying blind. You can\'t optimize what you don\'t measure.' },
  { category: 'Advertising', question: 'Do you know your cost per booked job from advertising?', answer: null, weight: 8, tip: 'Cost per click and cost per lead are vanity metrics. Cost per booked job is the number that matters.' },
  { category: 'Follow-Up', question: 'Does your business follow up with new leads within 5 minutes?', answer: null, weight: 12, tip: 'Lead response within 5 minutes vs. 30 minutes dramatically changes close rates.' },
  { category: 'Follow-Up', question: 'Do you have automated follow-up that fires when you can\'t answer the phone?', answer: null, weight: 10, tip: 'Missed-call text back alone recovers 15–30% of leads that would otherwise be lost.' },
]

export default function MarketingScorecardPage() {
  const [scores, setScores] = useState<Score[]>(questions)
  const [step, setStep] = useState<'quiz' | 'info' | 'results'>('quiz')
  const [currentQ, setCurrentQ] = useState(0)
  const [form, setForm] = useState({ name: '', business: '', phone: '', email: '', service: '', area: '' })

  const answer = (val: 'yes' | 'no' | 'partial') => {
    const updated = [...scores]
    updated[currentQ] = { ...updated[currentQ], answer: val }
    setScores(updated)
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      setStep('info')
    }
  }

  const calcScore = () => {
    let earned = 0
    let total = 0
    scores.forEach((q) => {
      total += q.weight
      if (q.answer === 'yes') earned += q.weight
      if (q.answer === 'partial') earned += q.weight * 0.5
    })
    return Math.round((earned / total) * 100)
  }

  const getGrade = (score: number) => {
    if (score >= 80) return { label: 'Strong Foundation', color: 'text-green-500', icon: CheckCircle }
    if (score >= 50) return { label: 'Room to Grow', color: 'text-yellow-500', icon: AlertCircle }
    return { label: 'Significant Opportunity', color: 'text-[#FF5F00]', icon: XCircle }
  }

  const weakAreas = scores.filter((q) => q.answer === 'no' || q.answer === 'partial')
  const score = calcScore()
  const grade = getGrade(score)

  const submitInfo = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('results')
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Quiz step */}
        {step === 'quiz' && (
          <>
            <div className="text-center mb-10">
              <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-4">
                <span className="text-[#FF5F00] text-sm font-medium">Free Marketing Scorecard</span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-3">
                How Hard Is Your Marketing Working?
              </h1>
              <p className="text-gray-400">Answer 10 questions. Get your contractor growth score.</p>
            </div>

            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>Question {currentQ + 1} of {questions.length}</span>
                <span>{Math.round((currentQ / questions.length) * 100)}% complete</span>
              </div>
              <div className="h-1.5 bg-[#2A2A2A] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FF5F00] rounded-full transition-all duration-500"
                  style={{ width: `${(currentQ / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question card */}
            <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 mb-4">
              <div className="text-xs font-bold text-[#FF5F00] uppercase tracking-wider mb-3">
                {questions[currentQ].category}
              </div>
              <h2 className="text-xl font-bold text-white mb-8">{questions[currentQ].question}</h2>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => answer('yes')}
                  className="w-full text-left px-5 py-4 rounded-xl border border-[#2A2A2A] hover:border-green-500 hover:bg-green-500/5 text-gray-300 hover:text-white transition-all font-medium"
                >
                  ✅ Yes, we have this covered
                </button>
                <button
                  onClick={() => answer('partial')}
                  className="w-full text-left px-5 py-4 rounded-xl border border-[#2A2A2A] hover:border-yellow-500 hover:bg-yellow-500/5 text-gray-300 hover:text-white transition-all font-medium"
                >
                  ⚠️ Partially / Not sure
                </button>
                <button
                  onClick={() => answer('no')}
                  className="w-full text-left px-5 py-4 rounded-xl border border-[#2A2A2A] hover:border-red-500 hover:bg-red-500/5 text-gray-300 hover:text-white transition-all font-medium"
                >
                  ❌ No, we don't have this
                </button>
              </div>
            </div>

            {currentQ > 0 && (
              <button onClick={() => setCurrentQ(currentQ - 1)} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                ← Previous question
              </button>
            )}
          </>
        )}

        {/* Info step */}
        {step === 'info' && (
          <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Almost done!</h2>
            <p className="text-gray-400 mb-6">Tell us about your business to see your personalized growth score and recommendations.</p>
            <form onSubmit={submitInfo} className="space-y-4" aria-label="Contact info for scorecard">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="sc-name" className="block text-sm text-gray-400 mb-1.5">Your Name *</label>
                  <input id="sc-name" required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FF5F00]" placeholder="John Smith" />
                </div>
                <div>
                  <label htmlFor="sc-business" className="block text-sm text-gray-400 mb-1.5">Business Name *</label>
                  <input id="sc-business" required type="text" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FF5F00]" placeholder="Smith Coatings" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="sc-phone" className="block text-sm text-gray-400 mb-1.5">Phone *</label>
                  <input id="sc-phone" required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FF5F00]" placeholder="(417) 365-5383" />
                </div>
                <div>
                  <label htmlFor="sc-email" className="block text-sm text-gray-400 mb-1.5">Email *</label>
                  <input id="sc-email" required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FF5F00]" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="sc-area" className="block text-sm text-gray-400 mb-1.5">Service Area</label>
                <input id="sc-area" type="text" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FF5F00]" placeholder="Springfield, MO" />
              </div>
              <button type="submit" className="w-full bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold py-3.5 rounded-lg transition-colors">
                See My Growth Score →
              </button>
            </form>
          </div>
        )}

        {/* Results step */}
        {step === 'results' && (
          <div>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-28 h-28 rounded-full border-4 border-[#FF5F00] bg-[#FF5F00]/10 mb-5">
                <span className="text-5xl font-bold text-white">{score}</span>
              </div>
              <div className={`text-xl font-bold mb-2 ${grade.color}`}>{grade.label}</div>
              <p className="text-gray-400">Your Contractor Growth Score, {form.name.split(' ')[0] || 'there'}</p>
            </div>

            {weakAreas.length > 0 && (
              <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-7 mb-6">
                <h2 className="font-bold text-white mb-5">Your Biggest Opportunities:</h2>
                <div className="space-y-4">
                  {weakAreas.slice(0, 5).map((q) => (
                    <div key={q.question} className="border-b border-[#2A2A2A] pb-4 last:border-0 last:pb-0">
                      <div className="flex items-start gap-2 mb-1.5">
                        <XCircle className="w-4 h-4 text-[#FF5F00] shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-white text-sm font-medium">{q.question}</span>
                      </div>
                      <p className="text-gray-500 text-xs ml-6">{q.tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-[#FF5F00] rounded-2xl p-7 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">Want help fixing these gaps?</h2>
              <p className="text-white/80 mb-6 text-sm">We'll show you exactly what to prioritize in a free growth plan call.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF5F00] font-bold px-7 py-3.5 rounded-md hover:bg-gray-100 transition-colors group">
                Get My Free Growth Plan
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
