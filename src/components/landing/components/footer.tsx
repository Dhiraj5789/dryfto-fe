import Image from 'next/image';
import DryftoLogo from '@public/icons/dryfto-logo.png';

import { BRAND_TEXT } from '../constants';

const Footer = () => {
  return (
    <footer className="px-4 py-12 bg-white/60 backdrop-blur-sm border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <Image src={DryftoLogo} alt="Logo" width={100} height={100} />
        </div>

        {/* Copyright */}
        <p className="text-gray-600">
          {BRAND_TEXT.copyright}
        </p>

      </div>
    </footer>
  );
};

export default Footer; 