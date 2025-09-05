import type { TripItineraryCardProps } from '../interface';

export default function TripItineraryCard({ item }: TripItineraryCardProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-700';
      case 'upcoming':
        return 'bg-blue-100 text-blue-700';
      case 'planned':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 flex-1">{item.name}</h3>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
            {item.status}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{item.duration}</span>
          <span className="px-2 py-1 bg-gray-50 text-gray-700 rounded text-xs">
            {item.type}
          </span>
        </div>
      </div>
    </div>
  );
}
