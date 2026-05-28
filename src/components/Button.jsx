import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { handleSectionNavigation } from '../utils/scrollToSection';

function Button({ children, href = '#contact', variant = 'primary', icon = true, className = '', onClick }) {
  const handleClick = (event) => {
    const handled = handleSectionNavigation(event, href, () => onClick?.(event));
    if (!handled) onClick?.(event);
  };

  return (
    <motion.a
      className={`btn btn-${variant} ${className}`}
      href={href}
      onClick={handleClick}
      whileHover={{ y: -3, scale: 1.025 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 420, damping: 26 }}
    >
      <span>{children}</span>
      {icon && (
        <motion.span className="btn-icon" aria-hidden="true" whileHover={{ x: 3 }}>
          <ArrowRight size={18} />
        </motion.span>
      )}
    </motion.a>
  );
}

export default Button;
