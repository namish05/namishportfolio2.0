import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-8 md:px-14 bg-[#050505] border-t border-white/10 text-muted font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand Identity */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="text-xl font-display font-black text-white tracking-tight">
            {personalInfo.brand}
          </span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="text-white/80">{personalInfo.title}</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span>{personalInfo.location}</span>
        </div>

        {/* Center: Social Quick Links */}
        <div className="flex items-center gap-6 text-xs uppercase tracking-wider">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime transition-colors"
            data-cursor="pointer"
          >
            GITHUB
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime transition-colors"
            data-cursor="pointer"
          >
            LINKEDIN
          </a>
          <a
            href={`mailto:${personalInfo.socials.email}`}
            className="hover:text-lime transition-colors"
            data-cursor="pointer"
          >
            EMAIL
          </a>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-6">
          <span>© 2026 {personalInfo.name}</span>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-lime bg-white/5 text-white hover:text-lime transition-all"
            data-cursor="pointer"
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
