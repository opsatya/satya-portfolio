/** @type {import('framer-motion').Variants} */
export const slideUp = {
  initial: {
    // Reduce initial offset for a gentler entrance
    y: 60,
  },
  enter: {
    y: 0,
    // Shorter duration, subtle easing, and minimal delay for better perceived performance
    transition: { duration: 0.28, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 },
  },
};
