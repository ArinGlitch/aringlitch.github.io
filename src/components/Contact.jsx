import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'fb983ca9-dfbf-40cd-ac8c-acc0bd19d05f', // Replace with your Web3Forms access key
          to_email: 'aaryan.gupta@mail.utoronto.ca',
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: Message from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      // Fallback to mailto if API fails
      const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:aaryan.gupta@mail.utoronto.ca?subject=${subject}&body=${body}`;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
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
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-accent-green/10 border border-accent-green rounded-lg text-accent-green text-center">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-400 text-center">
            Something went wrong. Please try again or email me directly.
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
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
              disabled={isSubmitting}
              className="btn-primary text-lg px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
