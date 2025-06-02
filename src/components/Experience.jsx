
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Cybersecurity Intern",
      company: "AIIPLTECH",
      period: "Jun–Aug 2023",
      description: [
        "Conducted security audits, identified vulnerabilities, and implemented encryption, hashing, and steganography techniques to enhance data security.",
        "Explored hardware architecture by disassembling and reassembling PCs, performed troubleshooting, and gained hands-on experience in RAID and disaster recovery strategies.",
        "Co-developed an IT fundamentals course for high school students, introducing core cybersecurity concepts."
      ]
    },
    {
      title: "Teaching Assistant",
      company: "The IITian's Hub",
      period: "Apr 2021–Apr 2023",
      description: [
        "Mentored 10+ high school students for the IIT-JEE, focusing on Physics, Chemistry, and Mathematics.",
        "Led weekly problem-solving sessions addressing over 100 complex questions, improving student understanding and performance.",
        "Developed personalized learning strategies and strengthened communication, leadership, and presentation skills."
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-black">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Professional <span className="text-accent-cyan">Experience</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Building expertise through hands-on learning and mentorship
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((experience, index) => (
          <article key={index} className="relative">
            <div className="border-l-2 border-accent-green pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-accent-green rounded-full -left-2 mt-1.5"></div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {experience.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                    <span className="text-accent-cyan font-medium">{experience.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{experience.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-accent-green mr-3 mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
