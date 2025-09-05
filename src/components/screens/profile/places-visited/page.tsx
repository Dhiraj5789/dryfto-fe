'use client';

import Tabs from '@/components/ui/tabs';
import { PlaceCard, EmptyState, WorldTravelProgress } from './components';
import { usePlacesVisited } from './hooks/usePlacesVisited';
import type { Place } from './interface';

export default function PlacesVisitedScreen() {
  const { 
    activeTab, 
    setActiveTab, 
    currentPlaces, 
    placesTabs, 
    COUNTRIES_VISITED, 
    TOTAL_COUNTRIES 
  } = usePlacesVisited();
  
  // Create tabs with content
  const tabsWithContent = placesTabs.map(tab => ({
    ...tab,
    content: (
      <div className="space-y-4 mt-6">
        {currentPlaces.length > 0 ? (
          currentPlaces.map((place: Place) => (
            <PlaceCard key={place.id} place={place} />
          ))
        ) : (
          <EmptyState activeTab={activeTab} />
        )}
      </div>
    )
  }));
  
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Places Visited</h1>
        <p className="text-gray-600">Track your journey across the world</p>
      </div>

      {/* World Travel Progress */}
      <WorldTravelProgress 
        countriesVisited={COUNTRIES_VISITED} 
        totalCountries={TOTAL_COUNTRIES} 
      />
      
      
      {/* Tabs */}
      <Tabs 
        tabs={tabsWithContent}
        selectedTab={activeTab}
        onTabChange={(tabId) => setActiveTab(tabId as 'visited' | 'wishlist')}
        className="mb-8"
      />
    </div>
  );
}
