import { XCircle, CheckCircle } from 'lucide-react'

const problems = [
  'Paying for marketing and having no idea what happened to the leads',
  'A website that looks nice but never rings your phone',
  'Facebook leads going cold because nobody followed up fast enough',
  'Competitors showing up above you on Google even though you\'ve been in business longer',
  'Five different companies each handling one piece of your marketing — none of them talking to each other',
  'An agency that sends monthly reports full of "impressions" but can\'t tell you how many jobs you booked',
  'No review strategy — while your competitor has 200 five-star Google reviews',
  'Spending $3,000/month on Google Ads without knowing your cost per booked job',
]

const solutions = [
  'Every lead tracked from first click to booked job',
  'A website built to convert visitors into calls and form submissions',
  'Automatic SMS follow-up within 60 seconds of every lead',
  'Google Business Profile optimized so you show up first in your market',
  'One connected system — website, SEO, ads, CRM, and reviews all working together',
  'Reporting that shows revenue, not vanity metrics',
  'Automated review requests that generate Google reviews on autopilot',
  'Full conversion tracking so you know your exact cost per booked job',
]

export default function ProblemSection() {
  return (
    <section className="bg-[#0A0A0A] py-20 lg:py-28" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="problem-heading" className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Sound Familiar?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Most contractors have been burned by marketing companies before.
            Here's what we hear every single week from business owners switching to The Farm.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Problems */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="w-6 h-6 text-red-500 shrink-0" aria-hidden="true" />
              <h3 className="text-xl font-bold text-white">What contractors are dealing with</h3>
            </div>
            <ul className="space-y-4" role="list">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" aria-hidden="true" />
                  </div>
                  <span className="text-gray-400 leading-relaxed text-sm sm:text-base">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-[#FF5F00] shrink-0" aria-hidden="true" />
              <h3 className="text-xl font-bold text-white">What The Farm delivers instead</h3>
            </div>
            <ul className="space-y-4" role="list">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF5F00]/10 border border-[#FF5F00]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F00]" aria-hidden="true" />
                  </div>
                  <span className="text-gray-300 leading-relaxed text-sm sm:text-base">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 lg:p-10 text-center">
          <blockquote>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-relaxed mb-4">
              "Contractors don't need more marketing reports.
              They need more{' '}
              <span className="text-[#FF5F00]">calls, bookings, and jobs.</span>"
            </p>
            <footer className="text-gray-500 text-sm">— The Farm Media founding principle</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
