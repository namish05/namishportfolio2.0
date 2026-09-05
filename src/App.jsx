import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useMousePosition } from './hooks/useMousePosition';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeSection from './components/MarqueeSection';
import Statement from './components/Statement';
import About from './components/About';
import Expertise from './components/Expertise';
import SelectedWork from './components/SelectedWork';
import ProjectModal from './components/ProjectModal';
import Journey from './components/Journey';
import GitHubCode from './components/GitHubCode';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);

  const { mousePosition, cursorType, cursorText, isTouchDevice } = useMousePosition();
  const lenisRef = useRef(null);

  // Initialize Lenis Smooth Scrolling and link with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });
    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  // Update active section based on scroll position
  useEffect(() => {
    const sections = ['hero', 'work', 'about', 'skills', 'journey', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#050505] text-[#F5F3EE] min-h-screen overflow-x-hidden selection:bg-lime selection:text-black">
      {/* Noise Grain Overlay for rich editorial texture */}
      <div className="fixed inset-0 pointer-events-none z-30 grain-overlay opacity-30" />

      {/* Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Custom Reactive Cursor */}
      <CustomCursor
        mousePosition={mousePosition}
        cursorType={cursorType}
        cursorText={cursorText}
        isTouchDevice={isTouchDevice}
      />

      {/* Floating Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Sections */}
      <main>
        <Hero />
        <MarqueeSection />
        <Statement />
        <About />
        <Expertise />
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />
        <Journey />
        <GitHubCode />
        <Services />
        <Contact />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />

      {/* Project Details Interactive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
