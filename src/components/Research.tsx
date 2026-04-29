/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';
import { RESEARCH_PROJECTS } from '../constants.ts';
import { ResearchProject } from '../types.ts';

const ProjectCard = ({ project, index }: { project: ResearchProject; index: number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isFlagship = index === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl sm:rounded-3xl overflow-hidden p-5 sm:p-8 lg:col-span-2"
    >
      <div className="flex flex-wrap gap-2 mb-6">
        {project.badges.map((badge, bIdx) => (
          <span 
            key={bIdx} 
            className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest ${
              bIdx === 0 ? 'bg-orange-500/20 text-orange-400' : 'bg-white/5 text-white/50'
            }`}
          >
            {badge}
          </span>
        ))}
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm font-mono text-brand-purple mb-6">{project.acronym} · {project.collaboration}</p>
          
          <p className="text-white/70 mb-8 leading-relaxed">
            {project.abstract}
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {project.highlights.map((highlight, hIdx) => (
              <div key={hIdx} className="flex gap-3 items-start">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0 mt-1.5" />
                 <span className="text-sm text-white/60">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
             {project.github && (
               <a href={project.github} target="_blank" className="flex items-center gap-2 text-sm font-semibold glass px-4 py-2 rounded-full hover:bg-white/10 transition-all">
                 <Github className="w-4 h-4" /> Code
               </a>
             )}
             {project.poster && (
               <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 text-sm font-semibold glass px-4 py-2 rounded-full hover:bg-white/10 transition-all cursor-zoom-in"
               >
                 <ExternalLink className="w-4 h-4" /> View Poster
               </button>
             )}
          </div>
        </div>

        {project.poster && (
          <div className="relative group overflow-hidden rounded-2xl cursor-zoom-in bg-black/30" onClick={() => setIsModalOpen(true)}>
             <img 
               src={project.poster} 
               alt={project.title} 
               referrerPolicy="no-referrer"
               className="w-full h-full max-h-[540px] object-contain transition-transform duration-700 group-hover:scale-105"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = index === 0 
                  ? "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800" 
                  : "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800";
               }}
             />
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-sm font-semibold">Click to expand</span>
             </div>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white" onClick={() => setIsModalOpen(false)}>
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={project.poster} 
              alt={project.title}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                 (e.target as HTMLImageElement).src = index === 0 
                  ? "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200" 
                  : "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200";
               }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Research() {
  return (
    <section id="research" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="mb-10 sm:mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-purple mb-4 block">Research</span>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Active Research</h2>
        <p className="text-white/50 text-base sm:text-lg">Peer-review-targeted ML research in federated learning, quantum systems, and AI for healthcare and security.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {RESEARCH_PROJECTS.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
}
