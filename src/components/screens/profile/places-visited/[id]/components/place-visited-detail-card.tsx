import { MapPinIcon } from '@/components/common/icons';
import type { PlaceVisitedDetailCardProps } from '../interface';

export default function PlaceVisitedDetailCard({ place }: PlaceVisitedDetailCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        <MapPinIcon className="w-12 h-12 text-gray-400" />
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{place.name}</h3>
        
        <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
          <MapPinIcon className="w-4 h-4" />
          <span>{place.location}</span>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {place.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
