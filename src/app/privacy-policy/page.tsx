import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Farm Media',
  description: 'Privacy Policy for The Farm Media — contractor marketing agency in Springfield, MO.',
  alternates: { canonical: 'https://marketwiththefarm.com/privacy-policy' },
  robots: { index: false },
}

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-[#0A0A0A] pt-28 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-[#FF5F00] transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-300" aria-current="page">Privacy Policy</li>
          </ol>
        </nav>
        <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: January 1, 2025</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-400 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Information We Collect</h2>
            <p>When you submit a form on our website, we collect your name, business name, phone number, email address, website URL, and any details you provide about your marketing needs. We use this information solely to contact you about our services.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h2>
            <p>We use your information to respond to your inquiries, provide our services, and occasionally send relevant marketing communications. We do not sell, rent, or share your personal information with third parties for their marketing purposes.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Cookies and Analytics</h2>
            <p>Our website may use cookies and analytics tools (such as Google Analytics) to understand how visitors use our site. This information is aggregated and anonymous. You can disable cookies in your browser settings.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Data Security</h2>
            <p>We implement reasonable security measures to protect your information. However, no internet transmission is completely secure, and we cannot guarantee the absolute security of your data.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at <a href="mailto:hello@marketwiththefarm.com" className="text-[#FF5F00] hover:underline">hello@marketwiththefarm.com</a>.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>Questions about this policy? Contact The Farm Media at <a href="mailto:hello@marketwiththefarm.com" className="text-[#FF5F00] hover:underline">hello@marketwiththefarm.com</a>.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
