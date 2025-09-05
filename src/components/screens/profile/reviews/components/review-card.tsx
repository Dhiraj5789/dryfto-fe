"use client";

import { MapPin, Star } from "lucide-react";
import type { Review } from "../types";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {review.title}
          </h3>
          <div className="flex items-center gap-2 text-gray-600 mb-3">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">
              {review.location} • Reviewed on {review.reviewedOn}
            </span>
          </div>
        </div>
        <div className="flex ml-4">
          {renderStars(review.rating)}
        </div>
      </div>
      
      <p className="text-gray-700 leading-relaxed">
        {review.description}
      </p>
    </div>
  );
}
