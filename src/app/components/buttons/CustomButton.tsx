import React from "react";

interface CustomButtonProps{
  type?: 'button' | 'submit' | 'reset'; // Ajoutez d'autres types si nécessaire
    onClick?: () => void;
    text: string;
    darkMode: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, text, darkMode }) => {
    return (
      <button 
        className={darkMode ? 
          'px-6 py-3 rounded-xl bg-persian-green text-pearl hover:bg-pearl hover:text-persian-green transition' :
          'px-6 py-3 rounded-xl bg-teal text-pearl hover:bg-pearl hover:text-teal transition'
          }
          onClick={onClick}
        >
        <strong className='text-2xl'>{text}</strong>
      </button>
    );
  };

export default CustomButton