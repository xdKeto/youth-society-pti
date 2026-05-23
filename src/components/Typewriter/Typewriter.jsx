import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';
import FloatingElement from '../shared/FloatingElement';

import { fadeInUp } from '../../utils/motionVariants';

import computerImg from '../../assets/illustrations/computer.png';
import letsJamImg from '../../assets/illustrations/lets_jam.png';
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
  const wrapperRef = useRef(null);
  const spotifyControllerRef = useRef(null);
  const [iFrameAPI, setIFrameAPI] = useState(undefined);
  const [playerLoaded, setPlayerLoaded] = useState(false);
  const [containerHeight, setContainerHeight] = useState(352); // Default fallback

  // Load the Spotify iFrame API script
  useEffect(() => {
    if (window.SpotifyIframeApi) {
      setIFrameAPI(window.SpotifyIframeApi);
      return;
    }
    if (document.querySelector('script[src="https://open.spotify.com/embed/iframe-api/v1"]')) {
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://open.spotify.com/embed/iframe-api/v1';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Listen for the API ready callback
  useEffect(() => {
    if (iFrameAPI) return;
    window.onSpotifyIframeApiReady = (SpotifyIframeApi) => {
      window.SpotifyIframeApi = SpotifyIframeApi;
      setIFrameAPI(SpotifyIframeApi);
    };
  }, [iFrameAPI]);

  // Use ResizeObserver to track actual pixel dimensions of the wrapper
  useEffect(() => {
    if (!wrapperRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.height > 0) {
          setContainerHeight(Math.floor(entry.contentRect.height));
        }
      }
    });
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  // Create the embedded player once the API is ready and we have a height
  useEffect(() => {
    if (playerLoaded || !iFrameAPI || !embedRef.current || containerHeight === 0) return;

    iFrameAPI.createController(
      embedRef.current,
      {
        width: '100%',
        height: String(Math.max(containerHeight, 352)),
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
  }, [playerLoaded, iFrameAPI]); // We only create once, so don't depend on containerHeight here after initial load

  // Resize the iframe dynamically when the container size changes
  useEffect(() => {
    if (!playerLoaded || !wrapperRef.current) return;
    const iframe = wrapperRef.current.querySelector('iframe');
    if (iframe) {
      const h = Math.max(containerHeight, 352);
      iframe.style.height = `${h}px`;
      iframe.setAttribute('height', String(h));
      // iframe.setAttribute('height', String(containerHeight));
    }
  }, [playerLoaded, containerHeight]);

  return (
    <div ref={wrapperRef} className="w-full h-full relative">
      <div ref={embedRef} className="spotify-embed-container rounded-lg overflow-hidden shadow-lg w-full h-full absolute inset-0" />
      {!playerLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-[var(--color-dark-brown)] opacity-60 font-[family-name:var(--font-body)] text-[clamp(0.65rem,1.5vw,0.9rem)]">
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
          
          {/* Decorative Assets */}
          <FloatingElement className="absolute top-[3%] left-[5%] w-[clamp(100px,18vw,180px)] pointer-events-none z-20 max-sm:top-[10%] max-sm:-left-3 max-sm:w-[100px]" duration={4.5} distance={10} delay={0.3}>
            <img src={cassetteTapes} alt="" className="drop-shadow-lg" loading="lazy" aria-hidden="true" />
          </FloatingElement>

          <FloatingElement className="absolute top-[8%] right-[20%] w-[clamp(60px,10vw,100px)] pointer-events-none z-20 max-sm:-top-[1%] max-sm:right-[15%] max-sm:w-[50px]" duration={3.5} distance={12} delay={0.8}>
            <img src={musicNotes} alt="" className="drop-shadow-md" loading="lazy" aria-hidden="true" />
          </FloatingElement>

          <VinylRecord className="absolute -right-6 -bottom-[3%] w-[clamp(120px,20vw,200px)] h-[clamp(120px,20vw,200px)] pointer-events-none z-20 animate-spin-slow drop-shadow-xl max-sm:w-[100px] max-sm:h-[100px] max-sm:-right-8 max-sm:bottom-[8%] z-20 oveflow" />

          {/* Title — lets_jam.png asset */}
          <img
            src={letsJamImg}
            alt="Let's Worship and Jam Together!"
            className="w-[clamp(220px,45vw,420px)] h-auto object-contain z-10 mb-2 drop-shadow-md max-sm:w-[clamp(200px,60vw,280px)]"
          />

          {/* Computer composition: Asset + Spotify embed on screen */}
          <motion.div
            className="relative z-10 w-full flex justify-center mt-0 will-change-transform"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Computer image — on mobile, stretch height to 500px to fit full Spotify player */}
            <img
              src={computerImg}
              alt="Computer illustration"
              className="w-[100%] h-auto max-sm:w-[130%] max-sm:h-[500px] max-w-none flex-shrink-0 drop-shadow-2xl"
            />
            
            {/* Spotify embed positioned ON the computer screen */}
            {/* Adjusted to fit the bezel of the computer exactly */}
            <div
              className="absolute z-20 w-[105%] sm:w-[97%]"
              style={{
                top: '5%',
                // left: '2.5%',
                height: '65%',
              }}
            >
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
