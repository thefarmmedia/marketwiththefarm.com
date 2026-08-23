import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

const services = [
  { label: 'Web Design', href: '/services/web-design' },
  { label: 'Local SEO', href: '/services/seo' },
  { label: 'Google Ads', href: '/services/google-ads' },
  { label: 'Facebook & Meta Ads', href: '/services/facebook-ads' },
  { label: 'CRM & Automation', href: '/services/crm-automation' },
  { label: 'Reputation Management', href: '/services/reputation-management' },
]

const industries = [
  { label: 'Concrete Coatings', href: '/industries/concrete-coating-marketing' },
  { label: 'HVAC', href: '/industries/hvac-marketing' },
  { label: 'Roofing', href: '/industries/roofing-marketing' },
  { label: 'Plumbing', href: '/industries/plumber-marketing' },
  { label: 'Electrical', href: '/industries/electrician-marketing' },
  { label: 'Landscaping', href: '/industries/landscaping-marketing' },
  { label: 'Pressure Washing', href: '/industries/pressure-washing-marketing' },
  { label: 'Garage Doors', href: '/industries/garage-door-marketing' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
  { label: 'Springfield, MO', href: '/springfield-mo' },
]

const tools = [
  { label: 'Marketing Scorecard', href: '/tools/marketing-scorecard' },
  { label: 'ROI Calculator', href: '/tools/roi-calculator' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#2A2A2A]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* CTA Banner */}
      <div className="bg-[#FF5F00]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-xl sm:text-2xl">Ready to fill your schedule?</p>
            <p className="text-white/80 mt-1">Find out where your next 20 jobs should come from — free.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-white text-[#FF5F00] font-bold px-8 py-3.5 rounded-md hover:bg-[#F5F5F5] transition-colors text-sm"
          >
            Get Your Free Growth Plan
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo-orange.png"
                alt="The Farm Media"
                width={44}
                height={44}
                className="w-10 h-10 object-contain"
              />
              <span className="text-white font-bold text-lg leading-tight">
                The Farm<br /><span className="text-[#FF5F00]">Media</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Customer acquisition systems built specifically for contractors and local service businesses.
            </p>
            <div className="space-y-3">
              <a href="tel:+14175551234" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#FF5F00] shrink-0" />
                (417) 555-1234
              </a>
              <a href="mailto:hello@marketwiththefarm.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#FF5F00] shrink-0" />
                hello@marketwiththefarm.com
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-[#FF5F00] shrink-0 mt-0.5" />
                <span>Springfield, MO</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-8 h-8 rounded-md bg-[#2A2A2A] flex items-center justify-center text-gray-400 hover:text-[#FF5F00] hover:bg-[#FF5F00]/10 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-8 h-8 rounded-md bg-[#2A2A2A] flex items-center justify-center text-gray-400 hover:text-[#FF5F00] hover:bg-[#FF5F00]/10 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded-md bg-[#2A2A2A] flex items-center justify-center text-gray-400 hover:text-[#FF5F00] hover:bg-[#FF5F00]/10 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Industries</h3>
            <ul className="space-y-2.5">
              {industries.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              {company.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Free Tools</h3>
            <ul className="space-y-2.5">
              {tools.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Location</h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/springfield-mo" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Springfield, MO
                  </Link>
                </li>
                <li>
                  <Link href="/springfield-mo/seo" className="text-sm text-gray-400 hover:text-white transition-colors">
                    SEO Springfield MO
                  </Link>
                </li>
                <li>
                  <Link href="/springfield-mo/web-design" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Web Design Springfield MO
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} The Farm Media. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
