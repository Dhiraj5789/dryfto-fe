
import ProfileCard from "../../components/screens/profile/components/profile-card";
import ProfileTabs from "../../components/screens/profile/components/profile-tabs";
import TravelMapSection from "../../components/screens/profile/components/travel-map-section";

const ProfilePage = () => {
  return <div className="flex flex-col gap-2 justify-center">
    <ProfileCard />
    <ProfileTabs />
    <TravelMapSection />
  </div>;
};

export default ProfilePage;