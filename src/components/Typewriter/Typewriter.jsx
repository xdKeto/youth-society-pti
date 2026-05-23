import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';
import FloatingElement from '../shared/FloatingElement';

import { fadeInUp } from '../../utils/motionVariants';

import typewriterImg from '../../assets/illustrations/typewriter.png';
import cassetteTapes from '../../assets/illustrations/cassette_tapes.png';
import musicNotes from '../../assets/illustrations/music_notes.png';

/**
 * VinylRecord — simple SVG vinyl disc with grooves.
 */
function VinylRecord({ className }) {
  return (
    <svg className={className} viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="70" cy="70" r="68" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
      <circle cx="70" cy="70" r="58" fill="none" stroke="#2a2a2a" strokeWidth="0.5" />
      <circle cx="70" cy="70" r="50" fill="none" stroke="#2a2a2a" strokeWidth="0.5" />
      <circle cx="70" cy="70" r="42" fill="none" stroke="#2a2a2a" strokeWidth="0.5" />
      <circle cx="70" cy="70" r="34" fill="none" stroke="#2a2a2a" strokeWidth="0.5" />
      <circle cx="70" cy="70" r="26" fill="none" stroke="#2a2a2a" strokeWidth="0.5" />
      <circle cx="70" cy="70" r="20" fill="#C89B3C" />
      <circle cx="70" cy="70" r="18" fill="#b88a30" />
      <circle cx="70" cy="70" r="4" fill="#1a1a1a" />
      <ellipse cx="55" cy="50" rx="25" ry="15" fill="rgba(255,255,255,0.04)" transform="rotate(-30 55 50)" />
    </svg>
  );
}

/**
 * SpotifyEmbed — Loads the Spotify iFrame API and renders an embedded player.
 */
function SpotifyEmbed() {
  const embedRef = useRef(null);
  const spotifyControllerRef = useRef(null);
  const [iFrameAPI, setIFrameAPI] = useState(undefined);
  const [playerLoaded, setPlayerLoaded] = useState(false);

  // Load the Spotify iFrame API script
  useEffect(() => {
    // If the API is already loaded globally, grab it
    if (window.SpotifyIframeApi) {
      setIFrameAPI(window.SpotifyIframeApi);
      return;
    }

    // Avoid loading the script twice
    if (document.querySelector('script[src="https://open.spotify.com/embed/iframe-api/v1"]')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://open.spotify.com/embed/iframe-api/v1';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Don't remove — other instances may need it
    };
  }, []);

  // Listen for the API ready callback
  useEffect(() => {
    if (iFrameAPI) return;

    window.onSpotifyIframeApiReady = (SpotifyIframeApi) => {
      window.SpotifyIframeApi = SpotifyIframeApi;
      setIFrameAPI(SpotifyIframeApi);
    };
  }, [iFrameAPI]);

  // Create the embedded player once the API is ready
  // Calculate responsive height based on viewport width
  const getResponsiveHeight = () => {
    const vw = window.innerWidth;
    if (vw < 640) return 152;       // mobile — compact
    return 352;                      // tablet/desktop — full
  };

  useEffect(() => {
    if (playerLoaded || !iFrameAPI || !embedRef.current) return;

    iFrameAPI.createController(
      embedRef.current,
      {
        width: '100%',
        height: String(getResponsiveHeight()),
        uri: 'spotify:playlist:0MFEfmrnpYEiuUFoIY0e9t',
      },
      (controller) => {
        controller.addListener('ready', () => {
          setPlayerLoaded(true);
        });
        spotifyControllerRef.current = controller;
      }
    );

    return () => {
      if (spotifyControllerRef.current) {
        spotifyControllerRef.current.removeListener('playback_update');
      }
    };
  }, [playerLoaded, iFrameAPI]);

  // Resize the iframe when the window size changes
  useEffect(() => {
    if (!playerLoaded) return;

    const handleResize = () => {
      const iframe = embedRef.current?.querySelector('iframe');
      if (iframe) {
        iframe.style.height = `${getResponsiveHeight()}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [playerLoaded]);

  return (
    <div className="w-full">
      <div ref={embedRef} className="spotify-embed-container rounded-xl overflow-hidden shadow-lg" />
      {!playerLoaded && (
        <div className="flex items-center justify-center h-[100px] text-[var(--color-dark-brown)] opacity-60 font-[family-name:var(--font-body)] text-[clamp(0.75rem,1.5vw,1rem)]">
          Loading Spotify…
        </div>
      )}
    </div>
  );
}

export default function Typewriter() {
  return (
    <section className="relative bg-[var(--color-sienna)] flex flex-col items-center justify-end pt-10 px-0 overflow-hidden" id="typewriter">
      
      {/* Main composition */}
      <ScrollReveal variants={fadeInUp} threshold={0.2} className="w-full flex justify-center pb-8 z-10">
        <div className="relative flex flex-col items-center max-w-[850px] w-full z-10">
          
          {/* Decorative Assets attached to the content area */}
          <FloatingElement className="absolute top-[10%] -right-1 w-[clamp(100px,18vw,180px)] pointer-events-none z-20 max-sm:top-[5%] max-sm:w-[90px]" duration={4.5} distance={10} delay={0.3}>
            <img src={cassetteTapes} alt="" className="drop-shadow-lg" loading="lazy" aria-hidden="true" />
          </FloatingElement>

          <FloatingElement className="absolute top-[50%] -left-2 w-[clamp(90px,15vw,150px)] pointer-events-none z-20 max-sm:top-[35%] max-sm:w-[80px]" duration={3.5} distance={12} delay={0.8}>
            <img src={musicNotes} alt="" className="drop-shadow-md" loading="lazy" aria-hidden="true" />
          </FloatingElement>

          <VinylRecord className="absolute -right-8 bottom-[50%] w-[clamp(120px,20vw,200px)] h-[clamp(120px,20vw,200px)] pointer-events-none z-20 animate-spin-slow drop-shadow-xl max-sm:w-[90px] max-sm:h-[90px]" />

          {/* Heading — above the typewriter */}
          <h2 className="font-[family-name:var(--font-display)] text-[var(--color-cream)] text-[clamp(1.4rem,4vw,2.4rem)] leading-[1.3] mb-0 mt-2 tracking-[0.05em] text-center z-10 drop-shadow-md">
            LET'S WORSHIP AND JAM TOGETHER!
          </h2>

          {/* Typewriter composition: Asset + Spotify embed on its paper */}
          <motion.div
            className="relative z-10 w-full flex justify-center mt-0 max-sm:mt-0 will-change-transform"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <img
              src={typewriterImg}
              alt="Typewriter illustration"
              className="w-[125%] max-sm:w-[136%] max-w-none flex-shrink-0 h-auto drop-shadow-2xl"
            />
            
            {/* Spotify embed positioned ON the typewriter's paper */}
            <div className="absolute top-[3%] left-[50%] -translate-x-[50%] flex items-start justify-center w-[64%] max-sm:w-[76%] z-20">
              <SpotifyEmbed />
            </div>
          </motion.div>
        </div>
      </ScrollReveal>

      {/* Dark green strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-[var(--color-forest-green)] z-0 max-sm:h-[40px]" />
    </section>
  );
}
