/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SKILLS } from '../constants.ts';

export default function Skills() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="mb-16">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/40 mb-4 block">Skills</span>
        <h2 className="text-4xl font-bold">Technical Stack</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {SKILLS.map((group, idx) => (
          <div key={idx}>
             <h3 className="text-sm font-mono text-brand-purple mb-6 uppercase tracking-widest">{group.category}</h3>
             <ul className="space-y-4">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-white/60 hover:text-white flex items-center gap-2 transition-colors group cursor-default">
                     <div className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-brand-purple transition-colors" />
                     {skill}
                  </li>
                ))}
             </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
