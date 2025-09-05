export interface PlaceDetail {
  id: string;
  name: string;
  description: string;
  lastVisit?: string;
}

export interface PlaceVisitedDetail {
  id: string;
  name: string;
  location: string;
  tags: string[];
  image: string;
  parentPlace: string;
}

export interface TripItineraryDetail {
  id: string;
  name: string;
  description: string;
  duration: string;
  type: string;
  status: string;
  image: string;
  parentPlace: string;
}

export interface PlaceVisitedDetailCardProps {
  place: PlaceVisitedDetail;
}

export interface TripItineraryCardProps {
  item: TripItineraryDetail;
}
