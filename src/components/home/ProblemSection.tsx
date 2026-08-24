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
    <section className="bg-[#080808] py-24 lg:py-32" aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FF5F00]/8 border border-[#FF5F00]/15 rounded-full px-4 py-1 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F00]" aria-hidden="true" />
            <span className="text-[#FF5F00] text-sm font-semibold tracking-wide">Sound Familiar?</span>
          </div>
          <h2 id="problem-heading" className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight mb-5">
            Most Contractors Have<br />
            <span className="gradient-text">Been Burned Before.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Here&apos;s what we hear every single week from business owners switching to The Farm.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Problems */}
          <div className="bg-[#0D0D0D] border border-[#1E1E1E] rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                <span className="text-red-500 text-base leading-none">✗</span>
              </div>
              <h3 className="text-base font-bold text-white">What contractors deal with</h3>
            </div>
            <ul className="space-y-4" role="list">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-red-900/20 border border-red-900/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" aria-hidden="true" />
                  </div>
                  <span className="text-gray-500 leading-relaxed text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-[#0D0D0D] border border-[#FF5F00]/15 rounded-2xl p-7 relative overflow-hidden">
            {/* Subtle glow */}
            <div
              className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
              style={{ background: 'radial-gradient(circle at top right, rgba(255,95,0,0.06) 0%, transparent 70%)' }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-8 rounded-full bg-[#FF5F00]/15 border border-[#FF5F00]/25 flex items-center justify-center shrink-0">
                  <span className="text-[#FF5F00] text-base leading-none">✓</span>
                </div>
                <h3 className="text-base font-bold text-white">What The Farm delivers instead</h3>
              </div>
              <ul className="space-y-4" role="list">
                {solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FF5F00]/10 border border-[#FF5F00]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F00]" aria-hidden="true" />
                    </div>
                    <span className="text-gray-300 leading-relaxed text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Quote block */}
        <div className="relative rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, rgba(255,95,0,0.08) 0%, rgba(255,95,0,0.03) 50%, transparent 100%)' }}
            aria-hidden="true"
          />
          <div className="relative border border-[#FF5F00]/15 rounded-2xl p-8 lg:p-12 text-center">
            <blockquote>
              <p className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-relaxed mb-5 tracking-tight">
                &ldquo;Contractors don&apos;t need more marketing reports.
                They need more{' '}
                <span className="gradient-text">calls, bookings, and jobs.</span>&rdquo;
              </p>
              <footer className="text-gray-600 text-sm">— The Farm Media founding principle</footer>
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  )
}
