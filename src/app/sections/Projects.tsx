'use client';

import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: 'AI Design Assistant',
    description: 'Led the development of an AI-powered design assistant that automates common design tasks and provides real-time suggestions.',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'WebGL'],
    image: '/projects/ai-design.png',
    link: 'https://github.com/ahmaddaghrah/ai-design-assistant'
  },
  {
    title: 'E-commerce Performance Optimization',
    description: 'Optimized a high-traffic e-commerce platform, improving load times by 40% and increasing conversion rates.',
    technologies: ['Next.js', 'Redux Toolkit', 'Performance Monitoring', 'AWS'],
    image: '/projects/ecommerce-opt.png',
    link: 'https://github.com/ahmaddaghrah/ecommerce-optimization'
  },
  {
    title: 'Real-time Collaboration Platform',
    description: 'Built a real-time design collaboration tool with features like live cursors, comments, and version control.',
    technologies: ['React', 'WebSocket', 'TypeScript', 'Node.js'],
    image: '/projects/collab-platform.png',
    link: 'https://github.com/ahmaddaghrah/design-collab'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Image Placeholder</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
