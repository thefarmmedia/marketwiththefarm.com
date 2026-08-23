'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, DollarSign } from 'lucide-react'

export default function ROICalculatorPage() {
  const [avg, setAvg] = useState(3500)
  const [close, setClose] = useState(40)
  const [cpl, setCpl] = useState(35)
  const [budget, setBudget] = useState(2000)

  const leads = budget > 0 && cpl > 0 ? Math.floor(budget / cpl) : 0
  const jobs = Math.floor(leads * (close / 100))
  const revenue = jobs * avg
  const profit = revenue - budget
  const roi = budget > 0 ? Math.round((profit / budget) * 100) : 0

  const fmt = (n: number) => '$' + n.toLocaleString()

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-block bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-full px-4 py-1 mb-4">
            <span className="text-[#FF5F00] text-sm font-medium">Free Tool</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Marketing ROI Calculator</h1>
          <p className="text-gray-400">See what your marketing budget should be generating for your contracting business.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Inputs */}
          <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-7">
            <h2 className="font-bold text-white mb-6">Your Numbers</h2>
            <div className="space-y-6">
              {[
                { label: 'Average job value', value: avg, set: setAvg, min: 500, max: 50000, step: 250, prefix: '$', suffix: '' },
                { label: 'Lead-to-job close rate', value: close, set: setClose, min: 5, max: 100, step: 5, prefix: '', suffix: '%' },
                { label: 'Target cost per lead', value: cpl, set: setCpl, min: 10, max: 500, step: 5, prefix: '$', suffix: '' },
                { label: 'Monthly ad budget', value: budget, set: setBudget, min: 500, max: 20000, step: 250, prefix: '$', suffix: '' },
              ].map((field) => (
                <div key={field.label}>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm text-gray-300 font-medium">{field.label}</label>
                    <span className="text-[#FF5F00] font-bold">{field.prefix}{field.value.toLocaleString()}{field.suffix}</span>
                  </div>
                  <input
                    type="range"
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    value={field.value}
                    onChange={(e) => field.set(Number(e.target.value))}
                    className="w-full accent-[#FF5F00] h-2"
                    aria-label={field.label}
                  />
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>{field.prefix}{field.min.toLocaleString()}{field.suffix}</span>
                    <span>{field.prefix}{field.max.toLocaleString()}{field.suffix}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="space-y-3">
            <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-7">
              <h2 className="font-bold text-white mb-5">Your Projected Results</h2>
              <div className="space-y-4">
                {[
                  { label: 'Leads per month', value: leads.toString(), sub: `at ${fmt(cpl)} per lead` },
                  { label: 'Jobs booked', value: jobs.toString(), sub: `at ${close}% close rate` },
                  { label: 'Revenue generated', value: fmt(revenue), sub: `at ${fmt(avg)} per job` },
                  { label: 'Net after ad spend', value: fmt(profit), sub: `${fmt(budget)} budget subtracted`, highlight: true },
                ].map((row) => (
                  <div key={row.label} className={`flex items-center justify-between py-3 border-b border-[#2A2A2A] last:border-0 ${row.highlight ? 'bg-[#FF5F00]/5 -mx-3 px-3 rounded-lg' : ''}`}>
                    <div>
                      <div className="text-sm text-gray-400">{row.label}</div>
                      <div className="text-xs text-gray-600">{row.sub}</div>
                    </div>
                    <div className={`text-xl font-bold ${row.highlight ? 'text-[#FF5F00]' : 'text-white'}`}>{row.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-[#2A2A2A] flex items-center justify-between">
                <span className="text-gray-400 font-medium">Return on ad spend</span>
                <span className={`text-2xl font-bold ${roi > 0 ? 'text-[#FF5F00]' : 'text-red-500'}`}>{roi}%</span>
              </div>
            </div>

            <div className="bg-[#FF5F00]/10 border border-[#FF5F00]/20 rounded-2xl p-5 text-sm text-gray-300">
              <p className="mb-2"><strong className="text-white">These numbers assume:</strong></p>
              <ul className="space-y-1 text-xs text-gray-400">
                <li>• Campaigns are properly set up and tracked</li>
                <li>• Leads are followed up within 5 minutes</li>
                <li>• Your website converts at an acceptable rate</li>
                <li>• Cost per lead is maintained through optimization</li>
              </ul>
            </div>

            <div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-5 text-center">
              <DollarSign className="w-8 h-8 text-[#FF5F00] mx-auto mb-3" aria-hidden="true" />
              <p className="text-white font-bold mb-1">Want us to hit these numbers for real?</p>
              <p className="text-gray-400 text-xs mb-4">Get a free plan showing exactly how we'd get there.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold px-6 py-2.5 rounded-md transition-colors text-sm group">
                Get My Free Growth Plan
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
