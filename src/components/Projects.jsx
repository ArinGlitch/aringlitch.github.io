import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "AI Integrated Paint App",
      technology: "Java",
      description: "Developed a modular JavaFX-based paint application with advanced tools like shape manipulation, eraser, dropper, text insertion, PNG export, and AI-powered file parsing via Ollama API. Implemented undo/redo, custom file format parsing using finite state machines, and integrated multiple design patterns (MVC, Command, Observer-Observable, Strategy, Builder, Factory) for scalability and modularity.",
      image: "/assets/projects/paint-app.jpg"
    },
    {
      title: "Custom Linux Shell",
      technology: "C",
      description: "Designed and implemented a UNIX-like shell supporting built-in commands, external process execution, multi-argument parsing, piping, background job control, and networking via sockets. Developed robust job tracking with dynamic arrays and linked lists, signal handling (SIGCHLD, SIGINT), and a client-server model for message exchange. Optimized memory management to prevent leaks and ensure smooth resource handling.",
      image: "/assets/projects/linux-shell.png"
    },
    {
      title: "Sokoban Puzzle Game",
      technology: "RISC-V Assembly",
      description: "Built a 32-bit RISC-V assembly Sokoban game featuring single-player, multiplayer, dynamic leaderboards, portals, unlimited undo, and cheat codes. Enabled players to experiment with strategies through a flexible, well-structured codebase.",
      image: "/assets/projects/sokoban.gif"
    },
    {
      title: "Treemap Memory Visualizer",
      technology: "Python",
      description: "Created an interactive GUI application to visualize computer memory allocation in real time. Utilized tree-based data structures for proportional scaling and dynamic memory representation, aiding system analysis and debugging.",
      image: "/assets/projects/memory-visualizer.jpg"
    }
  ];

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
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <article key={index} className="project-card group">
            <div className="aspect-video mb-6 rounded-lg overflow-hidden bg-muted">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className="px-2 py-1 text-xs bg-accent-green text-black rounded-full font-medium">
                  {project.technology}
                </span>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-sm">
                {project.description}
              </p>
              
              <button className="inline-flex items-center text-accent-cyan hover:text-white transition-colors duration-300">
                View Project 
                <span className="ml-2">→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
