'use client';

import { motion } from 'framer-motion';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend Development',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS', 'Material-UI', 'Styled Components', 'Bootstrap', 'KendoUI', 'Storybook']
  },
  {
    name: 'Architecture & Design',
    skills: ['Design Systems', 'Component Libraries', 'UI Consistency', 'State Management', 'Accessibility', 'Responsive Design']
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'Serverless', 'Docker', 'Git', 'GitHub', 'Azure DevOps']
  },
  {
    name: 'Backend & Data',
    skills: ['REST APIs', 'GraphQL', 'WebSockets', 'ASP.NET Core', 'Entity Framework']
  },
  {
    name: 'Product Development',
    skills: ['Agile', 'Scrum', 'Rapid Prototyping', 'A/B Testing', 'Technical Leadership']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-bold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
