import { useState, useMemo } from 'react';
import { SAMPLE_TRIPS } from '../constants';
import type { Trip } from '../interface';

type TripTab = 'completed' | 'upcoming';

export function useTrips() {
  const [activeTab, setActiveTab] = useState<TripTab>('completed');

  const { completedTrips, upcomingTrips, currentTrips } = useMemo(() => {
    const completed = SAMPLE_TRIPS.filter((trip: Trip) => trip.status === 'completed');
    const upcoming = SAMPLE_TRIPS.filter((trip: Trip) => trip.status === 'upcoming');
    const current = activeTab === 'completed' ? completed : upcoming;

    return {
      completedTrips: completed,
      upcomingTrips: upcoming,
      currentTrips: current
    };
  }, [activeTab]);

  const tripsTabs = [
    {
      id: 'completed',
      label: 'Completed',
      content: null // Will be handled by the component
    },
    {
      id: 'upcoming', 
      label: 'Upcoming',
      content: null
    }
  ];

  return {
    activeTab,
    setActiveTab,
    completedTrips,
    upcomingTrips,
    currentTrips,
    tripsTabs,
    totalTrips: SAMPLE_TRIPS.length
  };
}
