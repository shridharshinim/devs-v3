// components/ui/ResponsiveVideo.tsx
'use client';

import React, { useState, useEffect } from 'react';

export const ResponsiveVideo = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // null = unknown

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile === null) return null; // Prevent mismatch during SSR

  const videoSources = isMobile
    ? [
        { src: '/videos/videomobile.webm', type: 'video/webm' },
        { src: '/videos/videomobile.ogv', type: 'video/ogg' },
        { src: '/videos/videomobile.mp4', type: 'video/mp4' },
      ]
    : [
        { src: '/videos/videopc.webm', type: 'video/webm' },
        { src: '/videos/videopc.ogv', type: 'video/ogg' },
        { src: '/videos/videopc.mp4', type: 'video/mp4' },
      ];

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="h-full w-full object-cover opacity-30"
      poster="/images/devs-logo.png"
    >
      {videoSources.map((source, i) => (
        <source key={i} src={source.src} type={source.type} />
      ))}
    </video>
  );
};
