import SectionWrapper from "./section-wrapper";
import SectionTitle from "./titile";
import ItineraryCard from "./itinerary-card";
import { popularItineraries } from "./constants";

export default function PopularItenaries() {
  return (
    <SectionWrapper>
      <SectionTitle title="Popular Itineraries" description="Curated travel experiences designed by local experts and fellow explorers" />
      <div className="w-full mt-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {popularItineraries.map((itinerary) => (
            <ItineraryCard
              key={itinerary.id}
              title={itinerary.title}
              description={itinerary.description}
              price={itinerary.price}
              duration={itinerary.duration}
              locations={itinerary.locations}
              rating={itinerary.rating}
              backgroundColor={itinerary.backgroundColor}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}