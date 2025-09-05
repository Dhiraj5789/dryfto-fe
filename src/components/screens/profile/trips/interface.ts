

export interface TripsTabsProps {
  activeTab: 'completed' | 'upcoming';
  onTabChange: (tab: 'completed' | 'upcoming') => void;
}

export interface EmptyStateProps {
  activeTab: 'completed' | 'upcoming';
}


export interface Trip {
    id: string;
    title: string;
    dates: string;
    locations: string[];
    duration: string;
    travelers: number;
    rating?: number;
    status: 'completed' | 'upcoming';
    image: string;
  }
  
  export interface TripCardProps {
    trip: Trip;
  } 