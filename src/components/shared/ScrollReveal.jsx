import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/motionVariants';

/**
 * ScrollReveal — scroll-triggered entrance wrapper.
 *
 * @param {React.ReactNode} children
 * @param {object}  variants  - framer-motion variant object (default: fadeInUp)
 * @param {string}  className - optional CSS class
 * @param {number}  delay     - extra delay in seconds (default 0)
 * @param {boolean} once      - animate only on first appearance (default true)
 * @param {number}  threshold - viewport intersection ratio 0-1 (default 0.2)
 */
export default function ScrollReveal({
  children,
  variants = fadeInUp,
  className = '',
  delay = 0,
  once = true,
  threshold = 0.2,
}) {
  /* Build a variant set that respects the custom delay */
  const delayedVariants = delay
    ? {
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible?.transition,
            delay: (variants.visible?.transition?.delay ?? 0) + delay,
          },
        },
      }
    : variants;

  return (
    <motion.div
      className={`will-change-transform ${className}`.trim()}
      variants={delayedVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
    >
      {children}
    </motion.div>
  );
}
