// src/app/components/sections/PresentationSection.tsx
import React from 'react';
import Image from 'next/image';

interface InfoProps {
  scrollToWork: () => void;
  setSectionRef: (index: number) => (el: HTMLElement | null) => void;
}

const Info: React.FC<InfoProps> = ({ scrollToWork , setSectionRef}) => {
  return (
    <section ref={setSectionRef(1)} className="text-start max-w-5xl mx-auto min-h-screen flex flex-col md:flex-row items-center gap-8 justify-center">
      <div className='flex backdrop-blur-sm shadow-lg gap-4 p-5 m-10 rounded-xl'>
        <div className="max-w-3xl max-lg:w-auto">
          <article className='flex gap-4 pb-4 sm:flex-col xs:flex-col md:flex-row '>
            <Image
              src="/florian-Denis.webp"
              alt="Photo de Florian Denis, créateur de Nobilis Web"
              width={400}
              height={400}
              className="object-cover rounded-md lg:w-64 md:w-40 xs:hidden md:flex"
            />
            <div>
              <div className=' flex xs:flex-row-reverse xs:gap-3 md:flex-row xs:pb-4'>
                <h2 className="text-3xl lg:text-4xl font-bold text-teal mb-6 ">
                  Florian DENIS, fondateur de Nobilis Web
                </h2>
                <Image
                  src="/florian-Denis.webp"
                  alt="Photo de Florian Denis, créateur de Nobilis Web"
                  width={400}
                  height={400}
                  className="md:hidden xs:w-24 object-cover rounded-xl"
                />
              </div>

              <p className="text-lg mb-4">
                Développeur web full-stack et designer,<br />
                je crée des expériences digitales sur-mesure alliant:<br />
                performance, esthétique et sécurité.<br />
                <a onClick={scrollToWork}>Découvrez mon dernier projet!</a><br />
                et vous pouvez retrouver mon parcours sur ces liens:.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/florian-d-a4ba7313b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-teal text-white hover:bg-white hover:text-teal border border-teal transition"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/Florian-Denis-Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-teal text-white hover:bg-white hover:text-teal border border-teal transition"
                >
                  GitHub
                </a>

                <a
                  href="https://www.instagram.com/florian.denis.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-teal text-white hover:bg-white hover:text-teal border border-teal transition"
                >
                  Instagram
                </a>
              </div>
            </div>
          </article>
          <h3 className="text-2xl font-semibold text-teal mb-4">Technologies utilisées</h3>
          <ul className="grid flex-row grid-cols-2 md:grid-cols-3 gap-3 text-lg mb-6 xs:mb-0">
            <li>⚡ Next.js, React, TypeScript</li>
            <li>🎨 HTML, CSS, SCSS, Tailwind</li>
            <li>🗄️ MongoDB </li>
            <li>☁️ OVH, AWS, Vercel, Render</li>
            <li>💳 Stripe</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Info;