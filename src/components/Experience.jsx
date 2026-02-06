import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer, Research",
      company: "Rotman School of Management, University of Toronto",
      period: "Jan 2026 – Present",
      description: [
        "Building a corporate finance simulator modeling investment decisions, financing strategies, and real-time impact on financial statements—directly applying accounting principles (debits, credits, balance sheets) in code.",
        "Architecting full-stack application with Next.js, TypeScript, PostgreSQL, and Prisma ORM; designing type-safe database schemas to handle complex financial workflows with sub-second query response times.",
        "Collaborating with finance faculty to translate domain requirements into technical solutions; communicating trade-offs to non-technical stakeholders."
      ]
    },
    {
      title: "Teaching Assistant",
      company: "University of Toronto",
      period: "Jan 2026 – Present",
      description: [
        "Assisted in teaching CSC263H5 (Data Structures & Analysis) by clarifying concepts and answering student inquiries.",
        "Led tutorials that emphasized problem-solving techniques and understanding of core data structures and algorithms.",
        "Fostered a collaborative learning environment to enhance student engagement and comprehension."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Capgemini",
      period: "Jul 2025 – Aug 2025",
      description: [
        "Developed enterprise-grade SAP Work Zone UI Integration Cards using the SAPUI5 library and MVC design pattern, gaining hands-on experience in professional front-end development.",
        "Curated and optimized custom OData API queries aligned to task specifications, ensuring accurate data retrieval and seamless integration with enterprise systems.",
        "Rigorously debugged and validated UI components through browser inspection tools and metadata analysis, delivering reliable, production-ready solutions on time."
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "SelectAI",
      period: "Jun 2025 – Jul 2025",
      description: [
        "Integrated and applied computer vision and multimodal AI frameworks such as YOLOv8, LLaVA, and MiniGPT to build functional modules and scalable prototypes for end-to-end AI systems.",
        "Adapted and extended research models into production-ready components, demonstrating the ability to quickly learn emerging frameworks and apply them to practical R&D use cases.",
        "Independently developed and tested complex modules, showing initiative, ownership, and technical depth while collaborating within an applied research environment."
      ]
    },
    {
      title: "Cybersecurity Intern",
      company: "AIIPLTECH",
      period: "Jun – Aug 2023",
      description: [
        "Conducted security audits, identified vulnerabilities, and implemented encryption, hashing, and steganography techniques to enhance data security.",
        "Explored hardware architecture by disassembling and reassembling PCs, performed troubleshooting, and gained hands-on experience in RAID and disaster recovery strategies.",
        "Co-developed an IT fundamentals course for high school students, introducing core cybersecurity concepts."
      ]
    },
    {
      title: "Teaching Assistant",
      company: "The IITian's Hub",
      period: "Apr 2021 – Apr 2023",
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
