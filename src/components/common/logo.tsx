interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 24, className = "" }: LogoProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 40 40" 
      fill="none"
      width={size}
      height={size}
      className={className}
    >
      {/* Main compass body */}
      <circle cx="20" cy="20" r="18" fill="#374151" stroke="#4B5563" strokeWidth="1"/>
      
      {/* Inner compass face */}
      <circle cx="20" cy="20" r="15" fill="#F9FAFB"/>
      
      {/* Cardinal marks */}
      <g stroke="#374151" strokeWidth="1.5">
        <line x1="20" y1="7" x2="20" y2="10"/>
        <line x1="33" y1="20" x2="30" y2="20"/>
        <line x1="20" y1="33" x2="20" y2="30"/>
        <line x1="7" y1="20" x2="10" y2="20"/>
      </g>
      
      {/* Compass needle */}
      <g>
        {/* North pointer (red) */}
        <polygon points="20,10 17,18 20,16 23,18" fill="#DC2626"/>
        
        {/* South pointer (white) */}
        <polygon points="20,30 23,22 20,24 17,22" fill="#F9FAFB" stroke="#374151" strokeWidth="0.5"/>
      </g>
      
      {/* Center point */}
      <circle cx="20" cy="20" r="2" fill="#374151"/>
      <circle cx="20" cy="20" r="1" fill="#F9FAFB"/>
    </svg>
  );
};

export default Logo; 