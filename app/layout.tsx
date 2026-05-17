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
    default: 'Nermin Interiors · Interior Design Studio Dortmund',
    template: '%s · Nermin Interiors',
  },
  description:
    'Interior Design Studio von Nermin El Rifaey in Dortmund. Minimalistische Räume — reduziert, warm, zeitlos. Design Call ab 90 €, E-Design & Curated Shopping. Online buchbar.',
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
    title: 'Nermin Interiors · Interior Design Studio Dortmund',
    description:
      'Minimalistische Räume für Menschen, die Wert auf Ruhe und Qualität legen. Design Call, E-Design & Curated Shopping — online buchbar.',
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
    title: 'Nermin Interiors · Interior Design Studio Dortmund',
    description: 'Minimalistische Räume. Reduziert. Warm. Zeitlos. Online buchbar.',
    images: ['/og'],
  },
  robots: isProduction
    ? { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } }
    : { index: false, follow: false },
  alternates: {
    canonical: BASE_URL,
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Nermin Interiors',
  url: BASE_URL,
  description: 'Minimalistisches Interior Design Studio von Nermin El Rifaey in Dortmund. E-Design, Design Call und Curated Shopping — online und deutschlandweit.',
  telephone: '+491622017106',
  email: 'nermin.interiors@gmail.com',
  founder: {
    '@type': 'Person',
    name: 'Nermin El Rifaey',
    jobTitle: 'Interior Designerin',
    url: BASE_URL,
    sameAs: ['https://www.instagram.com/nermiin.interiors'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Echeloh 25',
    addressLocality: 'Dortmund',
    postalCode: '44149',
    addressCountry: 'DE',
  },
  areaServed: { '@type': 'Country', name: 'Germany' },
  sameAs: ['https://www.instagram.com/nermiin.interiors'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Interior Design Leistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Design Call',
          description: '90-minütige Online-Beratung zu Möbeln, Farben, Raumoptimierung und Stylingideen.',
        },
        price: '90',
        priceCurrency: 'EUR',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-Design',
          description: 'Vollständiges Interior-Konzept mit Moodboard, Farbkonzept, Möbel- und Materialauswahl sowie persönlicher Shoppingliste.',
        },
        price: '690',
        priceCurrency: 'EUR',
        description: 'ab 690 € pro Raum',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Curated Shopping',
          description: 'Individuell abgestimmte Shoppingliste für Möbel, Materialien und Dekoration.',
        },
        price: '290',
        priceCurrency: 'EUR',
        description: 'ab 290 € pro Raum',
      },
    ],
  },
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Nermin Interiors',
  url: BASE_URL,
  inLanguage: 'de-DE',
  publisher: {
    '@type': 'LocalBusiness',
    name: 'Nermin Interiors',
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
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
