import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <motion.div
      className={`section-header ${align === 'left' ? 'section-header-left' : ''}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

export default SectionHeader;
