"use client";

import { useState, useMemo } from "react";
import { ReviewStatsSection, ReviewCard, AddReviewModal } from "./components";
import { REVIEW_FILTER_TABS, MOCK_REVIEWS, MOCK_REVIEW_STATS } from "./constants";
import type { ReviewCategory, ReviewFormData } from "./types";

export default function ReviewsScreen() {
  const [activeFilter, setActiveFilter] = useState<ReviewCategory>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredReviews = useMemo(() => {
    if (activeFilter === 'all') {
      return MOCK_REVIEWS;
    }
    return MOCK_REVIEWS.filter(review => review.category === activeFilter);
  }, [activeFilter]);

  const handleWriteReview = () => {
    console.log('Opening modal...');
    setIsModalOpen(true);
  };

  const handleSubmitReview = (data: ReviewFormData) => {
    console.log('Review submitted:', data);
    setIsModalOpen(false);
  };

  const selectedIndex = REVIEW_FILTER_TABS.findIndex(tab => tab.id === activeFilter);
  const tabWidth = 100 / REVIEW_FILTER_TABS.length;
  const indicatorPadding = 0.5;

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Reviews</h1>
        <p className="text-gray-600">
          Your thoughts and ratings on hotels, restaurants, and attractions
        </p>
      </div>

      {/* Stats Section */}
      <ReviewStatsSection 
        stats={MOCK_REVIEW_STATS} 
        onWriteReview={handleWriteReview}
      />

      {/* All Reviews Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          All Reviews ({MOCK_REVIEWS.length})
        </h2>

        {/* Filter Tabs - Using consistent styling */}
        <div className="relative flex gap-2 bg-gray-100 p-1 rounded-md mb-6">
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
          {REVIEW_FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as ReviewCategory)}
              className={`flex-1 py-2 text-sm relative z-10 transition-colors duration-200 ${
                activeFilter === tab.id ? 'text-gray-900 font-bold' : 'text-gray-500 font-medium hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No reviews found for this category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Add Review Modal */}
      <AddReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitReview}
      />
    </div>
  );
}
