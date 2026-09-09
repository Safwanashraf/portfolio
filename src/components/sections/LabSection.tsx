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
    <section id="lab" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1F0EC] dark:bg-[#16181D] border-t border-b border-[#E5E4DE] dark:border-[#2D3139] transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-semibold">
            08 — THE LAB
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#121316] dark:text-white">
            Interactive Experiments
          </h2>
          <p className="text-base font-sans text-[#5A5A5A] dark:text-[#A0A0A0] leading-relaxed">
            70% clarity, 20% personality, 10% experimentation. Explore interactive modules that communicate how I think, solve problems, and learn.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[#E5E4DE] dark:border-[#2D3139] pb-4 font-mono text-xs">
          <button
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-sm transition-colors ${
              activeTab === 'terminal'
                ? 'bg-[#121316] text-white dark:bg-white dark:text-[#121316] font-bold'
                : 'bg-[#F8F7F4] dark:bg-[#1C1F26] text-[#5A5A5A] hover:text-[#121316] dark:hover:text-white'
            }`}
          >
            <TerminalIcon className="w-4 h-4" />
            <span>TERMINAL</span>
          </button>

          <button
            onClick={() => setActiveTab('askme')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-sm transition-colors ${
              activeTab === 'askme'
                ? 'bg-[#121316] text-white dark:bg-white dark:text-[#121316] font-bold'
                : 'bg-[#F8F7F4] dark:bg-[#1C1F26] text-[#5A5A5A] hover:text-[#121316] dark:hover:text-white'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>ASK ME</span>
          </button>

          <button
            onClick={() => setActiveTab('think')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-sm transition-colors ${
              activeTab === 'think'
                ? 'bg-[#121316] text-white dark:bg-white dark:text-[#121316] font-bold'
                : 'bg-[#F8F7F4] dark:bg-[#1C1F26] text-[#5A5A5A] hover:text-[#121316] dark:hover:text-white'
            }`}
          >
            <GitBranch className="w-4 h-4" />
            <span>HOW I THINK</span>
          </button>

          <button
            onClick={() => setActiveTab('wrongturns')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-sm transition-colors ${
              activeTab === 'wrongturns'
                ? 'bg-[#121316] text-white dark:bg-white dark:text-[#121316] font-bold'
                : 'bg-[#F8F7F4] dark:bg-[#1C1F26] text-[#5A5A5A] hover:text-[#121316] dark:hover:text-white'
            }`}
          >
            <AlertCircle className="w-4 h-4" />
            <span>WRONG TURNS</span>
          </button>
        </div>

        {/* TAB 1: TERMINAL */}
        {activeTab === 'terminal' && (
          <div className="bg-[#121316] text-[#00FF66] font-mono p-6 rounded-sm shadow-2xl border border-[#2D3139] space-y-4 max-w-4xl min-h-[380px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-[#2D3139] pb-3 text-xs text-[#A0A0A0]">
              <span className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 font-bold text-white">safwan@dev-terminal:~</span>
              </span>
              <span>Type 'help' for commands</span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 text-xs sm:text-sm max-h-[300px] scrollbar-thin">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center space-x-2 text-white">
                    <span className="text-[#0047FF]">$</span>
                    <span>{item.cmd}</span>
                  </div>
                  <pre className="text-[#A0E9FF] whitespace-pre-wrap pl-4 font-mono leading-relaxed">
                    {item.output}
                  </pre>
                </div>
              ))}
            </div>

            <form onSubmit={handleTerminalSubmit} className="pt-3 border-t border-[#2D3139] flex items-center space-x-2">
              <span className="text-[#0047FF] text-sm font-bold">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type command (whoami, skills, philosophy, quote, help, clear)..."
                className="flex-1 bg-transparent text-white focus:outline-none text-xs sm:text-sm font-mono placeholder:text-[#5A5A5A]"
              />
              <button type="submit" className="text-white hover:text-[#0047FF] transition-colors">
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        {/* TAB 2: ASK ME */}
        {activeTab === 'askme' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-mono text-[#5A5A5A] dark:text-[#A0A0A0] uppercase tracking-wider">
                SELECT A QUESTION
              </span>
              <div className="space-y-2">
                {askMeQuestions.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => setSelectedQA(q)}
                    className={`w-full text-left p-4 rounded-sm border transition-all text-xs font-mono flex items-center justify-between ${
                      selectedQA?.id === q.id
                        ? 'bg-[#0047FF] text-white border-[#0047FF] font-bold shadow-md'
                        : 'bg-[#F8F7F4] dark:bg-[#1C1F26] border-[#D1D1C7] dark:border-[#2D3139] text-[#121316] dark:text-[#EAEAEA] hover:border-[#0047FF]'
                    }`}
                  >
                    <span className="truncate pr-2">{q.question}</span>
                    <span className="text-[10px] opacity-75 shrink-0">{q.category}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F8F7F4] dark:bg-[#1C1F26] border border-[#D1D1C7] dark:border-[#2D3139] p-6 sm:p-8 rounded-sm flex flex-col justify-between">
              {selectedQA && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#0047FF] uppercase font-bold">
                      ANSWER · CATEGORY: {selectedQA.category}
                    </span>
                    <h3 className="text-xl font-display font-bold text-[#121316] dark:text-white">
                      "{selectedQA.question}"
                    </h3>
                  </div>

                  <div className="p-4 bg-[#F1F0EC] dark:bg-[#121316] border-l-4 border-[#0047FF] rounded-r-sm">
                    <p className="text-sm font-sans leading-relaxed text-[#3A3A3A] dark:text-[#D4D4D4]">
                      {selectedQA.answer}
                    </p>
                  </div>

                  {/* Selective Contextual Photograph (Rendered ONLY when genuine image exists) */}
                  {selectedQA.image && (
                    <div className="pt-2 border-t border-[#E5E4DE] dark:border-[#2D3139]">
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
          </div>
        )}

        {/* TAB 3: HOW I THINK */}
        {activeTab === 'think' && (
          <div className="space-y-8">
            <p className="text-sm font-sans text-[#5A5A5A] dark:text-[#A0A0A0]">
              Safwan generally tries to understand the problem before deciding who is right or wrong. Click steps below:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {decisionFrameworkSteps.map((step, idx) => (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStepIdx(idx)}
                  className={`p-3 rounded-sm border text-center transition-all ${
                    activeStepIdx === idx
                      ? 'bg-[#0047FF] text-white border-[#0047FF] shadow-lg font-bold'
                      : 'bg-[#F8F7F4] dark:bg-[#1C1F26] border-[#D1D1C7] dark:border-[#2D3139] text-[#121316] dark:text-[#EAEAEA] hover:border-[#0047FF]'
                  }`}
                >
                  <span className="block text-xs font-mono opacity-80">{step.stepNumber}</span>
                  <span className="block text-xs font-mono font-semibold tracking-wider mt-1">
                    {step.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="bg-[#F8F7F4] dark:bg-[#1C1F26] border border-[#D1D1C7] dark:border-[#2D3139] p-6 sm:p-8 rounded-sm space-y-4 max-w-3xl">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-[#0047FF] text-white font-mono text-xs font-bold rounded-sm">
                  STEP {decisionFrameworkSteps[activeStepIdx].stepNumber}
                </span>
                <h3 className="text-xl font-display font-bold text-[#121316] dark:text-white">
                  {decisionFrameworkSteps[activeStepIdx].title}
                </h3>
              </div>

              <p className="text-sm font-sans text-[#3A3A3A] dark:text-[#D4D4D4] leading-relaxed">
                {decisionFrameworkSteps[activeStepIdx].description}
              </p>

              <div className="p-3 bg-[#F1F0EC] dark:bg-[#121316] border-l-2 border-[#0047FF] text-xs font-mono text-[#0047FF] dark:text-[#3B82F6]">
                KEY QUESTION: "{decisionFrameworkSteps[activeStepIdx].keyQuestion}"
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: WRONG TURNS (PROGRESSIVE DISCLOSURE ACCORDION) */}
        {activeTab === 'wrongturns' && (
          <div className="space-y-4 w-full">
            <p className="text-xs font-mono text-[#5A5A5A] dark:text-[#A0A0A0] uppercase tracking-wider mb-2">
              CLICK ANY LESSON BELOW TO EXPAND DISCLOSURE (ONE AT A TIME)
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {wrongTurnsMatrix.map((item) => {
                const isOpen = expandedWrongTurnId === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleWrongTurn(item.id)}
                    className={`bg-[#F8F7F4] dark:bg-[#1C1F26] border rounded-sm transition-all duration-300 cursor-pointer p-6 ${
                      isOpen
                        ? 'border-[#0047FF] shadow-md'
                        : 'border-[#D1D1C7] dark:border-[#2D3139] hover:border-[#0047FF]/60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] font-bold uppercase">
                          WRONG TURN LESSON
                        </span>
                        <h3 className="text-lg font-display font-bold text-[#121316] dark:text-white">
                          {item.experience}
                        </h3>
                      </div>

                      <div className="flex items-center space-x-2 text-xs font-mono text-[#5A5A5A]">
                        <span className="hidden sm:inline">{isOpen ? 'COLLAPSE' : 'EXPAND LESSON'}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0047FF]' : ''}`} />
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
                          <div className="mt-6 pt-4 border-t border-[#E5E4DE] dark:border-[#2D3139] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                            {/* WHAT HAPPENED */}
                            <div className="p-4 bg-[#E63946]/10 text-[#E63946] dark:text-[#FF8080] border-l-2 border-[#E63946] rounded-r-sm space-y-1">
                              <span className="font-bold block uppercase tracking-wider">
                                WHAT HAPPENED (INITIAL EXPECTATION)
                              </span>
                              <p className="font-sans leading-relaxed text-[#121316] dark:text-white pt-1">
                                {item.whatIThought}
                              </p>
                            </div>

                            {/* WHAT I LEARNED */}
                            <div className="p-4 bg-[#10B981]/10 text-[#10B981] dark:text-[#34D399] border-l-2 border-[#10B981] rounded-r-sm space-y-1">
                              <span className="font-bold block uppercase tracking-wider">
                                WHAT I LEARNED (REAL INSIGHT)
                              </span>
                              <p className="font-sans leading-relaxed text-[#121316] dark:text-white pt-1">
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
          </div>
        )}
      </div>
    </section>
  );
};
