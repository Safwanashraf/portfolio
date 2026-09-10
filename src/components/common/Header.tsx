import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const navLinks = [
    { label: 'WORK', href: '#workshop' },
    { label: 'STACK', href: '#developer' },
    { label: 'PROOF', href: '#numbers' },
    { label: 'STORY', href: '#path' },
    { label: 'LAB', href: '#lab' },
    { label: 'WRITING', href: '#journal' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf9f5]/92 backdrop-blur-md border-b border-[#e7e5e4] py-3 shadow-[0_1px_3px_rgba(28,25,23,0.04)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#hero"
          className="group flex items-center space-x-2.5 focus:outline-none focus:ring-2 focus:ring-[#c2410c] rounded-sm"
        >
          <span className="font-serif font-bold text-xl tracking-tight text-[#1c1917] group-hover:text-[#c2410c] transition-colors">
            Safwan Ashraf
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#c2410c]" />
          <span className="hidden sm:inline-block text-[10px] font-mono text-[#78716c] uppercase tracking-widest border-l border-[#e7e5e4] pl-2.5 ml-1">
            MERN / SWE
          </span>
        </a>

        {/* Desktop Navigation Links with Animated Active Highlight */}
        <nav className="hidden md:flex items-center space-x-1 text-xs font-mono tracking-widest text-[#78716c]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3 py-1.5 transition-colors ${
                  isActive
                    ? 'text-[#c2410c] font-bold'
                    : 'hover:text-[#1c1917]'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-[#c2410c]/10 rounded-sm border border-[#c2410c]/20 -z-10" />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-[#78716c] hover:text-[#1c1917] hover:bg-[#f5f2eb] transition-colors focus:outline-none focus:ring-2 focus:ring-[#c2410c]"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-[#78716c]" />}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-mono font-semibold tracking-wider text-white bg-[#1c1917] hover:bg-[#c2410c] active:scale-95 transition-all duration-200 shadow-sm rounded-sm"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#e7e5e4]" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1c1917] focus:outline-none focus:ring-2 focus:ring-[#c2410c]"
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf9f5] border-b border-[#e7e5e4] px-6 py-6 space-y-4 font-mono text-sm tracking-wider shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#1c1917] hover:text-[#c2410c] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center space-x-2 px-5 py-2.5 w-full justify-center text-xs font-mono font-bold text-white bg-[#c2410c] hover:bg-[#9a3412] transition-colors rounded-sm mt-2 shadow-sm"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
