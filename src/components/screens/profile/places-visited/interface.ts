export interface Place {
  id: number;
  name: string;
  description: string;
  image?: string;
  lastVisit?: string;
  citiesVisited?: string[];
  tripsCount?: number;
  isWishlist?: boolean;
}

export interface PlacesTabsProps {
  activeTab: 'visited' | 'wishlist';
  onTabChange: (tab: 'visited' | 'wishlist') => void;
}

export interface PlaceCardProps {
  place: Place;
}

export interface EmptyStateProps {
  activeTab: 'visited' | 'wishlist';
}
