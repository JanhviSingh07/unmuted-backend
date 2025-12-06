import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex flex-col items-center justify-center select-none ${className}`}>
    {/* 
      INSTRUCTIONS: 
      1. Name your logo file "logo.png" 
      2. Place it in the "public" folder or the project root directory
    */}
    <img 
      src="logo.png" 
      alt="Unmuted Logo" 
      className="h-24 w-auto md:h-28 object-contain drop-shadow-sm"
      onError={(e) => {
        // Fallback if image isn't found
        e.currentTarget.style.display = 'none';
        e.currentTarget.parentElement?.classList.add('text-fallback');
      }}
    />
    {/* Fallback text if image fails to load */}
    <span className="hidden text-fallback font-extrabold text-3xl tracking-[0.2em] text-[#3e2723] uppercase font-sans">
      UNMUTED
    </span>
  </div>
);