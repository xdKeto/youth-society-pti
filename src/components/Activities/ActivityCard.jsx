import { motion } from 'framer-motion';
import { slideInLeft, slideInRight } from '../../utils/motionVariants';
import ScrollFloat from '../../reactbits-components/scroll-float/ScrollFloat';
import parchmentCard from '../../assets/textures/parchment_card.png';

/* --- Individual Creative Title Renderers --- */

// Style 1: Classic arched double-line path
function YouthCircleTitle() {
  const pathId1 = 'path-youth-circle-1';
  const pathId2 = 'path-youth-circle-2';
  return (
    <svg
      viewBox="0 0 300 90"
      className="w-full h-auto overflow-visible select-none pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id={pathId1} d="M 30,35 Q 150,5 270,35" fill="none" />
        <path id={pathId2} d="M 35,68 Q 150,38 265,68" fill="none" />
      </defs>
      <text
        fill="var(--color-yellow)"
        className="font-[family-name:var(--font-display)] font-normal text-[36px] tracking-[0.06em]"
        textAnchor="middle"
        style={{
          filter: 'drop-shadow(2px 3px 0px rgba(92, 45, 14, 0.75))',
        }}
      >
        <textPath href={`#${pathId1}`} startOffset="50%">
          YOUTH
        </textPath>
      </text>
      <text
        fill="var(--color-yellow)"
        className="font-[family-name:var(--font-display)] font-normal text-[36px] tracking-[0.06em]"
        textAnchor="middle"
        style={{
          filter: 'drop-shadow(2px 3px 0px rgba(92, 45, 14, 0.75))',
        }}
      >
        <textPath href={`#${pathId2}`} startOffset="50%">
          CIRCLE
        </textPath>
      </text>
    </svg>
  );
}

// Style 2: Creative wavy (S-curve / sine wave) double-line path
function BondingTimeTitle() {
  const pathId1 = 'path-bonding-time-1';
  const pathId2 = 'path-bonding-time-2';
  return (
    <svg
      viewBox="0 0 300 90"
      className="w-full h-auto overflow-visible select-none pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id={pathId1} d="M 20,38 C 80,8 220,68 280,38" fill="none" />
        <path id={pathId2} d="M 35,70 C 95,40 205,100 265,70" fill="none" />
      </defs>
      <text
        fill="var(--color-yellow)"
        className="font-[family-name:var(--font-display)] font-normal text-[36px] tracking-[0.06em]"
        textAnchor="middle"
        style={{
          filter: 'drop-shadow(2px 3px 0px rgba(92, 45, 14, 0.75))',
        }}
      >
        <textPath href={`#${pathId1}`} startOffset="50%">
          BONDING
        </textPath>
      </text>
      <text
        fill="var(--color-yellow)"
        className="font-[family-name:var(--font-display)] font-normal text-[36px] tracking-[0.06em]"
        textAnchor="middle"
        style={{
          filter: 'drop-shadow(2px 3px 0px rgba(92, 45, 14, 0.75))',
        }}
      >
        <textPath href={`#${pathId2}`} startOffset="50%">
          TIME
        </textPath>
      </text>
    </svg>
  );
}

