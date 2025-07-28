"use client"

import { useState } from "react";
import Header from "./header";
import Card from "./card";
import { budgetOptions, adventureOptions, durationOptions, sampleCards } from "./constants";
import Dropdown from "@/components/ui/dropdown";

const Explore = () => {
    const [selectedBudget, setSelectedBudget] = useState(budgetOptions[0].value);
    const [selectedAdventure, setSelectedAdventure] = useState(adventureOptions[0].value);
    const [selectedDuration, setSelectedDuration] = useState(durationOptions[0].value);

    const handleFavoriteToggle = (id: string) => {
        console.log(`Toggle favorite for card ${id}`);
    };

    const handleViewDetails = (id: string) => {
        console.log(`View details for card ${id}`);
    };

    const handleCustomize = (id: string) => {
        console.log(`Customize card ${id}`);
    };

  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 my-10 mx-30 border border-gray-300 rounded-md bg-white shadow-[0_1px_3px_0_rgb(0,0,0,0.1)]" >
          <div className="flex flex-col p-4">
              <h2 className="text-2xl font-bold">Find Your Perfect Trip</h2>
              <p className="text-sm text-gray-500 p-0">
                  Browse curated itineraries from experienced travelers
              </p>
              <div className="relative">
                  <input type="text" placeholder="Search for destinations, activities, or experiences" className="w-full my-4 pl-10 p-2 rounded-md border border-gray-300 focus:outline-none" />
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
              </div>
              <div className="grid gap-4 sm:grid-cols-4">
                  <Dropdown
                      options={budgetOptions}
                      placeholder="Select Budget"
                      value={selectedBudget}
                      onChange={setSelectedBudget}
                  />
                  <Dropdown
                      options={adventureOptions}
                      placeholder="Select Category"
                      value={selectedAdventure}
                      onChange={setSelectedAdventure}
                  />
                  <Dropdown
                      options={durationOptions}
                      placeholder="Select Category"
                      value={selectedDuration}
                      onChange={setSelectedDuration}
                  />
                  <button
                      onClick={() => {
                          setSelectedBudget(budgetOptions[0].value);
                          setSelectedAdventure(adventureOptions[0].value);
                          setSelectedDuration(durationOptions[0].value);
                      }}
                      className="h-[42px] bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                      Clear Filters
                  </button>
              </div>
          </div>
      </div>

      {/* Cards Grid */}
      <div className="mx-30 mb-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sampleCards.map((card) => (
                  <Card
                      key={card.id}
                      {...card}
                      onFavoriteToggle={handleFavoriteToggle}
                      onViewDetails={handleViewDetails}
                      onCustomize={handleCustomize}
                  />
              ))}
          </div>
      </div>
    </>
  );
};

export default Explore;