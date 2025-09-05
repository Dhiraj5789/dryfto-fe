"use client";

import { Star } from "lucide-react";
import type { ReviewStats } from "../types";

interface ReviewStatsProps {
  stats: ReviewStats;
  onWriteReview: () => void;
}

export default function ReviewStatsSection({ stats, onWriteReview }: ReviewStatsProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="rounded-lg p-6 mb-8 border border-gray-200">
      <div className="flex items-center justify-between mb-6 bg-white">
        <div>
          <p className="text-lg mb-2">
            You&apos;ve shared {stats.totalReviews} reviews and helped thousands of travelers
          </p>
        </div>
        <button
          onClick={onWriteReview}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Write New Review
        </button>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="flex">{renderStars(stats.averageRating)}</div>
          <span className="text-sm font-medium">
            {`(${stats.averageRating})`}
          </span>
        </div>
      </div>
    </div>
  );
}
