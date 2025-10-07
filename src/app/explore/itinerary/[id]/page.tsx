import ItineraryDetailScreen from "@/components/screens/explore/itinerary-detail/page";

interface ItineraryDetailPageProps {
  params: {
    id: string;
  };
}

export default function ItineraryDetailPage({ params }: ItineraryDetailPageProps) {
  return <ItineraryDetailScreen id={params.id} />;
}
