import React from 'react';

export default function MarqueeSection() {
  const row1 = [
    'FULL-STACK DEVELOPER',
    'CREATIVE DEVELOPER',
    'DIGITAL BUILDER',
    'AWARD-WINNING AESTHETICS',
    'FULL-STACK DEVELOPER',
    'CREATIVE DEVELOPER',
    'DIGITAL BUILDER',
    'AWARD-WINNING AESTHETICS',
  ];

  const row2 = [
    'REACT.JS',
    'NODE.JS',
    'MONGODB',
    'GSAP SCROLLTRIGGER',
    'THREE.JS',
    'TAILWIND CSS',
    'FRAMER MOTION',
    'EXPRESS',
    'REACT.JS',
    'NODE.JS',
    'MONGODB',
    'GSAP SCROLLTRIGGER',
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-[#080809] border-y border-white/10 overflow-hidden select-none">
      {/* Top marquee moving left */}
      <div className="flex overflow-hidden whitespace-nowrap mb-4">
        <div className="flex animate-marquee gap-8 items-center">
          {row1.concat(row1).map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-3xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white/90 uppercase hover:text-lime transition-colors">
                {item}
              </span>
              <span className="text-lime text-2xl sm:text-4xl font-mono">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom marquee moving right */}
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee-reverse gap-8 items-center">
          {row2.concat(row2).map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-2xl sm:text-4xl md:text-5xl font-editorial italic text-stroke-white hover:text-lime transition-all duration-300">
                {item}
              </span>
              <span className="text-[#8E8E93] text-xl font-mono">—</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
