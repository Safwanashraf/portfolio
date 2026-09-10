import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Wrench, Sparkles } from 'lucide-react';

export const DeveloperSection: React.FC = () => {
  const techCategories = [
    {
      title: 'FRONTEND',
      icon: <Code className="w-5 h-5 text-[#c2410c]" />,
      skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux Toolkit / State']
    },
    {
      title: 'BACKEND',
      icon: <Server className="w-5 h-5 text-[#b45309]" />,
      skills: ['Node.js', 'Express.js', 'REST API Design', 'WebSockets', 'Authentication (JWT)', 'Middleware']
    },
    {
      title: 'DATABASE',
      icon: <Database className="w-5 h-5 text-[#57534e]" />,
      skills: ['MongoDB', 'Mongoose ODM', 'Aggregation Pipelines', 'Schema Validation', 'TTL Indexing']
    },
    {
      title: 'ENGINEERING & TOOLS',
      icon: <Wrench className="w-5 h-5 text-[#78716c]" />,
      skills: ['Git & GitHub', 'Postman / API Testing', 'Deployment (Vercel/Render)', 'System Debugging', 'Friction Analysis']
    }
  ];

  const currentlyExploring = [
    'Next.js (App Router & SSR)',
    'Advanced TypeScript Architecture',
    'System Design & Scalable Microservices',
    'Docker & Container Orchestration'
  ];

  return (
    <section id="developer" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf9f5] transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Headline */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono tracking-widest text-[#c2410c] uppercase font-semibold">
            03 — THE DEVELOPER
          </span>

          <p className="text-xl sm:text-2xl font-serif italic text-[#57534e]">
            "After all that wandering, I found something I kept coming back to."
          </p>

          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#1c1917] tracking-tight">
            BUILDING THINGS.
          </h2>

          <p className="text-base font-sans text-[#57534e] leading-relaxed">
            I don't use skill percentage bars. Technical competency is demonstrated through evidence, system architectural choices, and delivered software.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#ffffff] border border-[#e7e5e4] hover:border-[#c2410c]/50 p-6 rounded-sm space-y-4 shadow-sm transition-all"
            >
              <div className="flex items-center space-x-3 border-b border-[#e7e5e4] pb-3">
                {cat.icon}
                <h3 className="text-sm font-mono font-bold tracking-wider text-[#1c1917]">
                  {cat.title}
                </h3>
              </div>

              <ul className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <li key={skill} className="flex items-center space-x-2 text-xs font-mono text-[#44403c]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c]" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Currently Exploring / Editable Learning Section */}
        <div className="bg-[#f5f2eb] border border-[#e7e5e4] p-6 sm:p-8 rounded-sm">
          <div className="flex items-center space-x-2 mb-4">
            <Sparkles className="w-4 h-4 text-[#c2410c]" />
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#c2410c] uppercase">
              CURRENTLY EXPLORING & EXPANDING
            </h4>
          </div>

          <div className="flex flex-wrap gap-3">
            {currentlyExploring.map((item) => (
              <span
                key={item}
                className="px-3.5 py-1.5 text-xs font-mono font-semibold bg-[#ffffff] border border-[#e7e5e4] text-[#1c1917] rounded-sm shadow-2xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
