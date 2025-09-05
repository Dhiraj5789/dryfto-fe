import { IDropdownOption } from "@/components/ui/dropdown/interface";
import type { Review, ReviewStats } from "./types";

export const REVIEW_FILTER_TABS = [
  { id: 'all', label: 'All Reviews' },
  { id: 'itineraries', label: 'Itineraries' },
  { id: 'stays', label: 'Stays' },
  { id: 'cafes', label: 'Cafes' },
  { id: 'places', label: 'Places' },
];

export const REVIEW_CATEGORIES: IDropdownOption[] = [
  { value: 'itineraries', label: 'Itineraries' },
  { value: 'stays', label: 'Stays' },
  { value: 'cafes', label: 'Cafes' },
  { value: 'places', label: 'Places' },
];

export const MOCK_REVIEW_STATS: ReviewStats = {
  totalReviews: 7,
  averageRating: 4.3,
};

export const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    title: 'Taj Lake Palace',
    location: 'Udaipur, Rajasthan',
    rating: 5,
    description: 'An absolutely breathtaking experience! The palace is stunning, the service is impeccable, and the views of Lake Pichola are unparalleled. A true gem.',
    reviewedOn: 'March 15, 2025',
    category: 'stays',
  },
  {
    id: '2',
    title: 'Royal City Palace Tour',
    location: 'Udaipur, Rajasthan',
    rating: 4,
    description: 'A fascinating glimpse into royal history. The architecture is magnificent and the guided tour was very informative.',
    reviewedOn: 'March 14, 2025',
    category: 'places',
  },
  {
    id: '3',
    title: 'Lake Pichola Sunset Cruise',
    location: 'Udaipur, Rajasthan',
    rating: 5,
    description: 'Magical sunset views with the palace in the background. Perfect way to end the day in Udaipur.',
    reviewedOn: 'March 13, 2025',
    category: 'itineraries',
  },
  {
    id: '4',
    title: 'Upre by 1559 AD',
    location: 'Udaipur, Rajasthan',
    rating: 4,
    description: 'Excellent rooftop dining with palace views. The food was delicious and the ambiance was perfect.',
    reviewedOn: 'March 12, 2025',
    category: 'cafes',
  },
  {
    id: '5',
    title: 'Saheliyon Ki Bari',
    location: 'Udaipur, Rajasthan',
    rating: 3,
    description: 'Beautiful gardens with fountains and lotus pools. A peaceful retreat from the city hustle.',
    reviewedOn: 'March 11, 2025',
    category: 'places',
  },
  {
    id: '6',
    title: 'Rajasthan Heritage Tour',
    location: 'Rajasthan, India',
    rating: 5,
    description: 'Complete 7-day tour covering major cities. Well organized with great accommodations and knowledgeable guides.',
    reviewedOn: 'March 10, 2025',
    category: 'itineraries',
  },
  {
    id: '7',
    title: 'Jagmandir Island Palace',
    location: 'Udaipur, Rajasthan',
    rating: 4,
    description: 'Another beautiful palace experience. The boat ride and the island setting make it unique.',
    reviewedOn: 'March 9, 2025',
    category: 'places',
  },
];
