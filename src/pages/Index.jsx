import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';

const Index = () => {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <ChatBot />
    </main>
  );
};

export default Index;
