import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle, Sparkles, Layers, Calendar, Tag } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0D0D10] border border-white/10 shadow-2xl p-6 sm:p-10 text-white"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-muted hover:text-white hover:border-lime transition-colors"
            data-cursor="pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Modal Header */}
          <div className="border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3 font-mono text-xs text-lime mb-2">
              <span>PROJECT {project.id} / 04</span>
              <span>•</span>
              <span>{project.year}</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded bg-lime/10 border border-lime/20 text-lime">
                {project.category}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-white mt-2">
              {project.title}
            </h2>
            <p className="text-lg sm:text-xl font-editorial italic text-muted mt-2">
              {project.subtitle}
            </p>
          </div>

          {/* Project Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Description and Features */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-2">
                  PROJECT OVERVIEW
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-3">
                  CORE FEATURES & ARCHITECTURE
                </h3>
                <div className="space-y-2.5">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/90">
                      <CheckCircle size={16} className="text-lime mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-6 md:border-l md:border-white/10 md:pl-8">
              <div>
                <h3 className="font-mono text-xs text-muted uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Tag size={12} className="text-lime" />
                  TECHNOLOGY STACK
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-white/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="block font-mono text-[10px] text-muted uppercase">
                  PERFORMANCE METRIC
                </span>
                <span className="block text-sm font-semibold text-lime mt-1 font-display">
                  {project.metric}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-lime text-black font-display font-bold text-xs tracking-wider uppercase hover:bg-lime-hover transition-colors"
                  data-cursor="pointer"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink size={14} />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-xs tracking-wider uppercase hover:border-white/30 transition-colors"
                  data-cursor="pointer"
                >
                  <Github size={14} />
                  <span>VIEW SOURCE</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
