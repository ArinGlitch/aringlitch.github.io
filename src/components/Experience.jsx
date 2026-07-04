import React from 'react';
import Reveal from './motion/Reveal';
import SectionHeader from './motion/SectionHeader';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Co-op",
      company: "Rocket Innovation Studio",
      period: "May 2026 – Apr 2027",
      current: true,
      description: [
        "Building AI agents and agentic pipelines/workflows powering an internal platform used by upper management for decision-making.",
        "Developing AI-generated dashboards that automatically surface the most decision-relevant data.",
        "Owning features end-to-end across the full stack, from data layer to production UI."
      ]
    },
    {
      title: "Software Engineer, Research",
      company: "Rotman School of Management, University of Toronto",
      period: "Jan 2026 – Apr 2026",
      description: [
        "Built a corporate finance simulator modeling investment decisions, financing strategies, and real-time impact on financial statements.",
        "Architected the full-stack application with Next.js, TypeScript, PostgreSQL, and Prisma ORM; designed type-safe schemas handling complex financial workflows with sub-second query times."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Capgemini",
      period: "Jul 2025 – Aug 2025",
      description: [
        "Developed enterprise-grade SAP Work Zone UI Integration Cards using SAPUI5 and the MVC pattern.",
        "Built and optimized custom OData API queries for accurate data retrieval and seamless enterprise integration."
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "SelectAI",
      period: "Jun 2025 – Jul 2025",
      description: [
        "Applied computer vision and multimodal AI frameworks (YOLOv8, LLaVA, MiniGPT) to build functional modules and scalable prototypes for end-to-end AI systems.",
        "Adapted research models into production-ready components in an applied R&D environment."
      ]
    }
  ];

  const alsoRoles = [
    { title: "Teaching Assistant, CSC263 Data Structures & Analysis", company: "University of Toronto", period: "Jan 2026 – Apr 2026" },
    { title: "Cybersecurity Intern", company: "AIIPLTECH", period: "Jun 2023 – Aug 2023" }
  ];

  return (
    <section id="experience" className="relative bg-black tron-dots">
      <div className="section-padding">
        <SectionHeader index="01" kicker="Runtime Log" title="Experience" />

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((experience, index) => (
            <Reveal key={index} delay={index * 0.05}>
              <article className="relative">
                <div className="border-l border-accent-green/40 pl-8 pb-10 relative">
                  {/* Timeline node */}
                  <div className="absolute w-3 h-3 bg-black border border-accent-green -left-[6.5px] mt-2 rotate-45"
                       style={{ boxShadow: '0 0 10px 1px rgba(0, 255, 136, 0.6)' }} />

                  <div className="space-y-4">
                    <div>
                      <p className="font-mono text-xs tracking-widest mb-2">
                        <span className="text-accent-green/70">[{experience.period.toUpperCase()}]</span>
                        {experience.current && (
                          <span className="ml-3 px-2 py-0.5 bg-accent-green text-black font-semibold animate-glow-pulse">
                            ACTIVE
                          </span>
                        )}
                      </p>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-1 tracking-wide">
                        {experience.title}
                      </h3>
                      <span className="text-accent-green font-medium">{experience.company}</span>
                    </div>

                    <ul className="space-y-3">
                      {experience.description.map((item, idx) => (
                        <li key={idx} className="text-gray-400 leading-relaxed flex items-start">
                          <span className="text-accent-green mr-3 mt-1 font-mono text-xs">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Compact earlier roles */}
          <Reveal delay={0.2}>
            <div className="border-l border-accent-green/20 pl-8 pt-2">
              <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">
                {'// ALSO'}
              </p>
              <ul className="space-y-2">
                {alsoRoles.map((role, idx) => (
                  <li key={idx} className="text-sm text-gray-500 font-mono">
                    <span className="text-gray-400">{role.title}</span>
                    {' · '}{role.company}
                    {' · '}<span className="text-accent-green/50">{role.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;
