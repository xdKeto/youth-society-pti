import { motion } from 'framer-motion';
import { scaleIn, fadeIn } from '../../utils/motionVariants';
import TextType from '../../reactbits-components/text-type/TextType';
import societyLogo from '../../assets/logos/society_logo.png';
import ptiLogo from '../../assets/logos/pti_logo.png';
import ribbonImg from '../../assets/illustrations/ribbon.png';

/* Try to import the blob image; fall back to inline SVG if it doesn't exist. */
let wavyBlobSrc = null;
try {
  wavyBlobSrc = new URL('../../assets/textures/wavy_blob.png', import.meta.url).href;
} catch {
  /* fallback handled in render */
}

/**
 * BlobShape — organic CSS/SVG blob used as quote background.
 */
function BlobShape({ className }) {
  return (
    <svg className={className} viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
      <path
        d={`
          M300,30
          C380,20 480,50 520,110
          C560,170 570,230 540,290
          C510,350 440,380 370,385
          C300,390 220,380 160,350
          C100,320 50,270 40,210
          C30,150 50,90 100,60
          C150,30 220,40 300,30
          Z
        `}
        fill="var(--color-cream)"
        opacity="0.92"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[var(--color-maroon)] py-24 px-8 flex flex-col items-center justify-center overflow-hidden max-sm:py-16 max-sm:px-4" id="footer">
      <motion.div
        className="relative w-[clamp(300px,85vw,650px)] flex items-center justify-center will-change-transform"
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Blob background defines the size */}
        {wavyBlobSrc ? (
          <img
            src={wavyBlobSrc}
            alt=""
            className="w-full h-auto z-0 drop-shadow-md"
            aria-hidden="true"
          />
        ) : (
          <BlobShape className="w-full h-auto z-0 drop-shadow-md" />
        )}

        {/* Quote is absolutely positioned inside the blob */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center justify-center p-[10%] will-change-transform"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.img
            src={ribbonImg}
            alt="Decorative ribbon"
            className="absolute -top-[8%] -left-8 w-[160px] lg:w-[160px] h-auto z-20 pointer-events-none drop-shadow-md will-change-transform"
            animate={{ rotate: [-4, 4, -4] }}
            transition={{ duration: 0.75, repeat: Infinity, ease: 'linear' }}
          />

          <TextType
            as="p"
            text="DO YOU REALLY ACCEPT THE MESSAGE THAT GOD IS HEAD OVER HEELS IN LOVE WITH YOU?"
            className="font-[family-name:var(--font-display)] text-[var(--color-dark-green-text)] text-2xl leading-[1.4] tracking-[0.03em] text-center max-w-[90%]"
            typingSpeed={50}
            startOnVisible={true}
            loop={false}
            showCursor={true}
            cursorClassName="text-[var(--color-dark-green-text)]"
            hideCursorWhileTyping={false}
          />
        </motion.div>
      </motion.div>

      {/* Logos at the bottom of the page */}
      <motion.div
        className="mt-16 flex items-center gap-8 z-10 opacity-75 max-sm:mt-12 max-sm:gap-5 will-change-transform"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
      >
        <img
          src={societyLogo}
          alt="Youth Society logo"
          className="w-[clamp(60px,8vw,100px)] h-auto object-contain"
        />
        <img
          src={ptiLogo}
          alt="GKI PTI logo"
          className="w-[clamp(60px,8vw,100px)] h-auto object-contain"
        />
      </motion.div>

      {/* Gold divider at very bottom */}
      {/* <div
        className="w-full h-0.5 absolute bottom-0 left-0"
        style={{ background: 'linear-gradient(90deg, transparent 0%, var(--color-gold) 20%, var(--color-yellow) 50%, var(--color-gold) 80%, transparent 100%)' }}
      /> */}
    </footer>
  );
}
