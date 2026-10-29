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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">AI Safety Researcher, Systems Side</h2>
          <div className="space-y-5 sm:space-y-6 text-base sm:text-lg text-white/70">
            <p>
              I’m a final-year Computer Science student at North South University in Dhaka.
              My research is in AI safety, approached from the systems side. I study how machine
              learning systems fail under adversarial pressure, distribution shift, and decentralized
              training, and how to measure and catch those failures before they matter.
            </p>
            <p>
              Most of my work is in distributed and federated learning, where robustness problems
              are easy to miss. In a multi-university collaboration across NSU, BUET, and KUET, I work
              on split federated learning for intrusion detection. That includes building attack
              simulations and detection mechanisms, then stress-testing them against adversaries
              designed to slip past them. Separately, I’m building PoolTrain, which pools GPUs across
              machines to train a single model. With it I’m probing where low-communication training
              methods like DiLoCo break down.
            </p>
            <p>
              Recently both projects have led me to the same unglamorous problem: BatchNorm. Its
              running statistics quietly assume one well-mixed stream of data. That assumption falls
              apart when data is split across clients, or when workers train separately and merge
              later. I’m exploring different ways of handling it in both settings. It has reminded me
              that a lot of robustness lives in details nobody looks at.
            </p>
            <p>
              The part of this work I care about most is evaluation: designing tests that try to break
              a system instead of confirming it works. I’m especially curious whether the blind spots I
              find in federated defenses also appear in LLM safety tooling, such as per-turn classifiers
              that a patient adversary can work around.
            </p>
            <p>
              I still build full-stack platforms, AI pipelines, and automation systems. I’m open to
              research collaborations, AI safety programs, and engineering roles where rigor matters.
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
                Research collaborations · AI safety programs · Engineering roles
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
