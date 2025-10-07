"use client";

import { ArrowLeft, Share, Download, Edit } from "lucide-react";
import { useRouter } from "next/navigation";

interface ItineraryHeaderProps {
  title: string;
  rating: number;
  reviewCount: number;
  author: string;
  description: string;
  tags: string[];
  onShare?: () => void;
  onSave?: () => void;
  onCustomize?: () => void;
}

export default function ItineraryHeader({
  title,
  rating,
  reviewCount,
  author,
  description,
  tags,
  onShare,
  onSave,
  onCustomize
}: ItineraryHeaderProps) {
  const router = useRouter();

  const handleBackToExplore = () => {
    router.push('/explore');
  };

  const handleShare = () => {
    onShare?.();
    console.log("Share itinerary");
  };

  const handleSave = () => {
    onSave?.();
    console.log("Save itinerary");
  };

  const handleCustomize = () => {
    onCustomize?.();
    console.log("Customize itinerary");
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Navigation and Actions */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handleBackToExplore}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Explore
          </button>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Share className="w-4 h-4" />
              Share
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Download className="w-4 h-4" />
              Save
            </button>
            <button
              onClick={handleCustomize}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Edit className="w-4 h-4" />
              Customize
            </button>
          </div>
        </div>

        {/* Title and Rating */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">⭐</span>
                <span className="font-medium">{rating}</span>
                <span className="text-gray-500">({reviewCount} reviews)</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <span className="text-gray-400">👤</span>
                <span>By {author}</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 ml-6">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed max-w-4xl">
          {description}
        </p>
      </div>
    </div>
  );
}
