import React, { useState } from 'react';
import Reveal from './motion/Reveal';
import SectionHeader from './motion/SectionHeader';

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
    <section id="contact" className="relative bg-black tron-dots">
      <div className="section-padding">
        <SectionHeader
          index="04"
          kicker="Open Channel"
          title="Get In Touch"
          subtitle="Let's discuss opportunities, collaborations, or just have a conversation about technology"
        />

        <div className="max-w-2xl mx-auto">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-accent-green/10 border border-accent-green font-mono text-sm text-accent-green text-center"
                 style={{ boxShadow: '0 0 16px -4px rgba(0, 255, 136, 0.5)' }}>
              [OK] Message transmitted. I'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500 font-mono text-sm text-red-400 text-center">
              [ERR] Transmission failed. Please try again or email me directly.
            </div>
          )}

          <Reveal>
            <form onSubmit={handleSubmit} className="tron-panel p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest text-accent-green/80 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="tron-input"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest text-accent-green/80 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="tron-input"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-accent-green/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="tron-input resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Transmitting...' : 'Send Message'}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
