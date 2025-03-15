import React from 'react';
import Image from 'next/image';
import CustomButton from '../CustomButton';

interface HeroProps {
  darkMode: boolean;
  setSectionRef: (index: number) => (el: HTMLElement | null) => void;
  sectionsRef: React.RefObject<(HTMLElement | null)[]>;
}

const Hero: React.FC<HeroProps> = ({ darkMode , setSectionRef, sectionsRef}) => {
  return (
    <section ref={setSectionRef(0)} className=" relative text-center mx-auto min-h-screen flex flex-col justify-center">
          
            <div className="image-hero2 absolute inset-0 ">
              <Image 
                src={darkMode ? "/ordi.jpg" : "/ordi-light.jpg" }
                alt="Hero background" 
                fill
                className="image-hero object-cover pointer-events-none blur-sm brightness-75"
              />
            </div>
            <div className="relative z-3 p-10">
              <h1 className="text-9xl md:text-7xl sm:text-5xl font-thin mb-0 pb-0 text-pearl font-gabriola">Nobilis <b className='text-7xl md:text-5xl sm:text-3xl font-constantia text-pearl'>Web</b></h1>  
              <div>
                <p className="mb-9 text-3xl text-ivory typing-effect md:inline-block xs:hidden ">
                  Propulsez votre activité avec un site performant, sécurisé et élégant.
                </p>
                  <div className="md:hidden xs:inline-block text-3xl text-ivory relative h-10 mb-16 ">
                  <p>Propulsez votre activité avec un site :</p>
                  <div className="typing-container">
                    <p className="typing-effect-min first">Performant,</p>
                    <p className="typing-effect-min second">Sécurisé,</p>
                    <p className="typing-effect-min third">Et élégant.</p>
                  </div>
                </div>
              </div>
              <div className='replace xs:pt-4'>
                <CustomButton onClick={() => sectionsRef.current[4]?.scrollIntoView({ behavior: 'smooth' })} text={'Discutons de votre projet 🚀'} darkMode={false} />
              </div>
            </div>
          </section>
  );
};

export default Hero;