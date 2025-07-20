import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  logo: LucideIcon;
  locationCount?: number;
}

export default function CategoryCard({ title, description, logo: Logo, locationCount = 12 }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105 w-80 h-80 flex-shrink-0 overflow-hidden">
      {/* Temporary background section (40% of card height) */}
      <div className="h-[40%] bg-gradient-to-r from-blue-400 to-purple-500 relative">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      
      {/* Content section (60% of card height) */}
      <div className="p-4 flex flex-col h-[60%]">
        {/* Logo and Title Row */}
        <div className="flex items-center mb-2">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-2 mr-3 group-hover:scale-110 transition-transform duration-300">
            <Logo className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{description}</p>
        
        {/* Bottom Row: Location Chip and View More Button */}
        <div className="flex justify-between items-center">
          <div className="bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            <span className="text-xs font-semibold text-amber-700">{locationCount} locations</span>
          </div>
          <button className="text-orange-500 hover:text-orange-600 text-sm font-semibold flex items-center cursor-pointer">
            View more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 