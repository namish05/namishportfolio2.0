import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 700);
          }, 200);
          return 100;
        }
        // Organic increment speed
        const increment = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col justify-between p-8 sm:p-14 bg-[#050505] text-[#F5F3EE] select-none"
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Top metadata */}
          <div className="flex justify-between items-center text-xs tracking-widest uppercase font-mono text-muted">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse"></span>
              NAMISH SRIVASTAVA
            </span>
            <span>[2026]</span>
          </div>

          {/* Center Brandmark */}
          <div className="flex flex-col items-center justify-center my-auto text-center">
            <motion.h1 
              className="text-5xl sm:text-7xl md:text-9xl font-display font-black tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              NAMISH<span className="text-lime">®</span>
            </motion.h1>
            <motion.p
              className="font-mono text-xs sm:text-sm tracking-widest text-muted uppercase mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              INITIALIZING EXPERIENCE...
            </motion.p>
          </div>

          {/* Bottom Progress & Bar */}
          <div className="w-full">
            <div className="flex justify-between items-end mb-2 font-mono text-xs sm:text-sm tracking-widest text-muted">
              <span>SYSTEM / FULL-STACK</span>
              <span className="text-lime font-bold text-xl sm:text-2xl">
                {String(progress).padStart(2, '0')}%
              </span>
            </div>
            <div className="w-full h-[2px] bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-lime"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
