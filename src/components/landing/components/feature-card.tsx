import type { FeatureCardProps } from '../types';

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <article className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-200 transition-colors duration-300">
        <Icon className="w-8 h-8 text-gray-700" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </article>
  );
};

export default FeatureCard; 