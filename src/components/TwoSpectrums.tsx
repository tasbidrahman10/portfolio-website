/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Code2, Microscope, ChevronRight } from 'lucide-react';

export default function TwoSpectrums() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">What I Do</h2>
        <p className="text-white/50 uppercase tracking-widest text-sm">Two modes. One engineer.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Panel A - Builder */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-12 rounded-3xl glass border-brand-blue/20 group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Code2 size={120} className="text-brand-blue" />
          </div>
          
          <div className="w-16 h-16 rounded-2xl bg-brand-blue/20 flex items-center justify-center mb-8">
            <Code2 className="text-brand-blue w-8 h-8" />
          </div>
          
          <h3 className="text-3xl font-bold mb-6">Builder</h3>
          <p className="text-white/80 font-medium text-lg mb-4">I build systems that work.</p>
          <p className="text-white/60 mb-8">
            Production-grade AI-powered applications, full-stack web platforms, and automation pipelines 
            - designed for real users, deployed on real infrastructure, built to scale.
          </p>
          
          <div className="space-y-4 mb-12">
            <div className="flex flex-wrap gap-2">
               {["AI Apps", "Full-stack", "SaaS", "n8n Automation", "APIs"].map(tag => (
                 <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                   {tag}
                 </span>
               ))}
            </div>
          </div>
          
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 text-brand-blue font-semibold hover:gap-4 transition-all"
          >
            See Engineering Projects <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Panel B - Researcher */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="p-12 rounded-3xl glass border-brand-purple/20 group relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Microscope size={120} className="text-brand-purple" />
          </div>
          
          <div className="w-16 h-16 rounded-2xl bg-brand-purple/20 flex items-center justify-center mb-8">
            <Microscope className="text-brand-purple w-8 h-8" />
          </div>
          
          <h3 className="text-3xl font-bold mb-6">Researcher</h3>
          <p className="text-white/80 font-medium text-lg mb-4">I research what makes systems smarter.</p>
          <p className="text-white/60 mb-8">
            Privacy-preserving ML, quantum-classical hybrid architectures, and federated learning 
            for medical IoT security — targeting peer-reviewed Q1 publication.
          </p>
          
          <div className="space-y-4 mb-12">
            <div className="flex flex-wrap gap-2">
               {["Split Federated Learning", "Quantum Kernels", "IoMT", "LLM Fine-tuning"].map(tag => (
                 <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-brand-purple/10 text-brand-purple border border-brand-purple/20">
                   {tag}
                 </span>
               ))}
            </div>
          </div>
          
          <button 
             onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
             className="flex items-center gap-2 text-brand-purple font-semibold hover:gap-4 transition-all"
          >
            See Research Projects <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
