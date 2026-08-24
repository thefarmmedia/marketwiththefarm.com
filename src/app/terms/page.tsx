import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | The Farm Media',
  description: 'Terms of Service for The Farm Media — contractor marketing agency in Springfield, MO.',
  alternates: { canonical: 'https://marketwiththefarm.com/terms' },
  robots: { index: false },
}

export default function TermsPage() {
  return (
    <section className="bg-[#0A0A0A] pt-28 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-[#FF5F00] transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-300" aria-current="page">Terms of Service</li>
          </ol>
        </nav>
        <h1 className="text-4xl font-bold text-white mb-3">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: January 1, 2025</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-400 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Acceptance of Terms</h2>
            <p>By accessing and using marketwiththefarm.com, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use this website.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Services</h2>
            <p>The Farm Media provides digital marketing services including web design, SEO, paid advertising, CRM automation, and reputation management for contractors and local service businesses. Specific service terms are outlined in individual client agreements.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Intellectual Property</h2>
            <p>All content on this website — including text, graphics, logos, and code — is the property of The Farm Media and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without written permission.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Disclaimer of Warranties</h2>
            <p>This website and its content are provided &quot;as is&quot; without warranties of any kind, either express or implied. The Farm Media does not warrant that the site will be uninterrupted or error-free.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h2>
            <p>The Farm Media shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or our services. Our total liability shall not exceed the amounts paid by you for our services in the three months preceding the claim.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Governing Law</h2>
            <p>These terms shall be governed by the laws of the State of Missouri. Any disputes shall be resolved in the courts of Greene County, Missouri.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>Questions about these terms? Contact us at <a href="mailto:stephen@thefarmmedia.com" className="text-[#FF5F00] hover:underline">stephen@thefarmmedia.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
