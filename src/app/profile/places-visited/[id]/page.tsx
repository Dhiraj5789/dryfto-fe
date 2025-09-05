import PlaceDetailsScreen from "@/components/screens/profile/places-visited/[id]/page";

interface PlaceDetailsPageProps {
  params: {
    id: string;
  };
}

export default function PlaceDetailsPage({ params }: PlaceDetailsPageProps) {
  return <PlaceDetailsScreen placeId={params.id} />;
}
