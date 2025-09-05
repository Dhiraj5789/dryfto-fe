import { GlobeIcon } from '@/components/common/icons';

interface WorldTravelProgressProps {
  countriesVisited: number;
  totalCountries: number;
}

export default function WorldTravelProgress({ 
  countriesVisited = 6, 
  totalCountries = 195 
}: WorldTravelProgressProps) {
  const percentage = ((countriesVisited / totalCountries) * 100).toFixed(1);
  const countriesRemaining = totalCountries - countriesVisited;
  const progressWidth = (countriesVisited / totalCountries) * 100;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
          <GlobeIcon className="w-6 h-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-gray-900">
            World Travel Progress ({percentage}%)
          </h2>
            </div>
                {/* Subtitle */}
      <p className="text-gray-600 mb-2">
        You&apos;ve visited {countriesVisited} out of {totalCountries} countries worldwide
      </p>
        </div>
        <div className="flex gap-2">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{countriesVisited}</div>
            <div className="text-sm text-gray-500">Countries Visited</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-400">{countriesRemaining}</div>
            <div className="text-sm text-gray-500">Countries Remaining</div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-400 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressWidth}%` }}
        />
      </div>
    </div>
  );
}
