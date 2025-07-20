'use client'

import { ProfileInfo, ProfileActions } from "./";
import { PROFILE_DATA } from "../constants";
import type { ProfileData } from "../types";

export default function ProfileCard() {
  const profileData: ProfileData = PROFILE_DATA;

  const handleEditProfile = () => {
    console.log("Edit profile clicked");
  };

  const handleShareProfile = () => {
    console.log("Share profile clicked");
  };

  return (
    <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm mx-10 my-10 overflow-hidden bg-white">
      <ProfileInfo
        name={profileData.name}
        username={profileData.username}
        bio={profileData.bio}
        location={profileData.location}
        joinDate={profileData.joinDate}
        profileImage={profileData.profileImage}
      />
      <ProfileActions
        onEditProfile={handleEditProfile}
        onShareProfile={handleShareProfile}
      />
    </div>
  );
} 