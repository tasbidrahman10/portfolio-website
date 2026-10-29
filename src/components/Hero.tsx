/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { HERO_DATA, PROFILE_LINKS } from '../constants.ts';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center w-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono text-white/70">Open to Research & AI Safety Programs</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-4 leading-[0.92]">
            {HERO_DATA.name}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium mb-2">
            {HERO_DATA.role}
          </p>
          
          <p className="text-base sm:text-lg text-white/60 mb-8 max-w-xl">
            {HERO_DATA.tagline}
          </p>
          
          <div className="flex flex-col min-[420px]:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12">
            <button 
              onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
              className="justify-center px-6 sm:px-8 py-3 sm:py-4 bg-brand-blue rounded-full font-semibold flex items-center gap-2 hover:bg-brand-blue/80 transition-all group"
            >
              Explore Research <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 rounded-full font-semibold hover:bg-white/5 transition-all text-white/90"
            >
              Explore Projects
            </button>
          </div>
          
          <div className="flex items-center gap-6 text-white/40">
             <span className="text-xs sm:text-sm font-mono leading-relaxed">{HERO_DATA.location}</span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative justify-self-center lg:justify-self-end"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-2xl border-2 border-brand-purple/30 rotate-6 translate-x-4 translate-y-4" />
            <div className="absolute inset-0 rounded-2xl border-2 border-brand-blue/30 -rotate-3 -translate-x-2 translate-y-2" />
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden glass grayscale hover:grayscale-0 transition-all duration-700">
               <img 
                 src={HERO_DATA.photo}
                 alt="Tasbid Al Rahman" 
                 referrerPolicy="no-referrer"
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                 }}
               />
            </div>
          </div>
          
          <div className="absolute -bottom-5 right-2 sm:-right-6 lg:-right-12 p-3 sm:p-4 glass rounded-xl z-20 animate-bounce">
             <div className="flex gap-4">
                <a href={PROFILE_LINKS.github} target="_blank" className="hover:text-brand-purple transition-colors"><Github className="w-6 h-6" /></a>
                <a href={PROFILE_LINKS.linkedin} target="_blank" className="hover:text-brand-blue transition-colors"><Linkedin className="w-6 h-6" /></a>
                <a href={PROFILE_LINKS.email} className="hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
