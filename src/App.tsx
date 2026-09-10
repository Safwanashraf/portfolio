import React, { useState, useEffect } from 'react';
import { Header } from './components/common/Header';
import { ProgressTracker } from './components/common/ProgressTracker';
import { Footer } from './components/common/Footer';
import { FieldNoteCard } from './components/common/FieldNoteCard';

import { HeroSection } from './components/sections/HeroSection';
import { PathSection } from './components/sections/PathSection';
import { DeveloperSection } from './components/sections/DeveloperSection';
import { WorkshopSection } from './components/sections/WorkshopSection';
import { OtherSideSection } from './components/sections/OtherSideSection';
import { NumbersSection } from './components/sections/NumbersSection';
import { HumanSection } from './components/sections/HumanSection';
import { LabSection } from './components/sections/LabSection';
import { JournalSection } from './components/sections/JournalSection';
import { ContactSection } from './components/sections/ContactSection';
import { JournalArticlePage } from './components/pages/JournalArticlePage';

import { fieldNotesData } from './data/aboutData';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [journalSlug, setJournalSlug] = useState<string | null>(null);

  // Hash-based Router Sync (handles #journal/[slug])
  useEffect(() => {
    const syncRouteFromHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#journal/')) {
        const slug = hash.replace('#journal/', '').trim();
        if (slug) {
          setJournalSlug(slug);
          return;
        }
      }
      setJournalSlug(null);
    };

    syncRouteFromHash();
    window.addEventListener('hashchange', syncRouteFromHash);
    return () => window.removeEventListener('hashchange', syncRouteFromHash);
  }, []);

  // Section Scroll Tracking
  useEffect(() => {
    if (journalSlug) return; // Pause section scroll tracking when on full article page

    const sections = [
      'hero',
      'workshop',
      'developer',
      'numbers',
      'path',
      'lab',
      'journal',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [journalSlug]);

  const handleNavigateHome = () => {
    window.location.hash = '';
    setJournalSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToArticle = (slug: string) => {
    window.location.hash = `#journal/${slug}`;
    setJournalSlug(slug);
  };

  // If viewing a full journal article page
  if (journalSlug) {
    return (
      <JournalArticlePage
        slug={journalSlug}
        onNavigateHome={handleNavigateHome}
        onNavigateToArticle={handleNavigateToArticle}
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-[#faf9f5] text-[#1c1917]">
      {/* Editorial Top Navigation */}
      <Header activeSection={activeSection} />

      {/* Floating Side Progress Indicator */}
      <ProgressTracker activeSection={activeSection} />

      {/* Re-sequenced 8-Chapter Flow: Proof First, Deep Story Following */}
      <main>
        {/* CHAPTER 01 — HERO */}
        <HeroSection />

        {/* FIELD NOTE 01 — Leadership */}
        <div className="max-w-4xl mx-auto my-8 px-4 sm:px-6">
          <FieldNoteCard note={fieldNotesData[0]} />
        </div>

        {/* CHAPTER 02 — WORKSHOP (PROOFS & CASE STUDIES) */}
        <WorkshopSection />

        {/* CHAPTER 03 — DEVELOPER STACK & ARCHITECTURE */}
        <DeveloperSection />

        {/* FIELD NOTE 02 — Sales Friction */}
        <div className="max-w-4xl mx-auto my-8 px-4 sm:px-6">
          <FieldNoteCard note={fieldNotesData[1]} />
        </div>

        {/* CHAPTER 04 — NUMBERS & QUANTITATIVE PROOF */}
        <NumbersSection />

        {/* FIELD NOTE 03 — Startup Pause */}
        <div className="max-w-4xl mx-auto my-8 px-4 sm:px-6">
          <FieldNoteCard note={fieldNotesData[2]} />
        </div>

        {/* CHAPTER 05 — THE NARRATIVE & LIVING ARCHIVE */}
        <PathSection />

        <OtherSideSection />

        {/* FIELD NOTE 04 — Concrete & Construction */}
        <div className="max-w-4xl mx-auto my-8 px-4 sm:px-6">
          <FieldNoteCard note={fieldNotesData[3]} />
        </div>

        <HumanSection />

        {/* CHAPTER 06 — THE LAB */}
        <LabSection />

        {/* FIELD NOTE 05 — MERN Engineering Solutions */}
        <div className="max-w-4xl mx-auto my-8 px-4 sm:px-6">
          <FieldNoteCard note={fieldNotesData[4]} />
        </div>

        {/* CHAPTER 07 — JOURNAL */}
        <JournalSection onOpenFullArticle={handleNavigateToArticle} />

        {/* CHAPTER 08 — CONTACT */}
        <ContactSection />
      </main>

      {/* Closing Footer & Narrative Motif */}
      <Footer />
    </div>
  );
};

export default App;
