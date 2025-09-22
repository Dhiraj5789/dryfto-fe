"use client";

import { MapPin } from "lucide-react";
import PlaceCard, { type PlaceResult } from "./place-card";

interface PlaceResultsProps {
  results?: PlaceResult[];
  loading?: boolean;
  onAddToItinerary?: (placeId: string) => void;
  itineraryItems?: PlaceResult[];
}

export default function PlaceResults({ 
  results = [], 
  loading = false, 
  onAddToItinerary,
  itineraryItems = []
}: PlaceResultsProps) {
  if (loading) {
    return (
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="h-48 bg-gray-200 animate-pulse" />
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded animate-pulse mb-3" />
                <div className="h-4 bg-gray-200 rounded animate-pulse mb-4" />
                <div className="flex justify-between mb-4">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
                </div>
                <div className="h-12 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="w-full">
        <div className="text-center py-12">
          <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <MapPin className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No places found</h3>
          <p className="text-gray-600">Try adjusting your filters or search in a different location.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Found {results.length} places
        </h2>
        <p className="text-gray-600">
          Discover amazing places based on your preferences
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.map((place) => (
          <PlaceCard
            key={place.id}
            place={place}
            onAddToItinerary={onAddToItinerary}
            isInItinerary={itineraryItems.some(item => item.id === place.id)}
          />
        ))}
      </div>
    </div>
  );
}
