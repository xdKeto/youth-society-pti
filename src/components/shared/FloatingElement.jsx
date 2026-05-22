import { motion } from 'framer-motion';
import { floatAnimation } from '../../utils/motionVariants';

/**
 * FloatingElement — applies a gentle infinite float animation.
 *
 * @param {React.ReactNode} children
 * @param {string} className - optional CSS class
 * @param {number} duration  - full cycle duration in seconds (default 3)
 * @param {number} distance  - max y travel in px (default 10)
 * @param {number} delay     - initial delay in seconds (default 0)
 */
export default function FloatingElement({
  children,
  className = '',
  duration = 1,
  distance = 10,
  delay = 0,
}) {
  return (
    <motion.div
      className={`will-change-transform ${className}`.trim()}
      animate={floatAnimation(duration, distance, delay)}
    >
      {children}
    </motion.div>
  );
}
