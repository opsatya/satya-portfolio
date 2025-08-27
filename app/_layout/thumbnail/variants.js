/** @type {import('framer-motion').Variants} */
export const scaleUp = {
  // Hidden by default
  initial: { opacity: 0, scale: 0.9, x: '-50%', y: '-50%', display: 'none' },
  enter: {
    opacity: 1,
    scale: 1,
    x: '-50%',
    y: '-50%',
    display: 'block',
    transition: { duration: 0.18, ease: [0.2, 0.8, 0.2, 1] },
  },
  closed: {
    opacity: 0,
    scale: 0.9,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.12, ease: [0.4, 0, 0.2, 1] },
    transitionEnd: { display: 'none' },
  },
};
