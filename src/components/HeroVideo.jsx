import React, { useEffect, useState } from 'react';

function HeroVideo() {
  const [canShowVideo, setCanShowVideo] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldRenderVideo, setShouldRenderVideo] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 781px) and (prefers-reduced-motion: no-preference)');
    const updateVideoPreference = () => setShouldRenderVideo(media.matches);

    updateVideoPreference();
    media.addEventListener('change', updateVideoPreference);

    return () => media.removeEventListener('change', updateVideoPreference);
  }, []);

  return (
    <div className={`hero-video-wrap ${isVideoLoaded ? 'hero-video-ready' : ''}`} aria-hidden="true">
      {canShowVideo && shouldRenderVideo && (
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.svg"
          onCanPlay={() => setIsVideoLoaded(true)}
          onError={() => setCanShowVideo(false)}
        >
          <source src="/hero-dashboard-loop.mp4" type="video/mp4" />
        </video>
      )}
      <div className="hero-video-fallback" />
      <div className="hero-video-overlay" />
    </div>
  );
}

export default HeroVideo;
