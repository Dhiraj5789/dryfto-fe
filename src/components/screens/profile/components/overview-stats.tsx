import { TRAVEL_STATS } from '../constants';
import type { TravelStat } from '../types';
import Link from 'next/link';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  iconColor: string;
  route: string;
}

function StatCard({ icon, title, value, iconColor, route }: StatCardProps) {
  return (
    <Link href={route} className="flex flex-col items-center p-4 bg-white rounded-lg border-1 border-gray-200 hover:shadow-sm">
      <div className={`w-8 h-8 ${iconColor} mb-2`}>
        {icon}
      </div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </Link>
  );
}

export default function OverviewStats() {
  const stats: TravelStat[] = TRAVEL_STATS;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({label, value, color, route, icon: IconComponent}) => {
        return (
          <StatCard
            key={label}
            icon={<IconComponent className="w-8 h-8" />}
            title={label}
            value={value}
            iconColor={color}
            route={route}
          />
        );
      })}
    </div>
  );
} 