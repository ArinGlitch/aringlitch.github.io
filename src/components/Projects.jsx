import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="section-padding bg-black">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Featured <span className="text-accent-green">Projects</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A showcase of my technical expertise and problem-solving capabilities
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <article key={index} className="project-card group">
            <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-muted">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 flex-wrap">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <span className="px-2 py-1 text-xs bg-accent-green text-black rounded-full font-medium whitespace-nowrap">
                  {project.technology}
                </span>
              </div>
              
              {project.period && (
                <p className="text-sm text-muted-foreground">{project.period}</p>
              )}
              
              <p className="text-gray-300 leading-relaxed text-sm line-clamp-3">
                {project.shortDescription}
              </p>
              
              <Link 
                to={`/project/${project.slug}`}
                className="inline-flex items-center text-accent-cyan hover:text-white transition-colors duration-300"
              >
                View Project 
                <span className="ml-2">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {projects.length > 6 && (
        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="btn-secondary"
          >
            {showAll ? 'Show Less' : `View All ${projects.length} Projects`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
