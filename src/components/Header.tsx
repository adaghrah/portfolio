'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold">
              Ahmad Daghrah
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex space-x-8"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        </div>
      </nav>
    </header>
  );
}
