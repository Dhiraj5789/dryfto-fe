"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import Modal from "../../components/modal";
import Dropdown from "@/components/ui/dropdown";
import type { ReviewFormData } from "../types";
import { REVIEW_CATEGORIES } from "../constants";

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ReviewFormData) => void;
}

const MOCK_ITINERARIES = [
  { value: "1", label: "Rajasthan Heritage Tour - 7 Days" },
  { value: "2", label: "Golden Triangle Experience" },
  { value: "3", label: "Lake Pichola Sunset Cruise" },
];

const MOCK_VISITED_PLACES = [
  { value: "1", label: "Taj Lake Palace" },
  { value: "2", label: "City Palace, Udaipur" },
  { value: "3", label: "Saheliyon Ki Bari" },
];

export default function AddReviewModal({ isOpen, onClose, onSubmit }: AddReviewModalProps) {
  console.log('AddReviewModal rendered, isOpen:', isOpen);
  const [formData, setFormData] = useState<ReviewFormData>({
    title: "",
    location: "",
    rating: 0,
    category: "",
    itineraryId: "",
    visitedPlaceId: "",
    description: "",
  });

  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form
    setFormData({
      title: "",
      location: "",
      rating: 0,
      category: "",
      itineraryId: "",
      visitedPlaceId: "",
      description: "",
    });
    setHoveredRating(0);
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 1;
      const isFilled = starValue <= (hoveredRating || formData.rating);
      
      return (
        <button
          key={index}
          type="button"
          onClick={() => handleRatingClick(starValue)}
          onMouseEnter={() => setHoveredRating(starValue)}
          onMouseLeave={() => setHoveredRating(0)}
          className="focus:outline-none"
        >
          <Star
            className={`w-8 h-8 transition-colors ${
              isFilled 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300 hover:text-yellow-300'
            }`}
          />
        </button>
      );
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Write New Review">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Review Title */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Review Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            placeholder="e.g., Amazing Stay at Taj Lake Palace"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Location
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
            placeholder="e.g., Udaipur, Rajasthan"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Rating
          </label>
          <div className="flex gap-1">
            {renderStars()}
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Category
          </label>
          <Dropdown
            options={REVIEW_CATEGORIES}
            value={formData.category}
            onChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
            placeholder="Select a category"
            className="w-full"
          />
        </div>

        {/* Associate with Itinerary */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Associate with an Itinerary (Optional)
          </label>
          <Dropdown
            options={MOCK_ITINERARIES}
            value={formData.itineraryId}
            onChange={(value) => setFormData(prev => ({ ...prev, itineraryId: value }))}
            placeholder="Select an unlocked itinerary"
            className="w-full"
          />
        </div>

        {/* Associate with Visited Place */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Associate with a Visited Place (Optional)
          </label>
          <Dropdown
            options={MOCK_VISITED_PLACES}
            value={formData.visitedPlaceId}
            onChange={(value) => setFormData(prev => ({ ...prev, visitedPlaceId: value }))}
            placeholder="Select a visited place"
            className="w-full"
          />
        </div>

        {/* Review Description */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Your Review
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Share your detailed experience..."
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Submit Review
          </button>
        </div>
      </form>
    </Modal>
  );
}
