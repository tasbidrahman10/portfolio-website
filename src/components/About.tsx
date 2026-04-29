/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { STATS } from '../constants.ts';

const Counter = ({ value, label }: { value: number; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      let totalMiliseconds = 2000;
      let incrementTime = (totalMiliseconds / end);

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-4 sm:p-6 glass rounded-2xl">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-2">{count}+</div>
      <div className="text-[11px] sm:text-sm text-white/50 uppercase tracking-wider sm:tracking-widest leading-tight">{label}</div>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-brand-purple mb-4 block">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">AI Developer & Research Collaborator</h2>
          <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-white/70">
            <p>
              I’m a final-year Computer Science student at North South University, Dhaka. 
              Working simultaneously as a developer who ships AI-powered systems and as a 
              researcher pushing the boundaries of privacy-preserving machine learning.
            </p>
            <p>
              My current work sits at the intersection of quantum computing and federated learning: 
              a multi-university collaboration across NSU, BUET, and KUET targeting a Q1 journal 
              publication on hybrid classical-quantum split federated learning for IoMT security.
            </p>
            <p>
              Outside research, I build full-stack platforms, automation pipelines, and AI systems 
              for clients and personal projects - and I’m open to both freelance work and 
              research collaboration.
            </p>
          </div>
          
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {STATS.map((stat, idx) => (
            <Counter key={idx} {...stat} />
          ))}
          <div className="col-span-2 p-6 glass rounded-2xl border-white/10 flex flex-col justify-center">
             <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-brand-blue" />
                <span className="text-sm font-semibold text-white/90 uppercase tracking-widest">Availability</span>
             </div>
             <p className="text-white/60 text-sm">
                Open to AI/ML roles · Research collaboration · Freelance projects
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
