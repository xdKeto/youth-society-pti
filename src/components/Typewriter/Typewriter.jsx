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
 * MusicNoteIcon — simple SVG music note for the QR placeholder.
 */
function MusicNoteIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 18V5l12-2v13"
        stroke="var(--color-dark-brown)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
      <circle cx="6" cy="18" r="3" fill="var(--color-dark-brown)" opacity="0.4" />
      <circle cx="18" cy="16" r="3" fill="var(--color-dark-brown)" opacity="0.4" />
    </svg>
  );
}

export default function Typewriter() {
  return (
    <section className="relative bg-[var(--color-sienna)] flex flex-col items-center justify-end pt-10 px-0 overflow-hidden" id="typewriter">
      
      {/* Main composition */}
      <ScrollReveal variants={fadeInUp} threshold={0.2} className="w-full flex justify-center pb-8 z-10">
        <div className="relative flex flex-col items-center max-w-[850px] w-full z-10">
          
          {/* Decorative Assets attached to the content area */}
          <FloatingElement className="absolute -top-8 -right-1 w-[clamp(100px,18vw,180px)] pointer-events-none z-20 max-sm:-top-4 max-sm:w-[90px]" duration={4.5} distance={10} delay={0.3}>
            <img src={cassetteTapes} alt="" className="drop-shadow-lg" loading="lazy" aria-hidden="true" />
          </FloatingElement>

          <FloatingElement className="absolute top-[20%] -left-2 w-[clamp(90px,15vw,150px)] pointer-events-none z-20 max-sm:top-[15%]  max-sm:w-[80px]" duration={3.5} distance={12} delay={0.8}>
            <img src={musicNotes} alt="" className="drop-shadow-md" loading="lazy" aria-hidden="true" />
          </FloatingElement>

          <VinylRecord className="absolute -right-8 bottom-[50%] w-[clamp(120px,20vw,200px)] h-[clamp(120px,20vw,200px)] pointer-events-none z-20 animate-spin-slow drop-shadow-xl max-sm:w-[90px] max-sm:h-[90px]" />

          {/* Typewriter composition: Asset + Text/QR directly on its paper */}
          <motion.div
            className="relative z-10 w-full flex justify-center mt-12 max-sm:mt-8 will-change-transform"
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
            
            {/* Content positioned directly ON the typewriter's native paper */}
            <div className="absolute top-[1%] left-[50%] -translate-x-[50%] flex flex-col items-center justify-start text-center w-[54%] max-sm:w-[60%] z-20">
              <h2 className="font-[family-name:var(--font-display)] text-[var(--color-dark-brown)] text-[clamp(1.1rem,2.8vw,1.8rem)] leading-[1.3] mb-[clamp(10px,2vw,24px)] tracking-[0.03em]">
                TAP THE QR FOR COZY WORSHIP VIBES!
              </h2>
              <div className="w-[clamp(140px,20vw,220px)] h-[clamp(140px,20vw,220px)] mx-auto bg-[#e8e4dc] rounded-xl flex flex-col items-center justify-center gap-[clamp(4px,1vw,16px)] border-2 border-dashed border-[var(--color-tan)] shadow-sm">
                <MusicNoteIcon />
                <span className="font-[family-name:var(--font-body)] text-[var(--color-dark-brown)] text-[clamp(0.7rem,1.2vw,1rem)] opacity-70 text-center leading-[1.4]">
                  Spotify QR<br />Coming Soon
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </ScrollReveal>

      {/* Dark green strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-[var(--color-forest-green)] z-0 max-sm:h-[40px]" />
    </section>
  );
}
