import { UsersIcon } from 'lucide-react';
import { WAITLIST_DATA } from '../constants';
import { useRegistrationCount } from '../hooks/useRegistrationCount';

const UsersAwaiting = () => {
  const { count } = useRegistrationCount();

  return (
    <section className="px-4 py-12">
      <div className="max-w-lg mx-auto">
        <div className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-sm">
          
          {/* Icon and Count */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center">
              <UsersIcon className="w-5 h-5 text-white" />
            </div>
            
            <div className="text-center">
              <div className="flex items-baseline gap-1">
                <span className="text-md font-bold text-gray-900">
                  {count ? count.toLocaleString() : 'Loading...'}
                </span>
              </div>
              <p className="text-sm text-gray-600 font-medium">
                {WAITLIST_DATA.message}
              </p>
            </div>
          </div>

          {/* Sub message */}
          <p className="mt-4 text-xs text-gray-500 text-center">
            {WAITLIST_DATA.subMessage}
          </p>

        </div>
      </div>
    </section>
  );
};

export default UsersAwaiting; 