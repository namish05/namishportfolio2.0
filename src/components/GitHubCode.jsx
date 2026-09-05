import React from 'react';
import { githubStats, personalInfo } from '../data/portfolioData';
import { Github, ExternalLink, Code2, GitFork, Star, Terminal } from 'lucide-react';

export default function GitHubCode() {
  const renderHeatmap = () => {
    const blocks = [];
    const intensities = [0, 0, 1, 1, 2, 2, 3, 4, 1, 0, 2, 3, 4, 2, 1, 3, 4];
    for (let i = 0; i < 160; i++) {
      const level = intensities[i % intensities.length];
      const color =
        level === 4
          ? 'bg-lime'
          : level === 3
          ? 'bg-lime/70'
          : level === 2
          ? 'bg-lime/40'
          : level === 1
          ? 'bg-lime/20'
          : 'bg-white/5';
      blocks.push(
        <div
          key={i}
          className={`w-2.5 h-2.5 rounded-[2px] ${color} hover:ring-2 hover:ring-lime transition-all cursor-pointer`}
          title={`Activity Level ${level}`}
        />
      );
    }
    return blocks;
  };

  return (
    <section className="relative py-20 sm:py-32 md:py-36 px-4 sm:px-8 md:px-14 bg-[#050505] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs text-lime tracking-widest uppercase mb-2 block">
              // 006. OPEN SOURCE & LAB
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black tracking-tight text-white uppercase leading-tight">
              CODE IS WHERE <br className="hidden sm:block" />
              <span className="text-stroke-white hover:text-white transition-colors duration-300">
                IDEAS BECOME REAL.
              </span>
            </h2>
          </div>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-lime text-black font-display font-bold text-xs tracking-wider uppercase hover:bg-lime-hover transition-all duration-300 shadow-xl shadow-lime/10 self-start md:self-auto"
            data-cursor="pointer"
          >
            <Github size={16} />
            <span>VIEW GITHUB REPOS ↗</span>
          </a>
        </div>

        {/* Terminal & Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Terminal Preview */}
          <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-[#0B0B0E] border border-white/10 overflow-hidden shadow-2xl">
            {/* Terminal Titlebar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#121216] border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <div className="font-mono text-[11px] sm:text-xs text-muted truncate px-2">
                bash — namish@gorakhpur-dev:~/projects
              </div>
              <div className="w-10" />
            </div>

            {/* Terminal Body */}
            <div className="p-5 sm:p-8 font-mono text-xs sm:text-sm space-y-4 text-[#F5F3EE]/90 overflow-x-auto">
              <div className="flex items-center gap-2 text-lime">
                <span>❯</span>
                <span className="text-white font-semibold">whoami</span>
              </div>
              <p className="text-muted pl-4 leading-relaxed">
                Namish Srivastava — Web Developer | B.Tech IT at Maharana Pratap Institute of Technology, Gorakhpur.
              </p>

              <div className="flex items-center gap-2 text-lime pt-1">
                <span>❯</span>
                <span className="text-white font-semibold">cat featured_projects.json</span>
              </div>
              <div className="pl-4 text-xs text-[#8E8E93] bg-black/40 p-4 rounded-xl border border-white/5 space-y-1">
                <p>{"{"}</p>
                <p className="pl-4"><span className="text-lime">"capacity_connect":</span> "React + Tailwind + Node.js + Express + MongoDB + REST APIs",</p>
                <p className="pl-4"><span className="text-lime">"smartmail_ai":</span> "AI Spam Detection (Email & PDF text analysis)",</p>
                <p className="pl-4"><span className="text-lime">"payment_gateway":</span> "Animated Glassmorphism UI + Real-time Form Validation",</p>
                <p className="pl-4"><span className="text-lime">"internships":</span> ["DATAMINDX TECH, Bangalore", "CODSOFT, West Bengal"]</p>
                <p>{"}"}</p>
              </div>

              <div className="flex items-center gap-2 text-lime pt-1">
                <span>❯</span>
                <span className="text-white font-semibold">git status</span>
              </div>
              <p className="text-muted pl-4">
                On branch <span className="text-lime">main</span>. Seeking dynamic internship opportunities.
              </p>

              <div className="flex items-center gap-2 text-lime pt-1">
                <span>❯</span>
                <span className="animate-pulse">_</span>
              </div>
            </div>

            {/* Activity Heatmap Banner */}
            <div className="p-4 sm:p-6 bg-[#0E0E12] border-t border-white/5">
              <div className="flex items-center justify-between text-xs font-mono text-muted mb-3">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                  DEVELOPMENT ACTIVITY
                </span>
                <span className="text-lime">{githubStats.streak}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 py-1">
                {renderHeatmap()}
              </div>
              <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-muted/70 mt-3">
                <span>Less</span>
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-white/5" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-lime/20" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-lime/40" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-lime/70" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-lime" />
                </div>
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Right Column: Pinned Repositories */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center justify-between font-mono text-xs text-muted mb-1 px-1">
              <span>FEATURED REPOSITORIES</span>
              <span>VERIFIED REPOS</span>
            </div>

            {githubStats.pinnedRepos.map((repo, idx) => (
              <a
                key={idx}
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 sm:p-6 rounded-2xl bg-[#0D0D10] border border-white/5 hover:border-lime/40 transition-all duration-300 flex flex-col justify-between"
                data-cursor="pointer"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <Code2 size={16} className="text-lime flex-shrink-0" />
                    <h3 className="font-mono text-xs sm:text-sm font-bold text-white group-hover:text-lime transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink size={14} className="text-muted group-hover:text-white transition-colors" />
                </div>

                <p className="text-xs text-[#8E8E93] leading-relaxed mb-3 line-clamp-2">
                  {repo.desc}
                </p>

                <div className="flex items-center gap-4 font-mono text-[10px] sm:text-[11px] text-muted pt-2.5 border-t border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: repo.langColor }}
                    />
                    <span>{repo.lang}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Star size={12} />
                    <span>{repo.stars}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <GitFork size={12} />
                    <span>{repo.forks}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
