import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export const PriceBadge = ({ children, className = "" }: BadgeProps) => (
  <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gradient-to-r from-yellow-500 to-orange-500 text-white ${className}`}>
    {children}
  </div>
);

export const IconButton = ({ children, className = "", onClick }: { children: ReactNode; className?: string; onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 backdrop-blur-md bg-white/20 hover:bg-white/40 text-white border-white/20 ${className}`}
  >
    {children}
  </button>
);

export const MetaItem = ({ icon, text }: { icon: ReactNode; text: string }) => (
  <div className="flex items-center space-x-1">
    {icon}
    <span>{text}</span>
  </div>
);

export const ActionButton = ({ children, onClick, className = "" }: { children: ReactNode; onClick?: () => void; className?: string }) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full";
  const defaultClasses = "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold cursor-pointer";
  
  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${className || defaultClasses}`}
    >
      {children}
    </button>
  );
};

export const CardBackground = ({ backgroundColor, children }: { backgroundColor: string; children: ReactNode }) => (
  <div className="relative h-64 overflow-hidden">
    <div className={`absolute inset-0 bg-gradient-to-br ${backgroundColor} group-hover:scale-110 transition-transform duration-500`} />
    {children}
  </div>
); 