// Style 3: Playful bouncy cut-out letters (HTML rotated/displaced letter styling)
function TeaTimeTitle() {
  const letters = "TEA TIME".split("");
  const letterStyles = [
    { rot: -10, y: -4 },  // T
    { rot: 6, y: 1 },     // E
    { rot: -4, y: -2 },    // A
    { rot: 0, y: 0 },      // (space)
    { rot: 12, y: -5 },    // T
    { rot: -6, y: 2 },     // I
    { rot: 8, y: -3 },     // M
    { rot: -5, y: 1 },     // E
  ];

  return (
    <div className="flex items-center justify-center gap-1.5 select-none pointer-events-none w-full">
      {letters.map((char, index) => {
        if (char === " ") {
          return <span key={index} className="w-3" />;
        }
        const style = letterStyles[index % letterStyles.length];
        return (
          <span
            key={index}
            className="inline-block font-[family-name:var(--font-display)] font-normal text-[36px] tracking-normal text-[var(--color-yellow)]"
            style={{
              transform: `translateY(${style.y}px) rotate(${style.rot}deg)`,
              filter: 'drop-shadow(2px 3px 0px rgba(92, 45, 14, 0.75))',
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}

// Style 4: Dynamic slanted/sweeping arch path
function YgyTitle() {
  const pathId = 'path-ygy-title';
  return (
    <svg
      viewBox="0 0 300 65"
      className="w-full h-auto overflow-visible select-none pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id={pathId} d="M 60,48 Q 150,10 240,25" fill="none" />
      </defs>
      <text
        fill="var(--color-yellow)"
        className="font-[family-name:var(--font-display)] font-normal text-[46px] tracking-[0.08em]"
        textAnchor="middle"
        style={{
          filter: 'drop-shadow(2px 3px 0px rgba(92, 45, 14, 0.75))',
        }}
      >
        <textPath href={`#${pathId}`} startOffset="50%">
          YGY
        </textPath>
      </text>
    </svg>
  );
}

/**
 * WavyTitleWrapper — maps titles to their custom styled SVG / HTML renderers
 * and positions them directly overlapping the top border of the card to form one unified asset.
 */
function WavyTitleWrapper({ title }) {
  const normTitle = title.replace(/\s+/g, '').toUpperCase();

  if (normTitle === 'YOUTHCIRCLE') {
    return (
      <div className="absolute -top-[28px] left-1/2 -translate-x-1/2 w-[112%] max-sm:w-[104%] h-[90px] overflow-visible z-10">
        <YouthCircleTitle />
      </div>
    );
  }

  if (normTitle === 'BONDINGTIME') {
    return (
      <div className="absolute -top-[28px] left-1/2 -translate-x-1/2 w-[112%] max-sm:w-[104%] h-[90px] overflow-visible z-10">
        <BondingTimeTitle />
      </div>
    );
  }

  if (normTitle === 'TEATIME') {
    return (
      <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 w-[112%] max-sm:w-[104%] overflow-visible z-10">
        <TeaTimeTitle />
      </div>
    );
  }

  if (normTitle === 'YGY') {
    return (
      <div className="absolute -top-[16px] left-1/2 -translate-x-1/2 w-[112%] max-sm:w-[104%] h-[65px] overflow-visible z-10">
        <YgyTitle />
      </div>
    );
  }

  return null;
}

/**
 * ActivityCard — parchment-style card for a single youth activity.
 * Uses the parchment PNG directly as its container background.
 */
export default function ActivityCard({
  title,
  subtitle,
  description,
  cardAsset,
  cardAssetClass = '',
  className = '',
  index = 0,
}) {
  const baseVariant = index % 2 === 0 ? slideInLeft : slideInRight;
  const variants = {
    hidden: baseVariant.hidden,
    visible: {
      ...baseVariant.visible,
      transition: {
        ...baseVariant.visible.transition,
        delay: 0.25,
      },
    },
  };

  return (
    <motion.div
      className={`relative w-[335px] min-h-[345px] pt-15 pb-11 px-9 bg-transparent text-center flex flex-col items-center justify-start cursor-default transition-transform duration-300 ease-out hover:-translate-y-1.5 max-sm:w-[92%] max-sm:max-w-[345px] max-sm:pt-13 max-sm:pb-9 max-sm:px-8 will-change-transform ${className}`}
      style={{
        backgroundImage: `url(${parchmentCard})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.28))',
      }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* ScrollFloat Title */}
      <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-[112%] max-sm:w-[104%] h-[90px] overflow-visible z-10 flex items-center justify-center pointer-events-none">
        <ScrollFloat
          animationDuration={1}
          ease="back.out(1.7)"
          scrollStart="top bottom+=10%"
          scrollEnd="bottom bottom-=20%"
          stagger={0.05}
          containerClassName="w-full m-0 p-0 text-center"
          textClassName="font-[family-name:var(--font-display)] text-[32px] tracking-[0.06em] text-[var(--color-yellow)] inline-block drop-shadow-[2px_3px_0px_rgba(92,45,14,0.75)]"
        >
          {title}
        </ScrollFloat>
      </div>

      {/* Symmetrical safe-zone container for text to prevent overflow over parchment borders */}
      <div className="flex-1 flex flex-col justify-center items-center w-full gap-2.5 mt-2 px-1 max-sm:px-2">
        {subtitle && (
          <p className="font-[family-name:var(--font-body)] text-[var(--color-dark-green-text)] italic text-[clamp(0.78rem,2vw,0.9rem)] opacity-85">
            {subtitle}
          </p>
        )}

        <p className="font-[family-name:var(--font-body)] text-[var(--color-dark-green-text)] text-[14.5px] leading-[1.65] max-sm:text-[13px] max-sm:leading-[1.55]">
          {description}
        </p>
      </div>

      {/* Decorative asset attached directly to the card */}
      {cardAsset && (
        <div className={`absolute pointer-events-none z-20 ${cardAssetClass}`}>
          <motion.img
            src={cardAsset}
            alt=""
            className="w-full h-auto origin-center will-change-transform"
            loading="lazy"
            aria-hidden="true"
            animate={{ rotate: [-4, 4, -4] }}
            transition={{ duration: 0.25, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      )}
    </motion.div>
  );
}
