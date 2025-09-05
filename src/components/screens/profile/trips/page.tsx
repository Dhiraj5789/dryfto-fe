'use client';

import Tabs from '@/components/ui/tabs';
import { TripCard, EmptyState } from './components';
import { useTrips } from './hooks/useTrips';
import type { Trip } from './interface';

export default function TripsScreen() {
  const { activeTab, setActiveTab, currentTrips, tripsTabs } = useTrips();
  
  // Create tabs with content
  const tabsWithContent = tripsTabs.map(tab => ({
    ...tab,
    content: (
      <div className="space-y-4">
        {currentTrips.length > 0 ? (
          currentTrips.map((trip: Trip) => (
            <TripCard key={trip.id} trip={trip} />
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Trips</h1>
        <p className="text-gray-600">View and manage all your trips in one place</p>
      </div>
      
      {/* Tabs */}
      <Tabs 
        tabs={tabsWithContent}
        selectedTab={activeTab}
        onTabChange={(tabId) => setActiveTab(tabId as 'completed' | 'upcoming')}
        className="mb-8"
      />
    </div>
  );
}
