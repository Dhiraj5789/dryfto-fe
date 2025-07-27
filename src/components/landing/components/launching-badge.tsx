const LaunchingBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-sm">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      <span className="text-sm font-medium text-gray-700">Launching Soon</span>
    </div>
  );
};

export default LaunchingBadge; 