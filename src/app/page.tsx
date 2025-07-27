'use client';
import {
  Navigation,
  HeroSection,
  EmailSignup,
  TaglineSection,
  FeaturesSection,
  Footer,
} from '@/components/landing';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      <HeroSection />
      <EmailSignup />
      <TaglineSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Home;