import { useState, useMemo } from 'react';
import { STATES_VISITED, STATES_WISHLIST } from '../constants';

type PlaceTab = 'visited' | 'wishlist';

export function usePlacesVisited() {
  const [activeTab, setActiveTab] = useState<PlaceTab>('visited');

  const { visitedPlaces, wishlistPlaces, currentPlaces } = useMemo(() => {
    const visited = STATES_VISITED;
    const wishlist = STATES_WISHLIST;
    const current = activeTab === 'visited' ? visited : wishlist;

    return {
      visitedPlaces: visited,
      wishlistPlaces: wishlist,
      currentPlaces: current
    };
  }, [activeTab]);

  const placesTabs = [
    {
      id: 'visited',
      label: 'States Visited',
      content: null // Will be handled by the component
    },
    {
      id: 'wishlist',
      label: 'States Wishlist', 
      content: null
    }
  ];

  return {
    activeTab,
    setActiveTab,
    visitedPlaces,
    wishlistPlaces,
    currentPlaces,
    placesTabs,
    totalPlaces: STATES_VISITED.length + STATES_WISHLIST.length,
    // Travel progress data
    COUNTRIES_VISITED: 6, // This could be calculated from actual data
    TOTAL_COUNTRIES: 195
  };
}
