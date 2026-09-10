import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData, ProjectCaseStudy } from '../../data/projectsData';
import { Drawer } from '../common/Drawer';
import { EditorialPhoto } from '../common/EditorialPhoto';
import { ExternalLink, Github, ArrowRight, AlertTriangle, CheckCircle, Cpu, Layers, Workflow, Wrench } from 'lucide-react';

export const WorkshopSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [activeEvidenceTab, setActiveEvidenceTab] = useState<'BUILD' | 'THINK' | 'PROCESS'>('BUILD');

  // Interactive Mouse Spotlight handler for cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  // Explicit connection between Safwan's background and project engineering principles
  const getBackgroundPrinciple = (projectId: string) => {
    switch (projectId) {
      case 'lumina-dashboard':
        return {
          source: '1,500 Customer Conversations',
          principle: 'Silent friction in user workflows kills adoption. Analytics must highlight drop-off immediately.',
        };
      case 'pulse-engine':
        return {
          source: 'Concrete Construction & Site Supervision',
          principle: 'Fault tolerance & solid structural integrity before applying visual polish.',
        };
      case 'frictionless-checkout':
        return {
          source: 'Brototype Sales Closing & Customer Psychology',
          principle: 'E-commerce friction at checkout directly loses revenue; reduce decision boundaries.',
        };
      default:
        return null;
    }
  };

  return (
    <section id="workshop" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf9f5] border-t border-b border-[#e7e5e4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#c2410c] uppercase font-semibold">
            02 — THE WORKSHOP & EVIDENCE LAYER
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1c1917]">
            Engineering Case Studies
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#57534e] leading-relaxed">
            Real builds require honest engineering disclosures: what was actually built (<span className="font-mono text-xs text-[#c2410c]">BUILD</span>), architectural system designs (<span className="font-mono text-xs text-[#b45309]">THINK</span>), and development process artifacts (<span className="font-mono text-xs text-[#78716c]">PROCESS</span>).
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => {
            const principle = getBackgroundPrinciple(project.id);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseMove={handleMouseMove}
                onClick={() => {
                  setSelectedProject(project);
                  setActiveEvidenceTab('BUILD');
                }}
                className="group relative bg-[#ffffff] border border-[#e7e5e4] hover:border-[#c2410c]/60 p-6 sm:p-8 rounded-sm flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer overflow-hidden"
              >
                {/* Subtle Radial Spotlight Glow Overlay */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm"
                  style={{
                    background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(194, 65, 12, 0.05), transparent 80%)`,
                  }}
                />

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 bg-[#ffedd5] text-[#c2410c] border border-[#fed7aa] font-bold rounded-sm uppercase">
                        {project.status}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest px-2 py-1 bg-[#f5f2eb] text-[#78716c] border border-[#e7e5e4] font-medium rounded-sm">
                        {project.year}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-[#78716c] hover:text-[#c2410c] transition-colors"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.sourceLink && (
                        <a
                          href={project.sourceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-[#78716c] hover:text-[#c2410c] transition-colors"
                          aria-label="View source code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#1c1917] group-hover:text-[#c2410c] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs font-mono text-[#b45309] mt-1 font-semibold">
                      ROLE: {project.role}
                    </p>
                    <p className="text-xs font-sans text-[#57534e] mt-2.5 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* NARRATIVE LINKAGE BADGE: Background -> Engineering Principle */}
                  {principle && (
                    <div className="p-3 bg-[#f5f2eb] border-l-2 border-[#c2410c] rounded-r-sm space-y-1">
                      <span className="text-[9px] font-mono text-[#c2410c] font-bold uppercase tracking-widest block">
                        BACKGROUND LESSON → ARCHITECTURE
                      </span>
                      <p className="text-[11px] font-sans text-[#44403c] italic leading-tight">
                        "{principle.principle}"
                      </p>
                    </div>
                  )}

                  {/* Evidence Thumbnail Preview Strip */}
                  <div className="space-y-2 pt-2 border-t border-[#e7e5e4]">
                    <span className="text-[10px] font-mono tracking-widest text-[#78716c] uppercase font-semibold flex items-center space-x-1.5">
                      <Layers className="w-3 h-3 text-[#c2410c]" />
                      <span>EVIDENCE PREVIEW (BUILD / THINK / PROCESS)</span>
                    </span>
                    <EditorialPhoto
                      src={project.evidence.buildImage}
                      alt={`${project.name} build screenshot`}
                      label="EVIDENCE // BUILD"
                      aspectRatio="aspect-[16/9]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono tracking-widest text-[#78716c] uppercase font-semibold">
                      PROBLEM STATEMENT
                    </span>
                    <p className="text-xs font-sans text-[#44403c] italic">
                      "{project.problem}"
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono bg-[#f5f2eb] text-[#1c1917] border border-[#e7e5e4] rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e7e5e4] flex items-center justify-between relative z-10">
                  <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#78716c]">
                    <Github className="w-3.5 h-3.5 text-[#1c1917]" />
                    <span>MERN Stack</span>
                  </span>

                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setActiveEvidenceTab('BUILD');
                    }}
                    className="inline-flex items-center space-x-1 text-xs font-mono font-bold text-[#c2410c] group-hover:text-[#9a3412] transition-colors"
                  >
                    <span>DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Slide-Over Drawer */}
      {selectedProject && (
        <Drawer
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.name}
          subtitle={`${selectedProject.role} · ${selectedProject.year}`}
        >
          <div className="space-y-8">
            {/* Links Bar */}
            <div className="flex items-center space-x-4 p-3 bg-[#f5f2eb] rounded-sm text-xs font-mono border border-[#e7e5e4]">
              {selectedProject.liveLink && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-[#c2410c] hover:underline font-semibold"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Repository / Demo</span>
                </a>
              )}
              {selectedProject.sourceLink && (
                <a
                  href={selectedProject.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-[#1c1917] hover:underline font-semibold"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              )}
            </div>

            {/* THREE EVIDENCE TABS INTERFACE */}
            <div className="space-y-4 p-4 bg-[#ffffff] border border-[#e7e5e4] rounded-sm">
              <div className="flex items-center justify-between border-b border-[#e7e5e4] pb-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#c2410c] uppercase">
                  EVIDENCE LAYER
                </span>
                <div className="flex space-x-1.5">
                  <button
                    onClick={() => setActiveEvidenceTab('BUILD')}
                    className={`px-3 py-1 text-xs font-mono rounded-sm transition-colors flex items-center space-x-1 ${
                      activeEvidenceTab === 'BUILD'
                        ? 'bg-[#c2410c] text-white font-bold shadow-sm'
                        : 'bg-[#f5f2eb] text-[#78716c] hover:text-[#1c1917]'
                    }`}
                  >
                    <Layers className="w-3 h-3" />
                    <span>BUILD</span>
                  </button>
                  <button
                    onClick={() => setActiveEvidenceTab('THINK')}
                    className={`px-3 py-1 text-xs font-mono rounded-sm transition-colors flex items-center space-x-1 ${
                      activeEvidenceTab === 'THINK'
                        ? 'bg-[#c2410c] text-white font-bold shadow-sm'
                        : 'bg-[#f5f2eb] text-[#78716c] hover:text-[#1c1917]'
                    }`}
                  >
                    <Workflow className="w-3 h-3" />
                    <span>THINK</span>
                  </button>
                  {selectedProject.evidence.processImage && (
                    <button
                      onClick={() => setActiveEvidenceTab('PROCESS')}
                      className={`px-3 py-1 text-xs font-mono rounded-sm transition-colors flex items-center space-x-1 ${
                        activeEvidenceTab === 'PROCESS'
                          ? 'bg-[#c2410c] text-white font-bold shadow-sm'
                          : 'bg-[#f5f2eb] text-[#78716c] hover:text-[#1c1917]'
                      }`}
                    >
                      <Wrench className="w-3 h-3" />
                      <span>PROCESS</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Tab Display */}
              {activeEvidenceTab === 'BUILD' && (
                <EditorialPhoto
                  src={selectedProject.evidence.buildImage}
                  alt={`${selectedProject.name} build evidence`}
                  label="EVIDENCE // BUILD (PRODUCT SCREENSHOT)"
                  caption={selectedProject.evidence.buildCaption}
                  aspectRatio="aspect-[16/9]"
                />
              )}

              {activeEvidenceTab === 'THINK' && (
                <EditorialPhoto
                  src={selectedProject.evidence.thinkImage}
                  alt={`${selectedProject.name} think evidence`}
                  label="EVIDENCE // THINK (ARCHITECTURE & DESIGN)"
                  caption={selectedProject.evidence.thinkCaption}
                  aspectRatio="aspect-[16/9]"
                />
              )}

              {activeEvidenceTab === 'PROCESS' && selectedProject.evidence.processImage && (
                <EditorialPhoto
                  src={selectedProject.evidence.processImage}
                  alt={`${selectedProject.name} process evidence`}
                  label="EVIDENCE // PROCESS (DEVELOPMENT ARTIFACT)"
                  caption={selectedProject.evidence.processCaption}
                  aspectRatio="aspect-[16/9]"
                />
              )}
            </div>

            {/* 1. THE PROBLEM */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono tracking-widest text-[#c2410c] uppercase font-bold flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-[#c2410c]" />
                <span>1. THE PROBLEM</span>
              </h4>
              <p className="text-sm font-sans leading-relaxed text-[#44403c]">
                {selectedProject.problem}
              </p>
            </div>

            {/* 2. THE APPROACH */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono tracking-widest text-[#c2410c] uppercase font-bold">
                2. THE APPROACH
              </h4>
              <p className="text-sm font-sans leading-relaxed text-[#44403c]">
                {selectedProject.approach}
              </p>
            </div>

            {/* 3. THE BUILD */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono tracking-widest text-[#c2410c] uppercase font-bold">
                3. THE BUILD IMPLEMENTATION
              </h4>
              <ul className="space-y-2">
                {selectedProject.buildDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs font-mono text-[#44403c]">
                    <span className="text-[#c2410c] font-bold">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. ENGINEERING DECISIONS */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono tracking-widest text-[#b45309] uppercase font-bold">
                4. ENGINEERING & ARCHITECTURAL DECISIONS
              </h4>
              <ul className="space-y-2">
                {selectedProject.engineeringDecisions.map((dec, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs font-mono text-[#44403c]">
                    <span className="text-[#b45309] font-bold">⚡</span>
                    <span>{dec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. WHAT BROKE */}
            <div className="p-4 bg-[#fee2e2]/60 border border-[#fca5a5]/40 rounded-sm space-y-2">
              <h4 className="text-xs font-mono tracking-widest text-[#991b1b] uppercase font-bold flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4" />
                <span>5. WHAT BROKE (BOTTLENECKS & DISCLOSURES)</span>
              </h4>
              <ul className="space-y-1.5">
                {selectedProject.whatBroke.map((item, idx) => (
                  <li key={idx} className="text-xs font-mono text-[#991b1b]">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. WHAT I LEARNED */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono tracking-widest text-[#c2410c] uppercase font-bold">
                6. WHAT I LEARNED
              </h4>
              <ul className="space-y-2">
                {selectedProject.whatILearned.map((lesson, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs font-mono text-[#44403c]">
                    <span className="text-[#c2410c] font-bold">✓</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 7. RESULT */}
            <div className="p-4 bg-[#ecfdf5] border border-[#a7f3d0] rounded-sm space-y-2">
              <h4 className="text-xs font-mono tracking-widest text-[#065f46] uppercase font-bold flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>7. VERIFIED RESULT</span>
              </h4>
              <p className="text-xs font-mono font-bold text-[#065f46]">
                {selectedProject.result}
              </p>
            </div>
          </div>
        </Drawer>
      )}
    </section>
  );
};
