import Image from "next/image";
import { MapPinIcon, CalendarIcon } from "../../../common/icons";
import type { ProfileInfoProps } from "../types";

export default function ProfileInfo({ 
  name, 
  username, 
  bio, 
  location, 
  joinDate, 
  profileImage 
}: ProfileInfoProps) {
  return (
    <div className="flex items-center gap-10 p-5">
      <Image 
        src={profileImage} 
        alt="Profile" 
        width={100} 
        height={100} 
        className="rounded-full" 
      />
      <div className="flex flex-col gap-2 w-1/2">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-sm text-gray-600">@{username}</p>
        <p className="text-sm text-gray-700">{bio}</p>
        
        <div className="flex gap-2 items-center text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-4 h-4 text-gray-500" />
            <span>Currently in {location}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4 text-gray-500" />
            <span>Joined {joinDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 