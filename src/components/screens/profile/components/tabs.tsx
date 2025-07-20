'use client'

import { ReactNode } from 'react';

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  selectedTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export default function Tabs({ tabs, selectedTab, onTabChange, className = "" }: TabsProps) {
  const selectedIndex = tabs.findIndex(tab => tab.id === selectedTab);
  const tabWidth = 100 / tabs.length;
  const indicatorPadding = 0.5; // Percentage padding on each side
  
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {/* Tab Headers */}
      <div className="relative flex gap-2 bg-gray-100 p-1 rounded-md">
        {/* Sliding Indicator */}
        <div 
          className="absolute bg-white rounded-md transition-all duration-300 shadow-sm"
          style={{
            left: `${selectedIndex * tabWidth + indicatorPadding}%`,
            width: `${tabWidth - (indicatorPadding * 2)}%`,
            height: 'calc(100% - 8px)',
            top: '4px'
          }}
        />
        
        {/* Tab Buttons */}
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex-1 py-2 text-sm relative z-10 transition-colors duration-200 ${
              selectedTab === tab.id ? 'text-gray-900 font-bold' : 'text-gray-500 font-medium hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px]">
        {tabs.find(tab => tab.id === selectedTab)?.content}
      </div>
    </div>
  );
} 