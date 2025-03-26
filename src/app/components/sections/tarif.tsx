import React from "react";
import CustomButton from "../buttons/CustomButton";

interface TarifProps {
    scrollToDevis: (type: string) => void;
    setSectionRef: (index: number) => (el: HTMLElement | null) => void;
    darkMode: boolean;
}

const Tarif: React.FC<TarifProps> = ({ scrollToDevis, setSectionRef, darkMode }) => {
    return (
        <section ref={setSectionRef(3)} className="p-10 text-center min-h-screen flex flex-col justify-center">
            
            <div className="h-[70vh]">
                <h3 className="text-3xl font-bold mb-4">Services et Tarifs</h3>
                <div className="lg:whitespace-normal md:whitespace-nowrap md:overflow-x-auto xs:overflow-x-auto xs:whitespace-normal ">
                    <ul className="grid grid-cols-3 lg:grid lg:grid-cols-3 gap-4 xs:flex xs:space-x-4 md:flex md:space-x-4 ">
                        <li className='h-2/3 backdrop-blur-sm text-2xl flex flex-col justify-between p-4  shadow-lg rounded-xl min-w-[90%] xs:min-w-[85%] text-start pb-2 xl:text-2xl lg:text-xl md:text-lg xs:text-base xs:overflow-y-hidden xs:h-[70vh]'>
                            <h4 className='xl:text-2xl l:text-xl font-bold pb-4'>🥉 Site Vitrine Static</h4>
                            <div className='overflow-y-scroll h-3/4'>
                                <p>
                                    <strong>Description:</strong> Lancez votre présence en ligne avec un site vitrine professionnel.<br></br>
                                    <strong>Avantages:</strong><br></br>
                                    - Augmentez votre visibilité grâce à notre optimisation SEO.<br></br>
                                    - Un design sur-mesure qui reflète votre marque.<br></br>
                                    - Expérience utilisateur fluide pour vos visiteurs.<br></br>
                                    <strong>Inclus:</strong><br></br>
                                    - Enregistrement du nom de domaine pour 1 an<br></br>
                                    - Paiement du domaine pour 1 an<br></br>
                                    <strong>Technologies:</strong> React, TypeScript, HTML, CSS, Tailwind; OVH.
                                    </p>
                                <p className='pb-4 text-start'>
                                    <span className='font-bold'>💰 À partir de 1500 €</span>
                                </p>
                                <p className='text-start mb-2'>
                                    <strong>Abonnement mensuel:</strong> 10 €/mois (renouvellement automatique du nom de domaine et du domaine).
                                </p>
                            </div>
                            
                            <CustomButton text={"📩 Demander un devis"} darkMode={darkMode} onClick={() => scrollToDevis('Site Vitrine Static')} />
                        </li>
                        <li className='h-2/3 backdrop-blur-sm text-2xl flex flex-col justify-between p-4 shadow-lg rounded-xl min-w-[90%] xs:min-w-[85%] text-start pb-2 xl:text-2xl lg:text-xl md:text-lg xs:text-base xs:overflow-y-hidden xs:h-[70vh]'>
                            <h4 className='xl:text-2xl l:text-xl font-bold pb-4'>🥈 Site Vitrine Modifiable</h4>
                            <div className='overflow-y-scroll h-3/4'>
                                <p>
                                    <strong>Description:</strong> Personnalisez votre site vitrine avec un accès personnel pour gérer votre contenu.<br></br>
                                    <strong>Avantages:</strong><br></br>
                                    - Gérez facilement votre contenu sans compétences techniques.<br></br>
                                    - Session de connexion personnelle pour une sécurité renforcée.<br></br>
                                    <strong>Inclus:</strong><br></br>
                                    - Gestion du site<br></br>
                                    - Service dynamique<br></br>
                                    - Enregistrement du nom de domaine pour 1 an<br></br>
                                    - Paiement du domaine pour 1 an<br></br>
                                    - Base de donnée unique connectée<br></br>
                                    <strong>Technologies:</strong> Next.js, TypeScript, Tailwind; OVH, VPS, SQLite.
                                </p>
                                <p className='pb-4'>
                                    <span className='font-bold'>💰 À partir de 3500 €</span>
                                </p>
                                <p className='text-start mb-2'>
                                    <strong>Abonnement mensuel:</strong> 50 €/mois (renouvellement automatique du nom de domaine, du domaine et du VPS, maintenance et sécurité de la base de données).
                                </p>
                            </div>
                            <CustomButton text={"📩 Demander un devis"} darkMode={darkMode} onClick={() => scrollToDevis('Site Vitrine Modifiable')} />
                        </li>
                        <li className='h-2/3 backdrop-blur-sm text-2xl flex flex-col justify-between p-4 shadow-lg rounded-xl min-w-[90%] xs:min-w-[85%] text-start pb-2 xl:text-2xl lg:text-xl md:text-lg xs:text-base xs:overflow-y-hidden xs:h-[70vh]'>
                            <h4 className='xl:text-2xl l:text-xl font-bold pb-4'>🥇 E-commerce Modifiable</h4>
                            <div className='overflow-y-scroll h-3/4'>
                                <p>
                                    <strong>Description:</strong> Développez votre activité en ligne avec une solution e-commerce complète.<br></br>
                                    <strong>Avantages:</strong><br></br>
                                    - Expérience d’achat intuitive pour maximiser vos ventes.<br></br>
                                    - Gestion dynamique des produits pour une mise à jour facile.<br></br>
                                    - Suivi de performance pour optimiser votre stratégie.<br></br>
                                    <strong>Inclus:</strong><br></br>
                                    - Session de connexion personnelle au site<br></br>
                                    - Enregistrement du nom de domaine pour 1 an<br></br>
                                    - Paiement du domaine pour 1 an<br></br>
                                    - Base de donnée unique connectée (scalabilité : SQLite ou MySQL)<br></br>
                                    - Scalabilité<br></br>
                                    <strong>Technologies:</strong> Next.js, TypeScript, Tailwind; OVH, VPS, SQLite ou MySQL.
                                </p>
                                <p className='pb-4'>
                                    <span className='font-bold'>💰 À partir de 5500 €</span>
                                </p>
                                <p className='text-start mb-2'>
                                    <strong>Abonnement mensuel:</strong> 100 €/mois (renouvellement automatique du nom de domaine, du domaine et du VPS, maintenance et sécurité de la base de données, mise à jour des services).
                                </p>
                            </div>
                            
                            <CustomButton text={"📩 Demander un devis"} darkMode={darkMode} onClick={() => scrollToDevis('E-commerce Modifiable')} />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Tarif;
