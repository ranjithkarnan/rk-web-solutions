import React from 'react';
import { brand } from '../assets/brand';

function Logo({ href = '#home', compact = false }) {
  return (
    <a className={`brand ${compact ? 'brand-compact' : ''}`} href={href} aria-label={`${brand.name} home`}>
      <span className="brand-mark" aria-hidden="true">
        <span>RK</span>
      </span>
      <span className="brand-wordmark">
        <strong>{brand.name}</strong>
        {!compact && <small>Digital Solutions Studio</small>}
      </span>
    </a>
  );
}

export default Logo;
