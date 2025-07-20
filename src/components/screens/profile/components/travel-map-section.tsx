import ContinentMap from './continent-map';
import { GlobeIcon } from '../../../common/icons';

export default function TravelMapSection() {
  return (
    <div className="mx-10 mb-10">
      <div className='flex flex-col gap-4 border border-gray-200 rounded-lg p-4'>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <GlobeIcon className="w-5 h-5 text-gray-700" />
            <h3 className="text-lg font-semibold text-gray-900">Continents Explored</h3>
          </div>
          <div className="px-3 py-1 bg-green-50 border border-green-200 rounded-full text-sm font-bold text-green-700">
            12.5% World Coverage
          </div>
        </div>
        <ContinentMap />
      </div>
    </div>
  );
} 