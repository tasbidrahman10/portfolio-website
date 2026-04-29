/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import TwoSpectrums from './components/TwoSpectrums.tsx';
import Research from './components/Research.tsx';
import Engineering from './components/Engineering.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';
import ParticleBackground from './components/ParticleBackground.tsx';

export default function App() {
  return (
    <div className="relative selection:bg-brand-purple selection:text-white">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TwoSpectrums />
        <Research />
        <Engineering />
        <Skills />
        <Contact />
      </main>
      
      {/* Decorative noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </div>
  );
}

