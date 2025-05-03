import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-2">
      {/* Logo como imagen. Cambia la URL si necesitas actualizar el logo. */}
      <img
        src="/lovable-uploads/logo-blow4keting.png"
        alt="BLOW4KETING logo"
        style={{ width: 520, maxWidth: '100%' }}
      />
      <div className="h-1 w-full bg-blowketing-pink opacity-70 mt-1"></div>
    </div>
  );
};

export default Logo;
