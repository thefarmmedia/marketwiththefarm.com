'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

const stats = [
  { value: 500, suffix: '+', label: 'Leads generated this month', prefix: '' },
  { value: 92, suffix: '%', label: 'Client retention rate', prefix: '' },
  { value: 24, suffix: '', label: 'Avg. cost per lead (Google Ads)', prefix: '$' },
  { value: 4.8, suffix: '★', label: 'Avg. Google rating for clients', prefix: '', decimals: 1 },
]

function useCountUp(target: number, duration = 1800, decimals = 0, active: boolean) {
  const [count, setCount] = useState(0)
  const raf = useRef<number | null>(null)
  const start = useRef<number | null>(null)

  const run = useCallback((ts: number) => {
    if (!start.current) start.current = ts
    const pct = Math.min((ts - start.current) / duration, 1)
    const ease = 1 - Math.pow(1 - pct, 3)
    setCount(parseFloat((ease * target).toFixed(decimals)))
    if (pct < 1) raf.current = requestAnimationFrame(run)
  }, [target, duration, decimals])

  useEffect(() => {
    if (!active) return
    start.current = null
    raf.current = requestAnimationFrame(run)
    return () => { if (raf.current) cancelAnimationFrame(raf.current) }
  }, [active, run])

  return decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString()
}

function StatItem({ stat, index, sectionActive }: {
  stat: typeof stats[0]
  index: number
  sectionActive: boolean
}) {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const value = useCountUp(stat.value, 1800, stat.decimals ?? 0, active)

  useEffect(() => {
    if (!sectionActive) return
    const timer = setTimeout(() => setActive(true), index * 120)
    return () => clearTimeout(timer)
  }, [sectionActive, index])

  return (
    <div
      ref={ref}
      className={`relative text-center py-10 px-6 border-b lg:border-b-0 lg:border-r border-[#1E1E1E] last:border-0 group transition-all duration-300 hover:bg-[#FF5F00]/[0.03]`}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,95,0,0.07) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-2 tabular-nums">
          <span className="text-[#FF5F00]">{stat.prefix}</span>
          {value}
          <span className="text-[#FF5F00]">{stat.suffix}</span>
        </div>
        <div className="text-gray-500 text-sm font-medium max-w-[180px] mx-auto leading-snug">
          {stat.label}
        </div>
      </div>
    </div>
  )
}

export default function StatsSection() {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-[#0A0A0A] border-y border-[#1E1E1E]" aria-label="Key statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} sectionActive={active} />
          ))}
        </div>
      </div>
    </section>
  )
}
