import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white/40 backdrop-blur-md border-t border-white/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-6">
        <Logo className="opacity-90" />
        <p className="text-gray-700 text-sm text-center font-medium">
          Helping students help each other
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-2">
            <a href="mailto:unmutedcare@gmail.com" className="flex items-center gap-2 text-gray-800 hover:text-brand-900 transition-colors font-medium">
                <Mail className="w-4 h-4" />
                unmutedcare@gmail.com
            </a>
            <a href="https://instagram.com/unmutedcare" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-800 hover:text-brand-900 transition-colors font-medium">
                <Instagram className="w-4 h-4" />
                @unmutedcare
            </a>
        </div>

        <div className="text-gray-600/80 text-sm mt-4">
          &copy; {new Date().getFullYear()} Unmuted. All rights reserved.
        </div>
      </div>
    </footer>
  );
};