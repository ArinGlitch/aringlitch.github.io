import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './motion/Reveal';
import SectionHeader from './motion/SectionHeader';

const skillGroups = [
  {
    label: 'Systems',
    skills: ['C / C++', 'Linux Kernel', 'POSIX Threads', 'Concurrency', 'Memory Management', 'File Systems'],
  },
  {
    label: 'Full-Stack',
    skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
  },
  {
    label: 'AI / ML',
    skills: ['AI Agents', 'Agentic Workflows', 'LLM Integration', 'Computer Vision', 'Python'],
  },
];

const About = () => {
  return (
    <section id="about" className="relative bg-black tron-dots">
      <div className="section-padding">
        <SectionHeader index="03" kicker="Identity" title="About Me" />

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* Profile: terminal-style readout */}
          <div className="space-y-8">
            <Reveal>
              <div className="tron-panel p-8">
                <p className="font-mono text-xs text-accent-green/70 tracking-widest mb-4">
                  {'> cat profile.txt'}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I'm a Computer Science Specialist at the University of Toronto, currently
                  building <span className="text-accent-green">AI agents and agentic pipelines</span> at
                  Rocket Innovation Studio. I work across the entire stack — kernel modules and
                  concurrent file systems on one end, production web apps and LLM-powered tooling
                  on the other — and I care about code that is correct, fast, and maintainable.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="tron-panel p-8">
                <p className="font-mono text-xs text-accent-green/70 tracking-widest mb-4">
                  {'> cat education.log'}
                </p>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 overflow-hidden bg-white p-1.5 flex-shrink-0 border border-accent-green/40"
                       style={{ clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)' }}>
                    <img
                      src="/assets/logos/uoft-logo.png"
                      alt="University of Toronto Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white tracking-wide">
                      University of Toronto
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      BSc Computer Science (Specialist) · Expected Apr 2028
                    </p>
                    <p className="font-mono text-sm text-accent-green mt-1">
                      GPA: 3.91 / 4.00
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Skills: three curated groups */}
          <Reveal delay={0.1}>
            <div className="tron-panel p-8 space-y-8">
              <p className="font-mono text-xs text-accent-green/70 tracking-widest">
                {'> ls skills/'}
              </p>
              {skillGroups.map((group, gIdx) => (
                <div key={group.label} className="space-y-3">
                  <h4 className="font-mono text-sm text-white tracking-widest uppercase">
                    <span className="text-accent-green mr-2">::</span>{group.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        className="skill-tag"
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: gIdx * 0.1 + i * 0.04, duration: 0.3 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
