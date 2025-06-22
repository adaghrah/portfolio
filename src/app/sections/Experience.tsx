'use client';

import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Staff Frontend Engineer',
    company: 'Superside',
    period: '2025 - Present',
    description: [
      'Leading frontend architecture and implementation for AI-powered design platforms',
      'Architecting and developing scalable React applications with TypeScript',
      'Implementing real-time collaboration features and design systems',
      'Mentoring team members and establishing frontend best practices'
    ]
  },
  {
    title: 'Senior Software Engineer',
    company: 'Amazon',
    period: '2023 - 2025',
    description: [
      'Led development of high-traffic e-commerce applications using React and Node.js',
      'Optimized web performance resulting in 40% improvement in page load times',
      'Implemented CI/CD pipelines and automated testing strategies',
      'Mentored junior developers and conducted technical interviews'
    ]
  },
  {
    title: 'Frontend Engineer',
    company: 'Microsoft',
    period: '2021 - 2023',
    description: [
      'Developed features for Microsoft Teams using React and TypeScript',
      'Implemented responsive and accessible user interfaces',
      'Collaborated with UX designers to create intuitive user experiences',
      'Contributed to internal design system and component library'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-1">
                    {experience.company}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 md:text-right">
                  {experience.period}
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="pl-2">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
