'use client';
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import CustomButton from './components/buttons/CustomButton';
import useScroll from './hooks/useScroll';
import Hero from './components/sections/hero';
import Info from './components/sections/info';
import Work from './components/sections/work';
import Tarif from './components/sections/tarif';
import Contact from './components/sections/contact';

export default function NobilisWeb() {
  const [darkMode, setDarkMode] = useState(false);
  const { showHeader, showFooter, setSectionRef, sectionsRef } = useScroll();
  const [selectedOption, setSelectedOption] = useState("contact");
  const [preselectedWebsiteType, setPreselectedWebsiteType] = useState<string | undefined>(undefined);

  const scrollToDevis = useCallback((type: string) => {
    setPreselectedWebsiteType(type);
    setSelectedOption("devis");
    setTimeout(() => {
      document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  const scrollToWork = useCallback(() => {
    setSelectedOption("work");
    setTimeout(() => {
      document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <div className={`relative fond ${darkMode ? 'bg-gradient-to-br from-rich-black to-teal text-pearl bg-fixed' : 'bg-gradient-to-tl from-persian-green to-pearl text-rich-black bg-fixed'}`}>
      <div className="animated-pattern">
        {/* pattern animé */}
      </div>
      {/* Header */}
      <header className={`backdrop-blur-md header-top fixed top-0 left-0 w-full flex justify-between items-center p-6 shadow-md bg-opacity-90 transition-transform ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <Image
          src={darkMode ? '/logo-dark.png' : '/logo-light.png'}
          alt="Nobilis Web Logo"
          width={96}
          height={5}
        />
        <CustomButton onClick={() => setDarkMode(!darkMode)} text={darkMode ? 'Mode Clair' : 'Mode Sombre'} darkMode={darkMode} />
      </header>

      <main className="space-y-16 z-3">
        {/* Section Hero */}
        <Hero darkMode={darkMode} setSectionRef={setSectionRef} sectionsRef={sectionsRef} />

        {/* Section Info */}
        <Info scrollToWork={scrollToWork} setSectionRef={setSectionRef} darkMode={darkMode}/>

        {/* Section Work */}
        <Work setSectionRef={setSectionRef} sectionsRef={sectionsRef}  darkMode={darkMode} />

        {/* Section Tarifs */}
        <Tarif scrollToDevis={scrollToDevis} setSectionRef={setSectionRef} darkMode={darkMode} />

        {/* Section Contact */}
        <Contact setSectionRef={setSectionRef} selectedOption={selectedOption} setSelectedOption={setSelectedOption}  preselectedWebsiteType={preselectedWebsiteType} darkMode={darkMode} />
      </main>
      <footer className={`fixed bottom-0 left-0 w-full text-center p-4 bg-opacity-20 transition-transform ${showFooter ? 'translate-y-0' : 'translate-y-full'}`}>
        © 2025 Nobilis Web - Tous droits réservés
      </footer>
    </div>
  );
}