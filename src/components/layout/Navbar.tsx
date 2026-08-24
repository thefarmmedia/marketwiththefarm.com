'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const nav = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Web Design', href: '/services/web-design', desc: 'Sites that convert visitors into calls' },
      { label: 'Local SEO', href: '/services/seo', desc: 'Rank on Google Maps & organic search' },
      { label: 'Google Ads', href: '/services/google-ads', desc: 'Paid search that drives real leads' },
      { label: 'Facebook & Meta Ads', href: '/services/facebook-ads', desc: 'Social ads for local service businesses' },
      { label: 'CRM & Automation', href: '/services/crm-automation', desc: 'Never lose a lead again' },
      { label: 'Reputation Management', href: '/services/reputation-management', desc: 'More Google reviews, faster' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Concrete Coatings', href: '/industries/concrete-coating-marketing', desc: 'Epoxy & polyaspartic contractors' },
      { label: 'HVAC', href: '/industries/hvac-marketing', desc: 'Heating & cooling companies' },
      { label: 'Roofing', href: '/industries/roofing-marketing', desc: 'Residential & commercial roofers' },
      { label: 'Plumbing', href: '/industries/plumber-marketing', desc: 'Plumbers & drain services' },
      { label: 'Electrical', href: '/industries/electrician-marketing', desc: 'Electricians & electrical contractors' },
      { label: 'Landscaping', href: '/industries/landscaping-marketing', desc: 'Lawn care & landscape companies' },
      { label: 'Pressure Washing', href: '/industries/pressure-washing-marketing', desc: 'Power washing & exterior cleaning' },
      { label: 'Garage Doors', href: '/industries/garage-door-marketing', desc: 'Installation & repair companies' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="The Farm Media Home">
            <Image
              src="/images/logo-orange.png"
              alt="The Farm Media"
              width={44}
              height={44}
              className="w-10 h-10 lg:w-11 lg:h-11 object-contain"
              priority
            />
            <span className="text-white font-bold text-lg hidden sm:block tracking-tight">
              The Farm <span className="text-[#FF5F00]">Media</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {nav.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/5"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="bg-[#0F0F0F]/90 backdrop-blur-xl border border-white/[0.07] rounded-xl p-2 shadow-2xl min-w-[280px]" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)' }}>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors group/item"
                        >
                          <span className="text-sm font-medium text-white group-hover/item:text-[#FF5F00] transition-colors">{child.label}</span>
                          <span className="text-xs text-gray-500 mt-0.5">{child.desc}</span>
                        </Link>
                      ))}
                      <div className="border-t border-[#2A2A2A] mt-2 pt-2">
                        <Link
                          href={item.href}
                          className="flex px-3 py-2 text-xs text-[#FF5F00] font-medium hover:text-white transition-colors"
                        >
                          View all {item.label} →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+14175551234"
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
              aria-label="Call The Farm Media"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(417) 555-1234</span>
            </a>
            <Link
              href="/contact"
              className="relative overflow-hidden bg-[#FF5F00] hover:bg-[#E55500] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 whitespace-nowrap active:scale-95 group"
              style={{ boxShadow: '0 0 20px rgba(255,95,0,0.3)' }}
            >
              Get a Free Growth Plan
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors rounded-md"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0A0A0A] border-t border-[#2A2A2A]">
          <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
            {nav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-3 text-base font-medium text-white hover:text-[#FF5F00] transition-colors rounded-lg hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-[#2A2A2A] pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-2 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-[#2A2A2A] space-y-3">
              <a
                href="tel:+14175551234"
                className="flex items-center gap-2 px-3 py-2.5 text-sm text-gray-300 hover:text-white"
              >
                <Phone className="w-4 h-4 text-[#FF5F00]" />
                (417) 555-1234
              </a>
              <Link
                href="/contact"
                className="block bg-[#FF5F00] text-white text-center font-semibold px-5 py-3 rounded-md hover:bg-[#CC4C00] transition-colors"
                onClick={() => setOpen(false)}
              >
                Get a Free Growth Plan
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
