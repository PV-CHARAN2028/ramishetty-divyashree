import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowDown, FileText, Linkedin, Mail, MapPin, Phone, Sparkles, Camera } from 'lucide-react';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenPhotoModal: () => void;
  currentAvatar: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onOpenPhotoModal,
  currentAvatar,
}) => {
  const { profile, stats } = PORTFOLIO_DATA;

  return (
    <section id="about" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle ambient gradient mesh */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{profile.headline}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.15] mb-6 [text-wrap:balance]">
              Engineering predictive intelligence and resilient full-stack systems.
            </h1>

            {/* Bio Prose */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Hi, I am <span className="text-white font-semibold">Ramisetty Divya Sree</span>. An Artificial Intelligence & Machine Learning engineer and Python developer based in Bengaluru. I design data-driven machine learning pipelines, build asynchronous FastAPI microservices, and build modern interactive React applications with clean architectural principles.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#projects"
                className="px-5 py-2.5 text-sm font-semibold text-slate-900 bg-amber-400 rounded-lg hover:bg-amber-300 active:scale-98 transition-all shadow-sm"
              >
                Explore Projects
              </a>
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-200 bg-slate-800 border border-slate-700/80 rounded-lg hover:bg-slate-700/80 hover:border-slate-600 transition-all"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>View 2 Resumes</span>
              </button>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white bg-transparent border border-slate-800 rounded-lg hover:border-slate-700 transition-all"
              >
                <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                <span className="hidden sm:inline">LinkedIn Profile</span>
                <span className="sm:hidden">LinkedIn</span>
              </a>
            </div>

            {/* Quiet Unboxed Metadata with Typographic Separators */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 pt-4 border-t border-slate-800/80">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {profile.location}
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                {profile.email}
              </span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                {profile.phoneDisplay}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-400/90 font-medium">B.Tech CSE (AI) · CGPA 8.82</span>
            </div>
          </div>

          {/* Right Column: Visual Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-amber-500/20 via-transparent to-blue-500/20 opacity-70 blur-lg" />

              {/* Main Card */}
              <div className="relative rounded-2xl border border-slate-700/80 bg-[#0f1422] p-4 sm:p-5 shadow-2xl">
                {/* Profile Image Frame */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-900 border border-slate-800">
                  <img
                    src={currentAvatar}
                    alt="Divyasree Ramisetty"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      // Fallback if image path has any issue
                      (e.currentTarget as HTMLImageElement).src = '/images/divya_sree_profile.jpg';
                    }}
                  />

                  {/* Photo Switch / Upload helper */}
                  <button
                    onClick={onOpenPhotoModal}
                    className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/70 hover:bg-black/90 text-white text-xs font-medium backdrop-blur-md border border-white/20 transition-all shadow-md"
                    title="Change profile photo"
                  >
                    <Camera className="w-3.5 h-3.5 text-amber-400" />
                    <span>Change Photo</span>
                  </button>
                </div>

                {/* Quiet Card Caption & Profile Information */}
                <div className="mt-4 pt-4 border-t border-slate-800/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-white">Ramisetty Divya Sree</h3>
                      <p className="text-xs text-slate-400 mt-0.5">Sri Venkateswara College of Engg. & Tech.</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono font-medium text-amber-400 tabular-nums">CGPA: 8.82</span>
                      <p className="text-[11px] text-slate-500">Graduation 2026</p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                    <span className="text-slate-300">FastAPI</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-300">Scikit-learn</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-300">React.js</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-300">Spring Boot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width KPI Row below split */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-mono tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-amber-400/90 mt-1">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-400 mt-0.5">
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
