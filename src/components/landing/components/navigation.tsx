import Image from 'next/image';

import DryftoLogo from '@public/icons/dryfto-logo.png';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src={DryftoLogo} alt="Logo" width={100} height={100} />
          </div>

          {/* Coming Soon Badge */}
          <div className="text-sm font-medium text-gray-600">
            Coming Soon
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation; 