import React, { useState } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenPhotoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0b0f19]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
        >
          Divyasree Ramisetty
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-400 rounded-lg hover:bg-amber-300 active:scale-98 transition-all shadow-sm whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Resumes</span>
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 text-xs font-medium text-slate-900 bg-amber-400 rounded-md hover:bg-amber-300 transition-colors"
          >
            Resumes
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0f1422] px-6 py-5">
          <div className="flex flex-col space-y-4 text-base font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="py-1 hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-slate-900 bg-amber-400 rounded-lg"
              >
                <FileText className="w-4 h-4" />
                <span>View Resumes (AIML & Python)</span>
              </button>
              <a
                href="https://www.linkedin.com/in/divyasree-ramisetty-486499322?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-medium text-slate-200 bg-slate-800/80 rounded-lg hover:bg-slate-700"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
