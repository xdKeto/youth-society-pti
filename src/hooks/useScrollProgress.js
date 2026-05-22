import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

/**
 * useScrollProgress — returns a ref and a 0→1 motionValue
 * representing how far `ref` has scrolled through the viewport.
 *
 * @param {Array} offset - scroll offset config (default: element enters → leaves viewport)
 * @returns {{ ref: React.RefObject, scrollYProgress: MotionValue, scrollY: MotionValue }}
 */
export default function useScrollProgress(
  offset = ['start end', 'end start']
) {
  const ref = useRef(null);

  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset,
  });

  return { ref, scrollYProgress, scrollY };
}
