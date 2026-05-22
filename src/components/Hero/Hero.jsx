import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../../utils/motionVariants';

import heroGroupImg from '../../assets/photos/hero_group.jpeg';
import societyLogo from '../../assets/logos/society_logo.png';
import ptiLogo from '../../assets/logos/pti_logo.png';

/**
 * Hero — full-viewport hero section with background group photo,
 * maroon-tinted overlay, logo, headline, and golden CTA button.
 */
export default function Hero() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden" id="hero">
      {/* Background image */}
      <img
        src={heroGroupImg}
        alt="Youth Society GKI PTI group photo"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center 30%' }}
        loading="eager"
        fetchPriority="high"
      />

      {/* Maroon-tinted overlay */}
      <div
        className="absolute inset-0 z-[1]"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to bottom, rgba(62,26,15,0.5) 0%, rgba(62,26,15,0.6) 40%, rgba(40,18,10,0.75) 100%)' }}
      />

      {/* Logos - Positioned absolute at the top of Hero */}
      <motion.div
        className="absolute top-[clamp(2.5rem,7vh,5rem)] left-1/2 -translate-x-1/2 flex items-center gap-6 z-10 max-md:top-8 max-md:gap-4 max-sm:top-6 max-sm:gap-3 will-change-transform"
        style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.4))' }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
      >
        <img
          src={societyLogo}
          alt="Youth Society logo"
          className="w-[clamp(100px,12vw,140px)] h-auto object-contain max-md:w-[clamp(80px,15vw,110px)] max-sm:w-[75px]"
        />
        <img
          src={ptiLogo}
          alt="GKI PTI logo"
          className="w-[clamp(100px,12vw,140px)] h-auto object-contain max-md:w-[clamp(80px,15vw,110px)] max-sm:w-[75px]"
        />
      </motion.div>

      {/* Animated content */}
      <motion.div
        className="relative z-2 text-center flex flex-col items-center gap-5 p-8 px-6 w-full max-w-[1000px] max-md:p-6 max-md:px-5 max-md:gap-3 max-sm:p-4 max-sm:gap-2 will-change-transform"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Welcome text */}
        <motion.span
          className="font-[family-name:var(--font-body)] text-[clamp(1.2rem,3vw,1.8rem)] uppercase tracking-[0.35em] font-black text-[#dfdac3] opacity-90 mb-1 max-md:text-[clamp(1rem,3.5vw,1.35rem)] max-sm:text-[0.95rem] max-sm:tracking-[0.25em] will-change-transform"
          variants={staggerItem}
        >
          Welcome To
        </motion.span>

        {/* Main title — Letteria Pro Script font with subtle shadow */}
        <motion.h1
          className="font-[family-name:var(--font-letteria)] text-shadow-lg text-shadow-black font-normal text-[#dfdac3] leading-[0.95] mb-10 whitespace-pre-line max-md:mb-8 text-8xl max-sm:mb-6 will-change-transform"
          style={{ textShadow: '0 4px 12px rgba(0,0,0,0.25)' }}
          variants={{
            hidden: { opacity: 0, scale: 0.3 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                type: 'spring',
                stiffness: 200,
                damping: 12,
                mass: 1.2
              }
            }
          }}
        >
          Youth{'\n'}Society
        </motion.h1>

        {/* CTA */}
        <motion.button
          className="inline-block font-[family-name:var(--font-body)] text-[clamp(0.95rem,2vw,1.2rem)] font-black uppercase tracking-[0.25em] text-[var(--color-maroon)] bg-[var(--color-gold)] py-[1.1rem] px-16 rounded-full cursor-pointer transition-all duration-200 ease-out hover:bg-[var(--color-yellow)] hover:-translate-y-0.5 active:translate-y-0 max-md:py-[0.95rem] max-md:px-12 max-md:text-[clamp(0.85rem,2.5vw,1.05rem)] max-sm:py-[0.85rem] max-sm:px-10 max-sm:text-[0.85rem] will-change-transform"
          style={{ boxShadow: '0 4px 20px rgba(200,155,60,0.35)' }}
          variants={staggerItem}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          GKI PTI
        </motion.button>
      </motion.div>
    </section>
  );
}
