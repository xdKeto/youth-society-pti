/**
 * Shared Framer Motion Variants
 * Youth Society GKI PTI
 */

/* ── Entrance Animations ── */

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

/* ── Stagger Animations ── */

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

/* ── Continuous Animations ── */

/**
 * Subtle vibrate / wobble animation for envelope hint icon.
 * Apply with `animate` prop on a motion element.
 */
export const vibrateAnimation = {
  rotate: [0, -3, 3, -2, 2, -1, 1, 0],
  transition: {
    duration: 0.6,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatDelay: 2.5,
  },
};

/**
 * Gentle floating up-down loop for decorative elements.
 * Apply with `animate` prop on a motion element.
 *
 * @param {number} duration - full cycle duration (default 3s)
 * @param {number} distance - max y travel in px (default 10)
 * @param {number} delay    - initial delay (default 0)
 * @returns {object} framer-motion animate props
 */
export const floatAnimation = (duration = 3, distance = 10, delay = 0) => ({
  y: [0, -distance, 0],
  rotate: [0, 1.5, 0, -1.5, 0],
  transition: {
    y: {
      duration,
      ease: 'easeInOut',
      repeat: Infinity,
      delay,
    },
    rotate: {
      duration: duration * 1.2,
      ease: 'easeInOut',
      repeat: Infinity,
      delay,
    },
  },
});
