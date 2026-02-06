import React from 'react';

const About = () => {
  const skills = {
    "Languages": ["C", "Python", "Java", "TypeScript", "JavaScript", "RISC-V Assembly", "C++"],
    "Systems & Low-Level": ["Linux Kernel", "POSIX Threads", "Concurrency", "Memory Management", "File Systems", "Synchronization"],
    "Web & Frameworks": ["React", "Next.js", "Node.js", "Express", "Three.js", "Tailwind CSS", "JavaFX"],
    "Databases & Tools": ["PostgreSQL", "MongoDB", "SQLite", "Prisma", "Git", "Valgrind", "GDB"],
    "AI & ML": ["YOLOv8", "LLaVA", "MiniGPT", "Google Gemini", "Ollama", "Computer Vision"],
    "Hardware & IoT": ["ESP32", "Arduino", "Embedded Systems"]
  };

  return (
    <section id="about" className="section-padding bg-black">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-accent-cyan">Me</span>
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="text-lg leading-relaxed text-gray-300 space-y-4">
            <p>
              I specialize in building software that spans the entire stack—from kernel modules and concurrent file systems to production web applications with real-time visualization. 
              My work includes implementing page replacement algorithms, thread synchronization primitives, and system call interceptors at the OS level, while also shipping full-stack apps with modern frameworks.
            </p>
            <p>
              Whether it's debugging race conditions with Valgrind, architecting type-safe database schemas with Prisma, or integrating AI models for intelligent features, 
              I focus on writing code that's correct, performant, and maintainable. I thrive in environments where I can tackle complex technical challenges and collaborate with teams to deliver impactful solutions.
            </p>
          </div>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-accent-green mb-6">Skills & Expertise</h3>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-3">
              <h4 className="text-lg font-medium text-white">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
