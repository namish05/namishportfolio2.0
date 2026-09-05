import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MessageSquare, Github, Linkedin, Copy, Check, ArrowUpRight, Phone, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#CCFF00', '#FFFFFF', '#FF3366'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phoneRaw);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2500);
  };

  const contactLinks = [
    {
      label: 'EMAIL DIRECT',
      href: `mailto:${personalInfo.email}`,
      sub: personalInfo.email,
      icon: Mail,
      accent: 'text-lime',
    },
    {
      label: 'CALL / WHATSAPP',
      href: personalInfo.socials.whatsapp,
      sub: personalInfo.phone,
      icon: Phone,
      accent: 'text-lime',
    },
    {
      label: 'LINKEDIN',
      href: personalInfo.socials.linkedin,
      sub: 'in/namish-srivastava-791b74324',
      icon: Linkedin,
      accent: 'text-blue-400',
    },
    {
      label: 'GITHUB',
      href: personalInfo.socials.github,
      sub: 'github.com/namish05',
      icon: Github,
      accent: 'text-white',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-32 md:py-40 px-4 sm:px-8 md:px-14 bg-[#050505] border-t border-white/10 overflow-hidden"
    >
      {/* Ambient background illumination */}
      <div className="absolute bottom-0 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-lime/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Top Marker */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-12 sm:mb-16 font-mono text-xs text-muted">
          <span className="flex items-center gap-2">
            <span className="text-lime">/</span> 008. GET IN TOUCH
          </span>
          <span className="text-lime">● OPEN FOR INTERNSHIPS</span>
        </div>

        {/* Massive Typography CTA */}
        <div className="mb-12 sm:mb-16 max-w-full">
          <h2 className="text-[clamp(2.4rem,6.8vw,5.4rem)] font-display font-black tracking-tighter uppercase leading-[0.92] text-white select-none max-w-full">
            LET'S BUILD <br />
            <span className="font-editorial italic font-normal text-stroke-white hover:text-white transition-colors duration-500">
              SOMETHING
            </span> <br />
            <span className="text-lime">UNEXPECTED.</span>
          </h2>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-8 sm:mt-12 pt-8 border-t border-white/10">
            <div>
              <p className="text-xl sm:text-3xl font-editorial italic text-white">
                Seeking internship opportunities & dynamic team collaborations.
              </p>
              <p className="text-xs sm:text-sm font-mono text-muted mt-1.5">
                Based in Gorakhpur, Uttar Pradesh, India • Ready to contribute.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-lime text-white font-mono text-xs tracking-wider transition-all duration-300"
                data-cursor="pointer"
              >
                {copied ? <Check size={14} className="text-lime" /> : <Copy size={14} />}
                <span>{copied ? 'EMAIL COPIED!' : 'COPY EMAIL'}</span>
              </button>

              <a
                href={`tel:${personalInfo.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-lime text-black font-display font-bold text-xs tracking-wider uppercase hover:bg-lime-hover transition-colors"
                data-cursor="pointer"
              >
                <Phone size={14} />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactLinks.map((item, idx) => {
            const Icon = item.icon;

            return (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith('mailto') || item.href.startsWith('tel') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="group p-6 sm:p-7 rounded-2xl bg-[#0E0E12] border border-white/5 hover:border-lime hover:bg-[#131317] transition-all duration-300 flex flex-col justify-between min-h-[150px]"
                data-cursor="pointer"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-white/5 ${item.accent} group-hover:bg-lime group-hover:text-black transition-colors`}>
                    <Icon size={20} />
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-muted group-hover:text-lime group-hover:border-lime transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="mt-6">
                  <span className="block font-display font-black text-lg sm:text-xl text-white group-hover:text-lime transition-colors">
                    {item.label} ↗
                  </span>
                  <span className="block font-mono text-xs text-muted mt-1 truncate">
                    {item.sub}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
