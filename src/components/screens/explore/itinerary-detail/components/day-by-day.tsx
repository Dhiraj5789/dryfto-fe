"use client";

import { Clock, DollarSign } from "lucide-react";
import type { ItineraryDay } from "../types";

interface DayByDayProps {
  days: ItineraryDay[];
}


export default function DayByDay({ days }: DayByDayProps) {
  return (
    <div className="space-y-8">
      {days.map((day) => (
        <div key={day.day} className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              {day.day}
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Day {day.day}: {day.title}
            </h2>
          </div>
          
          {/* Single container for all activities of the day */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="space-y-8">
              {day.activities.map((activity, index) => (
                <div key={activity.id} className={index > 0 ? "pt-8 border-t border-gray-100" : ""}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-lg font-medium text-gray-900">{activity.time}</span>
                        <h3 className="text-xl font-bold text-gray-900">{activity.name}</h3>
                      </div>
                      <p className="text-gray-700 mb-4 leading-relaxed">{activity.description}</p>
                      
                      {activity.tip && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <div className="flex items-start gap-2">
                            <span className="text-blue-600 font-medium text-sm">Tip:</span>
                            <span className="text-blue-700 text-sm">{activity.tip}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 ml-6">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{activity.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-sm">{activity.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
