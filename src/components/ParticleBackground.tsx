/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function ParticleBackground() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; content: string }[]>([]);
  const symbols = ['∫', 'Σ', 'λ', 'x²', '{ }', 'π', 'θ', '√', 'log', '=>', '</>', '01'];

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 8,
      duration: Math.random() * 30 + 30,
      content: symbols[Math.floor(Math.random() * symbols.length)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.08]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute font-mono text-brand-purple select-none"
          style={{
            fontSize: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {p.content}
        </motion.div>
      ))}
      {/* Decorative geometric lines */}
      <svg className="absolute inset-0 w-full h-full stroke-brand-blue/10 stroke-[0.5] fill-none">
         <motion.path 
           d="M -100 100 L 500 600 M 800 -100 L 1200 400 M 0 800 L 400 1200"
           animate={{
              d: [
                "M -100 100 L 500 600 M 800 -100 L 1200 400 M 0 800 L 400 1200",
                "M -50 150 L 550 550 M 750 -50 L 1150 450 M 50 750 L 450 1150",
                "M -100 100 L 500 600 M 800 -100 L 1200 400 M 0 800 L 400 1200"
              ]
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
         />
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,119,221,0.03),transparent_80%)]" />
    </div>
  );
}
