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

import { fieldNotesData } from './data/aboutData';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = [
      'hero',
      'path',
      'developer',
      'workshop',
      'otherside',
      'numbers',
      'human',
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
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F8F7F4] dark:bg-[#121316] text-[#1A1A1A] dark:text-[#EAEAEA]">
      {/* Editorial Top Navigation */}
      <Header activeSection={activeSection} />

      {/* Floating Side Progress Indicator */}
      <ProgressTracker activeSection={activeSection} />

      {/* 10 Core Sections Flow with Integrated Field Notes */}
      <main>
        <HeroSection />

        <PathSection />

        {/* FIELD NOTE 01 — Leadership */}
        <div className="max-w-4xl mx-auto my-12 px-4 sm:px-6">
          <FieldNoteCard note={fieldNotesData[0]} />
        </div>

        <DeveloperSection />

        {/* FIELD NOTE 02 — Sales Friction */}
        <div className="max-w-4xl mx-auto my-12 px-4 sm:px-6">
          <FieldNoteCard note={fieldNotesData[1]} />
        </div>

        <WorkshopSection />

        {/* FIELD NOTE 03 — Startup Pause */}
        <div className="max-w-4xl mx-auto my-12 px-4 sm:px-6">
          <FieldNoteCard note={fieldNotesData[2]} />
        </div>

        <OtherSideSection />

        <NumbersSection />

        {/* FIELD NOTE 04 — Concrete & Construction */}
        <div className="max-w-4xl mx-auto my-12 px-4 sm:px-6">
          <FieldNoteCard note={fieldNotesData[3]} />
        </div>

        <HumanSection />

        <LabSection />

        <JournalSection />

        {/* FIELD NOTE 05 — MERN Engineering Solutions */}
        <div className="max-w-4xl mx-auto my-12 px-4 sm:px-6">
          <FieldNoteCard note={fieldNotesData[4]} />
        </div>

        <ContactSection />
      </main>

      {/* Closing Footer & Narrative Motif */}
      <Footer />
    </div>
  );
};

export default App;
