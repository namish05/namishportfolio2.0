import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data/portfolioData';
import { Layers, Server, Wrench, Sparkles, Terminal } from 'lucide-react';

export default function Expertise() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categoryIcons = {
    frontend: Layers,
    backend: Server,
    tools: Wrench,
  };

  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, categoryId: cat.id, categoryTitle: cat.title }))
  );

  const displayedSkills =
    activeCategory === 'all'
      ? allSkills
      : allSkills.filter((s) => s.categoryId === activeCategory);

  return (
    <section
      id="skills"
      className="relative py-28 sm:py-36 px-4 sm:px-8 md:px-14 bg-[#050505] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs text-lime tracking-widest uppercase mb-2 block">
              // 003. CAPABILITIES & ARSENAL
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight text-white uppercase">
              EXPERTISE
            </h2>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-lime text-black font-bold shadow-lg shadow-lime/20'
                  : 'bg-white/5 text-muted hover:text-white border border-white/10'
              }`}
              data-cursor="pointer"
            >
              ALL SKILLS ({allSkills.length})
            </button>

            {skillCategories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Terminal;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all duration-300 ${
                    isSelected
                      ? 'bg-lime text-black font-bold shadow-lg shadow-lime/20'
                      : 'bg-white/5 text-muted hover:text-white border border-white/10'
                  }`}
                  data-cursor="pointer"
                >
                  <Icon size={14} />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Skill Wall Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {displayedSkills.map((skill, index) => {
            const isHovered = hoveredSkill?.name === skill.name;
            const isDimmed = hoveredSkill && hoveredSkill.categoryId !== skill.categoryId;

            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{
                  opacity: isDimmed ? 0.35 : 1,
                  scale: isHovered ? 1.05 : 1,
                  y: 0,
                }}
                transition={{ duration: 0.25 }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`relative group p-5 sm:p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between min-h-[140px] sm:min-h-[160px] cursor-crosshair ${
                  isHovered
                    ? 'bg-[#151518] border-lime shadow-xl shadow-lime/10'
                    : 'bg-[#0E0E10] border-white/5 hover:border-white/20'
                }`}
                data-cursor="explore"
                data-cursor-text={skill.level}
              >
                {/* Card Top: Category indicator & Level */}
                <div className="flex items-center justify-between font-mono text-[10px] tracking-wider text-muted">
                  <span className="uppercase">{skill.categoryTitle}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[9px] font-semibold ${
                      isHovered
                        ? 'bg-lime text-black'
                        : 'bg-white/5 text-muted border border-white/10'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Card Middle: Skill Title */}
                <div className="my-auto py-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-white group-hover:text-lime transition-colors">
                    {skill.name}
                  </h3>
                </div>

                {/* Card Bottom: Animated Micro-Bar */}
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-lime rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        skill.level === 'Expert'
                          ? '95%'
                          : skill.level === 'Advanced' || skill.level === 'Power User'
                          ? '85%'
                          : '75%',
                    }}
                    transition={{ duration: 0.8, delay: index * 0.02 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Hover Detail Inspector Banner */}
        <div className="mt-8 p-4 sm:p-6 rounded-2xl bg-[#0D0D10] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-lime animate-ping" />
            <span className="text-white font-bold">
              {hoveredSkill ? hoveredSkill.name.toUpperCase() : 'INTERACTIVE SKILL INSPECTOR'}
            </span>
            <span className="text-muted hidden sm:inline">—</span>
            <span className="text-[#8E8E93]">
              {hoveredSkill
                ? hoveredSkill.desc
                : 'Hover over any technology above to inspect proficiencies and architectural applications.'}
            </span>
          </div>

          <div className="text-muted/60 text-[11px] self-end sm:self-auto">
            {hoveredSkill ? `[CATEGORY: ${hoveredSkill.categoryTitle}]` : '[READY]'}
          </div>
        </div>
      </div>
    </section>
  );
}
