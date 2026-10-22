import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Download, ExternalLink, FileText, Check, Copy, Eye, BookOpen } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { resumes, profile } = PORTFOLIO_DATA;
  const [selectedResumeId, setSelectedResumeId] = useState<'aiml' | 'python'>('aiml');
  const [viewMode, setViewMode] = useState<'transcript' | 'pdf'>('transcript');
  const [copiedSummary, setCopiedSummary] = useState(false);

  if (!isOpen) return null;

  const currentResume = resumes.find((r) => r.id === selectedResumeId) || resumes[0];

  const handleCopySummary = () => {
    navigator.clipboard.writeText(profile.summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[94vh] flex flex-col rounded-2xl border border-slate-700 bg-[#0f1422] p-5 sm:p-7 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
              Curriculum Vitae & Official Credentials
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ramisetty Divya Sree — Resumes
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Bengaluru, India · 8309779118 · divyasreeramisetty5a@gmail.com
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Resume Selector & Actions Bar */}
        <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Resume 1 vs Resume 2 Switcher */}
          <div className="flex p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setSelectedResumeId('aiml')}
              className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedResumeId === 'aiml'
                  ? 'bg-amber-400 text-slate-900 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI / ML Fresher Resume
            </button>
            <button
              onClick={() => setSelectedResumeId('python')}
              className={`flex-1 sm:flex-initial px-3 sm:px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                selectedResumeId === 'python'
                  ? 'bg-amber-400 text-slate-900 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Python Developer Fresher Resume
            </button>
          </div>

          {/* View Mode Toggle: Interactive Transcript vs PDF Iframe */}
          <div className="flex items-center gap-2">
            <div className="flex p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs">
              <button
                onClick={() => setViewMode('transcript')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md transition-all ${
                  viewMode === 'transcript'
                    ? 'bg-slate-800 text-white font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <BookOpen className="w-3 h-3 text-amber-400" />
                <span>Document View</span>
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md transition-all ${
                  viewMode === 'pdf'
                    ? 'bg-slate-800 text-white font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Eye className="w-3 h-3 text-amber-400" />
                <span>PDF Embed</span>
              </button>
            </div>

            <a
              href={currentResume.filePath}
              download={currentResume.fileName}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-sm shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Resume Content Overview */}
        <div className="mt-4 flex-1 overflow-y-auto space-y-4 pr-1">
          {viewMode === 'transcript' ? (
            /* MOBILE-FRIENDLY ACCESSIBLE DOCUMENT TRANSCRIPT */
            <div className="p-5 sm:p-7 rounded-xl border border-slate-800 bg-[#0a0e1a] font-sans text-xs sm:text-sm text-slate-300 space-y-6">
              {/* Header Box */}
              <div className="text-center pb-5 border-b border-slate-800">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                  {selectedResumeId === 'aiml' ? 'AI / ML Fresher Resume' : 'Python Developer Fresher Resume'}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                  RAMISETTY DIVYA SREE
                </h4>
                <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-2 text-xs text-slate-400">
                  <span>Bengaluru, India</span>
                  <span aria-hidden="true">|</span>
                  <span>8309779118</span>
                  <span aria-hidden="true">|</span>
                  <span className="text-amber-400">{profile.email}</span>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 border-b border-slate-800/80 pb-1">
                  Professional Summary
                </h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedResumeId === 'aiml'
                    ? 'Entry-level Artificial Intelligence and Machine Learning candidate with a Computer Science and Artificial Intelligence background and hands-on project experience building a public transport delay prediction application. Familiar with Python basics, data preprocessing, feature engineering, scikit-learn, Random Forest regression, and serving model predictions through FastAPI. Also brings foundational knowledge of Java, SQL, REST APIs, and full-stack development. Seeking a fresher AI/ML role to contribute to practical machine-learning projects and continue developing model-building and evaluation skills.'
                    : 'Entry-level Python Developer with an academic background in Computer Science and Artificial Intelligence and project experience in Python-based machine-learning applications, REST APIs, and full-stack development. Familiar with Python fundamentals, data preprocessing, scikit-learn, FastAPI, SQL, MongoDB, and API integration. Also experienced with Java, Spring Boot, and React.js through technical projects. Seeking a Python Developer Fresher role to build reliable applications, write maintainable code, and grow through practical software development work.'}
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 border-b border-slate-800/80 pb-1">
                  Technical Skills
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedResumeId === 'aiml' ? (
                    <>
                      <div><strong className="text-white">AI / ML:</strong> Machine-learning fundamentals, data preprocessing, feature engineering, model training, Random Forest Regressor</div>
                      <div><strong className="text-white">Programming:</strong> Python (Basics), Java, JavaScript</div>
                      <div><strong className="text-white">Libraries / Frameworks:</strong> scikit-learn, FastAPI, React.js, Spring Boot</div>
                      <div><strong className="text-white">Data / APIs:</strong> SQL, MongoDB, Oracle, RESTful APIs</div>
                      <div><strong className="text-white">Development Tools:</strong> Maven, Swagger</div>
                      <div><strong className="text-white">CS Fundamentals:</strong> Object-oriented programming, collections, exception handling, multithreading</div>
                    </>
                  ) : (
                    <>
                      <div><strong className="text-white">Programming:</strong> Python (Basics), Java, JavaScript</div>
                      <div><strong className="text-white">Python / Backend:</strong> FastAPI, RESTful APIs, API integration</div>
                      <div><strong className="text-white">Databases:</strong> SQL, MongoDB, Oracle</div>
                      <div><strong className="text-white">Web Technologies:</strong> React.js, Spring Boot, JavaScript</div>
                      <div><strong className="text-white">Development Tools:</strong> Maven, Swagger</div>
                      <div><strong className="text-white">Core Concepts:</strong> OOP, collections, exception handling, multithreading</div>
                      <div><strong className="text-white">Additional Exposure:</strong> Data preprocessing, feature engineering, scikit-learn, Random Forest Regressor</div>
                    </>
                  )}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 border-b border-slate-800/80 pb-1">
                  Technical Projects
                </h5>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center justify-between text-xs mb-1">
                      <strong className="text-white text-sm">Public Transport Delay Prediction System</strong>
                      <span className="text-slate-400 font-mono">Python, scikit-learn, FastAPI, React.js</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-slate-300 text-xs">
                      <li>Developed a full-stack application that predicts public transport delays using a Random Forest Regressor.</li>
                      <li>Built FastAPI endpoints to serve model predictions to an interactive React dashboard.</li>
                      <li>Applied data preprocessing, feature engineering, and model training; explored delay factors such as weather, routes, and time.</li>
                      <li>Project notes report approximately 90% prediction accuracy across evaluated routes.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center justify-between text-xs mb-1">
                      <strong className="text-white text-sm">E-Commerce Backend Application</strong>
                      <span className="text-slate-400 font-mono">Java, Spring Boot, MongoDB, REST APIs, Swagger</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-slate-300 text-xs">
                      <li>Built backend modules for authentication, product management, shopping cart, and order processing.</li>
                      <li>Designed REST endpoints with input validation and structured responses, connected MongoDB for persistence, and used Swagger to document and test APIs.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Freelance Experience */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 border-b border-slate-800/80 pb-1">
                  Freelance Experience
                </h5>
                <div className="text-xs">
                  <div className="flex justify-between text-slate-300 mb-1">
                    <strong className="text-white">Freelance Software Developer</strong>
                    <span className="text-slate-400">Independent Work</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li>Worked on small web application improvements and website features based on defined requirements.</li>
                    <li>Implemented responsive UI components and connected frontend screens to backend APIs where applicable.</li>
                    <li>Debugged issues, tested key user flows, and refined implementations based on feedback.</li>
                  </ul>
                </div>
              </div>

              {/* Education */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 border-b border-slate-800/80 pb-1">
                  Education
                </h5>
                <div className="space-y-2 text-xs">
                  <div>
                    <strong className="text-white">B.Tech, Computer Science and Artificial Intelligence</strong> — Sri Venkateswara College of Engineering and Technology, Chittoor | April 2026 | <span className="text-amber-400 font-mono font-semibold">CGPA: 8.82</span>
                  </div>
                  <div>
                    <strong className="text-white">Intermediate</strong> — Narayana Junior College, Tirupati | 2022 | <span className="text-amber-400 font-mono font-semibold">92.9%</span>
                  </div>
                </div>
              </div>

              {/* Certifications & Activities */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 border-b border-slate-800/80 pb-1">
                  Certifications & Activities
                </h5>
                <p className="text-xs text-slate-300">
                  <strong className="text-white">Full Stack Foundation with Core Java Specialization</strong> — L&T EduTech; participated in technical workshops focused on Java programming and Artificial Intelligence. Interests: Badminton, Dance.
                </p>
              </div>
            </div>
          ) : (
            /* EMBEDDED PDF VIEWER */
            <div className="rounded-xl border border-slate-800 bg-slate-950 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80 border-b border-slate-800 text-xs">
                <span className="text-slate-400 flex items-center gap-1.5 font-mono">
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  {currentResume.fileName}
                </span>
                <a
                  href={currentResume.filePath}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium"
                >
                  <span>Open Raw PDF in Tab</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="h-[460px] w-full bg-slate-900">
                <iframe
                  src={`${currentResume.filePath}#toolbar=0`}
                  title={currentResume.title}
                  className="w-full h-full border-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSummary ? 'Copied to Clipboard' : 'Copy Summary'}</span>
            </button>
            <a
              href={currentResume.filePath}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              <span>Direct Link</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
