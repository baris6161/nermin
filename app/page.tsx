import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Manifesto from '@/components/Manifesto';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Interactions from '@/components/Interactions';
import Preloader from '@/components/Preloader';

export default function Home() {
  return (
    <>
      <Preloader />
      <div className="grain" />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Manifesto />
      <Portfolio />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
      <Interactions />
    </>
  );
}
