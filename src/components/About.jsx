
import React from 'react';

const About = () => {
  const skills = {
    "Languages": ["Python", "Java", "C", "Assembly"],
    "Software": ["Git", "Agile", "System Architecture", "Debugging"],
    "Cybersecurity": ["Encryption", "Access Control", "RAID", "Disaster Recovery"],
    "Interests": ["AI", "Cybersecurity", "Robotics"],
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
              This dual focus has helped me see both the code and the context—how technology can be designed not just to work, 
              but to solve real problems and create value. Over time, I've become more analytical, detail-oriented, and thoughtful 
              in how I approach problems.
            </p>
            <p>
              I've also grown personally—learning how to understand people, work across diverse teams, and bring empathy into collaboration. 
              I'm excited by opportunities that lie at the intersection of software and strategy, and I'm always looking to contribute to 
              ambitious projects that push boundaries and make a difference.
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
