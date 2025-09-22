"use client";

import { useState } from "react";
import { Mountain, Building, Utensils, ChevronDown } from "lucide-react";
import Dropdown from "@/components/ui/dropdown";

interface PlaceFiltersProps {
  onFiltersChange?: (filters: FilterState) => void;
}

interface FilterState {
  category: string;
  distance: string;
  duration: string;
  price: string;
}

const CATEGORY_FILTERS = [
  { id: 'all', label: 'All', icon: null },
  { id: 'nature', label: 'Nature', icon: Mountain },
  { id: 'historic', label: 'Historic', icon: Building },
  { id: 'food', label: 'Food', icon: Utensils },
];

const DISTANCE_OPTIONS = [
  { value: '5km', label: 'Within 5km' },
  { value: '10km', label: 'Within 10km' },
  { value: '25km', label: 'Within 25km' },
  { value: '50km', label: 'Within 50km' },
  { value: '100km', label: 'Within 100km' },
];

const DURATION_OPTIONS = [
  { value: 'quick', label: 'Quick visit (< 1hr)' },
  { value: 'half-day', label: 'Half day' },
  { value: 'full-day', label: 'Full day' },
  { value: 'multi-day', label: 'Multi-day' },
];

const PRICE_OPTIONS = [
  { value: 'free', label: 'Free' },
  { value: '1-25', label: '$1-25' },
  { value: '26-50', label: '$26-50' },
  { value: '51-100', label: '$51-100' },
  { value: '100+', label: '$100+' },
];

export default function PlaceFilters({ onFiltersChange }: PlaceFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: 'all',
    distance: '25km',
    duration: 'half-day',
    price: '1-25',
  });

  const handleCategoryChange = (category: string) => {
    const newFilters = { ...filters, category };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const handleDropdownChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  return (
    <div className="border border-gray-300 rounded-md bg-white mb-4">
      <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Discover places near a
        </h2>
        <p className="text-gray-600">
          Filter by type, distance, and preferences
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex gap-3 mb-6">
        {CATEGORY_FILTERS.map((category) => {
          const Icon = category.icon;
          const isActive = filters.category === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                isActive
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              {Icon && <Icon className="w-4 h-4" />}
              {category.label}
            </button>
          );
        })}
      </div>

      {/* Dropdown Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <select
            value={filters.distance}
            onChange={(e) => handleDropdownChange('distance', e.target.value)}
            className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors cursor-pointer"
          >
            {DISTANCE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative">
          <select
            value={filters.duration}
            onChange={(e) => handleDropdownChange('duration', e.target.value)}
            className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors cursor-pointer"
          >
            {DURATION_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative">
          <select
            value={filters.price}
            onChange={(e) => handleDropdownChange('price', e.target.value)}
            className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors cursor-pointer"
          >
            {PRICE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>
      </div>
    </div>
  );
}
