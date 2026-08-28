import type { Metadata } from 'next'
import CaseStudyPage from '@/components/CaseStudyPage'

export const metadata: Metadata = {
  title: 'Shippmates Epoxy Case Study — The Farm Media',
  description: 'How The Farm Media helped Shippmates Epoxy stop losing leads and keep a full calendar with CRM automation and Google Ads.',
  alternates: { canonical: 'https://marketwiththefarm.com/case-studies/shippmates-epoxy' },
}

export default function ShippmatesCase() {
  return (
    <CaseStudyPage data={{
      client: 'Shippmates Epoxy',
      url: 'shippmatesepoxy.com',
      industry: 'Concrete Coatings',
      location: 'Missouri',
      tagline: 'Zero leads lost. Calendar always full.',
      services: ['CRM Automation', 'Google Ads', 'Web Design', 'Review Generation', 'SMS Follow-Up'],
      results: [
        { label: 'Leads Lost', value: 'Zero', sub: 'Automated follow-up' },
        { label: 'Response Time', value: '60 sec', sub: 'SMS fires instantly' },
        { label: 'Calendar', value: 'Full', sub: 'Consistent bookings' },
        { label: 'Reviews', value: 'Growing', sub: 'Auto-requested post-job' },
      ],
      challenge: [
        'Inconsistent lead flow — some weeks overflowing, others quiet. No predictability.',
        'Leads from Google Ads were coming in but nobody was following up fast enough.',
        'Hot leads were going cold because the team was on the job and couldn\'t respond immediately.',
        'No review generation system — missing the trust signals that help close new customers.',
      ],
      solution: [
        'Set up full CRM with instant lead routing and automated SMS fired within 60 seconds of every inquiry.',
        'Built a missed-call text-back system so no call goes unanswered even when the crew is working.',
        'Rebuilt and optimized Google Ads campaigns with proper conversion tracking and negative keywords.',
        'Implemented automated review requests sent via SMS after every completed job.',
        'Redesigned website with stronger conversion elements and faster load time.',
      ],
      quote: {
        text: 'We used to lose jobs because we couldn\'t follow up fast enough. Now the CRM texts every lead instantly and we almost never lose a hot prospect. The calendar stays full.',
        author: 'Shippmates Epoxy',
      },
    }} />
  )
}
