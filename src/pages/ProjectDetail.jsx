import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <main className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Back to Home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
          >
            <span>←</span>
            <span>Back to Portfolio</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            {project.association && (
              <span className="text-accent-cyan text-sm font-medium">
                {project.association}
              </span>
            )}
            <span className="text-muted-foreground text-sm ml-3">
              {project.period}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-accent-green text-black rounded-full text-sm font-medium">
              {project.technology}
            </span>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>
      </section>

      {/* Project Images Gallery */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {project.images.map((img, index) => (
            <div key={index} className="aspect-video rounded-xl overflow-hidden bg-muted border border-border">
              <img
                src={img}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Project Details */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-accent-green">
            Project Details
          </h2>
          <ul className="space-y-4">
            {project.fullDescription.map((item, index) => (
              <li key={index} className="flex items-start text-gray-300 leading-relaxed">
                <span className="text-accent-green mr-3 mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-accent-cyan">
            Technologies & Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      {(project.github || project.demo) && (
        <section className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">
              Links
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View on GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Live Demo
                  <span>→</span>
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Back to projects */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={() => navigate('/#projects')}
            className="btn-secondary"
          >
            ← View All Projects
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
