import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/ArinGlitch',
      color: 'hover:text-accent-green'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/aaryan-gupta7/',
      color: 'hover:text-accent-cyan'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:aaryan.gupta@mail.utoronto.ca',
      color: 'hover:text-accent-green'
    }
  ];

  const navigationLinks = [
    { name: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'About', action: () => scrollToSection('about') },
    { name: 'Projects', action: () => scrollToSection('projects') },
    { name: 'Contact', action: () => scrollToSection('contact') }
  ];

  return (
    <footer className="bg-black border-t border-border">
      <div className="section-padding py-12">
        <div className="text-center space-y-8">
          <div className="flex flex-wrap justify-center gap-8">
            {navigationLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className="text-muted-foreground hover:text-accent-cyan transition-colors duration-300 font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground ${social.color} transition-colors duration-300 p-2`}
                  aria-label={social.name}
                >
                  <IconComponent size={24} />
                </a>
              );
            })}
          </div>
          
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © 2024 Aaryan Gupta. Built with passion and precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
