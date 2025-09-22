"use client";

import { useState, useMemo } from "react";
import { LocationSearch, PlaceFilters, PlaceResults, ItinerarySidebar } from "./components";
import type { PlaceResult } from "./components/place-card";

// Mock data for all places
const ALL_PLACES: PlaceResult[] = [
  {
    id: '1',
    name: 'Golden Gate Bridge',
    category: 'Historic',
    description: 'Iconic suspension bridge with stunning views',
    rating: 4.8,
    distance: '2.3 km',
    duration: '1-2 hours',
    price: 'Free',
    isFree: true,
  },
  {
    id: '2',
    name: "Fisherman's Wharf",
    category: 'Food',
    description: 'Waterfront dining and entertainment district',
    rating: 4.5,
    distance: '3.1 km',
    duration: '2-3 hours',
    price: '$20-40',
  },
  {
    id: '3',
    name: 'Alcatraz Island',
    category: 'Historic',
    description: 'Former federal prison with guided tours',
    rating: 4.7,
    distance: '4.2 km',
    duration: '3-4 hours',
    price: '$45-55',
  },
  {
    id: '4',
    name: 'Lombard Street',
    category: 'Historic',
    description: 'World famous winding street with beautiful gardens',
    rating: 4.3,
    distance: '1.8 km',
    duration: '30-60 minutes',
    price: 'Free',
    isFree: true,
  },
  {
    id: '5',
    name: 'Chinatown',
    category: 'Food',
    description: 'Authentic Chinese cuisine and cultural experiences',
    rating: 4.4,
    distance: '2.7 km',
    duration: '2-3 hours',
    price: '$15-30',
  },
  {
    id: '6',
    name: 'Golden Gate Park',
    category: 'Nature',
    description: 'Large urban park with gardens, museums, and trails',
    rating: 4.6,
    distance: '3.5 km',
    duration: '2-4 hours',
    price: 'Free',
    isFree: true,
  },
  {
    id: '7',
    name: 'Muir Woods',
    category: 'Nature',
    description: 'Ancient redwood forest with peaceful walking trails',
    rating: 4.7,
    distance: '12.5 km',
    duration: '2-3 hours',
    price: '$15',
  },
  {
    id: '8',
    name: 'Union Square',
    category: 'Historic',
    description: 'Historic shopping and cultural district',
    rating: 4.2,
    distance: '1.2 km',
    duration: '1-2 hours',
    price: 'Free',
    isFree: true,
  },
];

export default function CreateScreen() {
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [itineraryItems, setItineraryItems] = useState<PlaceResult[]>([]);
  const [filters, setFilters] = useState({
    category: 'all',
    distance: '25km',
    duration: 'half-day',
    price: '1-25',
  });

  // Filter places based on current filters
  const filteredPlaces = useMemo(() => {
    let filtered = ALL_PLACES;

    // Filter by category
    if (filters.category !== 'all') {
      filtered = filtered.filter(place => 
        place.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Filter by distance (simplified - in real app would use actual distance calculation)
    const maxDistance = parseInt(filters.distance.replace('km', ''));
    filtered = filtered.filter(place => {
      const placeDistance = parseFloat(place.distance.replace(' km', ''));
      return placeDistance <= maxDistance;
    });

    // Filter by duration
    if (filters.duration !== 'half-day') {
      // Simplified duration filtering
      switch (filters.duration) {
        case 'quick':
          filtered = filtered.filter(place => 
            place.duration.includes('30') || place.duration.includes('1 hour')
          );
          break;
        case 'full-day':
          filtered = filtered.filter(place => 
            place.duration.includes('3-4') || place.duration.includes('4+')
          );
          break;
        case 'multi-day':
          // For demo, no multi-day places in mock data
          filtered = [];
          break;
      }
    }

    // Filter by price range
    if (filters.price !== '1-25') {
      switch (filters.price) {
        case 'free':
          filtered = filtered.filter(place => place.isFree || place.price === 'Free');
          break;
        case '26-50':
          filtered = filtered.filter(place => {
            const price = place.price.replace(/[$-]/g, '');
            const maxPrice = parseInt(price.split('-')[1] || price);
            return maxPrice >= 26 && maxPrice <= 50;
          });
          break;
        case '51-100':
          filtered = filtered.filter(place => {
            const price = place.price.replace(/[$-]/g, '');
            const maxPrice = parseInt(price.split('-')[1] || price);
            return maxPrice >= 51 && maxPrice <= 100;
          });
          break;
        case '100+':
          filtered = filtered.filter(place => {
            const price = place.price.replace(/[$-]/g, '');
            const maxPrice = parseInt(price.split('-')[1] || price);
            return maxPrice > 100;
          });
          break;
      }
    }

    return filtered;
  }, [filters]);

  const handleLocationSelect = (location: string) => {
    console.log("Location selected:", location);
    // Simulate search
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 1500);
  };

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Simulate search
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 1500);
  };

  const handleFiltersChange = (newFilters: {
    category: string;
    distance: string;
    duration: string;
    price: string;
  }) => {
    console.log("Filters changed:", newFilters);
    setFilters(newFilters);
  };

  const handleAddToItinerary = (placeId: string) => {
    const placeToAdd = ALL_PLACES.find(place => place.id === placeId);
    if (placeToAdd && !itineraryItems.some(item => item.id === placeId)) {
      setItineraryItems(prev => [...prev, placeToAdd]);
      console.log("Added place to itinerary:", placeToAdd.name);
    }
  };

  const handleRemoveFromItinerary = (placeId: string) => {
    setItineraryItems(prev => prev.filter(item => item.id !== placeId));
    console.log("Removed place from itinerary:", placeId);
  };

  const handlePreviewItinerary = () => {
    console.log("Preview itinerary:", itineraryItems);
    // Add logic to show itinerary preview/modal
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-2/3 px-6 py-8">
        <LocationSearch 
          onLocationSelect={handleLocationSelect}
          onSearch={handleSearch}
        />
        <PlaceFilters 
          onFiltersChange={handleFiltersChange}
        />
        {(showResults || loading) && (
          <PlaceResults 
            results={filteredPlaces}
            loading={loading}
            onAddToItinerary={handleAddToItinerary}
            itineraryItems={itineraryItems}
          />
        )}
      </div>
      <div className="w-1/3 px-6 py-8">
        <ItinerarySidebar 
          itineraryItems={itineraryItems}
          onRemoveItem={handleRemoveFromItinerary}
          onPreviewItinerary={handlePreviewItinerary}
        />
      </div>
    </div>
  );
}
