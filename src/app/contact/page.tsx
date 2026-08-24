import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Get a Free Growth Plan — The Farm Media',
  description: 'Schedule a free strategy call with The Farm Media. We\'ll analyze your current marketing, identify the biggest opportunities, and show you exactly what we\'d do first to generate more leads.',
  alternates: {
    canonical: 'https://marketwiththefarm.com/contact',
  },
}

const services = [
  'Web Design & Development',
  'Local SEO',
  'Google Ads Management',
  'Facebook / Meta Ads',
  'CRM & Automation Setup',
  'Reputation Management',
  'Full Growth System',
  'Not sure yet — help me figure it out',
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-28 pb-16" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-6">
              <span className="text-[#FF5F00] text-sm font-medium">Free Strategy Call</span>
            </div>
            <h1 id="contact-heading" className="text-5xl sm:text-6xl font-bold text-white mb-5 leading-tight">
              Let's Find Your<br />
              <span className="text-[#FF5F00]">Next 20 Jobs.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              A free Growth Plan call — no pitch, no agency fluff. Just an honest look at what's working, what isn't, and what we'd do first to grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-[#0A0A0A] pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2 bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white mb-6">Tell us about your business</h2>
              <form
                action="https://formsubmit.co/stephen@thefarmmedia.com"
                method="POST"
                className="space-y-5"
                aria-label="Contact form"
              >
                <input type="hidden" name="_subject" value="New Growth Plan Request from MarketWithTheFarm.com" />
                <input type="hidden" name="_next" value="https://marketwiththefarm.com/contact?sent=true" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name <span className="text-[#FF5F00]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#FF5F00] transition-colors text-sm"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-gray-300 mb-2">
                      Business Name <span className="text-[#FF5F00]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      required
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#FF5F00] transition-colors text-sm"
                      placeholder="Smith Concrete Coatings"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number <span className="text-[#FF5F00]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#FF5F00] transition-colors text-sm"
                      placeholder="(417) 365-5383"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address <span className="text-[#FF5F00]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#FF5F00] transition-colors text-sm"
                      placeholder="john@smithcoatings.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                    Current Website URL
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#FF5F00] transition-colors text-sm"
                    placeholder="https://yourwebsite.com (or none if you don't have one)"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    What service are you most interested in? <span className="text-[#FF5F00]" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FF5F00] transition-colors text-sm appearance-none"
                  >
                    <option value="" className="text-gray-600">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="area" className="block text-sm font-medium text-gray-300 mb-2">
                    What city / service area do you work in? <span className="text-[#FF5F00]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="area"
                    name="area"
                    type="text"
                    required
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#FF5F00] transition-colors text-sm"
                    placeholder="Springfield, MO and surrounding areas"
                  />
                </div>

                <div>
                  <label htmlFor="problem" className="block text-sm font-medium text-gray-300 mb-2">
                    What's your biggest marketing problem right now?
                  </label>
                  <textarea
                    id="problem"
                    name="problem"
                    rows={4}
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#FF5F00] transition-colors text-sm resize-none"
                    placeholder="Tell us what's frustrating you about your current marketing situation..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold text-lg py-4 rounded-lg transition-colors active:scale-[0.99]"
                >
                  Get My Free Growth Plan
                </button>

                <p className="text-center text-gray-600 text-xs">
                  No spam. No commitment. We'll reach out within 1 business day.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-6">
                <h3 className="font-bold text-white mb-5">Prefer to reach out directly?</h3>
                <div className="space-y-4">
                  <a href="tel:+14173655383" className="flex items-center gap-3 text-gray-300 hover:text-[#FF5F00] transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-[#FF5F00]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF5F00]/20 transition-colors">
                      <Phone className="w-4 h-4 text-[#FF5F00]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">Call or Text</div>
                      <div className="font-medium">(417) 365-5383</div>
                    </div>
                  </a>
                  <a href="mailto:stephen@thefarmmedia.com" className="flex items-center gap-3 text-gray-300 hover:text-[#FF5F00] transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-[#FF5F00]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF5F00]/20 transition-colors">
                      <Mail className="w-4 h-4 text-[#FF5F00]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">Email</div>
                      <div className="font-medium text-sm">stephen@thefarmmedia.com</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-10 h-10 rounded-lg bg-[#FF5F00]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#FF5F00]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">Based in</div>
                      <div className="font-medium">Springfield, MO</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-10 h-10 rounded-lg bg-[#FF5F00]/10 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-[#FF5F00]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">Response Time</div>
                      <div className="font-medium">Within 1 business day</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-3">What happens on the call?</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  {[
                    'We review your current website, SEO visibility, and ad presence',
                    'We identify the biggest opportunities in your market',
                    'You\'ll leave with a clear picture of what to do first',
                    'No pressure, no commitment — just real strategy',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F00] shrink-0 mt-1.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
