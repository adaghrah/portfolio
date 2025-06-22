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
    title: 'Senior Software Engineer',
    company: 'CEPRES',
    period: '2019 - Present',
    description: [
      'Partnered with product, design, and data teams to deliver AI-powered, scalable financial tools',
      'Championed component reuse, reducing frontend delivery cycles',
      'Unified legacy systems through modern UI architecture',
      'Introduced automation in secure document transfer using AWS',
      'Built and maintained multiple high-impact React applications'
    ]
  },
  {
    title: 'Software Developer Intern',
    company: 'IConnect',
    period: 'Jun 2018 - Aug 2018',
    description: [
      'Built internal business applications with ASP.NET and Angular',
      'Gained end-to-end delivery experience in full-stack development',
      'Worked directly with business stakeholders to implement requirements',
      'Contributed to improving internal development processes'
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
