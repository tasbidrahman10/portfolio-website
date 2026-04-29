/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'}`}
    >
      <div className={`max-w-7xl mx-auto px-6 h-16 flex items-center justify-between rounded-full transition-all duration-500 ${scrolled ? 'glass px-8' : ''}`}>
        <a href="#" className="text-xl font-bold tracking-tight">
          TASBID<span className="text-brand-purple">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
           {['about', 'research', 'projects', 'contact'].map(item => (
             <a 
               key={item} 
               href={`#${item}`} 
               className="text-sm font-medium text-white/60 hover:text-white transition-colors capitalize tracking-wide"
             >
               {item}
             </a>
           ))}
        </div>
        
        <a 
          href="mailto:tasbidrahman555@gmail.com" 
          className="px-6 py-2 bg-white text-black font-bold rounded-full text-sm hover:scale-105 transition-transform"
        >
          Work with me
        </a>
      </div>
    </motion.nav>
  );
}
