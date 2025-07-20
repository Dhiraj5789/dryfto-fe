import Button from "../../../common/button";
import type { ProfileActionsProps } from "../types";

export default function ProfileActions({ onEditProfile, onShareProfile }: ProfileActionsProps) {
  return (
    <div className="flex items-center gap-10 px-5 pb-5">
      <div className="w-[100px]"></div> {/* Spacer to align with profile image */}
      <div className="flex gap-2">
        <Button onClick={onEditProfile} variant="base">
          Edit Profile
        </Button>
        <Button onClick={onShareProfile} variant="outlined">
          Share Profile
        </Button>
      </div>
    </div>
  );
} 