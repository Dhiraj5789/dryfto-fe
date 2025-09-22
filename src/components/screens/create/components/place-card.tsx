"use client";

import { MapPin, Clock, DollarSign, Star, Plus, ImageIcon } from "lucide-react";

interface PlaceCardProps {
  place: PlaceResult;
  onAddToItinerary?: (placeId: string) => void;
  isInItinerary?: boolean;
}

export interface PlaceResult {
  id: string;
  name: string;
  category: string;
  description: string;
  rating: number;
  distance: string;
  duration: string;
  price: string;
  image?: string;
  isFree?: boolean;
}

export default function PlaceCard({ place, onAddToItinerary, isInItinerary = false }: PlaceCardProps) {
  const handleAddToItinerary = () => {
    onAddToItinerary?.(place.id);
    console.log(`Added ${place.name} to itinerary`);
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'historic':
        return 'bg-blue-100 text-blue-800';
      case 'food':
        return 'bg-orange-100 text-orange-800';
      case 'nature':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatPrice = (price: string, isFree?: boolean) => {
    if (isFree || price === 'Free' || price === '0') {
      return 'Free';
    }
    return price.startsWith('$') ? price : `$${price}`;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative h-48 bg-gray-200">
        {/* Category Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(place.category)}`}>
            {place.category}
          </span>
        </div>
        {place.image ? (
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageIcon className="w-16 h-16 text-gray-400" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 flex-1">
            {place.name}
          </h3>
          <div className="flex items-center gap-1 ml-3">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-gray-900">{place.rating}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {place.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{place.distance}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{place.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            <span>{formatPrice(place.price, place.isFree)}</span>
          </div>
        </div>

        {/* Add to Itinerary Button */}
        <button
          onClick={handleAddToItinerary}
          disabled={isInItinerary}
          className={`w-full font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
            isInItinerary
              ? 'bg-green-100 text-green-700 cursor-not-allowed'
              : 'bg-black hover:bg-gray-800 text-white'
          }`}
        >
          {isInItinerary ? (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Added to Itinerary
            </>
          ) : (
            <>
              <Plus className="w-5 h-5" />
              Add to Itinerary
            </>
          )}
        </button>
      </div>
    </div>
  );
}
