import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Statement() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const xRight = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={containerRef}
      className="relative py-28 sm:py-44 px-4 sm:px-8 md:px-14 bg-[#050505] overflow-hidden"
    >
      {/* Editorial Marker */}
      <div className="max-w-6xl mx-auto mb-12 sm:mb-20 flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs text-muted">
        <span className="flex items-center gap-2">
          <span className="text-lime">/</span> 001. MANIFESTO
        </span>
        <span>THE PHILOSOPHY</span>
      </div>

      {/* Main Massive Editorial Text with staggered parallax */}
      <div className="max-w-6xl mx-auto flex flex-col gap-3 sm:gap-6">
        <motion.div style={{ x: xLeft }} className="overflow-visible">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter uppercase leading-[0.92] text-white">
            I DON'T JUST
          </h2>
        </motion.div>

        <motion.div style={{ x: xRight }} className="overflow-visible">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-editorial italic font-normal tracking-tight text-stroke-white hover:text-white transition-colors duration-500 leading-[0.92]">
            BUILD WEBSITES.
          </h2>
        </motion.div>

        <div className="my-2 sm:my-3 w-16 h-[2px] bg-lime" />

        <motion.div style={{ x: xLeft }} className="overflow-visible">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter uppercase leading-[0.92] text-white">
            I BUILD
          </h2>
        </motion.div>

        <motion.div style={{ x: xRight }} className="overflow-visible">
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter uppercase leading-[0.92] text-lime">
            DIGITAL <span className="font-editorial italic font-normal text-white">EXPERIENCES.</span>
          </h2>
        </motion.div>
      </div>

      {/* Bottom Sub-editorial insight */}
      <div className="max-w-6xl mx-auto mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
        <div className="font-mono text-xs text-lime">
          [ENGINEERING × CRAFT]
        </div>
        <div className="md:col-span-2 text-base sm:text-xl text-[#F5F3EE]/80 font-sans leading-relaxed">
          The web is not a flat canvas for static PDFs. It is a kinetic, interactive dimension where performance, accessibility, fluid motion, and resilient software architecture merge into one cohesive feeling.
        </div>
      </div>
    </section>
  );
}
