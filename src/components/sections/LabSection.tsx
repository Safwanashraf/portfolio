import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  terminalCommands,
  askMeQuestions,
  decisionFrameworkSteps,
  wrongTurnsMatrix,
  QAItem
} from '../../data/labData';
import { EditorialPhoto } from '../common/EditorialPhoto';
import { Terminal as TerminalIcon, HelpCircle, GitBranch, AlertCircle, Send, CornerDownLeft, ChevronDown, Sparkles } from 'lucide-react';

export const LabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'askme' | 'think' | 'wrongturns'>('terminal');

  // Terminal state
  const [inputVal, setInputVal] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string }>>([
    { cmd: 'whoami', output: terminalCommands['whoami'] }
  ]);

  // Ask Me state
  const [selectedQA, setSelectedQA] = useState<QAItem | null>(askMeQuestions[0]);

  // How I Think state
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  // Wrong Turns state (Progressive disclosure accordion - collapsed by default)
  const [expandedWrongTurnId, setExpandedWrongTurnId] = useState<string | null>(null);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = inputVal.trim().toLowerCase();
    if (!cleaned) return;

    if (cleaned === 'clear') {
      setTerminalHistory([]);
      setInputVal('');
      return;
    }

    const response = terminalCommands[cleaned] || `Command not found: '${cleaned}'. Type 'help' for available commands.`;
    setTerminalHistory(prev => [...prev, { cmd: inputVal, output: response }]);
    setInputVal('');
  };

  const toggleWrongTurn = (id: string) => {
    setExpandedWrongTurnId(expandedWrongTurnId === id ? null : id);
  };

  return (
    <section id="lab" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1c1917] text-[#faf9f5] border-t border-b border-[#292524] transition-colors relative overflow-hidden">
      {/* Subtle Dark Breakout Background Decorative Accent */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#c2410c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#292524] pb-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono tracking-widest text-[#c2410c] uppercase font-semibold">
              08 — THE LAB // DARK BREAKOUT
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#faf9f5]">
              Interactive Sandbox & Terminal Breakout
            </h2>
            <p className="text-base font-sans text-[#a8a29e] leading-relaxed">
              70% clarity, 20% personality, 10% experimentation. A focused developer playground to test commands, inspect decision models, and explore engineering principles.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-mono text-[#a8a29e] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>developer | night mode</span>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-sm transition-colors ${
              activeTab === 'terminal'
                ? 'bg-[#c2410c] text-white font-bold border border-[#c2410c] shadow-sm'
                : 'bg-[#262220] text-[#a8a29e] border border-[#292524] hover:text-[#faf9f5] hover:border-[#c2410c]/40'
            }`}
          >
            <TerminalIcon className="w-4 h-4" />
            <span>TERMINAL</span>
          </button>

          <button
            onClick={() => setActiveTab('askme')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-sm transition-colors ${
              activeTab === 'askme'
                ? 'bg-[#c2410c] text-white font-bold border border-[#c2410c] shadow-sm'
                : 'bg-[#262220] text-[#a8a29e] border border-[#292524] hover:text-[#faf9f5] hover:border-[#c2410c]/40'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>ASK ME</span>
          </button>

          <button
            onClick={() => setActiveTab('think')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-sm transition-colors ${
              activeTab === 'think'
                ? 'bg-[#c2410c] text-white font-bold border border-[#c2410c] shadow-sm'
                : 'bg-[#262220] text-[#a8a29e] border border-[#292524] hover:text-[#faf9f5] hover:border-[#c2410c]/40'
            }`}
          >
            <GitBranch className="w-4 h-4" />
            <span>HOW I THINK</span>
          </button>

          <button
            onClick={() => setActiveTab('wrongturns')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-sm transition-colors ${
              activeTab === 'wrongturns'
                ? 'bg-[#c2410c] text-white font-bold border border-[#c2410c] shadow-sm'
                : 'bg-[#262220] text-[#a8a29e] border border-[#292524] hover:text-[#faf9f5] hover:border-[#c2410c]/40'
            }`}
          >
            <AlertCircle className="w-4 h-4" />
            <span>WRONG TURNS</span>
          </button>
        </div>

        {/* TAB CONTENT PANELS WITH ANIMATEPRESENCE */}
        <AnimatePresence mode="wait">
          {activeTab === 'terminal' && (
            <motion.div
              key="terminal-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-[#141210] text-[#faf9f5] font-mono p-6 sm:p-8 rounded-sm shadow-2xl border border-[#292524] space-y-4 max-w-5xl min-h-[400px] flex flex-col justify-between"
            >
              {/* Terminal Window Bar: Muted Terracotta/Amber/Stone Dots */}
              <div className="flex items-center justify-between border-b border-[#292524] pb-3 text-xs text-[#a8a29e]">
                <span className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-[#c2410c]" title="Close" />
                  <span className="w-3 h-3 rounded-full bg-[#b45309]" title="Minimize" />
                  <span className="w-3 h-3 rounded-full bg-[#78716c]" title="Expand" />
                  <span className="ml-2.5 font-bold text-[#faf9f5]">safwan@dev-terminal:~</span>
                </span>
                <span className="text-[#a8a29e] hidden sm:inline">Type 'help' for commands</span>
              </div>

              {/* Terminal Scroll Area */}
              <div className="flex-1 overflow-y-auto space-y-3 text-xs sm:text-sm max-h-[320px] scrollbar-thin">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center space-x-2 text-[#faf9f5]">
                      <span className="text-[#c2410c] font-bold">$</span>
                      <span className="font-semibold">{item.cmd}</span>
                    </div>
                    <pre className="text-[#f5f5f4] whitespace-pre-wrap pl-4 font-mono leading-relaxed opacity-95">
                      {item.output}
                    </pre>
                  </div>
                ))}
              </div>

              {/* Terminal Input Form */}
              <form onSubmit={handleTerminalSubmit} className="pt-3 border-t border-[#292524] flex items-center space-x-2">
                <span className="text-[#c2410c] text-sm font-bold">$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type command (whoami, skills, philosophy, quote, help, clear)..."
                  className="flex-1 bg-transparent text-[#faf9f5] focus:outline-none text-xs sm:text-sm font-mono placeholder:text-[#78716c]"
                />
                <button type="submit" className="text-[#a8a29e] hover:text-[#c2410c] transition-colors p-1" aria-label="Submit command">
                  <CornerDownLeft className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          )}

          {/* TAB 2: ASK ME */}
          {activeTab === 'askme' && (
            <motion.div
              key="askme-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              <div className="lg:col-span-5 space-y-2">
                <span className="text-xs font-mono text-[#a8a29e] uppercase tracking-wider block mb-1">
                  SELECT A QUESTION
                </span>
                <div className="space-y-2">
                  {askMeQuestions.map((q) => (
                    <button
                      key={q.id}
                      onClick={() => setSelectedQA(q)}
                      className={`w-full text-left p-4 rounded-sm border transition-all text-xs font-mono flex items-center justify-between ${
                        selectedQA?.id === q.id
                          ? 'bg-[#c2410c] text-white border-[#c2410c] font-bold shadow-md'
                          : 'bg-[#262220] border-[#292524] text-[#d6d3d1] hover:border-[#c2410c]/60'
                      }`}
                    >
                      <span className="truncate pr-2">{q.question}</span>
                      <span className="text-[10px] opacity-75 shrink-0">{q.category}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#141210] border border-[#292524] p-6 sm:p-8 rounded-sm flex flex-col justify-between">
                {selectedQA && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono tracking-widest text-[#c2410c] uppercase font-bold">
                        ANSWER · CATEGORY: {selectedQA.category}
                      </span>
                      <h3 className="text-xl font-serif font-bold text-[#faf9f5]">
                        "{selectedQA.question}"
                      </h3>
                    </div>

                    <div className="p-4 bg-[#262220] border-l-4 border-[#c2410c] rounded-r-sm">
                      <p className="text-sm font-sans leading-relaxed text-[#f5f5f4]">
                        {selectedQA.answer}
                      </p>
                    </div>

                    {/* Selective Contextual Photograph */}
                    {selectedQA.image && (
                      <div className="pt-2 border-t border-[#292524]">
                        <EditorialPhoto
                          src={selectedQA.image}
                          alt={selectedQA.question}
                          label="AUTHENTIC MEMORY ARTIFACT"
                          caption={selectedQA.imageCaption}
                          aspectRatio="aspect-[16/9]"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* TAB 3: HOW I THINK */}
          {activeTab === 'think' && (
            <motion.div
              key="think-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <p className="text-sm font-sans text-[#a8a29e]">
                Safwan generally tries to understand the problem before deciding who is right or wrong. Click steps below:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                {decisionFrameworkSteps.map((step, idx) => (
                  <button
                    key={step.stepNumber}
                    onClick={() => setActiveStepIdx(idx)}
                    className={`p-3 rounded-sm border text-center transition-all ${
                      activeStepIdx === idx
                        ? 'bg-[#c2410c] text-white border-[#c2410c] shadow-lg font-bold'
                        : 'bg-[#262220] border-[#292524] text-[#a8a29e] hover:border-[#c2410c]/60 hover:text-[#faf9f5]'
                    }`}
                  >
                    <span className="block text-xs font-mono opacity-80">{step.stepNumber}</span>
                    <span className="block text-xs font-mono font-semibold tracking-wider mt-1">
                      {step.title}
                    </span>
                  </button>
                ))}
              </div>

              <div className="bg-[#141210] border border-[#292524] p-6 sm:p-8 rounded-sm space-y-4 max-w-3xl">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-[#c2410c] text-white font-mono text-xs font-bold rounded-sm">
                    STEP {decisionFrameworkSteps[activeStepIdx].stepNumber}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#faf9f5]">
                    {decisionFrameworkSteps[activeStepIdx].title}
                  </h3>
                </div>

                <p className="text-sm font-sans text-[#d6d3d1] leading-relaxed">
                  {decisionFrameworkSteps[activeStepIdx].description}
                </p>

                <div className="p-3 bg-[#262220] border-l-2 border-[#c2410c] text-xs font-mono text-[#f5f5f4]">
                  <span className="text-[#c2410c] font-bold">KEY QUESTION: </span>
                  "{decisionFrameworkSteps[activeStepIdx].keyQuestion}"
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: WRONG TURNS (PROGRESSIVE DISCLOSURE ACCORDION) */}
          {activeTab === 'wrongturns' && (
            <motion.div
              key="wrongturns-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-4 w-full"
            >
              <p className="text-xs font-mono text-[#a8a29e] uppercase tracking-wider mb-2">
                CLICK ANY LESSON BELOW TO EXPAND DISCLOSURE (ONE AT A TIME)
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wrongTurnsMatrix.map((item) => {
                  const isOpen = expandedWrongTurnId === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleWrongTurn(item.id)}
                      className={`bg-[#141210] border rounded-sm transition-all duration-300 cursor-pointer p-6 ${
                        isOpen
                          ? 'border-[#c2410c] shadow-lg'
                          : 'border-[#292524] hover:border-[#c2410c]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono tracking-widest text-[#c2410c] font-bold uppercase">
                            WRONG TURN LESSON
                          </span>
                          <h3 className="text-lg font-serif font-bold text-[#faf9f5]">
                            {item.experience}
                          </h3>
                        </div>

                        <div className="flex items-center space-x-2 text-xs font-mono text-[#a8a29e]">
                          <span className="hidden sm:inline">{isOpen ? 'COLLAPSE' : 'EXPAND LESSON'}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#c2410c]' : ''}`} />
                        </div>
                      </div>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 pt-4 border-t border-[#292524] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                              {/* WHAT HAPPENED */}
                              <div className="p-4 bg-[#3f1917]/60 text-[#fecaca] border-l-2 border-[#c2410c] rounded-r-sm space-y-1">
                                <span className="font-bold block uppercase tracking-wider text-[#f87171]">
                                  WHAT HAPPENED (INITIAL EXPECTATION)
                                </span>
                                <p className="font-sans leading-relaxed text-[#faf9f5] pt-1">
                                  {item.whatIThought}
                                </p>
                              </div>

                              {/* WHAT I LEARNED */}
                              <div className="p-4 bg-[#132e22]/60 text-[#a7f3d0] border-l-2 border-[#10b981] rounded-r-sm space-y-1">
                                <span className="font-bold block uppercase tracking-wider text-[#34d399]">
                                  WHAT I LEARNED (REAL INSIGHT)
                                </span>
                                <p className="font-sans leading-relaxed text-[#faf9f5] pt-1">
                                  {item.whatIActuallyLearned}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
