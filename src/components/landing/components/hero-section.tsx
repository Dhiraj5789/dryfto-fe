import LaunchingBadge from './launching-badge';
import FeatureIcon from './feature-icon';
import { FEATURE_ICONS } from '../constants';

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-12 min-h-screen pt-24">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        
        <LaunchingBadge />

        {/* Main Heading */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight tracking-tight">
            Where Stories
            <br />
            <span className="text-gray-600">Begin to Drift</span>
          </h1>
          
          {/* Subtitle */}
          <div className="max-w-2xl mx-auto space-y-3">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Discover the extraordinary in the ordinary.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Uncover paths less traveled, moments less captured.
            </p>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="pt-8">
          <div className="flex justify-center items-center gap-16 md:gap-24">
            {FEATURE_ICONS.map((feature, index) => (
              <FeatureIcon 
                key={index}
                icon={feature.icon} 
                label={feature.label} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection; 