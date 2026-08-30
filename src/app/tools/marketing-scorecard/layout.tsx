import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Contractor Marketing Scorecard | The Farm Media',
  description: 'Answer 10 questions to score your contractor website, local SEO, advertising, lead follow-up, and overall marketing system.',
  alternates: { canonical: 'https://marketwiththefarm.com/tools/marketing-scorecard' },
}

export default function MarketingScorecardLayout({ children }: { children: React.ReactNode }) {
  return children
}
