// src/utils/motion.js
export const fadeIn = (direction = 'up', type = 'tween', delay = 0, duration = 1) => {
    return {
      hidden: { opacity: 0, y: direction === 'up' ? 100 : -100 },
      show: {
        opacity: 1,
        y: 0,
        transition: { type, delay, duration }
      }
    };
  };
  
  export const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };
  
  export const planetVariants = (direction = 'left') => {
    return {
      hidden: { opacity: 0, x: direction === 'left' ? -100 : 100 },
      show: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 100, damping: 10 }
      }
    };
  };
  