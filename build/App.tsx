import React, { useState } from 'react';

import Home from './components/Home';
import NavBar from './components/Navbar/Navbar';
import { Experience } from './components/Experience/Experience';
import { Background } from './components/Background/Background';
import { Contact } from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import {
  faHome,
  faUser,
  faBriefcase,
  faEnvelope,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons';

import { SectionType } from './common/CommonProps';
import { Skills } from './components/Skills';

const App: React.FC = () => {
  const [sections, setSections] = useState<SectionType[]>([
    { id: 'home', label: 'HOME', icon: faHome, isActive: false },
    { id: 'experience', label: 'EXPERIENCE', icon: faBriefcase, isActive: false },
    { id: 'background', label: 'BACKGROUND', icon: faUser, isActive: false },
    { id: 'skills', label: 'SKILLS', icon: faLaptopCode, isActive: false },
    { id: 'contact', label: 'CONTACT', icon: faEnvelope, isActive: false },
  ]);

  const handleSectionChange = (newSectionId: string, inView: boolean) => {
    if (inView) {
      setSections((prevState) =>
        prevState.map((section) => ({
          ...section,
          isActive: section.id === newSectionId,
        }))
      );
    }
  };

  return (
    <>
      <NavBar sections={sections} />
      <div className='main-content'>
        <Home handleSectionChange={handleSectionChange} />
        <Experience handleSectionChange={handleSectionChange} />
        <Background handleSectionChange={handleSectionChange} />
        <Skills handleSectionChange={handleSectionChange} />
        <Contact handleSectionChange={handleSectionChange} />
      </div>
      <Footer />
    </>
  );
};

export default App;
