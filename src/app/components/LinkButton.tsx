import React, {useState} from 'react';

interface LinkButtonProps{
    href: string;
    iconClass: string;
    text: string;
    ariaLabel: string;
}
const LinkButton : React.FC<LinkButtonProps> = ({ href, iconClass, text, ariaLabel }) => {
    const [isHovered, setIsHovered] = useState(false);
  return(
    <a href={href}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    aria-label={ariaLabel}
    className={`link-button ${isHovered ? 'hovered' : ''}`}
    >
<div className="layer">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span className={iconClass}></span>
</div>
<div className="text">
    {text}
</div>
</a>
  )
}

export default LinkButton