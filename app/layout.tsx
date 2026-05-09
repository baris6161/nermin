import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
  preload: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: false,
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nermin-interiors.de';
const isProduction = process.env.VERCEL_ENV === 'production' || process.env.NODE_ENV === 'production';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Nermin Interiors - Minimalistisches Interior Design',
    template: '%s - Nermin Interiors',
  },
  description:
    'Minimalistisches Interior Design von Nermin El Rifaey. Klare, durchdachte Räume - reduziert, warm, zeitlos. Design Call, E-Design & Curated Shopping.',
  keywords: [
    'Interior Design', 'Inneneinrichtung', 'Minimalistisch', 'Raumgestaltung',
    'Nermin Interiors', 'E-Design', 'Moodboard', 'Interior Beratung', 'Online Interior Design',
  ],
  authors: [{ name: 'Nermin El Rifaey' }],
  creator: 'Nermin El Rifaey',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: BASE_URL,
    siteName: 'Nermin Interiors',
    title: 'Nermin Interiors - Minimalistisches Interior Design',
    description:
      'Klare, durchdachte Räume für Menschen, die Wert auf Ruhe und Qualität legen. Reduziert. Warm. Im Alltag bewohnbar.',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'Nermin Interiors - Minimalistisches Interior Design Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nermin Interiors - Minimalistisches Interior Design',
    description: 'Klare, durchdachte Räume. Reduziert. Warm. Zeitlos.',
    images: ['/og'],
  },
  robots: isProduction
    ? { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } }
    : { index: false, follow: false },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Nermin Interiors',
  url: BASE_URL,
  description: 'Minimalistisches Interior Design Studio von Nermin El Rifaey.',
  founder: {
    '@type': 'Person',
    name: 'Nermin El Rifaey',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dortmund',
    addressCountry: 'DE',
  },
  sameAs: ['https://www.instagram.com/nermiin.interiors'],
  serviceType: ['Interior Design', 'Raumgestaltung', 'E-Design'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
