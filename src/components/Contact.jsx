import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Get In <span className="text-accent-green">Touch</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Let's discuss opportunities, collaborations, or just have a conversation about technology
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg 
                         focus:border-accent-green focus:ring-1 focus:ring-accent-green 
                         transition-colors duration-300 text-white placeholder-gray-400"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg 
                         focus:border-accent-green focus:ring-1 focus:ring-accent-green 
                         transition-colors duration-300 text-white placeholder-gray-400"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-muted border border-border rounded-lg 
                       focus:border-accent-green focus:ring-1 focus:ring-accent-green 
                       transition-colors duration-300 text-white placeholder-gray-400 resize-none"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="btn-primary text-lg px-8 py-4"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
