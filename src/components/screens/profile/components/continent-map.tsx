import { CONTINENTS_DATA } from '../constants';
import type { ContinentData } from '../types';

interface ContinentProps {
  name: string;
  color: string;
  path: string;
}

function Continent({ name, color, path }: ContinentProps) {
  return (
    <g className="transition-all duration-300 hover:scale-[1.02] cursor-pointer">
      <title>{name}</title>
      <path 
        d={path}
        className={`${color} stroke-white stroke-[3px] opacity-100 hover:opacity-90`}
      />
    </g>
  );
}

export default function ContinentMap() {
  const continents: ContinentData[] = CONTINENTS_DATA;

  return (
    <div 
      className="relative w-full h-80 rounded-lg overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom right, #dbeafe, #dcfce7)'
      }}
    >
      {/* Interactive SVG Container for Continents */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 400 250" 
        preserveAspectRatio="xMidYMid meet"
      >
        {continents.map((continent, index) => (
          <Continent
            key={index}
            name={continent.name}
            color={continent.color}
            path={continent.path}
          />
        ))}
      </svg>
    </div>
  );
} 