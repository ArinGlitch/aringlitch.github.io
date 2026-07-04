import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { name: 'EXP', full: 'Experience', id: 'experience' },
  { name: 'PROJ', full: 'Projects', id: 'projects' },
  { name: 'ABOUT', full: 'About', id: 'about' },
  { name: 'CONTACT', full: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur border-accent-green/20'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display font-bold text-lg tracking-widest text-white hover:text-accent-green transition-colors"
        >
          A<span className="text-accent-green">G</span>
        </button>

        <div className="flex items-center gap-4 sm:gap-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-mono text-xs tracking-[0.2em] text-muted-foreground hover:text-accent-green transition-colors"
            >
              <span className="sm:hidden">{link.name}</span>
              <span className="hidden sm:inline">{link.full.toUpperCase()}</span>
            </button>
          ))}
          <a
            href="/cv.pdf"
            download="Aaryan_Gupta_CV.pdf"
            className="hidden sm:block font-mono text-xs tracking-[0.2em] px-4 py-2 border border-accent-green/50 text-accent-green hover:bg-accent-green hover:text-black transition-all duration-300"
            style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
          >
            RESUME
          </a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
