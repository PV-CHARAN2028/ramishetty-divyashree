/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { PORTFOLIO_DATA } from './data/portfolioData';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [avatarImage, setAvatarImage] = useState(PORTFOLIO_DATA.profile.avatarImage);

  // Hydrate custom avatar from localStorage if user updated previously
  useEffect(() => {
    try {
      const savedPhoto = localStorage.getItem('divya_portfolio_custom_avatar');
      if (savedPhoto) {
        setAvatarImage(savedPhoto);
      }
    } catch {
      // ignore storage access issues
    }
  }, []);

  const handleUpdatePhoto = (newPhotoUrl: string) => {
    setAvatarImage(newPhotoUrl);
    try {
      localStorage.setItem('divya_portfolio_custom_avatar', newPhotoUrl);
    } catch {
      // ignore storage access issues
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-amber-400/20 selection:text-amber-200">
      {/* Top Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
          currentAvatar={avatarImage}
        />

        <SkillsSection />

        <ProjectsSection />

        <ExperienceEducationSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Resume Viewer & Downloader Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Profile Photo Customizer Modal */}
      <PhotoUploadModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        currentPhoto={avatarImage}
        defaultPhoto={PORTFOLIO_DATA.profile.avatarImage}
        onUpdatePhoto={handleUpdatePhoto}
      />
    </div>
  );
}
