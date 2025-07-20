'use client'

import { useState } from 'react';
import Tabs from '../../../common/tabs';
import { OverviewContent, PlacesContent, ItinerariesContent } from './tab-content';
import type { Tab } from '../types';

export default function ProfileTabs() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const tabs: Tab[] = [
    {
      id: 'overview',
      label: 'Overview',
      content: <OverviewContent />
    },
    {
      id: 'places',
      label: 'Places',
      content: <PlacesContent />
    },
    {
      id: 'itineraries',
      label: 'Itineraries',
      content: <ItinerariesContent />
    }
  ];

  return (
    <Tabs 
      tabs={tabs}
      selectedTab={selectedTab}
      onTabChange={setSelectedTab}
      className="mx-10"
    />
  );
} 