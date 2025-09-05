import type { EmptyStateProps } from '../interface';

export default function EmptyState({ activeTab }: EmptyStateProps) {
  const isWishlist = activeTab === 'wishlist';
  
  return (
    <div className="min-h-[300px] flex flex-col items-center justify-center text-gray-500">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        {isWishlist ? 'No places in wishlist' : 'No places visited yet'}
      </h3>
      <p className="text-sm text-gray-500 text-center max-w-sm">
        {isWishlist 
          ? 'Start adding places you want to visit to your wishlist'
          : 'Start exploring and add the places you visit to track your journey'
        }
      </p>
    </div>
  );
}
