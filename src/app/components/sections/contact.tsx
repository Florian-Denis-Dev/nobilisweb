import React, { useState, useEffect } from 'react';
import CustomButton from '../buttons/CustomButton';

interface ContactProps {
  setSectionRef: (index: number) => (el: HTMLElement | null) => void;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
  preselectedWebsiteType?: string; 
  darkMode: boolean
}

const Contact: React.FC<ContactProps> = ({ setSectionRef, selectedOption, setSelectedOption, preselectedWebsiteType, darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    companyName: '',
    phone: '',
    appointmentType: 'phone',
    websiteType: preselectedWebsiteType || '',
  });

  useEffect(() => {
    if (preselectedWebsiteType) {
      setFormData((prevData) => ({
        ...prevData,
        websiteType: preselectedWebsiteType,
      }));
    }
  }, [preselectedWebsiteType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let mailtoLink = '';
    const recipientEmail = 'floriandenisfdpro@gmail.com';

    if (selectedOption === 'contact') {
      mailtoLink = `mailto:${recipientEmail}?subject=Premier contact&body=Nom: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    } else if (selectedOption === 'devis') {
      const subject = `Demande de devis - ${formData.websiteType}`;
      mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=Entreprise: ${formData.companyName}%0AEmail: ${formData.email}%0AProjet: ${formData.message}`;
    } else if (selectedOption === 'rendezvous') {
      mailtoLink = `mailto:${recipientEmail}?subject=Prise de rendez-vous&body=Nom: ${formData.name}%0AEmail: ${formData.email}%0ATéléphone: ${formData.phone}%0AType de rendez-vous: ${formData.appointmentType}`;
    }


    window.location.href = mailtoLink;
  };

  const yourPhoneNumber = '+33608550209'; 

  return (
    <section ref={setSectionRef(4)} className="text-center max-w-md mx-auto min-h-screen flex flex-col justify-center p-10">
      <h3 className="text-3xl font-bold mb-4">Discutons de votre projet!</h3>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="p-3 rounded border mb-4"
      >
        <option value="contact">Premier contact</option>
        <option value="devis">Demande de devis</option>
        <option value="rendezvous">Prise de rendez-vous</option>
      </select>

      {selectedOption === 'contact' && (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            className="p-3 rounded border"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            className="p-3 rounded border"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            className="p-3 rounded border"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <CustomButton type="submit" text="Envoyer" darkMode={darkMode} />
        </form>
      )}

{selectedOption === 'devis' && (
        <form className="flex flex-col gap-4" id="devis" onSubmit={handleSubmit}>
          <input
            type="text"
            name="companyName"
            placeholder="Nom de votre entreprise"
            className="p-3 rounded border"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            className="p-3 rounded border"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <select
            name="websiteType"
            className="p-3 rounded border mb-4"
            value={formData.websiteType}
            onChange={handleChange}
            required
          >
          <option value="">Sélectionnez le type de site</option>
            <option value="Site Vitrine">Site Vitrine</option>
            <option value="E-commerce">E-commerce</option>
            <option value="E-commerce et Gestion">E-commerce et Gestion</option>
          </select>
          <textarea
            name="message"
            placeholder="Décrivez votre projet en quelques lignes"
            className="p-3 rounded border"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
           
          <CustomButton type="submit" text="Demander un devis" darkMode={darkMode} />
        </form>
      )}

{selectedOption === 'rendezvous' && (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            className="p-3 rounded border"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            className="p-3 rounded border"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Votre téléphone"
            className="p-3 rounded border"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select
            name="appointmentType"
            className="p-3 rounded border"
            value={formData.appointmentType}
            onChange={handleChange}
          >
            <option value="phone">Appel téléphonique</option>
            <option value="visio">Visioconférence</option>
          </select>
          
          <CustomButton type="submit" text="Prendre rendez-vous" darkMode={darkMode} />
        </form>
      )}
      {formData.appointmentType === 'phone' && (
            <a href={`tel:${yourPhoneNumber}`} className="mt-4 inline-block">
              <CustomButton type="button" text="Appeler maintenant" darkMode={darkMode} />
            </a>
          )}
    </section>
  );
};

export default Contact;
