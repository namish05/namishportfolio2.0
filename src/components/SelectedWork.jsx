import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/portfolioData';
import { ArrowUpRight, Github, Sparkles, ExternalLink, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWork({ onSelectProject }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Only pin and horizontal scroll on desktop (width >= 1024)
    const ctx = gsap.context(() => {
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
      if (!isDesktop || !containerRef.current || !sectionRef.current) return;

      const totalPanels = projects.length;
      const scrollAmount = containerRef.current.scrollWidth - window.innerWidth + 120;

      gsap.to(containerRef.current, {
        x: -scrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${scrollAmount * 1.4}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative bg-[#050505] text-[#F5F3EE] border-t border-white/10 overflow-hidden"
    >
      {/* Top Section Header */}
      <div className="pt-20 sm:pt-28 pb-8 px-4 sm:px-8 md:px-14 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10">
        <div>
          <span className="font-mono text-xs text-lime tracking-widest uppercase mb-2 block">
            // 004. FEATURED REPERTOIRE
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black tracking-tight uppercase">
            SELECTED WORK
          </h2>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs text-muted">
          <span className="hidden sm:inline">[HORIZONTAL DESKTOP SCRUB]</span>
          <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white">
            04 SHOWCASES
          </span>
        </div>
      </div>

      {/* Desktop Horizontal Container / Mobile Stacked Container */}
      <div className="py-12 px-4 sm:px-8 md:px-14">
        {/* Desktop View (Flex row controlled by GSAP) */}
        <div
          ref={containerRef}
          className="hidden lg:flex gap-12 will-change-transform items-stretch"
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="w-[82vw] max-w-[1100px] flex-shrink-0 group cursor-pointer"
              data-cursor="project"
              data-cursor-text="VIEW ↗"
            >
              <div className="h-full rounded-3xl bg-[#0E0E11] border border-white/10 hover:border-lime/40 transition-all duration-500 p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                {/* Background ambient lighting */}
                <div
                  className={`absolute -right-20 -bottom-20 w-96 h-96 bg-gradient-to-br ${project.gradient} opacity-40 rounded-full blur-3xl group-hover:opacity-70 transition-opacity duration-700 pointer-events-none`}
                />

                {/* Card Top */}
                <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl sm:text-4xl font-display font-black text-lime">
                      {project.id}
                    </span>
                    <span className="font-mono text-xs text-muted tracking-widest">
                      / 04
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-white">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white group-hover:bg-lime group-hover:text-black group-hover:border-lime transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>

                {/* Card Center: Project Title & Subtitle */}
                <div className="my-auto py-6">
                  <h3 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white group-hover:text-lime transition-colors duration-300 leading-none">
                    {project.title}
                  </h3>
                  <p className="text-xl sm:text-2xl font-editorial italic text-muted mt-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-white/70 max-w-2xl mt-5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Card Bottom: Tech Stack & Metric */}
                <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-xs text-muted group-hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="font-mono text-xs text-lime">
                    ✦ {project.metric}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Stacked View */}
        <div className="flex lg:hidden flex-col gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group rounded-2xl bg-[#0E0E11] border border-white/10 hover:border-lime p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 cursor-pointer"
            >
              {/* Background gradient */}
              <div
                className={`absolute -right-10 -bottom-10 w-64 h-64 bg-gradient-to-br ${project.gradient} opacity-30 rounded-full blur-2xl pointer-events-none`}
              />

              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="text-2xl font-display font-black text-lime">
                  {project.id} <span className="text-xs font-mono text-muted">/ 04</span>
                </span>
                <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[11px] text-white">
                  {project.category}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-4xl font-display font-black text-white group-hover:text-lime transition-colors">
                  {project.title}
                </h3>
                <p className="text-base font-editorial italic text-muted mt-1">
                  {project.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-white/70 mt-3 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[10px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-lime font-mono text-xs">
                  <span>DETAILS</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
