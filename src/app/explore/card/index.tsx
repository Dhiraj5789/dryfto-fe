"use client"

import { useState } from "react";
import { ICardProps } from "./interface";

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
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image Section */}
      <div className="aspect-video relative">
        <img 
          alt={imageAlt} 
          className="w-full h-full object-cover" 
          src={image}
        />
        
        {/* Category Badges */}
        <div className="absolute top-2 left-2 flex gap-2">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                index === 0 
                  ? "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80" 
                  : "text-foreground bg-white"
              }`}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Favorite Button */}
        <button 
          className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-10 w-10 absolute top-2 right-2 bg-white/80 hover:bg-white ${
            favorite ? 'text-red-500' : ''
          }`}
          onClick={handleFavoriteToggle}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill={favorite ? "currentColor" : "none"} 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-heart h-4 w-4"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <div className="flex items-center text-sm text-gray-600">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400 mr-1"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {rating}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>

        {/* Trip Details */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <div className="flex items-center text-gray-500">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-clock h-4 w-4 mr-1"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {duration}
            </div>
            <div className="flex items-center text-gray-500">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-dollar-sign h-4 w-4 mr-1"
              >
                <line x1="12" x2="12" y1="2" y2="22" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              {price}
            </div>
          </div>
          <div className="flex justify-between text-sm">
            <div className="flex items-center text-gray-500">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-users h-4 w-4 mr-1"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              {reviews} reviews
            </div>
            <div className="flex items-center text-gray-500">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-map-pin h-4 w-4 mr-1"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {distance} from you
            </div>
          </div>
        </div>

        {/* Includes Section */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">Includes:</p>
          <div className="flex flex-wrap gap-1">
            {includes.slice(0, 2).map((item, index) => (
              <div 
                key={index}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs"
              >
                {item}
              </div>
            ))}
            {includes.length > 2 && (
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs">
                +{includes.length - 2} more
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button 
            onClick={handleViewDetails}
            className="flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full"
          >
            View Details
          </button>
          <button 
            onClick={handleCustomize}
            className="flex-1 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 w-full"
          >
            Customize
          </button>
        </div>

        {/* Creator Info */}
        <p className="text-xs text-gray-500 mt-2">Created by {creator}</p>
      </div>
    </div>
  );
};

export default Card;