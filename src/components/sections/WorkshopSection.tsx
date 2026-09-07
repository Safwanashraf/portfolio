import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData, ProjectCaseStudy } from '../../data/projectsData';
import { Drawer } from '../common/Drawer';
import { EditorialPhoto } from '../common/EditorialPhoto';
import { ExternalLink, Github, ArrowRight, AlertTriangle, CheckCircle, Cpu, Layers, Workflow, Wrench } from 'lucide-react';

export const WorkshopSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [activeEvidenceTab, setActiveEvidenceTab] = useState<'BUILD' | 'THINK' | 'PROCESS'>('BUILD');

  return (
    <section id="workshop" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1F0EC] dark:bg-[#16181D] border-t border-b border-[#E5E4DE] dark:border-[#2D3139]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-semibold">
            04 — THE WORKSHOP & EVIDENCE LAYER
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#121316] dark:text-white">
            Engineering Case Studies
          </h2>
          <p className="text-base sm:text-lg font-sans text-[#5A5A5A] dark:text-[#A0A0A0] leading-relaxed">
            Real builds require honest engineering disclosures: what was actually built (<span className="font-mono text-xs text-[#0047FF] dark:text-[#3B82F6]">BUILD</span>), architectural system designs (<span className="font-mono text-xs text-[#10B981]">THINK</span>), and development process artifacts (<span className="font-mono text-xs text-[#F59E0B]">PROCESS</span>).
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#F8F7F4] dark:bg-[#1C1F26] border border-[#D1D1C7] dark:border-[#2D3139] hover:border-[#0047FF] dark:hover:border-[#0047FF] p-6 sm:p-8 rounded-sm flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 bg-[#0047FF]/10 text-[#0047FF] dark:bg-[#0047FF]/20 dark:text-[#3B82F6] font-bold rounded-sm uppercase">
                    {project.status} · {project.year}
                  </span>
                  <div className="flex items-center space-x-2">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-[#5A5A5A] dark:text-[#A0A0A0] hover:text-[#0047FF] dark:hover:text-white transition-colors"
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
                        className="p-1.5 text-[#5A5A5A] dark:text-[#A0A0A0] hover:text-[#0047FF] dark:hover:text-white transition-colors"
                        aria-label="View source code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-[#121316] dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-xs font-mono text-[#0047FF] dark:text-[#3B82F6] mt-1 font-semibold">
                    ROLE: {project.role}
                  </p>
                  <p className="text-xs font-sans text-[#5A5A5A] dark:text-[#A0A0A0] mt-3 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Evidence Thumbnail Preview Strip */}
                <div className="space-y-2 pt-2 border-t border-[#E5E4DE] dark:border-[#2D3139]">
                  <span className="text-[10px] font-mono tracking-widest text-[#5A5A5A] dark:text-[#A0A0A0] uppercase font-semibold flex items-center space-x-1.5">
                    <Layers className="w-3 h-3 text-[#0047FF]" />
                    <span>EVIDENCE PREVIEW (BUILD / THINK / PROCESS)</span>
                  </span>
                  <EditorialPhoto
                    src={project.evidence.buildImage}
                    alt={`${project.name} build screenshot`}
                    label="EVIDENCE // BUILD"
                    aspectRatio="aspect-[16/9]"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#5A5A5A] dark:text-[#A0A0A0] uppercase font-semibold">
                    PROBLEM STATEMENT
                  </span>
                  <p className="text-xs font-sans text-[#3A3A3A] dark:text-[#D4D4D4] italic">
                    "{project.problem}"
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono bg-[#E5E4DE] dark:bg-[#2D3139] text-[#121316] dark:text-[#EAEAEA] rounded-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E5E4DE] dark:border-[#2D3139]">
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveEvidenceTab('BUILD');
                  }}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-mono font-bold text-[#121316] dark:text-white bg-[#E5E4DE] dark:bg-[#252830] hover:bg-[#0047FF] hover:text-white dark:hover:bg-[#0047FF] transition-colors rounded-sm group"
                >
                  <span>READ CASE STUDY & EVIDENCE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
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
            <div className="flex items-center space-x-4 p-3 bg-[#F1F0EC] dark:bg-[#121316] rounded-sm text-xs font-mono">
              {selectedProject.liveLink && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-[#0047FF] dark:text-[#3B82F6] hover:underline"
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
                  className="flex items-center space-x-1.5 text-[#121316] dark:text-white hover:underline"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              )}
            </div>

            {/* THREE EVIDENCE TABS INTERFACE */}
            <div className="space-y-4 p-4 bg-[#F8F7F4] dark:bg-[#1A1C20] border border-[#D1D1C7] dark:border-[#2D3139] rounded-sm">
              <div className="flex items-center justify-between border-b border-[#E5E4DE] dark:border-[#2D3139] pb-3">
                <span className="text-xs font-mono font-bold tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase">
                  EVIDENCE LAYER
                </span>
                <div className="flex space-x-1">
                  <button
                    onClick={() => setActiveEvidenceTab('BUILD')}
                    className={`px-3 py-1 text-xs font-mono rounded-sm transition-colors flex items-center space-x-1 ${
                      activeEvidenceTab === 'BUILD'
                        ? 'bg-[#0047FF] text-white font-bold'
                        : 'bg-[#E5E4DE] dark:bg-[#2D3139] text-[#5A5A5A] dark:text-[#A0A0A0]'
                    }`}
                  >
                    <Layers className="w-3 h-3" />
                    <span>BUILD</span>
                  </button>
                  <button
                    onClick={() => setActiveEvidenceTab('THINK')}
                    className={`px-3 py-1 text-xs font-mono rounded-sm transition-colors flex items-center space-x-1 ${
                      activeEvidenceTab === 'THINK'
                        ? 'bg-[#0047FF] text-white font-bold'
                        : 'bg-[#E5E4DE] dark:bg-[#2D3139] text-[#5A5A5A] dark:text-[#A0A0A0]'
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
                          ? 'bg-[#0047FF] text-white font-bold'
                          : 'bg-[#E5E4DE] dark:bg-[#2D3139] text-[#5A5A5A] dark:text-[#A0A0A0]'
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
              <h4 className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-bold flex items-center space-x-2">
                <Cpu className="w-4 h-4" />
                <span>1. THE PROBLEM</span>
              </h4>
              <p className="text-sm font-sans leading-relaxed text-[#3A3A3A] dark:text-[#D4D4D4]">
                {selectedProject.problem}
              </p>
            </div>

            {/* 2. THE APPROACH */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-bold">
                2. THE APPROACH
              </h4>
              <p className="text-sm font-sans leading-relaxed text-[#3A3A3A] dark:text-[#D4D4D4]">
                {selectedProject.approach}
              </p>
            </div>

            {/* 3. THE BUILD */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-bold">
                3. THE BUILD IMPLEMENTATION
              </h4>
              <ul className="space-y-2">
                {selectedProject.buildDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs font-mono text-[#3A3A3A] dark:text-[#D4D4D4]">
                    <span className="text-[#0047FF] font-bold">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. ENGINEERING DECISIONS */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-bold">
                4. ENGINEERING & ARCHITECTURAL DECISIONS
              </h4>
              <ul className="space-y-2">
                {selectedProject.engineeringDecisions.map((dec, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs font-mono text-[#3A3A3A] dark:text-[#D4D4D4]">
                    <span className="text-[#10B981] font-bold">⚡</span>
                    <span>{dec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. WHAT BROKE */}
            <div className="p-4 bg-[#E63946]/10 border border-[#E63946]/30 rounded-sm space-y-2">
              <h4 className="text-xs font-mono tracking-widest text-[#E63946] uppercase font-bold flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4" />
                <span>5. WHAT BROKE (BOTTLENECKS & DISCLOSURES)</span>
              </h4>
              <ul className="space-y-1.5">
                {selectedProject.whatBroke.map((item, idx) => (
                  <li key={idx} className="text-xs font-mono text-[#E63946] dark:text-[#FF8080]">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 6. WHAT I LEARNED */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-bold">
                6. WHAT I LEARNED
              </h4>
              <ul className="space-y-2">
                {selectedProject.whatILearned.map((lesson, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs font-mono text-[#3A3A3A] dark:text-[#D4D4D4]">
                    <span className="text-[#0047FF] font-bold">✓</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 7. RESULT */}
            <div className="p-4 bg-[#10B981]/10 border border-[#10B981]/30 rounded-sm space-y-2">
              <h4 className="text-xs font-mono tracking-widest text-[#10B981] uppercase font-bold flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span>7. VERIFIED RESULT</span>
              </h4>
              <p className="text-xs font-mono font-bold text-[#10B981] dark:text-[#34D399]">
                {selectedProject.result}
              </p>
            </div>
          </div>
        </Drawer>
      )}
    </section>
  );
};
