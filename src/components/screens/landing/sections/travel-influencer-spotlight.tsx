import SectionWrapper from "./section-wrapper";
import SectionTitle from "./titile";
import InfluencerCard from "./influencer-card";
import { travelInfluencers } from "./constants";

export default function TravelInfluencerSpotlight() {
  return (
    <SectionWrapper>
      <SectionTitle 
        title="Travel Influencer Spotlight" 
        description="Discover the best travel influencers and their inspiring stories" 
      />
             <div className="w-full mt-12 p-4 py-20 bg-orange-50">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {travelInfluencers.map((influencer) => (
            <InfluencerCard
              key={influencer.id}
              name={influencer.name}
              bio={influencer.bio}
              followers={influencer.followers}
              locations={influencer.locations}
              backgroundColor={influencer.backgroundColor}
              isVerified={influencer.isVerified}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}