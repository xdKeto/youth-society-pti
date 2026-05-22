import Hero from './components/Hero/Hero';
import Greeting from './components/Greeting/Greeting';
import WaveDivider from './components/WaveDivider/WaveDivider';
import Activities from './components/Activities/Activities';
import Gallery from './components/Gallery/Gallery';
import Envelope from './components/Envelope/Envelope';
import Typewriter from './components/Typewriter/Typewriter';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

/**
 * App — Youth Society GKI PTI single-page website.
 * Sections flow top-to-bottom matching the Canva design reference.
 */
export default function App() {
  return (
    <main className="relative w-full overflow-x-hidden">
      {/* 1. Hero — full-bleed group photo with overlay */}
      <Hero />

      {/* 2. Greeting — "Hello Youths" wavy text + quote */}
      <Greeting />

      {/* Organic wave divider: tan → brown */}
      <WaveDivider topColor="var(--color-tan)" bottomColor="var(--color-brown)" />

      {/* 3. Activities — 4 program cards */}
      <Activities />

      {/* 3.5. Gallery — circular photo gallery */}
      <Gallery />

      {/* 4–5. Envelope — interactive open/close letter */}
      <Envelope />

      {/* 6. Typewriter — worship vibes + Spotify placeholder */}
      <Typewriter />

      {/* 7. Contact — IG & WA QR codes */}
      <Contact />

      {/* 8. Footer — closing quote blob */}
      <Footer />
    </main>
  );
}
