import React from "react"
import Image from "next/image"
import CustomButton from "../buttons/CustomButton";

interface WorkProps {
  setSectionRef : (index:number) => (el: HTMLElement | null) => void;
  sectionsRef: React.RefObject<(HTMLElement | null)[]>;
  darkMode: boolean
}
const Work : React.FC<WorkProps> = ({  setSectionRef, sectionsRef, darkMode}) => {
    return(
        <section ref={setSectionRef(2)} id="work" className="p-10 text-center min-h-screen flex flex-col justify-center items-center">
            <h3 className="text-3xl font-bold mb-4" >Pourquoi choisir Nobilis Web ?</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className='flex xl:flex-row md:flex-col sm:flex-col xs:flex-col gap-4 backdrop-blur-sm text-2xl p-4 rounded-lg shadow-md' >
                <ul className='text-start xl:w-96 md:w-auto text-xl flex flex-col gap-4'>
                    <h3 className='text-2xl font-semibold mb-6 '>Nos avantages:</h3>
                    <li className='flex xl:flex-col md:flex-row justify-between  gap-4'>
                        <p><strong>⏳ Gain de temps :</strong></p>
                        <p>Vous vous concentrez sur votre activité, on s&apos;occupe de votre site.</p>
                    </li>
                    <li className='flex xl:flex-col md:flex-row justify-between gap-4'>
                        <p><strong> 🔒 Sécurité et maintenance :</strong></p>
                        <p>Votre site reste performant et protégé en permanence.</p>
                    </li>
                    <li className='flex xl:flex-col md:flex-row justify-between gap-4'>
                        <p><strong>🤝 Support personnalisé :</strong></p>
                        <p>Un accompagnement sur-mesure selon vos besoins.</p>
                    </li>
                        <li className='content-center m-3'>
                        <CustomButton onClick={() => sectionsRef.current[4]?.scrollIntoView({ behavior: 'smooth' })} text={'Contactez-moi pour démarrer votre projet ! 🚀'} darkMode={darkMode} />
                    </li>
                </ul>
                <a href='https://cagueloup.fr/' rel="noopener noreferrer" >
                <h4 className='text-xl font-semibold mb-3 text-start pb-4'>Découvrez notre site du domaine viticole du cagueloup:</h4>
                  <Image
                    src="/cagueloup-visuel.png"
                    alt="Site web d&apos;un domaine viticole du var"
                    width={900}
                    height={900} 
                    className="object-cover rounded-md shadow-md"
                  />
                </a>     
              </div>
            </div>
        </section>
    )   
};
export default Work