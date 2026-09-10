import React, { useState, useEffect } from 'react';

interface ProgressTrackerProps {
  activeSection: string;
}

export const sectionsList = [
  { id: 'hero', number: '01', label: 'INTRO' },
  { id: 'workshop', number: '02', label: 'WORK' },
  { id: 'developer', number: '03', label: 'STACK' },
  { id: 'numbers', number: '04', label: 'PROOF' },
  { id: 'path', number: '05', label: 'STORY' },
  { id: 'lab', number: '06', label: 'LAB' },
  { id: 'journal', number: '07', label: 'WRITING' },
  { id: 'contact', number: '08', label: 'CONTACT' },
];

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({ activeSection }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center pointer-events-auto"
      aria-label="Progress navigation"
    >
      <div className="relative bg-[#faf9f5]/90 backdrop-blur-md p-2.5 rounded-full border border-[#e7e5e4] flex flex-col space-y-3 items-center shadow-md">
        {/* Dynamic Vertical Scroll Progress Fill Line */}
        <div className="absolute left-1/2 top-3 bottom-3 -translate-x-1/2 w-0.5 bg-[#e7e5e4] -z-10 rounded-full overflow-hidden">
          <div
            className="w-full bg-[#c2410c] transition-all duration-150 ease-out rounded-full"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {sectionsList.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="group relative flex items-center justify-center p-1"
              aria-label={`Jump to section ${sec.number} ${sec.label}`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-[#c2410c] scale-125 ring-4 ring-[#c2410c]/20 shadow-sm'
                    : 'bg-[#d6d3d1] group-hover:bg-[#1c1917]'
                }`}
              />

              {/* Tooltip on hover */}
              <span className="absolute right-8 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap bg-[#1c1917] text-[#faf9f5] text-[10px] font-mono px-2 py-0.5 rounded-sm shadow-md border border-[#292524]">
                {sec.number} {sec.label}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
};
