import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'JOURNEY', href: '#journey' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 sm:px-8 md:px-12 py-4 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full px-5 py-3 ${
            scrolled
              ? 'bg-[#0E0E10]/80 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/50'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="group flex items-center gap-2 text-lg sm:text-xl font-display font-black tracking-tight"
            data-cursor="pointer"
          >
            <span className="text-white group-hover:text-lime transition-colors duration-300">
              {personalInfo.brand}
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-mono tracking-widest uppercase transition-colors duration-300 ${
                    isActive ? 'text-lime font-semibold' : 'text-[#8E8E93] hover:text-white'
                  }`}
                  data-cursor="pointer"
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-lime"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action & Status Badge */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-lime/20 bg-lime/5 text-[11px] font-mono tracking-wider text-lime">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-ping" />
              <span>AVAILABLE FOR WORK</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-lime/30 bg-lime/10 text-[10px] font-mono text-lime">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              <span>OPEN</span>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-white/10 bg-white/5 text-white hover:text-lime transition-colors"
              aria-label="Toggle navigation menu"
              data-cursor="pointer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="font-mono text-xs text-muted tracking-widest uppercase">
                NAVIGATION
              </span>
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center justify-between text-3xl font-display font-bold text-white hover:text-lime transition-colors py-2 border-b border-white/5"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={20} className="text-muted" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col gap-3 font-mono text-xs text-muted">
              <div className="flex items-center gap-2 text-lime">
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                AVAILABLE FOR NEW OPPORTUNITIES
              </div>
              <p>{personalInfo.education.degree} • {personalInfo.location}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
