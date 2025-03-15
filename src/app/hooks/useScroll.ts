// src/hooks/useScroll.ts
import { useState, useEffect, useRef } from 'react';

const useScroll = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(false);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();
      const direction = event.deltaY > 0 ? 1 : -1;
      const currentSectionIndex = sectionsRef.current.findIndex(
        (section) => section && section.getBoundingClientRect().top >= 0
      );

      let nextIndex = currentSectionIndex + direction;
      nextIndex = Math.max(0, Math.min(sectionsRef.current.length - 1, nextIndex));

      const nextSection = sectionsRef.current[nextIndex];
      if (nextSection instanceof HTMLElement) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const handleScrollVisibility = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollY.current) {
        if (scrollTop > window.innerHeight * 0.5) {
          setShowHeader(false);
        }
        if (scrollTop > document.body.scrollHeight - window.innerHeight * 1.5) {
          setShowFooter(true);
        }
      } else {
        setShowHeader(true);
        if (scrollTop < document.body.scrollHeight - window.innerHeight * 1.5) {
          setShowFooter(false);
        }
      }
      lastScrollY.current = scrollTop;
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('scroll', handleScrollVisibility);
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('scroll', handleScrollVisibility);
    };
  }, []);

  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    sectionsRef.current[index] = el;
  };

  return { showHeader, showFooter, setSectionRef, sectionsRef };
};

export default useScroll;
