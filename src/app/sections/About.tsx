'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I&apos;m a Staff-level Frontend Engineer with 5+ years experience developing and architecting 
            high-impact, scalable web apps in React, TypeScript, and cloud-native environments. 
            Proven leader in reusable design systems, AI-enhanced workflows, and cross-functional product delivery.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Passionate about building intuitive, user-centric experiences with speed and quality. 
            Comfortable in async, remote-first cultures. I thrive on creating efficient, maintainable 
            solutions that make a real difference in how people work and interact with technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
