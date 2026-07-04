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
      url: 'https://github.com/aringlitch'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/aaryan-gupta7/'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:aaryan.gupta@mail.utoronto.ca'
    }
  ];

  const navigationLinks = [
    { name: 'Home', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { name: 'About', action: () => scrollToSection('about') },
    { name: 'Projects', action: () => scrollToSection('projects') },
    { name: 'Contact', action: () => scrollToSection('contact') }
  ];

  return (
    <footer className="bg-black border-t border-accent-green/20 relative">
      {/* Neon top edge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-accent-green/60"
           style={{ boxShadow: '0 0 12px 1px rgba(0, 255, 136, 0.5)' }} />

      <div className="section-padding py-12">
        <div className="text-center space-y-8">
          <div className="flex flex-wrap justify-center gap-8">
            {navigationLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-accent-green transition-colors duration-300"
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
                  className="text-muted-foreground hover:text-accent-green transition-all duration-300 p-2 hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]"
                  aria-label={social.name}
                >
                  <IconComponent size={24} />
                </a>
              );
            })}
          </div>

          <div className="pt-8 border-t border-accent-green/10">
            <p className="font-mono text-xs text-muted-foreground tracking-wider">
              © 2026 AARYAN GUPTA <span className="text-accent-green">//</span> BUILT WITH PASSION AND PRECISION
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
