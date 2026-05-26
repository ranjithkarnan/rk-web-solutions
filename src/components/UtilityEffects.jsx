import React from 'react';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 650);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      className={`back-top ${visible ? 'back-top-visible' : ''}`}
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <ArrowUp size={20} />
    </button>
  );
}

function CursorGlow() {
  useEffect(() => {
    const glow = document.querySelector('.cursor-glow');
    if (!glow) return undefined;

    const move = (event) => {
      glow.animate(
        {
          left: `${event.clientX}px`,
          top: `${event.clientY}px`,
        },
        { duration: 420, fill: 'forwards' },
      );
    };

    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return <div className="cursor-glow" aria-hidden="true" />;
}

function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader ${loading ? '' : 'page-loader-hidden'}`} aria-hidden="true">
      <div className="loader-logo">RK</div>
      <div className="loader-line" />
    </div>
  );
}

export { ScrollProgress, BackToTop, CursorGlow, PageLoader };
