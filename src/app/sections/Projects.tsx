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
    title: 'AI-Native Data Extractor',
    description: 'Built an intelligent data extraction UI that reduced analyst processing time by 700%. Integrated Azure AI services for adaptive workflows.',
    technologies: ['React', 'TypeScript', 'Azure AI', 'Material-UI'],
    image: '/projects/ai-extractor.png'
  },
  {
    title: 'React UI Kit & Design System',
    description: 'Architected a company-wide component library with Figma design tokens. Reduced delivery time by 40% and ensured brand consistency.',
    technologies: ['React', 'TypeScript', 'Storybook', 'Figma'],
    image: '/projects/design-system.png'
  },
  {
    title: 'CEPRES FundScreener',
    description: 'Developed a responsive financial reporting tool that improved mobile engagement by 70% and enabled instant report generation.',
    technologies: ['React', 'Material-UI', 'Redux', 'REST APIs'],
    image: '/projects/fund-screener.png'
  },
  {
    title: 'Multi-Tenant Admin Panel',
    description: 'Implemented a secure, self-service admin panel with fine-grained permissions that reduced client support dependency by 90%.',
    technologies: ['React', 'TypeScript', '.NET', 'Azure AD'],
    image: '/projects/admin-panel.png'
  },
  {
    title: 'Secure AWS File Exchange',
    description: 'Designed an S3-based file exchange platform with signed URLs and IAM policies, cutting manual operations by 80%.',
    technologies: ['React', 'AWS S3', 'IAM', 'Security'],
    image: '/projects/file-exchange.png'
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
