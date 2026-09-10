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
          ? 'bg-[#F8F7F4]/90 dark:bg-[#121316]/90 backdrop-blur-md border-b border-[#E5E4DE] dark:border-[#2D3139] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity */}
        <a
          href="#hero"
          className="group flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-[#0047FF] rounded-sm"
        >
          <span className="font-display font-bold text-xl tracking-tight text-[#121316] dark:text-white group-hover:text-[#0047FF] transition-colors">
            SAFWAN
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0047FF]" />
          <span className="hidden sm:inline-block text-[10px] font-mono text-[#5A5A5A] dark:text-[#A0A0A0] uppercase tracking-wider border-l border-[#D1D1C7] dark:border-[#2D3139] pl-2 ml-2">
            MERN / SWE
          </span>
        </a>

        {/* Desktop Navigation Links with Animated Active Highlight */}
        <nav className="hidden md:flex items-center space-x-1 text-xs font-mono tracking-widest text-[#5A5A5A] dark:text-[#A0A0A0]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3 py-1.5 transition-colors ${
                  isActive
                    ? 'text-[#0047FF] dark:text-[#3B82F6] font-semibold'
                    : 'hover:text-[#121316] dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-[#0047FF]/10 dark:bg-[#0047FF]/20 rounded-sm border border-[#0047FF]/20 -z-10" />
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
            className="p-2 rounded-full text-[#5A5A5A] dark:text-[#A0A0A0] hover:text-[#121316] dark:hover:text-white hover:bg-[#E5E4DE] dark:hover:bg-[#2D3139] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0047FF]"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center space-x-1 px-4 py-2 text-xs font-mono font-semibold tracking-wider text-white bg-[#121316] dark:bg-white dark:text-[#121316] hover:bg-[#0047FF] dark:hover:bg-[#0047FF] dark:hover:text-white transition-colors duration-200 shadow-sm rounded-sm"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#121316] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0047FF]"
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F7F4] dark:bg-[#121316] border-b border-[#E5E4DE] dark:border-[#2D3139] px-6 py-6 space-y-4 font-mono text-sm tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#121316] dark:text-white hover:text-[#0047FF] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center space-x-2 px-5 py-2.5 w-full justify-center text-xs font-mono font-bold text-white bg-[#0047FF] hover:bg-[#0038CC] transition-colors rounded-sm mt-2"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
