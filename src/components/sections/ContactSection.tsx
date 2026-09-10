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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#faf9f5] border-t border-[#e7e5e4] transition-colors">
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
          <span className="text-xs font-mono tracking-widest text-[#c2410c] uppercase font-semibold">
            10 — CONTACT
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#1c1917] tracking-tight">
            GOT A PROBLEM WORTH SOLVING?
          </h2>
          <p className="text-lg sm:text-xl font-sans text-[#57534e] leading-relaxed max-w-2xl">
            I'm interested in problems that require more than just writing code—problems involving team leadership, customer friction, and commercial scale.
          </p>
        </div>

        {/* Action Panel */}
        <div className="bg-[#ffffff] border border-[#e7e5e4] p-8 sm:p-12 rounded-sm space-y-8 shadow-sm">
          {/* Email Copy Card */}
          <div className="p-6 bg-[#f5f2eb] border border-[#e7e5e4] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-[#78716c] uppercase tracking-widest block">
                DIRECT EMAIL ADDRESS
              </span>
              <span className="text-lg sm:text-xl font-mono font-bold text-[#1c1917]">
                {email}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handleCopyEmail}
                className="relative inline-flex items-center space-x-2 px-4 py-2.5 text-xs font-mono font-bold text-[#1c1917] bg-[#ffffff] border border-[#d6d3d1] hover:bg-[#f5f2eb] hover:border-[#c2410c] active:scale-95 transition-all rounded-sm shadow-sm"
              >
                {copied ? <Check className="w-4 h-4 text-[#15803d]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY EMAIL'}</span>
              </button>

              <a
                href={`mailto:${email}`}
                className="inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-mono font-bold text-white bg-[#c2410c] hover:bg-[#9a3412] active:scale-95 transition-all rounded-sm shadow-sm"
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
              className="p-4 bg-[#faf9f5] border border-[#e7e5e4] hover:border-[#c2410c] rounded-sm transition-all group flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-[#0a66c2]" />
                <span className="text-xs font-mono font-bold text-[#1c1917]">LINKEDIN</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#78716c] group-hover:text-[#c2410c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://github.com/Safwanashraf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#faf9f5] border border-[#e7e5e4] hover:border-[#c2410c] rounded-sm transition-all group flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <Github className="w-5 h-5 text-[#1c1917]" />
                <span className="text-xs font-mono font-bold text-[#1c1917]">GITHUB</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#78716c] group-hover:text-[#c2410c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              download
              className="p-4 bg-[#faf9f5] border border-[#e7e5e4] hover:border-[#c2410c] rounded-sm transition-all group flex items-center justify-between shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-[#c2410c]" />
                <span className="text-xs font-mono font-bold text-[#1c1917]">RESUME (PDF)</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#78716c] group-hover:text-[#c2410c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Closing Line */}
          <div className="pt-6 border-t border-[#e7e5e4] flex items-center justify-between text-xs font-mono">
            <span className="text-[#78716c]">SAFWAN ASHRAF</span>
            <span className="text-sm font-serif italic font-bold text-[#1c1917]">
              One step at a time.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
