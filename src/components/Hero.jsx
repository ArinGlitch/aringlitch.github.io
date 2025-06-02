
import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // Placeholder for CV download - in real implementation, this would link to actual PDF
    console.log('Download CV clicked');
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center max-w-4xl animate-fade-in">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent-green/20 to-accent-cyan/20 border border-accent-green/30 flex items-center justify-center">
          <div className="w-28 h-28 rounded-full bg-muted flex items-center justify-center text-2xl font-semibold text-accent-green">
            AG
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="text-accent-green">Aaryan Gupta</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          Aspiring Software Developer | Computer Science Student | Future Tech Leader
        </p>
        
        <div className="max-w-3xl mx-auto mb-12 text-lg leading-relaxed text-gray-300">
          <p>
            I'm a builder at heart—equally drawn to the elegance of a well-structured algorithm and the strategy behind a bold business idea. 
            Now in my second year studying Computer Science at the University of Toronto, I've been deepening my expertise in systems programming, 
            data structures, and algorithmic thinking, while also developing a sharp understanding of business strategy, marketing, and entrepreneurship.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleDownloadCV}
            className="btn-primary"
          >
            Download CV
          </button>
          <button 
            onClick={scrollToContact}
            className="btn-secondary"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
