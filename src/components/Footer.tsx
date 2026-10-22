import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Linkedin, Mail, Phone, FileText } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#080c14] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Identity */}
          <div className="text-center md:text-left">
            <div className="text-base font-bold text-white tracking-tight">
              Ramisetty Divya Sree
            </div>
            <div className="mt-1 flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1 text-xs text-slate-400">
              <span>{profile.location}</span>
              <span aria-hidden="true">·</span>
              <span>AI / ML Engineer</span>
              <span aria-hidden="true">·</span>
              <span>Python Full-Stack Developer</span>
            </div>
          </div>

          {/* Clean Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resumes</span>
            </button>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{profile.email}</span>
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Ramisetty Divya Sree. All rights reserved.
          </div>
          <div>
            Crafted with clean typography, responsive design & subtle motion.
          </div>
        </div>
      </div>
    </footer>
  );
};
