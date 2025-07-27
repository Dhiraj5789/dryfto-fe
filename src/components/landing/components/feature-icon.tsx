import type { FeatureIconProps } from '../types';

const FeatureIcon = ({ icon: Icon, label }: FeatureIconProps) => {
  return (
    <div className="flex flex-col items-center gap-3 group">
      <div className="w-12 h-12 md:w-16 md:h-16 bg-white/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
        <Icon className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
      </div>
      <span className="text-sm md:text-base font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
        {label}
      </span>
    </div>
  );
};

export default FeatureIcon; 