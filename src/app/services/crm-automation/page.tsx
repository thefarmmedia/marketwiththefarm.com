import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, MessageSquare, Phone, Bell } from 'lucide-react'

export const metadata: Metadata = {
  title: 'CRM & Lead Automation for Contractors | The Farm Media',
  description: 'Never lose a lead again. We set up CRM systems with instant SMS follow-up, email sequences, missed-call text back, and automated pipelines that keep your leads from going cold.',
  alternates: { canonical: 'https://marketwiththefarm.com/services/crm-automation' },
}

const automations = [
  { icon: Clock, title: 'Instant SMS in 60 Seconds', desc: 'The moment a lead submits a form or calls, they get a personalized text from your business — automatically.' },
  { icon: MessageSquare, title: 'Email Follow-Up Sequences', desc: 'Branded follow-up emails that nurture leads who aren\'t ready to book immediately.' },
  { icon: Phone, title: 'Missed-Call Text Back', desc: 'If a call isn\'t answered, an automatic text goes out so you don\'t lose the lead.' },
  { icon: Bell, title: 'Sales Team Notifications', desc: 'Instant alerts when a new lead comes in so your team can follow up while the lead is hot.' },
]

export default function CRMAutomationPage() {
  return (
    <>
      <section className="bg-[#0A0A0A] pt-28 pb-20" aria-labelledby="crm-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-[#FF5F00] transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-[#FF5F00] transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gray-300" aria-current="page">CRM & Automation</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-6">
              <span className="text-[#FF5F00] text-sm font-medium">CRM & Lead Automation</span>
            </div>
            <h1 id="crm-heading" className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Stop Letting Leads<br />
              <span className="text-[#FF5F00]">Fall Through the Cracks.</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              The average contractor calls back a lead in 47 hours. The contractor who calls back in 5 minutes wins the job. We build the automation that makes that happen — while you're on a job, in a meeting, or asleep.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold px-7 py-3.5 rounded-md transition-colors group">
              Set Up My Lead Automation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#111111] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10">What Gets Automated</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {automations.map((a) => (
              <div key={a.title} className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-[#FF5F00]/10 flex items-center justify-center mb-4">
                  <a.icon className="w-5 h-5 text-[#FF5F00]" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-white mb-2">{a.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#0A0A0A] border border-[#2A2A2A] rounded-2xl p-8">
            <blockquote>
              <p className="text-xl text-white font-medium mb-4">
                "The contractor who responds in 5 minutes closes <span className="text-[#FF5F00]">21x more jobs</span> than the one who responds in 30 minutes."
              </p>
              <footer className="text-gray-500 text-sm">— Harvard Business Review study on lead response time</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="bg-[#FF5F00] py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">How many leads are you losing right now?</h2>
          <p className="text-white/80 mb-8">Let's set up automation so every lead gets a response in under 60 seconds.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#FF5F00] font-bold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors">
            Get My CRM Setup
          </Link>
        </div>
      </section>
    </>
  )
}
