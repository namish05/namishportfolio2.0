import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-8 md:px-14 bg-[#08080A] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs text-lime tracking-widest uppercase mb-2 block">
              // 007. CORE OFFERINGS
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white uppercase">
              WHAT I BUILD
            </h2>
          </div>

          <div className="font-mono text-xs text-muted">
            <span>[ENGINEERING DISCIPLINE]</span>
          </div>
        </div>

        {/* Services List (Editorial Accordion/List Style) */}
        <div className="flex flex-col divide-y divide-white/10">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.num}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`py-10 sm:py-14 transition-all duration-300 group cursor-default ${
                  isHovered ? 'bg-white/[0.02] px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-2xl' : ''
                }`}
                data-cursor="explore"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Service Number */}
                  <div className="lg:col-span-2 flex items-center gap-4">
                    <span className="font-display font-black text-3xl sm:text-5xl text-muted group-hover:text-lime transition-colors">
                      {service.num}
                    </span>
                    <span className="font-mono text-xs text-muted/60 lg:hidden">
                      // SERVICE
                    </span>
                  </div>

                  {/* Title & Short tagline */}
                  <div className="lg:col-span-5">
                    <h3 className="text-2xl sm:text-4xl font-display font-bold text-white group-hover:text-lime transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-base font-editorial italic text-muted mt-2">
                      {service.short}
                    </p>
                  </div>

                  {/* Detailed Description & Stack Tags */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <p className="text-sm sm:text-base text-[#F5F3EE]/70 font-sans leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.stack.map((item, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-white/5 border border-white/10 font-mono text-[11px] text-muted group-hover:text-white transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
