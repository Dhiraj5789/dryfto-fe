import Logo from '@/components/common/logo';
import { BRAND_TEXT } from '../constants';

const Footer = () => {
  return (
    <footer className="px-4 py-12 bg-white/60 backdrop-blur-sm border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <Logo size={24} />
          <span className="text-xl font-bold text-gray-900">{BRAND_TEXT.brandName}</span>
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