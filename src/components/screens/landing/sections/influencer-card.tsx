'use client'

import { ActionButton } from "@/components/screens/landing/sections/card-components";
import { VerifyIcon } from "./icons";

interface InfluencerCardProps {
  name: string;
  bio: string;
  followers: string;
  locations: number;
  backgroundColor: string;
  isVerified: boolean;
}

export default function InfluencerCard({
  name,
  bio,
  followers,
  locations,
  backgroundColor,
  isVerified,
}: InfluencerCardProps) {
  const handleViewProfile = () => {
    console.log("View profile for:", name);
  };

  return (
    <div className="rounded-lg border text-card-foreground shadow-sm group cursor-pointer backdrop-blur-sm bg-white/60 border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl text-center">
      <div className="p-8">
        {/* Profile Image */}
        <div className="relative w-24 h-24 mx-auto mb-6">
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${backgroundColor} rounded-full ring-4 ring-white/20`}
          />
          {isVerified && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
              <VerifyIcon />
            </div>
          )}
        </div>
        
        {/* Profile Info */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-6">{bio}</p>
        
        {/* Stats */}
        <div className="flex justify-center space-x-6 mb-6 text-sm text-gray-500">
          <div className="text-center">
            <div className="font-semibold text-gray-900">{followers}</div>
            <div>Followers</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900">{locations}</div>
            <div>Locations</div>
          </div>
        </div>
        
        {/* Action Button */}
        <ActionButton 
          onClick={handleViewProfile}
          className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white bg-transparent font-semibold cursor-pointer"
        >
          View Profile
        </ActionButton>
      </div>
    </div>
  );
} 