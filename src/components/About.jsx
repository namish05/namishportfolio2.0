import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Terminal, MapPin, GraduationCap, Compass, Sparkles, CheckCircle2, Phone, Mail, Award, BookOpen } from 'lucide-react';

export default function About() {
  const educationDetails = [
    {
      degree: personalInfo.education.btech.degree,
      institution: personalInfo.education.btech.institution,
      period: personalInfo.education.btech.period,
      status: "Currently Pursuing",
      accent: "border-lime/30 bg-lime/5 text-lime",
    },
    {
      degree: personalInfo.education.diploma.degree,
      institution: personalInfo.education.diploma.institution,
      period: personalInfo.education.diploma.period,
      status: "Completed (3-Year Technical)",
      accent: "border-white/10 bg-white/5 text-white/90",
    },
  ];

  const softSkills = ["Communication", "Adaptability", "Problem Solving", "Attention to Detail"];

  return (
    <section
      id="about"
      className="relative py-20 sm:py-32 md:py-36 px-4 sm:px-8 md:px-14 bg-[#08080A] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-20 pb-6 border-b border-white/10">
          <div>
            <span className="font-mono text-xs text-lime tracking-widest uppercase mb-2 block">
              // 002. IDENTITY & BACKGROUND
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black tracking-tight text-white uppercase leading-tight">
              WHO'S BEHIND <br className="hidden sm:block" />
              <span className="text-stroke-white hover:text-white transition-colors duration-300">
                THE CODE?
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-6 self-start md:self-auto">
            <div className="text-left md:text-right">
              <span className="text-5xl sm:text-7xl md:text-8xl font-display font-black text-white/10 block leading-none select-none">
                01
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-lime tracking-widest uppercase block mt-1">
                ASPIRING FULL-STACK & WEB DEVELOPER
              </span>
            </div>
          </div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Bio & Real Resume Summary */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
              <span className="font-mono text-[11px] text-lime uppercase tracking-widest block mb-3">
                [EXECUTIVE SUMMARY]
              </span>
              <p className="text-base sm:text-xl font-editorial italic text-[#F5F3EE] leading-relaxed">
                "{personalInfo.summary}"
              </p>
            </div>

            {/* Academic Credentials */}
            <div>
              <h3 className="font-mono text-xs text-muted tracking-widest uppercase mb-4 flex items-center gap-2">
                <BookOpen size={14} className="text-lime" />
                EDUCATION & DEGREES
              </h3>
              <div className="space-y-4">
                {educationDetails.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-xl bg-[#0E0E11] border border-white/10 hover:border-lime/30 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-base sm:text-lg font-display font-bold text-white">
                        {edu.degree}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] tracking-wider text-lime bg-lime/10 border border-lime/20">
                        {edu.period}
                      </span>
                    </div>
                    <p className="font-mono text-xs sm:text-sm text-muted">
                      {edu.institution}
                    </p>
                    <span className="inline-block mt-2 font-mono text-[11px] text-muted/70">
                      Status: {edu.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills Badges */}
            <div>
              <h3 className="font-mono text-xs text-muted tracking-widest uppercase mb-3 flex items-center gap-2">
                <Award size={14} className="text-lime" />
                CORE SOFT SKILLS
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-white flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Verified Contact & Spec Sheet */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#101014] border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="font-mono text-xs text-muted uppercase tracking-wider">
                  VERIFIED_DETAILS.JSON
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-lime">
                  <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
                  ONLINE
                </span>
              </div>

              <div className="space-y-5 font-mono text-xs">
                <div>
                  <span className="text-muted block text-[10px] tracking-wider uppercase">FULL NAME</span>
                  <span className="text-white font-bold text-base mt-0.5 block">{personalInfo.name}</span>
                </div>

                <div>
                  <span className="text-muted block text-[10px] tracking-wider uppercase">LOCATION</span>
                  <div className="flex items-center gap-2 mt-0.5 text-white">
                    <MapPin size={14} className="text-lime flex-shrink-0" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <span className="text-muted/60 text-[10px] block mt-0.5">[{personalInfo.coords}]</span>
                </div>

                <div>
                  <span className="text-muted block text-[10px] tracking-wider uppercase">PHONE / WHATSAPP</span>
                  <a
                    href={`tel:${personalInfo.phoneRaw}`}
                    className="flex items-center gap-2 mt-0.5 text-white hover:text-lime transition-colors"
                  >
                    <Phone size={14} className="text-lime flex-shrink-0" />
                    <span>{personalInfo.phone}</span>
                  </a>
                </div>

                <div>
                  <span className="text-muted block text-[10px] tracking-wider uppercase">EMAIL ADDRESS</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-2 mt-0.5 text-white hover:text-lime transition-colors break-all"
                  >
                    <Mail size={14} className="text-lime flex-shrink-0" />
                    <span>{personalInfo.email}</span>
                  </a>
                </div>

                <div>
                  <span className="text-muted block text-[10px] tracking-wider uppercase">DEGREE TRACK</span>
                  <span className="text-white block mt-0.5">B.Tech IT • 2025–Present</span>
                  <span className="text-muted text-[11px]">Maharana Pratap Inst. of Technology</span>
                </div>

                <div>
                  <span className="text-muted block text-[10px] tracking-wider uppercase">FOUNDATION</span>
                  <span className="text-white block mt-0.5">Diploma Computer Science • 2022–2025</span>
                  <span className="text-muted text-[11px]">Mahamaya IT Polytechnic, Maharajganj</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-muted">SEEKING</span>
                <span className="text-lime font-bold">INTERNSHIP OPPORTUNITIES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
