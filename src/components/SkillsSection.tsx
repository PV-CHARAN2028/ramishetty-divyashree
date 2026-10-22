import React, { useState } from 'react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';
import { CheckCircle2, ChevronRight, Cpu, Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const categories = [
    'All',
    'AI & ML',
    'Python & Backend',
    'Frontend',
    'Databases & APIs',
    'Core CS & Tools',
  ];

  const filteredSkills =
    activeFilter === 'All'
      ? skills
      : skills.filter((item) => item.category === activeFilter);

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#090d16]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Capabilities & Tooling
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Core Technical Competencies
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Curated from hands-on machine learning projects, asynchronous Python microservices, and enterprise full-stack development.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented buttons) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeFilter === cat
                    ? 'bg-amber-400 text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onClick={() => setSelectedSkill(skill)}
              className="group cursor-pointer relative rounded-xl border border-slate-800 bg-[#0f1422] p-5 hover:border-slate-700 hover:bg-[#131b2e] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Unboxed Metadata Header */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <span>{skill.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-400 font-mono text-[11px]">{skill.level}</span>
                </div>

                {/* Skill Name */}
                <h3 className="text-base font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {skill.highlight}
                </p>
              </div>

              {/* Real Applications list as clean unboxed typography */}
              <div className="mt-5 pt-4 border-t border-slate-800/80">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-2">
                  Applied In
                </div>
                <div className="space-y-1.5">
                  {skill.applications.slice(0, 2).map((app, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-amber-400 mt-0.5">•</span>
                      <span>{app}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex items-center justify-end text-[11px] font-medium text-amber-400/90 group-hover:text-amber-300 transition-colors">
                  <span>Inspect context</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Detail Modal */}
        {selectedSkill && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedSkill(null)}
          >
            <div
              className="relative w-full max-w-lg rounded-2xl border border-slate-700 bg-[#0f1422] p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-amber-400 font-mono mb-1">
                    {selectedSkill.category} · {selectedSkill.level}
                  </div>
                  <h3 className="text-xl font-bold text-white">{selectedSkill.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 text-sm"
                >
                  ✕
                </button>
              </div>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {selectedSkill.highlight}
              </p>

              <div className="mt-6 pt-5 border-t border-slate-800">
                <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                  Production & Project Applications
                </div>
                <div className="space-y-2.5">
                  {selectedSkill.applications.map((app, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
