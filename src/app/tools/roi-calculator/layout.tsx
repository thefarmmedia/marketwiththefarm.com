import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contractor Marketing ROI Calculator | The Farm Media',
  description: 'Estimate how many leads, booked jobs, and dollars in revenue your contractor marketing budget can generate with this free ROI calculator.',
  alternates: { canonical: 'https://marketwiththefarm.com/tools/roi-calculator' },
}

export default function RoiCalculatorLayout({ children }: { children: React.ReactNode }) {
  return children
}
