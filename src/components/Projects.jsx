import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './motion/Reveal';
import SectionHeader from './motion/SectionHeader';
import { projects } from '../data/projects';

// Curated order: systems depth + full-stack range first.
const FEATURED_SLUGS = [
  'ext2-filesystem',
  'knowledge-nexus',
  'kernel-syscall-interceptor',
  'virtual-memory-simulator',
];

const ProjectCard = ({ project, compact = false }) => (
  <article className="project-card group h-full flex flex-col">
    <div className="aspect-video mb-6 overflow-hidden bg-muted border border-accent-green/10 relative">
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 saturate-[0.8] group-hover:saturate-100"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
    </div>

    <div className="space-y-4 flex-grow flex flex-col">
      <div className="flex items-start gap-3 flex-wrap">
        <h3 className={`font-display font-semibold text-white tracking-wide ${compact ? 'text-sm' : 'text-base md:text-lg'}`}>
          {project.title}
        </h3>
        <span className="px-2 py-1 font-mono text-[10px] uppercase tracking-wider bg-accent-green text-black font-semibold whitespace-nowrap"
              style={{ clipPath: 'polygon(4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%, 0 4px)' }}>
          {project.technology}
        </span>
      </div>

      <p className="text-gray-400 leading-relaxed text-sm line-clamp-3 flex-grow">
        {project.shortDescription}
      </p>

      <Link
        to={`/project/${project.slug}`}
        className="inline-flex items-center font-mono text-sm text-accent-green/80 hover:text-accent-green transition-colors duration-300 group/link"
      >
        {'> '}View Project
        <span className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
      </Link>
    </div>
  </article>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const featured = FEATURED_SLUGS
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean);
  const archive = projects.filter((p) => !FEATURED_SLUGS.includes(p.slug));

  return (
    <section id="projects" className="relative bg-black">
      <div className="section-padding">
        <SectionHeader
          index="02"
          kicker="Build Archive"
          title="Projects"
          subtitle="Selected work — systems programming, full-stack products, and applied AI"
        />

        {/* Featured: larger two-column grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {/* Archive */}
        {showAll && (
          <div className="mt-12">
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-6 text-center">
              {'// FULL ARCHIVE'}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {archive.map((project, index) => (
                <Reveal key={project.slug} delay={(index % 3) * 0.08}>
                  <ProjectCard project={project} compact />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {archive.length > 0 && (
          <Reveal>
            <div className="text-center mt-12">
              <button onClick={() => setShowAll(!showAll)} className="btn-secondary">
                {showAll ? 'Collapse Archive' : `Open Full Archive [${archive.length}]`}
              </button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Projects;
