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
            I'm a Staff Frontend Engineer with a passion for building exceptional web experiences. 
            Specializing in React, TypeScript, and AI-powered interfaces, I bring expertise in 
            creating scalable, performant, and user-centric applications.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            With a deep understanding of modern web technologies and best practices, 
            I focus on delivering clean, maintainable code and intuitive user experiences. 
            I thrive in collaborative environments and enjoy mentoring other developers 
            while tackling complex technical challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
