import { useState } from 'react';
import OverviewStats from './overview-stats';
import Modal from './modal';
import PlaceDetailsForm from './place-details-form';
import { PLACES_DATA, ITINERARIES_DATA } from '../constants';
import { MapPinIcon, ShareIcon } from '../../../common/icons';
import type { EmptyStateProps, PlaceData, ItineraryData, PlaceFormData } from '../types';

export function EmptyState({ message, description }: EmptyStateProps) {
  return (
    <div className="min-h-[300px] flex flex-col items-center justify-center text-gray-500">
      <p className="text-lg">{message}</p>
      {description && (
        <p className="text-sm mt-2 text-gray-400">{description}</p>
      )}
    </div>
  );
}

export function OverviewContent() {
  return (
    <div className="space-y-6">
      <div className='flex flex-col gap-4 border-1 border-gray-200 rounded-lg p-4'>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Travel Statistics</h3>
        <OverviewStats />
      </div>
    </div>
  );
}



export function PlacesContent() {
  const [selectedPlaceTab, setSelectedPlaceTab] = useState('visited');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const placesData: PlaceData[] = PLACES_DATA;

  const handleAddPlace = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData: PlaceFormData) => {
    console.log('Place form data:', formData);
    
    // Format the data for better readability in console
    const formattedData = {
      ...formData,
      selectedTags: Object.entries(formData.tags)
        .filter(([, isSelected]) => isSelected)
        .map(([tag]) => tag)
    };
    
    console.log('Formatted place data:', formattedData);
    
    // Close modal after successful submission
    setIsModalOpen(false);
    
    // You can add additional logic here like:
    // - API call to save the place
    // - Update local state to show the new place
    // - Show success notification
  };

  const PlaceCard = ({ place }: { place: typeof placesData[0] }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <img 
        src={place.image} 
        alt={place.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h4 className="font-semibold text-gray-900 mb-2">{place.name}</h4>
        <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
          <MapPinIcon className="w-4 h-4" />
          <span>{place.location}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {place.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800">
            <ShareIcon className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header with Add New Place button */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">My Places</h3>
        <button 
          onClick={handleAddPlace}
          className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-black/80 transition-colors"
        >
          Add New Place
        </button>
      </div>

      {/* Nested tabs for Places */}
      <div className="flex flex-col gap-4">
        <div className="relative flex gap-2 bg-gray-100 p-1 rounded-md">
          {/* Sliding Indicator */}
          <div 
            className={`absolute bg-white rounded-md transition-all duration-300 shadow-sm h-[calc(100%-8px)] top-1 ${
              selectedPlaceTab === 'visited' ? 'left-1 w-[calc(50%-6px)]' : 'left-[50%] w-[calc(50%-6px)]'
            }`}
          />
          
          {/* Tab Buttons */}
          <button
            onClick={() => setSelectedPlaceTab('visited')}
            className={`flex-1 py-2 text-sm relative z-10 transition-colors duration-200 ${
              selectedPlaceTab === 'visited' ? 'text-gray-900 font-bold' : 'text-gray-500 font-medium hover:text-gray-700'
            }`}
          >
            Places Visited
          </button>
          <button
            onClick={() => setSelectedPlaceTab('added')}
            className={`flex-1 py-2 text-sm relative z-10 transition-colors duration-200 ${
              selectedPlaceTab === 'added' ? 'text-gray-900 font-bold' : 'text-gray-500 font-medium hover:text-gray-700'
            }`}
          >
            Places Added
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[300px]">
          {selectedPlaceTab === 'visited' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {placesData.map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>
          ) : (
            <EmptyState 
              message="No places added yet" 
              description="Add new places you want to visit or have discovered"
            />
          )}
        </div>
      </div>

      {/* Modal for Add New Place */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title="Add New Place"
      >
        <PlaceDetailsForm 
          onSubmit={handleFormSubmit}
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
}

export function ItinerariesContent() {
  const itinerariesData: ItineraryData[] = ITINERARIES_DATA;

  const ItineraryCard = ({ itinerary }: { itinerary: typeof itinerariesData[0] }) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <div className="relative">
        <img 
          src={itinerary.image} 
          alt={itinerary.name}
          className="w-full h-48 object-cover"
        />
        {/* Price pill at top right */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
          {itinerary.price}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-gray-900 mb-1">{itinerary.name}</h4>
            <p className="text-sm text-gray-600">{itinerary.duration}</p>
          </div>
          <div className="px-2 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium rounded-full">
            {itinerary.status}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">My Itineraries</h3>
        <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-black/80">
          Create New Itinerary
        </button>
      </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {itinerariesData.map((itinerary) => (
           <ItineraryCard key={itinerary.id} itinerary={itinerary} />
         ))}
       </div>
    </div>
  );
} 