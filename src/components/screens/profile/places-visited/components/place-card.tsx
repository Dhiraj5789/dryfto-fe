import { CalendarIcon, MapPinIcon } from '@/components/common/icons';
import Link from 'next/link';
import type { PlaceCardProps } from '../interface';

export default function PlaceCard({ place }: PlaceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-sm transition-shadow">
      <div className="flex">
        {/* Left side - Place image placeholder */}
        <div className="flex p-4">
        <div className="w-32 h-32 bg-gray-200 flex items-center justify-center flex-shrink-0 rounded-md">
          <MapPinIcon className="w-12 h-12 text-gray-400" />
        </div>
        </div>
        
        {/* Content area */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            {/* Place title and description */}
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{place.name}</h3>
            
            {!place.isWishlist && (
              <>
                {place.lastVisit && (
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Last visit: {place.lastVisit}</span>
                  </div>
                )}
                
                {place.citiesVisited && (
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                    <MapPinIcon className="w-4 h-4" />
                    <span>Cities visited: {place.citiesVisited.join(', ')}</span>
                  </div>
                )}
                
                {place.tripsCount && (
                  <p className="text-sm text-gray-500 mb-4">
                    {place.tripsCount} trip{place.tripsCount > 1 ? 's' : ''}
                  </p>
                )}
              </>
            )}
            
            {place.isWishlist && (
              <p className="text-gray-600 mb-4">{place.description}</p>
            )}
          </div>
        </div>
            {/* Action buttons - positioned at bottom right */}
            <div className="flex items-center justify-center pr-4">
            {place.isWishlist ? (
              <button className="h-10 px-4 my-auto text-sm font-semibold text-black border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Add to Plan
              </button>
            ) : (
              <Link href={`/profile/places-visited/${place.id}`}>
                <button className="h-10 px-4 my-auto text-sm font-semibold text-black border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  View Details
                </button>
              </Link>
            )}
          </div>
      </div>
    </div>
  );
}
