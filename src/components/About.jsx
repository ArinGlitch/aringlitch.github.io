import React from 'react';

const About = () => {
  const skills = {
    "Languages": ["Python", "Java", "C", "Assembly", "JavaScript"],
    "Software": ["Git", "Agile", "Debugging", "IntelliJ", "Visual Studio Code", "Cursor"],
    "Frameworks": ["Node.js", "React", "Express", "MongoDB"],
    "Interests": ["AI", "Cybersecurity", "Robotics", "System Architecture"],
    "Soft Skills": ["Mentoring", "Teamwork", "Empathy", "Communication"]
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
              I believe in building solutions that work—not just in code, but in the real world. By blending my technical skills in systems programming, 
              data structures, and algorithms with a growing understanding of business strategy and problem-solving, I aim to create technology that delivers real value.
            </p>
            <p>
              I've also learned the importance of empathy, teamwork, and understanding diverse perspectives—because the best solutions are built together. 
              I'm eager to contribute to projects that push boundaries, create impact, and help shape the future.
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
