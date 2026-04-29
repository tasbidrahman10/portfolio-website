/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useState } from 'react';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { ENGINEERING_PROJECTS } from '../constants.ts';
import { EngineeringProject } from '../types.ts';

const EngineeringCard = ({ project }: { project: EngineeringProject }) => {
  const [activeThumb, setActiveThumb] = useState(0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl sm:rounded-3xl overflow-hidden group border-white/5 hover:border-brand-blue/30 transition-all duration-500 bg-linear-to-b from-white/5 to-transparent"
    >
      <div className="relative aspect-video overflow-hidden bg-black/20">
        <img 
          src={project.thumbnails[activeThumb]} 
          alt={project.title} 
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
          onError={(e) => {
             (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800`;
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark-bg/90 via-dark-bg/20 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
           <h3 className="text-xl sm:text-2xl font-bold mb-1 group-hover:text-brand-blue transition-colors">{project.title}</h3>
           <p className="text-sm text-white/70 line-clamp-1">{project.oneLine}</p>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto px-4 sm:px-6 pt-4 sm:pt-5 pb-1">
        {project.thumbnails.map((thumbnail, idx) => (
          <button
            key={thumbnail}
            onClick={() => setActiveThumb(idx)}
            onMouseEnter={() => setActiveThumb(idx)}
            className={`relative h-16 w-28 shrink-0 overflow-hidden rounded-lg border bg-black/30 transition-all ${
              activeThumb === idx ? 'border-brand-blue opacity-100' : 'border-white/10 opacity-60 hover:opacity-100'
            }`}
            aria-label={`Show ${project.title} screenshot ${idx + 1}`}
          >
            <img
              src={thumbnail}
              alt=""
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </button>
        ))}
      </div>
      
      <div className="p-5 sm:p-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/10 uppercase tracking-wider">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="h-[100px] mb-8 overflow-hidden">
          <p className="text-sm text-white/60 leading-relaxed translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 line-clamp-4">
             {project.longDescription}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-auto">
           <div className="flex gap-4">
              {project.links.github && (
                <a href={project.links.github} target="_blank" className="text-white/40 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" className="text-white/40 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
           </div>
           
           <button className="text-brand-blue flex items-center gap-1 text-sm font-semibold group/btn">
              Case Study <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function Engineering() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="mb-10 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-blue mb-4 block">Projects</span>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Things I’ve Built</h2>
        <p className="text-white/50 text-base sm:text-lg">Production platforms, capstone systems, and engineering projects — shipped and deployed.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {ENGINEERING_PROJECTS.map((project, idx) => (
          <div key={project.id} className={idx === 0 ? 'lg:col-span-2' : ''}>
            <EngineeringCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
