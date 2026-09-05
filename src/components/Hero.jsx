import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const canvasRef = useRef(null);

  // Responsive interactive particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 65);
    const mouse = { x: -1000, y: -1000, radius: 150 };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.5 + 0.8;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
      draw() {
        ctx.fillStyle = 'rgba(245, 243, 238, 0.25)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.strokeStyle = `rgba(204, 255, 0, ${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between pt-20 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-8 md:px-14 overflow-hidden bg-[#050505]"
    >
      {/* Background Interactive Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-60"
      />

      {/* Radial Gradient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[550px] h-[300px] sm:h-[550px] bg-lime/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Top Editorial Label */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-2 sm:pt-4 border-b border-white/10 pb-3 sm:pb-4">
        <div className="flex items-center gap-2.5">
          <span className="inline-block w-2 h-2 rounded-full bg-lime animate-pulse" />
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.2em] text-[#8E8E93] uppercase">
            PORTFOLIO / ASPIRING WEB DEVELOPER
          </p>
        </div>

        <div className="flex items-center gap-3 sm:gap-6 font-mono text-[11px] sm:text-xs text-muted">
          <span className="flex items-center gap-1">
            <MapPin size={12} className="text-lime" />
            GORAKHPUR, UP, INDIA
          </span>
          <span className="hidden md:inline">[{personalInfo.coords}]</span>
        </div>
      </div>

      {/* Main Massive Editorial Typography */}
      <div className="relative z-10 my-auto py-6 sm:py-10 max-w-full">
        <div className="flex flex-col">
          {/* Row 1: CREATIVE */}
          <div className="overflow-visible">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,8.8vw,7.6rem)] font-display font-black tracking-tighter leading-[0.88] uppercase select-none text-[#F5F3EE] max-w-full"
            >
              CREATIVE
            </motion.h1>
          </div>

          {/* Middle Row with Italic Accent & Quick Identity Chip */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 py-2 sm:py-3">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-editorial italic text-lg sm:text-2xl md:text-3xl lg:text-4xl text-lime font-normal tracking-wide max-w-xl leading-snug"
            >
              "{personalInfo.tagline}"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-3 self-start md:self-auto px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Code2 size={16} className="text-lime" />
              <div className="text-left font-mono text-[10px] sm:text-[11px] leading-tight">
                <span className="text-white font-bold block">{personalInfo.name.toUpperCase()}</span>
                <span className="text-muted block">B.Tech IT • Full-Stack Developer</span>
              </div>
            </motion.div>
          </div>

          {/* Row 2: DEVELOPER (Outline/Solid Contrast) */}
          <div className="overflow-visible">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.2rem,7.8vw,6.8rem)] font-display font-black tracking-tighter leading-[0.88] uppercase select-none text-stroke-white hover:text-[#F5F3EE] transition-all duration-500 cursor-default max-w-full"
              data-cursor="explore"
            >
              DEVELOPER
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Bio snippet & Scroll Indicator */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-5 pt-4 sm:pt-6 border-t border-white/10">
        <div className="max-w-xl">
          <p className="font-mono text-xs sm:text-[13px] text-muted leading-relaxed">
            <strong className="text-white font-semibold">NAMISH SRIVASTAVA</strong> — Pursuing B.Tech in IT at Maharana Pratap Institute of Technology, Gorakhpur. Hands-on in building responsive, user-friendly full-stack web applications.
          </p>
        </div>

        {/* Scroll Indicator button */}
        <button
          onClick={scrollToWork}
          className="group flex items-center gap-2.5 text-left font-mono text-xs tracking-widest uppercase text-white hover:text-lime transition-colors self-start sm:self-auto"
          data-cursor="pointer"
        >
          <span className="text-muted group-hover:text-lime transition-colors text-[11px] sm:text-xs">
            EXPLORE PROJECTS
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 group-hover:border-lime flex items-center justify-center text-lime transition-colors"
          >
            <ArrowDown size={14} />
          </motion.div>
        </button>
      </div>
    </section>
  );
}
