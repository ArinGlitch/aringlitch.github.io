import React from 'react';
import { motion } from 'framer-motion';
import DecryptText from './motion/DecryptText';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Aaryan_Gupta_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openAgent = () => {
    window.dispatchEvent(new Event('open-chatbot'));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid floor receding to horizon */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 [perspective:600px] pointer-events-none">
        <div className="absolute inset-[-100%_-50%_-50%] tron-grid animate-grid-scroll [transform:rotateX(60deg)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent" />
      </div>

      {/* Ambient glow + travelling scanline */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-green/5 blur-3xl" />
        <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-accent-green/[0.04] to-transparent animate-scanline" />
      </div>

      <div className="relative text-center max-w-4xl px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="w-40 h-40 mx-auto mb-8 p-[2px] bg-accent-green/60 animate-glow-pulse"
          style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }}
        >
          <img
            src="/assets/profile.jpg"
            alt="Aaryan Gupta"
            className="w-full h-full object-cover"
            style={{ clipPath: 'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)' }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="font-mono text-accent-green/80 text-sm md:text-base mb-4 terminal-cursor"
        >
          {'> whoami'}
        </motion.p>

        <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight uppercase tracking-wide animate-flicker">
          <DecryptText text="Aaryan Gupta" className="neon-text" speed={45} startDelay={600} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
        >
          I build <span className="text-accent-green font-normal">AI agents</span> and full-stack systems —
          from the kernel up.
        </motion.p>

        {/* Current status line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="inline-block mb-12 px-5 py-3 border border-accent-green/30 bg-accent-green/5 font-mono text-xs md:text-sm text-left tracking-wider"
          style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
        >
          <span className="text-accent-green">▸ NOW:</span>{' '}
          <span className="text-white">SOFTWARE ENGINEER CO-OP @ ROCKET INNOVATION STUDIO</span>
          <span className="text-muted-foreground block sm:inline sm:ml-2">
            — AI AGENTS · AGENTIC PIPELINES · CS @ UOFT
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button onClick={handleDownloadCV} className="btn-primary">
            Download CV
          </button>
          <button onClick={scrollToContact} className="btn-secondary">
            Contact Me
          </button>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9 }}
          onClick={openAgent}
          className="mt-8 font-mono text-xs text-muted-foreground hover:text-accent-green transition-colors tracking-widest"
        >
          {'// or ask my AI agent about me →'}
        </motion.button>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-accent-green/60 tracking-[0.3em]"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="inline-block"
        >
          ▼ SCROLL
        </motion.span>
      </motion.div>
    </section>
  );
};

export default Hero;
