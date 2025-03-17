import React from "react"
import CustomButton from "../buttons/CustomButton"

interface TarifProps {
    scrollToDevis: (type: string) => void;
    setSectionRef: (index:number) => (el:HTMLElement | null) => void
    darkMode: boolean
}
const Tarif : React.FC<TarifProps> = ({scrollToDevis, setSectionRef, darkMode}) => {
return(
    <section ref={setSectionRef(3)} className="p-10 text-center min-h-screen flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">services et tarifs</h3>
              <div >
                <div className="lg:whitespace-normal md:whitespace-nowrap lg:overflow-hidden md:overflow-x-auto xs:overflow-x-auto xs:whitespace-normal ">
                  <ul className="grid grid-cols-3 lg:grid lg:grid-cols-3 gap-4 xs:flex xs:space-x-4 md:flex md:space-x-4">
                    <li className='backdrop-blur-sm text-2xl flex flex-col justify-between p-4 shadow-lg rounded-xl min-w-[90%] xs:min-w-[85%] '>
                        <h4 className='text-2xl font-bold pb-4 '>Site Vitrine</h4>
                        <p className='text-start pb-2 text-3xl lg:text-2xl md:text-xl xs:text-lg'>
                          Valorisez votre activité avec un site web professionnel et impactant :<br></br>
                            ✅ Optimisé pour le SEO (référencement & accessibilité pris en compte)<br></br>
                            ✅ Design 100% sur-mesure, pensé pour refléter votre marque<br></br>
                            ✅ Navigation fluide et expérience utilisateur optimisée
                        </p>
                        <p className='pb-4'>
                        💰 Tarif: <span className='font-bold'>1500€ - 3000€</span>
                        </p>
                        <p className='text-start'>
                        Abonnement : à partir de 50€/mois (maintenance, hébergement, mises à jour)
                        </p>
                      <CustomButton  text={"📩 Demander un devis"} darkMode={darkMode} onClick={() => scrollToDevis('Site Vitrine')} />
                      </li>
                      <li className='backdrop-blur-sm text-2xl flex flex-col justify-between p-4 shadow-lg rounded-xl min-w-[90%] xs:min-w-[85%] '>
                        <h4 className='text-2xl font-bold pb-4'>E-commerce</h4>
                        <p className='text-start pb-2 text-3xl lg:text-2xl md:text-xl xs:text-lg'>
                        Lancez votre boutique en ligne rapidement avec une solution performante :<br></br>
                          🛍️ Design et fonctionnalités adaptés à votre marché<br></br>
                          🔒 Sécurité renforcée des paiements et des données clients<br></br>
                          ⚡ Expérience d’achat fluide et intuitive
                        </p>
                        <p className='pb-4'>
                        💰 Tarif: <span className='font-bold'>3500€ - 6000€</span>
                        </p>
                        <p className='text-start'>
                        Abonnement : à partir de 100€/mois (maintenance, hébergement, mises à jour, support technique)
                        </p>
                        <CustomButton text={"📩 Demander un devis"} darkMode={darkMode} onClick={() => scrollToDevis('E-commerce')} />
                        </li>
                      <li className='backdrop-blur-sm text-2xl flex flex-col justify-between p-4 shadow-lg rounded-xl min-w-[90%] xs:min-w-[85%] '>
                        <h4 className='text-2xl font-bold pb-4'> E-commerce et gestion</h4>
                        <p className='text-start pb-2 text-3xl lg:text-2xl md:text-xl xs:text-lg'>
                        Gardez un contrôle total sur votre boutique avec une interface de gestion complète :<br></br>
                          👤 Gestion des utilisateurs et des connexions<br></br>
                          📦 Ajout, modification et suppression de vos produits en toute autonomie<br></br>
                          📊 Tableau de bord pour suivre votre activité
                        </p>
                        <p className='pb-4'>
                        💰 Tarif: <span className='font-bold'>5500 € - 8000 €</span>
                        </p>
                        <p className='text-start'>
                        Abonnement : à partir de 150€/mois (maintenance, hébergement, mises à jour, support avancé, optimisation continue)
                        </p>
                        <CustomButton text={"📩 Demander un devis"} darkMode={darkMode} onClick={() => scrollToDevis('E-commerce et Gestion')} />
                        </li>
                    </ul>
                  </div>
              </div>
          </section>
    );
}
export default Tarif