import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * WavyText — renders text along a curved SVG path with animated entrance.
 *
 * @param {string} text       - the text to render (default: 'Hello Youths')
 * @param {string} className  - optional wrapper class
 */
export default function WavyText({
  text = 'Hello Youths',
  className = '',
  fontSize = '92px',
}) {
  const svgRef = useRef(null);
  const isInView = useInView(svgRef, { once: true, amount: 0.4 });
  const [startOffset, setStartOffset] = useState('42%');

  /* Animate the text sliding along the path once it enters the viewport */
  useEffect(() => {
    if (isInView) {
      /* Small delay so the fade-in starts first */
      const timer = setTimeout(() => setStartOffset('50%'), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  /* Curved path — a beautiful, single arch curve for clean wavy text */
  const pathId = 'wavyTextPath';
  const wavePath = 'M 100,170 Q 500,-10 900,170';

  return (
    <motion.svg
      ref={svgRef}
      className={`mx-auto block will-change-transform ${className}`}
      viewBox="0 0 1000 180"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', maxWidth: 820, overflow: 'visible' }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <defs>
        <path id={pathId} d={wavePath} fill="none" />
      </defs>

      <text
        fill="#2F4A2B"
        style={{
          fontFamily: "'Recoleta', var(--font-recoleta), serif",
          fontSize: fontSize,
        }}
        className="font-bold"
        textAnchor="middle"
      >
        <textPath
          href={`#${pathId}`}
          startOffset={startOffset}
          style={{
            transition: 'start-offset 1.2s ease-out',
          }}
        >
          {text}
        </textPath>
      </text>
    </motion.svg>
  );
}
