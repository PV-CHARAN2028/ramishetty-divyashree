import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, Briefcase, GraduationCap, Heart, CheckCircle2 } from 'lucide-react';

export const ExperienceEducationSection: React.FC = () => {
  const { experience, education, certifications, interests } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#090d16]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Professional Experience */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Trajectory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-[#0f1422] p-6 hover:border-slate-700 transition-all"
                >
                  {/* Unboxed Metadata */}
                  <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-amber-400">{exp.type}</span>
                    <span className="font-mono text-slate-400">{exp.period}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {exp.company} · {exp.location}
                  </div>

                  <div className="mt-4 space-y-2 border-t border-slate-800/80 pt-4">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="text-amber-400 mt-1">•</span>
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                    <span className="font-semibold text-slate-300">Tooling:</span>
                    {exp.skillsUsed.map((tool, tIdx) => (
                      <React.Fragment key={tool}>
                        <span className="text-slate-300">{tool}</span>
                        {tIdx < exp.skillsUsed.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}

              {/* Certifications Block */}
              <div className="mt-8 pt-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
                  <Award className="w-3.5 h-3.5" />
                  <span>Certifications & Specialized Training</span>
                </div>

                <div className="space-y-3.5">
                  {certifications.map((cert, cIdx) => (
                    <div
                      key={cIdx}
                      className="rounded-lg border border-slate-800 bg-[#0f1422] p-4 text-xs"
                    >
                      <div className="flex items-center justify-between text-slate-400 mb-1">
                        <span className="font-semibold text-white text-sm">{cert.title}</span>
                        <span className="font-mono text-amber-400">{cert.year}</span>
                      </div>
                      <div className="text-amber-400/90 font-medium">{cert.issuer}</div>
                      <p className="text-slate-400 mt-1">{cert.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Foundation & Personal Interests */}
          <div id="education" className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Academic Background</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">
              Education & Distinction
            </h2>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-[#0f1422] p-6 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">{edu.degree}</h3>
                      <div className="text-xs text-slate-300 mt-0.5">{edu.institution}</div>
                      <div className="text-xs text-slate-400">{edu.location}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-base font-bold font-mono text-amber-400 tabular-nums">
                        {edu.score}
                      </div>
                      <div className="text-[11px] text-slate-400">{edu.scoreLabel}</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-800/80">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span>Timeline: {edu.year}</span>
                      <span className="text-emerald-400 font-medium">Academic Excellence</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {edu.notes}
                    </p>
                  </div>
                </div>
              ))}

              {/* Personal Interests & Beyond Coding */}
              <div className="rounded-xl border border-slate-800 bg-[#0f1422] p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
                  <Heart className="w-3.5 h-3.5" />
                  <span>Interests & Personal Activities</span>
                </div>
                <p className="text-xs text-slate-400 mb-4">
                  Maintaining mental clarity, agility, and balance through discipline and creative arts.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
