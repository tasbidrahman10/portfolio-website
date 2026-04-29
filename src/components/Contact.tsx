/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Download, ArrowRight, Github, Linkedin, ExternalLink, ChevronDown } from 'lucide-react';
import { PROFILE_LINKS } from '../constants.ts';

const CONTACT_TYPES = ["Recruiter", "Professor or Researcher", "Freelance Client", "Other"];

export default function Contact() {
  const [contactType, setContactType] = useState(CONTACT_TYPES[0]);
  const [isTypeOpen, setIsTypeOpen] = useState(false);

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-purple mb-4 block">Contact</span>
        <h2 className="text-4xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-white/50 text-lg">Three kinds of people reach out. All three are welcome.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {/* Recruiter */}
        <div className="p-8 glass rounded-3xl border-white/5 hover:border-brand-purple/30 transition-all group">
           <h3 className="text-xl font-bold mb-4">For Recruiters</h3>
           <p className="text-sm text-white/60 mb-8 leading-relaxed">
             I’m open to full-time and contractual roles in AI/ML engineering and full-stack development. 
             My background spans research-level ML and production system delivery.
           </p>
           <a 
             href={PROFILE_LINKS.cv}
             download
             className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-sm font-bold hover:bg-white/80 transition-all"
           >
             Download CV <Download className="w-4 h-4" />
           </a>
        </div>

        {/* Professor / Researcher */}
        <div className="p-8 glass rounded-3xl border-white/5 hover:border-brand-blue/30 transition-all group">
           <h3 className="text-xl font-bold mb-4">For Researchers</h3>
           <p className="text-sm text-white/60 mb-8 leading-relaxed">
             Interested in collaboration on federated learning, quantum ML, or privacy-preserving 
             systems for healthcare and IoT? Let’s talk — I’m actively publishing.
           </p>
           <a 
             href={PROFILE_LINKS.email}
             className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-sm font-bold hover:bg-white/5 transition-all text-white/90"
           >
             Send an Email <Mail className="w-4 h-4" />
           </a>
        </div>

        {/* Freelance */}
        <div className="p-8 glass rounded-3xl border-white/5 hover:border-orange-500/30 transition-all group">
           <h3 className="text-xl font-bold mb-4">For Clients</h3>
           <p className="text-sm text-white/60 mb-8 leading-relaxed">
             Need an AI-powered platform, full-stack web application, or automation pipeline built? 
             I’m available for freelance and contractual projects.
           </p>
           <div className="flex flex-wrap gap-3">
             <a href={PROFILE_LINKS.upwork} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 border border-white/15 rounded-full text-sm font-bold text-white/70 hover:bg-white/5 hover:text-white transition-all">
               Upwork <ExternalLink className="w-4 h-4" />
             </a>
             <a href={PROFILE_LINKS.fiverr} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 border border-white/15 rounded-full text-sm font-bold text-white/70 hover:bg-white/5 hover:text-white transition-all">
                Fiverr <ExternalLink className="w-4 h-4" />
             </a>
           </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-24 py-24 border-t border-white/5">
         <div>
            <h3 className="text-3xl font-bold mb-8">Drop a line</h3>
            <form className="space-y-6">
               <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs font-mono text-white/40 uppercase">Name</label>
                     <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-purple/50 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-mono text-white/40 uppercase">Email</label>
                     <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-purple/50 outline-none transition-all" placeholder="john@example.com" />
                  </div>
               </div>
               
               <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase">I am a...</label>
                  <div className="relative">
                     <input type="hidden" name="contactType" value={contactType} />
                     <button
                        type="button"
                        onClick={() => setIsTypeOpen((open) => !open)}
                        className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-left text-white/70 outline-none transition-all flex items-center justify-between ${
                           isTypeOpen ? 'border-brand-purple/60 rounded-b-none bg-white/8' : 'border-white/10 hover:border-white/20'
                        }`}
                        aria-haspopup="listbox"
                        aria-expanded={isTypeOpen}
                     >
                        <span>{contactType}</span>
                        <ChevronDown className={`w-4 h-4 text-white/40 transition-transform ${isTypeOpen ? 'rotate-180' : ''}`} />
                     </button>

                     {isTypeOpen && (
                        <div
                           className="absolute z-30 left-0 right-0 top-full overflow-hidden rounded-b-xl border border-t-0 border-brand-purple/60 bg-dark-card shadow-2xl shadow-black/40"
                           role="listbox"
                        >
                           {CONTACT_TYPES.map((type) => (
                              <button
                                 key={type}
                                 type="button"
                                 onClick={() => {
                                    setContactType(type);
                                    setIsTypeOpen(false);
                                 }}
                                 className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                                    contactType === type ? 'bg-brand-purple/25 text-white' : 'text-white/65 hover:bg-white/5 hover:text-white'
                                 }`}
                                 role="option"
                                 aria-selected={contactType === type}
                              >
                                 {type}
                              </button>
                           ))}
                        </div>
                     )}
                  </div>
               </div>
               
               <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 uppercase">Message</label>
                  <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-purple/50 outline-none transition-all" placeholder="Tell me about your project..." />
               </div>
               
               <button className="w-full py-4 bg-brand-purple rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-purple/80 transition-all group">
                  Send Message <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </form>
         </div>

         <div className="flex flex-col justify-between">
            <div className="space-y-12">
               <div>
                  <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">Socials</h4>
                  <div className="flex gap-8">
                     <a href={PROFILE_LINKS.github} target="_blank" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                        <Github className="w-5 h-5" /> GitHub
                     </a>
                     <a href={PROFILE_LINKS.linkedin} target="_blank" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" /> LinkedIn
                     </a>
                  </div>
               </div>
               
               <div>
                  <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">Email</h4>
                  <a href={PROFILE_LINKS.email} className="text-2xl font-medium hover:text-brand-purple transition-colors">
                    tasbidrahman555@gmail.com
                  </a>
               </div>
            </div>
            
            <div className="pt-24 opacity-20 text-sm font-mono">
               © {new Date().getFullYear()} Tasbid Al Rahman. All rights reserved.
            </div>
         </div>
      </div>
    </section>
  );
}
