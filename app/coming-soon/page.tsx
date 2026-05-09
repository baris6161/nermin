import type { Metadata } from 'next';
import ComingSoonClient from '@/components/ComingSoonClient';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nermin-interiors.de';

export const metadata: Metadata = {
  title: 'Bald für dich da - Nermin Interiors',
  description:
    'Nermin Interiors - Minimalistisches Interior Design Studio. Bald online.',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Nermin Interiors - Bald für dich da',
    description: 'Minimalistisches Interior Design für Menschen, die Klarheit und Qualität schätzen.',
    url: BASE_URL,
    images: [{ url: '/og', width: 1200, height: 630, alt: 'Nermin Interiors' }],
  },
};

export default function ComingSoonPage() {
  return <ComingSoonClient />;
}
