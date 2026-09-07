import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, Check, Copy, ArrowUpRight } from 'lucide-react';
import { EditorialPhoto } from '../common/EditorialPhoto';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "safwan.dev@example.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F1F0EC] dark:bg-[#16181D] border-t border-[#E5E4DE] dark:border-[#2D3139] transition-colors">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Final Personal Artifact Photo Fragment */}
        <div className="max-w-md mx-auto">
          <EditorialPhoto
            src="/images/about/safwan-closing.jpg"
            alt="Safwan Ashraf — Final Archival Moment"
            label="HUMAN ARCHIVE // FINAL ARTIFACT"
            date="2026"
            aspectRatio="aspect-[16/9]"
            caption="One step at a time. Building software with human context."
          />
        </div>

        {/* Section Header */}
        <div className="space-y-4 text-center sm:text-left">
          <span className="text-xs font-mono tracking-widest text-[#0047FF] dark:text-[#3B82F6] uppercase font-semibold">
            10 — CONTACT
          </span>
          <h2 className="text-4xl sm:text-6xl font-display font-extrabold text-[#121316] dark:text-white tracking-tight">
            GOT A PROBLEM WORTH SOLVING?
          </h2>
          <p className="text-lg sm:text-xl font-sans text-[#5A5A5A] dark:text-[#A0A0A0] leading-relaxed max-w-2xl">
            I'm interested in problems that require more than just writing code—problems involving team leadership, customer friction, and commercial scale.
          </p>
        </div>

        {/* Action Panel */}
        <div className="bg-[#F8F7F4] dark:bg-[#1C1F26] border border-[#D1D1C7] dark:border-[#2D3139] p-8 sm:p-12 rounded-sm space-y-8 shadow-sm">
          {/* Email Copy Card */}
          <div className="p-6 bg-[#F1F0EC] dark:bg-[#121316] border border-[#E5E4DE] dark:border-[#2D3139] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-[#5A5A5A] uppercase tracking-widest block">
                DIRECT EMAIL ADDRESS
              </span>
              <span className="text-lg sm:text-xl font-mono font-bold text-[#121316] dark:text-white">
                {email}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center space-x-2 px-4 py-2.5 text-xs font-mono font-bold text-[#121316] dark:text-white bg-[#E5E4DE] dark:bg-[#252830] hover:bg-[#D1D1C7] transition-colors rounded-sm"
              >
                {copied ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'COPIED!' : 'COPY EMAIL'}</span>
              </button>

              <a
                href={`mailto:${email}`}
                className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-mono font-bold text-white bg-[#0047FF] hover:bg-[#0038CC] transition-colors rounded-sm shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>SEND MAIL</span>
              </a>
            </div>
          </div>

          {/* Social Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <a
              href="https://linkedin.com/in/safwan-ashraf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#F1F0EC] dark:bg-[#121316] border border-[#D1D1C7] dark:border-[#2D3139] hover:border-[#0047FF] rounded-sm transition-all group flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                <span className="text-xs font-mono font-bold text-[#121316] dark:text-white">LINKEDIN</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#5A5A5A] group-hover:text-[#0047FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/Safwanashraf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#F1F0EC] dark:bg-[#121316] border border-[#D1D1C7] dark:border-[#2D3139] hover:border-[#0047FF] rounded-sm transition-all group flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <Github className="w-5 h-5 text-[#121316] dark:text-white" />
                <span className="text-xs font-mono font-bold text-[#121316] dark:text-white">GITHUB</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#5A5A5A] group-hover:text-[#0047FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              download
              className="p-4 bg-[#F1F0EC] dark:bg-[#121316] border border-[#D1D1C7] dark:border-[#2D3139] hover:border-[#0047FF] rounded-sm transition-all group flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-[#E63946]" />
                <span className="text-xs font-mono font-bold text-[#121316] dark:text-white">RESUME (PDF)</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#5A5A5A] group-hover:text-[#0047FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Closing Line */}
          <div className="pt-6 border-t border-[#E5E4DE] dark:border-[#2D3139] flex items-center justify-between text-xs font-mono">
            <span className="text-[#5A5A5A]">SAFWAN ASHRAF</span>
            <span className="text-sm font-editorial italic font-bold text-[#121316] dark:text-white">
              One step at a time.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
