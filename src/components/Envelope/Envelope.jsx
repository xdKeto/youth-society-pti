import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../shared/ScrollReveal';
import { fadeInUp } from '../../utils/motionVariants';

import envelopeClosed from '../../assets/envelope/envelope_closed.png';
import envelopeOpen from '../../assets/envelope/envelope_open.png';
import squigglyLine from '../../assets/illustrations/squiggly_line.png';

/**
 * DaisyFlower — simple SVG daisy placeholder with cream petals + yellow center.
 */
function DaisyFlower({ className }) {
  const petals = 6;
  const petalRx = 10;
  const petalRy = 20;
  const radius = 18;

  return (
    <svg className={className} viewBox="-40 -40 80 80" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: petals }).map((_, i) => {
        const angle = (360 / petals) * i;
        return (
          <ellipse
            key={i}
            cx={0}
            cy={-radius}
            rx={petalRx}
            ry={petalRy}
            fill="var(--color-cream)"
            opacity="0.9"
            transform={`rotate(${angle})`}
          />
        );
      })}
      <circle cx={0} cy={0} r={10} fill="var(--color-yellow)" />
    </svg>
  );
}

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) setIsOpen(true);
  };

  return (
    <section
      className="relative bg-[var(--color-forest-green)] flex flex-col items-center justify-center pt-10 px-8 overflow-visible max-sm:pt-8 max-sm:px-4"
      style={{ paddingBottom: 'clamp(10px, 3vw, 30px)' }} // Reduced padding
      id="envelope"
    >
      {/* Heading */}
      <ScrollReveal variants={fadeInUp}>
        <h2 className="font-[family-name:var(--font-display)] text-[var(--color-yellow)] text-[clamp(1.6rem,5vw,2.8rem)] text-center leading-[1.3] max-w-[600px] tracking-[0.04em] mb-2">
          WE&apos;RE TRULY SO GLAD YOU ARE HERE
        </h2>
      </ScrollReveal>

      {/* Interactive envelope — extremely large, overlapping into next section */}
      <div
        className="relative flex flex-col items-center cursor-pointer select-none z-10 w-full"
        style={{ WebkitTapHighlightColor: 'transparent' }}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
        aria-label="Open envelope"
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* ── Closed state ── */
            <motion.div
              key="closed"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, rotateX: 90 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="relative flex flex-col items-center w-full -mb-[clamp(80px,15vw,250px)] translate-y-[20%] md:translate-y-[10%] max-sm:translate-y-[10%] will-change-transform"
              style={{ perspective: '800px' }}
            >
              <div className="relative w-full max-w-[850px] flex justify-center">
                {/* Absolute positioning right in the center of the closed envelope */}
                <span className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] font-[family-name:var(--font-display)] text-black text-[clamp(1.4rem,4vw,2.2rem)] animate-wobble text-center tracking-[0.08em] z-30 pointer-events-none drop-shadow-md">
                  TAP ME!
                </span>
                <motion.img
                  src={envelopeClosed}
                  alt="Closed envelope"
                  className="w-full h-auto z-1 will-change-transform"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                />
              </div>
            </motion.div>
          ) : (
            /* ── Open state — message seamlessly integrated onto the envelope's paper ── */
            <motion.div
              key="open"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative flex flex-col items-center w-full -mb-[clamp(80px,15vw,250px)] will-change-transform" // Negative margin to force overflow into Typewriter segment
            >
              <div className="relative w-full max-w-[850px] flex justify-center">
                <motion.img
                  src={envelopeOpen}
                  alt="Open envelope"
                  className="w-full h-auto z-1 will-change-transform"
                  initial={{ rotateX: -60, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  style={{ transformOrigin: 'bottom center', perspective: '800px' }}
                />

                {/* Text container styled as extended paper to manipulate the asset */}
                <motion.div
                  className="absolute z-10 flex flex-col items-center text-center justify-start  px-4 pt-4 pb-2 will-change-transform"
                  style={{
                    top: '18%',      // Lowered so it doesn't cover the envelope's top flap shape
                    width: '61%',    // Narrowed to fit perfectly within the envelope edges
                    left: '19.5%',   // Centered
                    borderTopLeftRadius: '6px',
                    borderTopRightRadius: '6px',
                    // Let the height grow naturally based on content
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <p className="font-[family-name:var(--font-body)] text-[var(--color-dark-green-text)] text-[clamp(0.6rem,1.8vw,1.1rem)] leading-[1.6] mb-[clamp(4px,1vw,16px)] max-sm:leading-[1.4]">
                      We hope this website helps you get to know our youth community
                      better and maybe encourages you to join our activities someday.
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-[var(--color-dark-green-text)] text-[clamp(0.6rem,1.8vw,1.1rem)] leading-[1.6] max-sm:leading-[1.4]">
                      Don&apos;t hesitate to come and be part of our events — we&apos;d
                      be so happy to have you with us.
                    </p>
                    <p className="font-[family-name:var(--font-display)] text-[var(--color-gold)] text-[clamp(0.9rem,2.5vw,1.6rem)] mt-[clamp(6px,1.5vw,24px)]">
                      See you around!
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative: squiggly line — larger on mobile, positioned as section divider element
      <img
        src={squigglyLine}
        alt=""
        className="absolute bottom-[10%] left-5 w-[clamp(120px,18vw,200px)] pointer-events-none opacity-70 z-0 max-sm:w-[110px] max-sm:bottom-[5%] max-sm:left-2.5"
        loading="lazy"
        aria-hidden="true"
      /> */}

      {/* Decorative: daisy flower — larger on mobile, placed at top-right as divider from Activities */}
      <DaisyFlower className="absolute -top-12 -right-4 w-24 h-24 pointer-events-none z-20 rotate-12 max-sm:-top-8 max-sm:-right-2 max-sm:w-16 max-sm:h-16" />

      {/* Second daisy — bottom-left, bridging into Typewriter section */}
      <DaisyFlower className="absolute bottom-8 left-8 w-20 h-20 pointer-events-none z-20 rotate-[30deg] max-sm:bottom-6 max-sm:left-2 max-sm:w-14 max-sm:h-14" />
    </section>
  );
}
