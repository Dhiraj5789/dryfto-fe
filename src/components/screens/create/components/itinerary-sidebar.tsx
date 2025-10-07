"use client";

import { useState } from "react";
import { Camera, X } from "lucide-react";
import type { PlaceResult } from "./place-card";

interface ItinerarySidebarProps {
  itineraryItems: PlaceResult[];
  onRemoveItem?: (placeId: string) => void;
  onPreviewItinerary?: () => void;
}

interface ItineraryItemProps {
  place: PlaceResult;
  index: number;
  onRemove: (placeId: string) => void;
}

function ItineraryItem({ place, index, onRemove }: ItineraryItemProps) {
  return (
    <div className="flex items-start gap-3 p-3 border-b border-gray-100 last:border-b-0">
      {/* Number Circle */}
      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
        {index + 1}
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-gray-900 text-sm truncate">
          {place.name}
        </h4>
        <p className="text-xs text-gray-500 mt-1">
          {place.duration}
        </p>
      </div>
      
      {/* Remove Button */}
      <button
        onClick={() => onRemove(place.id)}
        className="flex-shrink-0 w-6 h-6 text-gray-400 hover:text-red-500 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <Camera className="w-10 h-10 text-gray-400" />
      </div>
      <p className="text-gray-500 text-sm leading-relaxed">
        Start adding places to build your itinerary
      </p>
    </div>
  );
}

export default function ItinerarySidebar({ 
  itineraryItems = [], 
  onRemoveItem,
  onPreviewItinerary 
}: ItinerarySidebarProps) {
  const handleRemove = (placeId: string) => {
    onRemoveItem?.(placeId);
  };

  const handlePreview = () => {
    onPreviewItinerary?.();
    console.log("Preview itinerary with items:", itineraryItems);
  };

  return (
    <div className="sticky top-8 bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col max-h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-900">Your Itinerary</h2>
          <span className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
            {itineraryItems.length} place{itineraryItems.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {itineraryItems.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="divide-y divide-gray-100">
            {itineraryItems.map((item, index) => (
              <ItineraryItem
                key={item.id}
                place={item}
                index={index}
                onRemove={handleRemove}
              />
            ))}
          </div>
        )}
      </div>

      {/* Preview Button */}
      {itineraryItems.length > 0 && (
        <div className="p-6 border-t border-gray-200 flex-shrink-0">
          <button
            onClick={handlePreview}
            className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-lg transition-colors"
          >
            Preview Itinerary
          </button>
        </div>
      )}
    </div>
  );
}
