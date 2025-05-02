
import React from 'react';

interface SocialIconProps {
  icon: string;
  link: string;
  alt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, link, alt }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block mx-2 transition-transform duration-300 hover:scale-110"
    >
      <img src={icon} alt={alt} className="w-8 h-8 md:w-10 md:h-10" />
    </a>
  );
};

export default SocialIcon;
