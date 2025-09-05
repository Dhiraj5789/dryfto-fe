'use client';

import Tabs from '@/components/ui/tabs';
import { PlaceVisitedDetailCard, TripItineraryCard } from './components/index';
import { usePlaceDetails } from './hooks/usePlaceDetails';
import type { PlaceVisitedDetail, TripItineraryDetail } from './interface';

interface PlaceDetailsScreenProps {
  placeId: string;
}

export default function PlaceDetailsScreen({ placeId }: PlaceDetailsScreenProps) {
  const { 
    place,
    activeTab, 
    setActiveTab, 
    placesVisited, 
    tripsItineraries,
    detailTabs 
  } = usePlaceDetails(placeId);
  
  if (!place) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Place not found</h1>
        </div>
      </div>
    );
  }

  // Create tabs with content
  const tabsWithContent = detailTabs.map(tab => ({
    ...tab,
    content: (
      <div className="mt-6">
        {tab.id === 'places' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {placesVisited.map((place: PlaceVisitedDetail) => (
              <PlaceVisitedDetailCard key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tripsItineraries.map((item: TripItineraryDetail) => (
              <TripItineraryCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    )
  }));
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
        <div className="flex">
          {/* Left side - Place image placeholder */}
          <div className="flex p-6">
            <div className="w-80 h-48 bg-gray-200 flex items-center justify-center flex-shrink-0 rounded-md">
              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          
          {/* Content area */}
          <div className="flex-1 p-6 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{place.name}</h1>
            <p className="text-gray-600 mb-4">{place.description}</p>
            {place.lastVisit && (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Last visited: {place.lastVisit}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <Tabs 
        tabs={tabsWithContent}
        selectedTab={activeTab}
        onTabChange={(tabId) => setActiveTab(tabId as 'places' | 'trips')}
        className="mb-8"
      />
    </div>
  );
}
