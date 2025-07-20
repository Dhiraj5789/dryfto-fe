"use client"

import { useState } from "react";
import Image from "next/image";
import { ICardProps } from "./interface";
import Chip from "./chip";
import Button from "@/components/common/button";
import { 
  HeartIcon, 
  StarIcon, 
  ClockIcon, 
  DollarSignIcon, 
  UsersIcon, 
  MapPinIcon 
} from "./icons";

const Card = ({
  id,
  title,
  description,
  image,
  imageAlt,
  rating,
  duration,
  price,
  reviews,
  distance,
  categories,
  includes,
  creator,
  isFavorite = false,
  onFavoriteToggle,
  onViewDetails,
  onCustomize
}: ICardProps) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoriteToggle = () => {
    setFavorite(!favorite);
    onFavoriteToggle?.(id);
  };

  const handleViewDetails = () => {
    onViewDetails?.(id);
  };

  const handleCustomize = () => {
    onCustomize?.(id);
  };

  return (
    <div className="rounded-lg bg-card text-card-foreground overflow-hidden transition-shadow shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {/* Image Section */}
      <div className="aspect-video relative">
        <Image 
          alt={imageAlt} 
          className="w-full h-full object-cover" 
          src={image}
          width={1000}
          height={1000}
          quality={50}
        />
        
        {/* Category Badges */}
        <div className="absolute top-2 left-2 flex gap-2">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-foreground bg-white" 
              }`}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Favorite Button */}
        <button 
          className={`cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-10 w-10 absolute top-2 right-2 bg-white/80 hover:bg-white ${
            favorite ? 'text-red-500' : ''
          }`}
          onClick={handleFavoriteToggle}
        >
          <HeartIcon filled={favorite} />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <div className="flex items-center text-sm text-gray-600">
            <StarIcon />
            {rating}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>

        {/* Trip Details */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <div className="flex items-center text-gray-500">
              <ClockIcon />
              {duration}
            </div>
            <div className="flex items-center text-gray-500">
              <DollarSignIcon />
              {price}
            </div>
          </div>
          <div className="flex justify-between text-sm">
            <div className="flex items-center text-gray-500">
              <UsersIcon />
              {reviews} reviews
            </div>
            <div className="flex items-center text-gray-500">
              <MapPinIcon />
              {distance} from you
            </div>
          </div>
        </div>

        {/* Includes Section */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">Includes:</p>
          <div className="flex flex-wrap gap-1">
            {includes.slice(0, 2).map((item, index) => (
              <Chip key={index} label={item} />
            ))}
            {includes.length > 2 && (
              <Chip label={`+${includes.length - 2} more`} />
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button variant="outlined" onClick={handleViewDetails}>
            View Details
          </Button>
          <Button variant="base" onClick={handleCustomize}>
            Customize
          </Button>
        </div>

        {/* Creator Info */}
        <p className="text-xs text-gray-500 mt-2">Created by {creator}</p>
      </div>
    </div>
  );
};

export default Card;