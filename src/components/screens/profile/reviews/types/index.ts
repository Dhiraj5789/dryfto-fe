export interface Review {
  id: string;
  title: string;
  location: string;
  rating: number;
  description: string;
  reviewedOn: string;
  category: ReviewCategory;
  itineraryId?: string;
  visitedPlaceId?: string;
}

export type ReviewCategory = 'all' | 'itineraries' | 'stays' | 'cafes' | 'places';

export interface ReviewStats {
  totalReviews: number;
  averageRating: number;
}

export interface ReviewFormData {
  title: string;
  location: string;
  rating: number;
  category: string;
  itineraryId: string;
  visitedPlaceId: string;
  description: string;
}

export interface ReviewsPageProps {
  reviews: Review[];
  stats: ReviewStats;
}
