import { useState, useMemo } from 'react';
import { PLACE_DETAILS_DATA, PLACES_VISITED_DETAIL, TRIPS_ITINERARIES_DETAIL } from '../constants';

type DetailTab = 'places' | 'trips';

export function usePlaceDetails(placeId: string) {
  const [activeTab, setActiveTab] = useState<DetailTab>('places');

  const place = useMemo(() => {
    return PLACE_DETAILS_DATA.find(p => p.id === placeId);
  }, [placeId]);

  const { placesVisited, tripsItineraries } = useMemo(() => {
    // Filter data based on the place if needed
    const places = PLACES_VISITED_DETAIL.filter(p => p.parentPlace === placeId);
    const trips = TRIPS_ITINERARIES_DETAIL.filter(t => t.parentPlace === placeId);

    return {
      placesVisited: places.length > 0 ? places : PLACES_VISITED_DETAIL, // Fallback to all if none found
      tripsItineraries: trips.length > 0 ? trips : TRIPS_ITINERARIES_DETAIL
    };
  }, [placeId]);

  const detailTabs = [
    {
      id: 'places',
      label: 'Places Visited',
      content: null // Will be handled by the component
    },
    {
      id: 'trips',
      label: 'Trips & Itineraries',
      content: null
    }
  ];

  return {
    place,
    activeTab,
    setActiveTab,
    placesVisited,
    tripsItineraries,
    detailTabs,
    totalPlaces: placesVisited.length,
    totalTrips: tripsItineraries.length
  };
}
