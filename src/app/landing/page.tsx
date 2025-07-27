// 🚧 TEMPORARILY DISABLED - REDIRECTS TO COMING SOON PAGE
// This route is currently disabled and will redirect to the coming soon page
// via middleware until the official launch.

// Original landing page code has been commented out.
// To restore: uncomment the imports and component below.

// import Navigation from "../../components/screens/landing/navigation";
// import Hero from "../../components/screens/landing/hero";
// import Footer from "../../components/screens/landing/footer";
// import ExploreByCategory from "../../components/screens/landing/sections/explore-by-category";
// import PopularItenaries from "../../components/screens/landing/sections/popular-itenaries";
// import TravelInfluencerSpotlight from "../../components/screens/landing/sections/travel-influencer-spotlight";

// Placeholder component - will be redirected by middleware
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Redirecting...</h1>
        <p className="text-gray-600">This page is temporarily disabled.</p>
      </div>
    </div>
  );
}
