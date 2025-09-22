"use client";

import { useState } from "react";
import Tabs from "@/components/ui/tabs";
import { ItineraryHeader, ItineraryInfo, DayByDay, TipsInfo } from "./components";
import { MOCK_ITINERARY } from "./constants";
import type { Tab } from "@/components/ui/tabs";

interface ItineraryDetailScreenProps {
  id: string;
}

export default function ItineraryDetailScreen({ id }: ItineraryDetailScreenProps) {
  const [selectedTab, setSelectedTab] = useState('day-by-day');
  
  // In a real app, you would fetch the itinerary data based on the id
  const itinerary = MOCK_ITINERARY;

  const tabs: Tab[] = [
    {
      id: 'day-by-day',
      label: 'Day by Day',
      content: <DayByDay days={itinerary.days} />
    },
    {
      id: 'tips-info',
      label: 'Tips & Info',
      content: <TipsInfo tips={itinerary.tips} />
    }
  ];

  const handleShare = () => {
    console.log('Share itinerary:', id);
  };

  const handleSave = () => {
    console.log('Save itinerary:', id);
  };

  const handleCustomize = () => {
    console.log('Customize itinerary:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ItineraryHeader
        title={itinerary.title}
        rating={itinerary.rating}
        reviewCount={itinerary.reviewCount}
        author={itinerary.author}
        description={itinerary.description}
        tags={itinerary.tags}
        onShare={handleShare}
        onSave={handleSave}
        onCustomize={handleCustomize}
      />
      
      <ItineraryInfo
        duration={itinerary.duration}
        budget={itinerary.budget}
        bestTime={itinerary.bestTime}
        difficulty={itinerary.difficulty}
      />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
        />
      </div>
    </div>
  );
}
