"use client";

import { Clock, DollarSign, Calendar, TrendingUp } from "lucide-react";

interface ItineraryInfoProps {
  duration: string;
  budget: string;
  bestTime: string;
  difficulty: string;
}

export default function ItineraryInfo({ duration, budget, bestTime, difficulty }: ItineraryInfoProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-4 gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Duration</div>
              <div className="font-medium text-gray-900">{duration}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Budget</div>
              <div className="font-medium text-gray-900">{budget}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Best Time</div>
              <div className="font-medium text-gray-900">{bestTime}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Difficulty</div>
              <div className="font-medium text-gray-900">{difficulty}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
