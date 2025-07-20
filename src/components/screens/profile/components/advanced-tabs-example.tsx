'use client'

import { useState } from 'react';
import Tabs, { Tab } from './tabs';

// Example of using the generic Tabs component for other purposes
export function AdvancedTabsExample() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const customTabs: Tab[] = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="p-4">
          <h3 className="text-xl font-bold mb-4">Overview Content</h3>
          <p>This is the overview section with custom content.</p>
        </div>
      )
    },
    {
      id: 'details',
      label: 'Details',
      content: (
        <div className="p-4">
          <h3 className="text-xl font-bold mb-4">Details Content</h3>
          <p>This is the details section with more specific information.</p>
        </div>
      )
    },
    {
      id: 'settings',
      label: 'Settings',
      content: (
        <div className="p-4">
          <h3 className="text-xl font-bold mb-4">Settings Content</h3>
          <p>This is the settings section for configuration.</p>
        </div>
      )
    },
    {
      id: 'help',
      label: 'Help',
      content: (
        <div className="p-4">
          <h3 className="text-xl font-bold mb-4">Help Content</h3>
          <p>This is the help section with support information.</p>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Advanced Tabs Example</h2>
      <Tabs 
        tabs={customTabs}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />
    </div>
  );
} 