import React from 'react';
import { motion } from 'framer-motion';

// Standard section heading: "// 01. LABEL" kicker + Orbitron title + neon rule.
const SectionHeader = ({ index, kicker, title, subtitle }) => (
  <div className="text-center mb-16">
    <motion.p
      className="section-kicker mb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {'// '}{index}. {kicker}
    </motion.p>
    <motion.h2
      className="section-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {title}
    </motion.h2>
    <motion.div
      className="section-rule"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
    />
    {subtitle && (
      <motion.p
        className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionHeader;
