import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Manifesto from '@/components/Manifesto';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import BookingSection from '@/components/BookingSection';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Interactions from '@/components/Interactions';
import Preloader from '@/components/Preloader';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie läuft die Zusammenarbeit ab?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir starten mit einem Gespräch, in dem wir deine Räume, deinen Stil und deine Wünsche kennenlernen. Daraus entsteht ein Konzept mit Moodboard, Farbpalette und Materialien, das wir gemeinsam verfeinern. Anschließend begleiten wir dich bis zur Umsetzung mit Shoppinglisten, optionalen 3D-Visualisierungen und kontinuierlichem Austausch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Bietet ihr auch Beratung für einzelne Räume an?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, egal ob kompletter Wohnraum oder nur ein einzelnes Zimmer. Wir gestalten flexibel nach Bedarf, vom Schlafzimmer über die Ankleide bis zum Arbeitsbereich, und kombinieren bei Bedarf einzelne Leistungen wie Moodboard oder 3D-Visualisierung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Arbeitet ihr auch digital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir bieten unsere Leistungen vor Ort und komplett digital an, auch international. Der gesamte Prozess von der Beratung bis zur Shoppingliste lässt sich remote begleiten, sodass dein Standort kein Hindernis ist.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet ein vollständiges Konzept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der Preis richtet sich nach dem Umfang deines Projekts und deinen individuellen Wünschen. Im kostenlosen Erstgespräch sprechen wir gemeinsam darüber, was zu dir passt, und ich stelle dir ein passendes Angebot zusammen.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Preloader />
      <div className="grain" />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Manifesto />
      <Portfolio />
      <Services />
      <Reviews />
      <BookingSection />
      <FAQ />
      <Contact />
      <Footer />
      <Interactions />
    </>
  );
}
