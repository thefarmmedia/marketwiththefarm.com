import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Contractor Marketing Tools | The Farm Media',
  description: 'Use The Farm Media\'s free contractor marketing tools to score your growth system and estimate leads, booked jobs, revenue, and marketing ROI.',
  alternates: { canonical: 'https://marketwiththefarm.com/tools' },
}

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children
}
