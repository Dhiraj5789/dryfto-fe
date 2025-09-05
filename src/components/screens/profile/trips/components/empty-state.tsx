import type { EmptyStateProps } from '../types';

export default function EmptyState({ activeTab }: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <div className="text-gray-400 mb-4">
        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        No {activeTab} trips
      </h3>
      <p className="text-gray-500">
        {activeTab === 'completed' 
          ? "You haven't completed any trips yet." 
          : "You don't have any upcoming trips planned."
        }
      </p>
    </div>
  );
}
