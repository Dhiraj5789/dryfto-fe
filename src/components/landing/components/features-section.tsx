import FeatureCard from './feature-card';
import { FEATURE_CARDS } from '../constants';

const FeaturesSection = () => {
  return (
    <section className="px-4 py-20 bg-white/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <header className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            What Awaits You
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into the experience we&apos;re crafting
          </p>
        </header>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURE_CARDS.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection; 