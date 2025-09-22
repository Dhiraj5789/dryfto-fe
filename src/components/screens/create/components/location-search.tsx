"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface LocationSearchProps {
  onLocationSelect?: (location: string) => void;
  onSearch?: (query: string) => void;
}

export default function LocationSearch({ onLocationSelect, onSearch }: LocationSearchProps) {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (location.trim()) {
      onSearch?.(location);
      onLocationSelect?.(location);
      console.log("Searching for nearby places from:", location);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="border border-gray-300 rounded-md bg-white mb-4">
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Where are you starting from?
          </h1>
          <p className="text-lg text-gray-600">
            Enter your base location to get personalized recommendations
          </p>
        </div>

        <div className="space-y-4">
        <div>
          <label className="block text-lg font-medium text-gray-900 mb-3">
            Your Location
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Enter city, address, or drop a pin..."
              className="w-full pl-12 pr-4 py-2 text-lg border-2 border-blue-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <button
          onClick={handleSearch}
          disabled={!location.trim()}
          className="w-full bg-black hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-2 px-6 rounded-lg text-lg transition-colors"
        >
          Find Nearby Places
        </button>
        </div>
      </div>
    </div>
  );
}
