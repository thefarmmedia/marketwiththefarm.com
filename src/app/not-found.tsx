import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-[#FF5F00] mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="bg-[#FF5F00] hover:bg-[#CC4C00] text-white font-bold px-6 py-3 rounded-md transition-colors">
            Go Home
          </Link>
          <Link href="/contact" className="border border-[#2A2A2A] hover:border-[#FF5F00]/50 text-white font-semibold px-6 py-3 rounded-md transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
