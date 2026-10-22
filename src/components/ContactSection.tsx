import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUpRight, Check, Copy, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#0b0f19]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Outreach Info */}
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Direct Contact
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Let's Connect & Build Together
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-8">
              I am actively seeking entry-level opportunities as an <span className="text-white font-medium">Artificial Intelligence / Machine Learning Engineer</span> or <span className="text-white font-medium">Python Full-Stack Developer</span>. Whether you have an open role, an interesting project, or want to discuss ML architecture, feel free to reach out.
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-4 rounded-xl border border-slate-800 bg-[#0f1422] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-400/10 text-amber-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm font-medium text-white hover:text-amber-400 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(profile.email, 'email')}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  title="Copy email"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl border border-slate-800 bg-[#0f1422] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-400/10 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                      Phone Number
                    </div>
                    <a
                      href={`tel:${profile.phone}`}
                      className="text-sm font-medium text-white hover:text-emerald-400 transition-colors font-mono"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(profile.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  title="Copy phone"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-xl border border-slate-800 bg-[#0f1422] hover:border-slate-700 hover:bg-[#131b2e] flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#0a66c2]/15 text-[#0a66c2]">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                      Professional Network
                    </div>
                    <div className="text-sm font-medium text-white group-hover:text-amber-400 transition-colors">
                      LinkedIn: Divyasree Ramisetty
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-xl border border-slate-800 bg-[#0f1422] flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-400/10 text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                    Current Location
                  </div>
                  <div className="text-sm font-medium text-white">
                    {profile.location} (Open to Relocation / Hybrid / Remote)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-[#0f1422] p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out this quick form to send an inquiry directly to Divyasree.
              </p>

              {formSubmitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Ready!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto mt-2 leading-relaxed">
                    Thank you, {formData.name}. You can also dispatch this directly to{' '}
                    <span className="text-amber-400 font-mono">{profile.email}</span>.
                  </p>
                  <div className="mt-6 flex justify-center gap-3">
                    <a
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(
                        formData.subject || 'Portfolio Inquiry'
                      )}&body=${encodeURIComponent(
                        `Hi Divyasree,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
                      )}`}
                      className="px-5 py-2.5 rounded-lg bg-amber-400 text-slate-900 text-xs font-bold hover:bg-amber-300 transition-colors"
                    >
                      Open Email Client
                    </a>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium hover:bg-slate-700 transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className="w-full text-xs rounded-lg border border-slate-700 bg-slate-900/80 px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full text-xs rounded-lg border border-slate-700 bg-slate-900/80 px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Project inquiry"
                      className="w-full text-xs rounded-lg border border-slate-700 bg-slate-900/80 px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note or role description..."
                      className="w-full text-xs rounded-lg border border-slate-700 bg-slate-900/80 px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 active:scale-98 transition-all shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Divyasree</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
