export const fadeUp = {
  hidden: { opacity: 0, y: 34, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

export const revealWord = {
  hidden: { opacity: 0, y: 46, rotateX: -24, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

export const premiumCardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.015,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
};
