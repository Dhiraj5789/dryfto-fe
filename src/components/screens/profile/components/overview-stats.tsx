import { TRAVEL_STATS } from '../constants';
import { MapPinIcon, AirplaneIcon, StarIcon, UsersIcon } from '../../../common/icons';
import type { TravelStat } from '../types';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  iconColor: string;
}

const iconMap = {
  'airplane': AirplaneIcon,
  'map-pin': MapPinIcon,
  'star': StarIcon,
  'users': UsersIcon,
};

function StatCard({ icon, title, value, iconColor }: StatCardProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg border-1 border-gray-200 hover:shadow-sm">
      <div className={`w-8 h-8 ${iconColor} mb-2`}>
        {icon}
      </div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

export default function OverviewStats() {
  const stats: TravelStat[] = TRAVEL_STATS;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
        return (
          <StatCard
            key={index}
            icon={<IconComponent className="w-8 h-8" />}
            title={stat.label}
            value={stat.value}
            iconColor={stat.color}
          />
        );
      })}
    </div>
  );
} 