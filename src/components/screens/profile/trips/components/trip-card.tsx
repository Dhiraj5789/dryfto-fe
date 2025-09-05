import Image from 'next/image';
import { CalendarIcon, MapPinIcon, UsersIcon, StarIcon, ShareIcon } from '@/components/common/icons';
import Button from '@/components/common/button';
import type { TripCardProps } from '../interface';

export default function TripCard({ trip }: TripCardProps) {
  const { title, dates, locations, duration, travelers, rating, image, status } = trip;
  
  const isCompleted = status === 'completed';

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-sm transition-shadow">
      <div className="flex gap-4">
        {/* Trip Image */}
        <div className="flex-shrink-0">
          <div className="w-32 h-24 bg-gray-200 rounded-lg overflow-hidden relative">
            <Image 
              src={image} 
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Trip Details */}
        <div className="flex-1 min-w-0">
          {/* Status Badge */}
          <div className="mb-2">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              isCompleted 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {isCompleted ? 'Completed' : 'Upcoming'}
            </span>
          </div>
          
          {/* Trip Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          
          {/* Trip Dates */}
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <CalendarIcon className="w-4 h-4" />
            <span className="text-sm">{dates}</span>
          </div>
          
          {/* Trip Locations */}
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <MapPinIcon className="w-4 h-4" />
            <span className="text-sm">{locations.join(' • ')}</span>
          </div>
          
          {/* Trip Stats */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <span>{duration}</span>
            <div className="flex items-center gap-1">
              <UsersIcon className="w-4 h-4" />
              <span>{travelers} travelers</span>
            </div>
            {rating && (
              <div className="flex items-center gap-1">
                <StarIcon className="w-4 h-4 text-yellow-500" />
                <span>{rating}/5 rating</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex flex-col gap-3 w-40">
          <Button 
            onClick={() => {}} 
            variant="outlined" 
            className="w-full justify-center py-2 h-auto rounded-xl border-gray-300"
          >
            View Itinerary
          </Button>
          <Button 
            onClick={() => {}} 
            variant="outlined" 
            className="w-full justify-center py-2 h-auto rounded-xl border-gray-300"
          >
            <ShareIcon className="w-4 h-4" />
            Share Trip
          </Button>
          {isCompleted ? (
            <Button 
              onClick={() => {}} 
              variant="outlined" 
              className="w-full justify-center py-2 h-auto rounded-xl border-gray-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Add Review
            </Button>
          ) : (
            <Button 
              onClick={() => {}} 
              variant="outlined" 
              className="w-full justify-center py-2 h-auto rounded-xl border-gray-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Edit Trip
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
