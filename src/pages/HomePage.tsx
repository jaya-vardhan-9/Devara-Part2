import React from 'react';
import ProfileSection from '../components/ProfileSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContentSection from '../components/ContentSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      <ProfileSection />
      <SkillsSection />
      <ProjectsSection />
      <ContentSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;