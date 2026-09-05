import React from 'react';
import { motion } from 'framer-motion';
import { journeyTimeline } from '../data/portfolioData';
import { Briefcase, GraduationCap, Building, Code2 } from 'lucide-react';

export default function Journey() {
  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return Briefcase;
      case 1:
        return GraduationCap;
      case 2:
        return Code2;
      default:
        return Building;
    }
  };

  return (
    <section
      id="journey"
      className="relative py-20 sm:py-32 md:py-36 px-4 sm:px-8 md:px-14 bg-[#08080A] border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-20 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs text-lime tracking-widest uppercase mb-2 block">
              // 005. CAREER & ACADEMIC TRAJECTORY
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black tracking-tight text-white uppercase leading-tight">
              THE JOURNEY
            </h2>
          </div>

          <div className="font-mono text-xs text-muted">
            <span>[EXPERIENCE & DEGREES]</span>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-white/10 ml-3 sm:ml-8 space-y-10 sm:space-y-14">
          {journeyTimeline.map((item, index) => {
            const Icon = getIcon(index);
            const isFeatured = index === 0 || index === 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 sm:pl-10 group"
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[16px] sm:-left-[18px] top-1 w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                    isFeatured
                      ? 'bg-lime border-lime text-black shadow-lg shadow-lime/30'
                      : 'bg-[#0E0E11] border-white/20 text-muted group-hover:border-lime group-hover:text-lime'
                  }`}
                >
                  <Icon size={16} />
                </div>

                {/* Content Box */}
                <div className="p-5 sm:p-8 rounded-2xl bg-[#0F0F12] border border-white/5 group-hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-lime font-bold tracking-widest uppercase">
                      {item.period}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] tracking-wider uppercase ${
                        isFeatured
                          ? 'bg-lime/10 border border-lime/30 text-lime font-semibold'
                          : 'bg-white/5 text-muted'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-display font-bold text-white group-hover:text-lime transition-colors">
                    {item.role}
                  </h3>
                  <h4 className="text-xs sm:text-sm font-mono text-muted/80 mt-1 mb-4">
                    {item.organization}
                  </h4>

                  <p className="text-xs sm:text-base text-white/70 leading-relaxed font-sans mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 border-t border-white/5">
                    {item.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-2.5 py-1 rounded bg-white/[0.03] border border-white/5 font-mono text-[11px] text-muted group-hover:text-white transition-colors"
                      >
                        ✦ {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
