'use client'

import { HeartIcon, ClockIcon, LocationIcon, StarIcon } from "./icons";
import { PriceBadge, IconButton, MetaItem, ActionButton, CardBackground } from "./card-components";

interface ItineraryCardProps {
  title: string;
  description: string;
  price: number;
  duration: string;
  locations: number;
  rating: number;
  backgroundColor: string;
}

export default function ItineraryCard({
  title,
  description,
  price,
  duration,
  locations,
  rating,
  backgroundColor,
}: ItineraryCardProps) {
  const handleFavoriteClick = () => {
    // Handle favorite toggle logic
    console.log("Toggle favorite for:", title);
  };

  const handleViewItinerary = () => {
    // Handle view itinerary logic
    console.log("View itinerary for:", title);
  };

  return (
    <div className="rounded-lg border text-card-foreground shadow-sm group cursor-pointer backdrop-blur-sm bg-white/60 border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden w-full">
      <div className="p-0">
        <CardBackground backgroundColor={backgroundColor}>
          {/* Heart button */}
          <div className="absolute top-4 right-4">
            <IconButton onClick={handleFavoriteClick}>
              <HeartIcon />
            </IconButton>
          </div>
          
          {/* Price badge */}
          <div className="absolute bottom-4 left-4">
            <PriceBadge>₹{price.toLocaleString()}</PriceBadge>
          </div>
        </CardBackground>
        
        {/* Content section */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          {/* Meta information */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-4">
              <MetaItem icon={<ClockIcon />} text={duration} />
              <MetaItem icon={<LocationIcon />} text={`${locations} locations`} />
            </div>
            <MetaItem icon={<StarIcon />} text={rating.toString()} />
          </div>
          
          {/* Action button */}
          <ActionButton onClick={handleViewItinerary}>
            View Itinerary
          </ActionButton>
        </div>
      </div>
    </div>
  );
} 