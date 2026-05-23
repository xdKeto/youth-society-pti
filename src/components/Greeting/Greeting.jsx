import ScrollReveal from '../shared/ScrollReveal';
import CurvedLoop from '../../reactbits-components/curved-loop/CurvedLoop';
import TextType from '../../reactbits-components/text-type/TextType';
import paintbrushArm from '../../assets/illustrations/paintbrush_arm.png';

/**
 * Greeting — tan-background section with wavy "Hello Youths" heading,
 * inspirational quote, and a decorative paintbrush arm image.
 */
export default function Greeting() {
  return (
    <section
      className="relative bg-[var(--color-tan)] flex flex-col items-center font-bold overflow-visible z-20"
      style={{ padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 4rem) clamp(3rem, 8vw, 6rem)' }}
      id="greeting"
    >
      {/* Curved loop heading */}
      <div className="w-full max-w-[900px] mx-auto mb-8 h-[100px] max-md:h-[80px] max-sm:h-[50px] relative">
        <CurvedLoop
          marqueeText="Hello Youths ! "
          speed={4}
          className="fill-[var(--color-dark-green-text)] font-[family-name:var(--font-display)] text-[160px] uppercase"
          curveAmount={300}
        />
      </div>

      {/* Inspirational quote */}
      <ScrollReveal delay={0.2}>
        <TextType
          as="p"
          text="“If this world was made by a triune God, a being of community, then relationships of love are what life is really all about.”"
          className="font-[family-name:var(--font-recoleta)] italic text-xl leading-[1.75] text-[var(--color-dark-green-text)] text-center max-w-[640px] mx-auto px-4 max-sm:text-[clamp(0.85rem,3.5vw,1rem)] mb-4"
          typingSpeed={30}
          startOnVisible={true}
          loop={false}
          showCursor={false}
        />
      </ScrollReveal>

      {/* Paintbrush arm — positioned at bottom-right, overlapping next section */}
      <img
        src={paintbrushArm}
        alt=""
        className="absolute bottom-0 -right-[5%] translate-y-[60%] w-[clamp(220px,26vw,400px)] h-auto z-40 pointer-events-none -rotate-6 max-md:w-[clamp(170px,24vw,220px)] max-md:translate-y-[50%] max-sm:w-[170px] max-sm:translate-y-[60%] max-sm:-right-[10%]"
        aria-hidden="true"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </section>
  );
}
