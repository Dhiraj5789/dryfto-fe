// 🚧 TEMPORARILY DISABLED - REDIRECTS TO COMING SOON PAGE
// This route is currently disabled and will redirect to the coming soon page
// via middleware until the official launch.

// Original explore page code has been commented out.
// To restore: uncomment the code below and remove the placeholder component.

// Placeholder component - will be redirected by middleware
const Explore = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Redirecting...</h1>
        <p className="text-gray-600">This page is temporarily disabled.</p>
      </div>
    </div>
  );
};

export default Explore;